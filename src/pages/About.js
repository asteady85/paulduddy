import React from 'react'
import Hero from '../Hero'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Hero />
      <div className='content tall'>
        <div className='content--wrapper'>
          <h1>About Paul Duddy T/A Paul Duddy Vehicle Sales and Finance</h1>
          <p>Paul Duddy has been employed in the motor industry for over 30 years supplying vehicles for business and on a personal basis.</p>
          <p>Now specialises in sourcing most makes of cars and light commercial vehicles to suit ones individual requirements, whether it is for <Link to="/services/straight-cash-purchase">Outright Purchase</Link> or for any particular <Link to="/services/contract-purchase">Finance Option</Link>.</p>
          <p>Even though the main core of the business is for the supply of new vehicles we are also able to source a wide range of used vehicles.</p>
          <p>We can also help in the sale of any <Link to="/services/part-exchange">Part Exchange</Link> or vehicle that a customer has surplus to requirement.</p>
          <p className='highlight'>Our aim and commitment is to supply a very competitive, personal, friendly and enjoyable unbiased service throughout the whole purchasing experience to all our customers.</p>
          <p>Paul Duddy Vehicle Sales and Finance is authorised and regulated by the Financial Conduct Authority.<br />
            We provide motor vehicle finance brokerage services to customers via a third party finance partner on a lease agreement. Our Financial Conduct Authority Firm Reference Number is 651410.<br />
            You can verify our status on the Financial Services Register by visiting the <a href="https://register.fca.org.uk/s/firm?id=001b000000eiMiPAAU" target="_blank">FCA's website</a> or by contacting them on 0800 111 6768</p>
          <p>Please see the <Link to="/initial-disclosure">Initial Disclosure Document</Link> for further details.</p>
        </div>
      </div>
    </>
  )
}

export default About
