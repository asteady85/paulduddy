import React from 'react'
// import { Link } from 'react-router-dom'
import './scss/Footer.scss'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className='content'>
        <div className='content--wrapper'>
          <div className='grid grid-gap grid--col3'>
            <div className='col'>
              <h3>Contact Details</h3>
              <p className="f_email">paul@paulduddyvehiclesalesandfinance.co.uk</p>
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
                <li><a href="/initial-disclosure.html">Initial Disclosure Document</a></li>
                <li><a href="/terms.html">Wear &amp; Tear Guide</a></li>
                <li><a href="/treating-customers-fairly.html">Treating Customers Fairly</a></li>
                <li><a href="/complaint-handling-procedure.html">Complaints</a></li>
                <li><a href="/terms.html">Terms &amp; Conditions</a></li>
                <li><a href="/privacy.html">Privacy Policy</a></li>
                <li><a href="/bvrla-code-of-conduct.html">BVRLA Code of Conduct</a></li>
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
  )
}

export default Footer
