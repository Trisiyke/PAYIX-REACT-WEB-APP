import React from 'react'
import './Option.css'
import icon1 from '../../assets/payiximages/overview.png'
import icon2 from '../../assets/payiximages/Transactions.png'
import icon3 from '../../assets/payiximages/My cards.png'
import icon4 from '../../assets/payiximages/Beneficaries.png'
import card from '../../assets/payiximages/Credit card.png'
import sendmoney from '../../assets/payiximages/Send money.png'
import addmoney from '../../assets/payiximages/Add money.png'
import request from '../../assets/payiximages/Request.png'
import paybills from '../../assets/payiximages/Pay bills.png'


const Option = () => {
  return (
    <div>
        <selection  className="selection">
          <div className="work-space">
          <h1>WORK SPACE</h1>
         
          <ul>
            <li><img src={icon1} alt="Overview" />Overview</li>
            <li><img src={icon2} alt="Transactions" />Transactions</li>
            <li> <img src={icon3} alt="My Cards" /> My cards</li>
            <li><img src={icon4} alt="Beneficiaries" />Beneficiaries</li>
            <li><img src={sendmoney} alt="Send Money" />Send Money</li>

          </ul>
          
          </div>
          <div className="my-card">
            <h1>Good morning, Tristan!</h1>
            <p>Here's what's happening with your account today.</p>
            <img src={card} alt="My Card" />
          </div>
          <div className="quick-action">
  <h1>Quick actions</h1>

  <div className="type">
    <div className="type-item">
      <img src={sendmoney} alt="Send Money" />
      <p>Send money</p>
    </div>
    <div className="type-item">
      <img src={addmoney} alt="Add Money" />
      <p>Add money</p>
    </div>
    <div className="type-item">
      <img src={request} alt="Request" />
      <p>Request</p>
    </div>
    <div className="type-item">
      <img src={paybills} alt="Pay Bills" />
      <p>Pay bills</p>
    </div>
  </div>
</div>
        </selection>
      </div>
  )
}

export default Option