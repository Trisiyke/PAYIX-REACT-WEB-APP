import React, { useEffect, useRef, useState } from 'react'
import './Scroll.css'
import virtual from '../../assets/payiximages/virtualaccount.jpg'
import payment from '../../assets/payiximages/paymentgateway.jpg'
import transfer from '../../assets/payiximages/transferapi.jpg'
import commerce from '../../assets/payiximages/ecommerce.jpg'

const items = [
  { title: 'Virtual Account', text: 'Streamline bank transfer with Payix virtual accounts.', img: virtual, alt: 'Virtual account' },
  { title: 'Payment Gateway', text: 'Integrate Payix seamless and secure payment gateway.', img: payment, alt: 'Payment gateway' },
  { title: 'Transfer API', text: 'Integrate Payix transfer API for your business.', img: transfer, alt: 'Transfer API' },
  { title: 'E-commerce', text: 'Create a free storefront to showcase and sell your products.', img: commerce, alt: 'E-commerce storefront' },
]

const Scroll = () => {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.9999)
      setActive(Math.floor(progress * items.length))
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const goTo = (i) => {
    const el = sectionRef.current
    if (!el) return
    const scrollable = el.offsetHeight - window.innerHeight
    const top = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: top + (scrollable / items.length) * i + 2,
      behavior: 'smooth',
    })
  }

  return (
    <section
      className="scroll"
      ref={sectionRef}
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="scroll-sticky">
        <div className="scroll-1">
          <ul>
            {items.map((item, i) => (
              <li
                key={item.title}
                className={i === active ? 'active' : ''}
                onClick={() => goTo(i)}
              >
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="scroll-2">
          {items.map((item, i) => (
            <img
              key={item.title}
              src={item.img}
              alt={item.alt}
              className={i === active ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Scroll