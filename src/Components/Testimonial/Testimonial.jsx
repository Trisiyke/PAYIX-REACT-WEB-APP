import React from 'react'
import './Testimonial.css'
import tech1 from '../../assets/payiximages/tech 1.jpg'
import tech2 from '../../assets/payiximages/tech 2.jpg'
import tech3 from '../../assets/payiximages/tech 3.jpg'
import tech4 from '../../assets/payiximages/tech 4.jpg'
import tech5 from '../../assets/payiximages/tech 5.jpg'
import tech6 from '../../assets/payiximages/tech 6.jpg'
import tech7 from '../../assets/payiximages/tech 7.jpg'

const testimonials = [
  { img: tech1, name: 'Tessy Chidubem' },
  { img: tech2, name: 'Chinda Wigwe' },
  { img: tech3, name: 'Naimat Jimoh' },
  { img: tech4, name: 'Lamide Olugboje' },
  { img: tech5, name: 'Teslim Olatunji' },
  { img: tech6, name: 'Chinedum Afunugo' },
  { img: tech7, name: 'Ali Al-rezani' },
]

const quote =
  'I have been using this product for over a year now and I am extremely satisfied with the quality and performance. It has truly made a difference in my daily workflow.'

const Testimonial = () => {
  // The list is rendered twice so the scroll loops seamlessly
  const items = [...testimonials, ...testimonials]

  return (
    <section className="testimonial">
      <div className="testimonial-track">
        {items.map((t, i) => (
          <article
            className="testimonial-card"
            key={i}
            aria-hidden={i >= testimonials.length}
          >
            <div className="testimonial-head">
              <img src={t.img} alt={t.name} />
              <h3>{t.name}</h3>
            </div>
            <p>{quote}</p>
          </article>
        ))}
      </div>
    </section>
  )
}




export default Testimonial