import React from 'react'
import SubHero from '../SubHero'
import backgroundImage from '../images/car-key.jpg'
import { Link } from 'react-router-dom'

const InitialDisclosure = () => {
  const heroContent = () => (<p>With over 30 years in the business, specialising in most makes of cars and light commercial vehicles</p>)
  return (
    <>
      <SubHero backgroundImage={backgroundImage}>
        {heroContent()}
      </SubHero>
      <div className='content'>
        <div className='content--wrapper'>
          <h2><span>Initial Disclosure Document</span></h2>
          <p>The Financial Conduct Authority (FCA) is the independent regulator of financial services. The FCA require us to provide you with an Initial Disclosure Document to help you decide if our services are right for you.</p>
          <p>This document provides information about Paul Duddy Vehicle Sales and Finance, the products we offer, the services we will provide, what we charge for our services, who regulates us, what to do if you have a complaint, and details about the Financial Services Compensation Scheme.</p>
          <p>&nbsp;</p>

          <h3>General</h3>
          <p>This website is owned and operated by Paul Duddy Vehicle Sales and Finance, whose primary place of business is located at Autumn Falls, Glossop Road, Marple Bridge, Stockport, SK6 5RX</p>
          <p>We are a credit broker as opposed to a lender and may be paid by a lender for our introducing you to them.</p>
          <p>Data Protection Act Disclosure:  ICO Registration Reference: Z9932607. The funder will make a credit agency search against the hirer/guarantor which will be recorded by the credit reference agency.  The funder will only use this information for address verification and underwriting purposes.</p>
          <p>&nbsp;</p>

          <h3>About Paul Duddy Vehicle Sales and Finance</h3>
          <p>Paul Duddy Vehicle Sales and Finance is authorised and regulated by the Financial Conduct Authority. We provide motor vehicle finance brokerage services to customers via a third party finance partner on a lease agreement.. Our Financial Conduct Authority Firm Reference Number is 651410. You can verify our status on the Financial Services Register by visiting the <a href="https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000000eiMiPAAU" target="_blank">FCA's website</a> or by contacting them on 0800 111 6768.</p>
          <p>&nbsp;</p>

          <h3>The Services We Provide</h3>
          <p>We ascertain the appropriateness of the requested service for all new clients prior to accepting an order, ensuring it is in line with their knowledge and experience.</p>
          <ul>
            <li>We continually aim to understand the needs of our clients</li>
            <li>We keep our clients fully informed in a clear and fair manner that is unambiguous and not misleading</li>
            <li>We ensure our services are delivered with clarity and transparency and do not contain hidden conditions or rely on ambiguous definitions</li>
            <li>We make certain our clients understand the risks associated with our services at the outset of an instruction</li>
            <li>We work hard to ensure that service and risk information remains clear and prominent at all times</li>
          </ul>
          <p>In the event that there is a conflict of interest, we will inform our clients as soon as possible once we become aware of it</p>
          <p>&nbsp;</p>

          <h3>The Products We Use</h3>
          <p>As a Financial Conduct Authority regulated credit broker, we may introduce you to a range of finance providers who may be able to help you finance your vehicle and provide other products/services, such as vehicle maintenance and servicing packages.</p>
          <p>We will only offer products from a carefully selected finance providers. We will not refer you outside of this. You can ask us for a list of the suppliers who provide our finance products. All the products we offer are optional.</p>
          <p>We may receive a fee for introducing you to one of our many lenders who assist with your finance agreement.</p>
          <p>&nbsp;</p>

          <h3>Charges</h3>
          <p>There is normally no charge for administration fees unless the client agrees a separate negotiated figure. This is only applicable if no commission or fee is available from the lender.</p>
          <p>&nbsp;</p>

          <h3>The Regulator</h3>
          <p>Paul Duddy Vehicle Sales and Finance is authorised and regulated by the Financial Conduct Authority. Our registered address Autumn Falls, Glossop Road, Marple Bridge, Stockport, SK6 5RX. Firm Reference Number 651410.. You can clarify this on the Financial Services Register by visiting the <a href="https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000000eiMiPAAU" target="_blank">FCA's website</a> or by contacting them on 0800 111 6768</p>
          <p>&nbsp;</p>

          <h3>Dispute Resolution and Complaints</h3>
          <p>We work hard to ensure that the services we offer are fair and that our communication to our customers is clear and is not misleading. However, if you are unhappy with our service and you wish to register a complaint, please contact us:</p>
          <p><strong>Write to:</strong> Paul Duddy Vehicle Sales and Finance Autumn Falls, Glossop Road, Marple Bridge, Stockport, SK6 5RX<br />
            <strong>Telephone:</strong> 01457 862181<br />
            <strong>Email:</strong> paul@paulduddyvehiclesalesandfinance.co.uk</p>

          <p>To help us resolve your problem, you should provide the following information:</p>
          <ul>
            <li>Your full name and contact information</li>
            <li>Full details of your complaint</li>
            <li>Your lease agreement details</li>
            <li>Details of what you would like us to do to put things right</li>
            <li>Photocopies of any relevant paperwork</li>
          </ul>
          <p>We will answer any complaints as quickly as possible but always at an early stage </p>
          <p>If you cannot settle your complaint with us, you may be entitled to refer it to the Financial Ombudsman Service.</p>
        </div>
      </div>
    </>
  )
}

export default InitialDisclosure
