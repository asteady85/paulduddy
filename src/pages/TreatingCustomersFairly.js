import React from 'react'
import SubHero from '../SubHero'
import backgroundImage from '../images/car-key.jpg'

const TreatingCustomersFairly = () => {
  const heroContent = () => (<p>With over 30 years in the business, specialising in most makes of cars and light commercial vehicles</p>)
  return (
    <>
      <SubHero backgroundImage={backgroundImage}>
        {heroContent()}
      </SubHero>
      <div className='content'>
        <div className='content--wrapper'>
          <h2><span>Treating Customers Fairly</span></h2>
          <p>Paul Duddy Vehicle Sales and Finance ensure that customers are at the very heart of all that we do. We are fully committed to providing the highest standards of client service and advice.</p>
          <p>Our clients are our most valuable asset and our aim is to ensure we deliver a user-friendly, robust, reliable and cost effective service. As a part of our overall approach we are fully committed to treating our clients fairly and as such we endeavour to meet their expectations of high quality service.</p>
          <p>Our treating customers fairly (TCF) policy is centered around the guidance provided by the Financial Conduct Authority (FCA) to ensure we consistently deliver fair outcomes to our clients and take responsibility for the company providing an enhanced service quality to clients, based on a culture of openness and transparency. As a company, we take the requirements of the FCA seriously, in particular, the requirement to treat customers (clients) fairly.</p>
          <p>The FCA has outlined six key themes which are central to the TCF initiative:</p>
          <ol>
            <li>Consumers should be confident that they are dealing with firms where treating customers fairly is embedded in the corporate culture</li>
            <li>Services marketed and sold are done so with the aim that they meet the needs of client and are targeted accordingly</li>
            <li>Consumers should be provided with clear information and are kept appropriately informed before, during and after the service provision</li>
            <li>Where advice is provided, it takes into account a client's individual circumstances</li>
            <li>The service provided is of an acceptable standard</li>
            <li>Customers do not face unreasonable barriers to make a complaint</li>
          </ol>
          <p>We have set out below how we aim to ensure these principles are embedded in our approach to dealing with our clients.</p>

          <h3>Our service</h3>
          <p>We ascertain the appropriateness of the requested service for all new clients prior to accepting an order, ensuring it is in line with their knowledge and experience.</p>
          <p>We continually aim to understand the needs of our clients</p>
          <p>We keep our clients fully informed in a clear and fair manner that is unambiguous and not misleading</p>
          <p>We ensure our services are delivered with clarity and transparency and do not contain hidden conditions or rely on ambiguous definitions</p>
          <p>We make certain our clients understand the risks associated with our services at the outset of an instruction</p>
          <p>We work hard to ensure that service and risk information remains clear and prominent at all times</p>
          <p>In the event that there is a conflict of interest, we will inform our clients as soon as possible once we become aware of it</p>

          <h3>Our approach</h3>
          <p>Our priority is to provide our clients with an excellent service underpinned by quality and choice. We are committed to ensuring customers want to use our services, stay with us and recommend us to their families, friends and colleagues.</p>
          <p>Our service is shaped by listening to our clients' needs and understanding what is important to them. We take responsibility for meeting the needs of our clients and always look for ways to improve the quality of our service.</p>
          <p>We aim to treat our clients fairly and deliver high quality services which meet their expectations throughout their relationship with us.</p>
          <p>We deliver a positive client experience and ensuring our customers are treated fairly. Our culture and values encourage and support our employees to deliver this.</p>

          <h3>Complaints</h3>
          <p>In the unlikely event of a client feeling they need to complain, we treat all complaints very seriously and operate within a published Complaints Procedure.</p>
          <p>Our policy is in line with the current guidance from the FCA and is in line with the principles of the FCA that "a firm must pay due regard to the interests of its customers and treat them fairly".</p>
        </div>
      </div>
    </>
  )
}

export default TreatingCustomersFairly
