import React from 'react'
import SubHero from '../SubHero'
import backgroundImage from '../images/car-key.jpg'
import {Link} from 'react-router-dom'

const Contact = () => {
  const heroContent = () => (<p>With over 30 years in the business, specialising in most makes of cars and light commercial vehicles</p>)
  return (
    <>
      <SubHero backgroundImage={backgroundImage}>
        {heroContent()}
      </SubHero>
      <div className='content'>
        <div className='content--wrapper'>
          <h2><span>Get In Touch</span></h2>
          <table>
            <tbody>
            <tr>
              <td className="right">Tel:</td>
              <td><a href="tel:01457862181">01457 862 181</a></td>
            </tr>
            <tr>
              <td className="right">Fax:</td>
              <td><a href="01457862744">01457 862 744</a></td>
            </tr>
            <tr>
              <td className="right">Mob:</td>
              <td><a href="07816842703">07816 842 703</a></td>
            </tr>
            <tr>
              <td className="right">Email:</td>
              <td><a href="mailto:paul@paulduddyvehiclesalesandfinance.co.uk">paul@paulduddyvehiclesalesandfinance.co.uk</a>
              </td>
            </tr>
            </tbody>
          </table>

          <h2><span>Find Us</span></h2>
          <p>Autumn Falls<br />Glossop Road<br />Marple Bridge<br />Stockport<br />SK6 5RX</p>
        </div>
      </div>
    </>
  )
}

export default Contact
