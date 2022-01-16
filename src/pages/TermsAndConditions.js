import React from 'react'
import SubHero from '../SubHero'
import backgroundImage from '../images/car-key.jpg'

const TermsAndConditions = () => {
  const heroContent = () => (<p>With over 30 years in the business, specialising in most makes of cars and light commercial vehicles</p>)
  return (
    <>
      <SubHero backgroundImage={backgroundImage}>
        {heroContent()}
      </SubHero>
      <div className='content'>
        <div className='content--wrapper'>
          <h2><span>Treating Customers Fairly</span></h2>
          <p><strong>Definitions</strong></p>
          <p>"We", "us" or "our" refer to Paul Duddy Vehicle Sales and Finance<br />
            "You" or "your" refer to any person accessing the website<br />
            "Content" refers to any or all of the words, images, source code, scripts, applications and any other systems or features forming part of the website.</p>

          <p><strong>General</strong></p>
          <ul>
            <li>This website is owned and operated by Paul Duddy Vehicle Sales and Finance</li>
            <li>We are a licensed credit broker as opposed to a lender and may be paid by a lender for our introducing you to them</li>
            <li>Use of the website is subject to and constitutes acceptance of the following terms and conditions in a legally binding contract</li>
            <li>If you do not wish to be bound by these terms and conditions, please leave the website</li>
            <li>Orders are also subject to the following terms and conditions, so it is important to read them carefully before signing and returning any documentation</li>
            <li>We reserve the right to alter these terms and conditions at any time we so wish.</li>
          </ul>

          <p><strong>Copyright</strong></p>
          <p>Any information obtained from manufacturers and other media/PR sources, the website's contents and its layout and design are copyright to and the intellectual property of Paul Duddy Vehicle Sales and Finance unless otherwise stated<br />
            Copying, altering and/or reproducing any or all of this website and/or its contents without our prior consent is strictly prohibited and legal action may be taken against any person(s) in contravention.</p>

          <p><strong>Pricing</strong></p>
          <p>Personal leasing prices are quoted inclusive of VAT at the prevailing rate. Business leasing prices are quoted exclusive of VAT at the prevailing rate.<br />
            Any changes in the prevailing rate of UK VAT that occur between an order being placed with us and the vehicle being supplied will result in payments being adjusted to reflect the new rate of VAT</p>
          <p>Unless stated otherwise, the prices displayed on our website are inclusive of:</p>
          <ul>
            <li>Registration plates</li>
            <li>Road Fund Licence for the duration of the lease (if applicable)</li>
            <li>Delivery of the vehicle by the dealer to a UK mainland destination of your choice, except where we advise you in advance of your order being    placed that we will pass on any and all additional costs related to the delivery of a particular vehicle for any reason</li>
            <li>Vehicle registration fee.</li>
          </ul>

          <p>We reserve the right to change the price of a vehicle at any stage prior to you placing a signed order, in which case you will have the right to cancel the order if you so wish<br />
            The price may vary depending on the desired vehicle colour, which is linked to stock availability and residual forecasts<br />
            Prices published on our website are provided in good faith solely for informational purposes only and do not constitute an offer<br />
            Any processing fee if applicable will be clearly stated on order forms prior to you entering into a contract with us through your signature<br />
            A deposit may be required or requested by us in order to secure a particular vehicle and deposits may be non-refundable at our discretion</p>

          <p><strong>Orders</strong></p>
          <p>By placing an order, you are expressing an indisputable desire to obtain and receive the vehicle ordered at a price similar to that displayed on the website or provided to you verbally or via email by one of our representatives<br />
            An order does not constitute a contract between you and Paul Duddy Vehicle Sales and Finance the lease, rental or purchase of a vehicle. The ensuing finance agreement will be between you and a finance company, also referred to as a funder or lender. A contract is only entered into once we have located a vehicle matching your required specification at a price agreeable to both parties and you subsequently sign and return the finance agreement, which is then accepted and executed by the funder<br />
            Unless expressly communicated otherwise, we will only introduce you to a finance company listed on our panel<br />
            A credit check will be carried out on you as part of the application process. In the case of limited companies, a credit search will be carried out in the name of the company and each of its directors, so by making an application on a limited company's behalf, you indicate that you have the necessary authority to consent to these searches ICO Registration Reference: Z9932607<br />
            Where possible, alternative vehicles will be recommended to you by us in cases where the vehicle you have applied for is not available. Your order will be cancelled and any funds already paid by you to us will be refunded if the alternative is not acceptable to you<br />
            Any dates quoted by our staff, including but not limited to factory build and delivery dates, are estimates only and we will not be bound by them.</p>

          <p><strong>Vehicle delivery and registration</strong></p>
          <p>Once your signed finance agreement has been received and accepted and any due payments have been made including any deposit and balance, we will arrange for the vehicle you are ordering to be delivered to the agreed UK mainland destination at no extra cost to yourself<br />
            Delivering a vehicle to certain destinations is subject to additional fees payable by you and we will advise you well in advance if this is the case, giving you the option to accept or decline<br />
            Vehicles are delivered 'driven' to the agreed address and are not trailered. If you require the vehicle to be transported by trailer or transporter, an extra charge will apply and you will be notified of this by us as early on in the process as possible<br />
            Delivery dates are subject to alteration by the vehicle's manufacturer and any "lead times" provided by us are estimates only, no party bound to deliver a vehicle within such a time-frame. We are unable to influence or control manufacturers' factory lead times or any other processes and you agree to fully indemnify us against any and all losses or inconvenience occurring by a delay on the part of the manufacturer<br />
            Vehicle delivery is subject to statutory cooling off periods specified by UK law, delivery taking place only when the cooling off period has expired
            It is not possible for a vehicle to be registered locally</p>
          <p>In order for delivery to take place, you must provide us with proof of insurance in advance and this may be shared by us with the finance company<br />
            The person named on the executed finance agreement must be the main policyholder or named driver on the insurance policy in force.</p>

          <p><strong>Excess Mileage</strong></p>
          <p>The order you complete will clearly display the excess mileage charge, which is valid for up to 100% of the annual mileage allowance, after which any additional mileage may be subject to a higher rate.</p>
          <p><span className='brand-dark-colour'><strong>EXCESS MILEAGE CHARGES WILL BE APPLIED IF A CUSTOMER GOES OVER THE CONTRACTED MILEAGE</strong></span></p>

          <p><strong>Vehicle accessories</strong></p>
          <p>If you require a non-dealer fit accessory it will be necessary for us to investigate and establish the availability of the required option(s) prior to confirming such along with the time-scale involved<br />
            We reserve the right to refuse to arrange the installation of an accessory if in our sole professional opinion we do not consider such an upgrade to be suitable for the vehicle in question, in which case we may also refuse to suggest an alternative product<br />
            If a requested accessory is found to be unavailable or if in our sole professional opinion we do not consider such an upgrade to be suitable for the vehicle in question, we reserve the right to remove such an accessory from your order, in which case a refund will be given against the accessory. Such an occurrence does not provide you with the opportunity to cancel any agreement(s) entered into prior to the accessory's removal from the order, which shall remain legally binding.</p>

          <p><strong>Incentives</strong></p>
          <p>From time to time we may publish information pertaining to ‘free' or ‘special' products, prices, promotions or other such offerings of this nature, available to customers completing an order with Paul Duddy Vehicle Sales and Finance through the aforementioned processes<br />
            Any item(s) we offer to you at no extra cost will be posted to you after your order has been processed and delivered at a time decided by us<br />
            A substitute item of equal or greater value to the original will be provided by us should the original item become unavailable<br />
            You agree to fully indemnify Paul Duddy Vehicle Sales and Finance and any promotional partner involved if a free item becomes lost or damaged in the post, in which case we may agree to arrange a replacement at our discretion, but this is not guaranteed<br />
            We reserve the right to amend or withdraw incentives at any time for any reason</p>

          <p><strong>Statutory rights, complaints &amp; customer service</strong></p>
          <p>Nothing contained in these terms and conditions shall affect your statutory rights<br />
            We are committed to providing high levels of customer service. If for any reason you are not satisfied with the service provided by us, we will strive to resolve any and all such issues in a professional and prompt manner<br />
            Paul Duddy Vehicle Sales and Finance customer complaints procedure is available on request, obtainable by emailing paul@paulduddyvehiclesalesandfinance.co.uk can also be used to communicate any feedback to us<br />
            Except in extenuating circumstances or around bank holidays or other UK holiday periods, we will issue you with an initial response via email or telephone within 3 working days of receipt and will exert all reasonable effort to revolve your complaint as soon as practically possible<br />
            A time-scale will be estimated and provided to you regarding the resolution of your dispute and we pledge to keep you regularly informed of progress<br />
            If you or we are dissatisfied with the outcome of a complaint made to us, the complaint may be referred to the Financial Ombudsman Service.</p>

          <p><strong>Force Majeure</strong></p>
          <p>You fully indemnify Paul Duddy Vehicle Sales and Finance against any and all loss, damages, costs and expenses awarded against or incurred by you or any individual(s) or organisation(s) acting with or on your behalf as a result of any circumstances beyond our control, including but not limited to war, strikes, fire, ‘act of god, act of government or any other form of Force Majeure.</p>

          <p><strong>Governance</strong></p>
          <p>These terms and Conditions are governed by and construed in accordance with UK law and will be dealt with by the due legal systems of England<br />
            If any of these terms and Conditions are found to be invalid or unenforceable by a court of law, the rest are unaffected and will remain legally binding and enforceable<br />
            If any of these terms and Conditions are found to be written using imperfect language, punctuation and/or grammar, this will not be accepted as the grounds for any invalidity and unenforceability and such terms shall remain fully enforceable and binding.
          </p>
        </div>
      </div>
    </>
  )
}

export default TermsAndConditions
