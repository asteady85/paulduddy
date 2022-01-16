import React from 'react'
import { Link } from 'react-router-dom'
import './scss/Footer.scss'
import {HiPhone} from 'react-icons/all'

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className='content'>
          <div className='content--wrapper'>
            <div className='grid grid-gap grid--col3'>
              <div className='col'>
                <h3>Contact Details</h3>
                <p className="f_email"><a href="mailto:paul@paulduddyvehiclesalesandfinance.co.uk">paul@paulduddyvehiclesalesandfinance.co.uk</a></p>
                <p className="f_number">T: 01457 862 181 | M: 07816 842 703</p>
              </div>
              <div className='col'>
                <h3>Find Us</h3>
                <p>Autumn Falls,<br />Glossop Road,<br />Marple Bridge,<br />Stockport,<br />SK6 5RX</p>
                <a href='https://www.google.com/maps/search/autumn+falls+SK6+5RX/@53.4229842,-2.0322821,16.38z' target='_blank'>Maps Link</a>
              </div>
              <div className='col'>
                <h3>Useful Links</h3>
                <ul>
                  <li><a href="/initial-disclosure">Initial Disclosure Document</a></li>
                  <li><Link to="/services/wear-and-tear">Wear &amp; Tear Guide</Link></li>
                  <li><a href="/treating-customers-fairly">Treating Customers Fairly</a></li>
                  <li><a href="/complaint-handling-procedure">Complaints</a></li>
                  <li><a href="/terms">Terms &amp; Conditions</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/bvrla-code-of-conduct">BVRLA Code of Conduct</a></li>
                </ul>
              </div>
            </div>
            <div>
              <p>
                <strong>FCA Information Notice:</strong> Paul Gerard Duddy is the legal name for Paul Duddy Vehicle Sales and Finance and acts as a Credit Broker, not a Lender. Authorised and regulated by the Financial Conduct Authority. FCA Firm Reference number is <a href="https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000000eiMiPAAU" target="_blank">651410</a>. Data Protection No: Z9932607, VAT No: GB 919 7837 68
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className='mobile-phone--sticky'>
        <a href="tel:01457 862 181">
          <HiPhone />
          <span>CALL US NOW</span>
        </a>
      </div>
    </>
  )
}

export default Footer
