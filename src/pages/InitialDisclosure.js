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
          <p>
            We are Paul Duddy T/A Paul Duddy Vehicle Sales &amp; Finance, Autumn Falls, Glossop Road, Marple
            Bridge, Stockport, SK6 5RX. We are an independent vehicle finance broker, not a lender, authorised
            and regulated by the Financial Conduct Authority. Our Financial Conduct Authority Reference
            Number is 651410, this can be verified by contacting the FCA on 0800 111 6768 or by viewing the
            Financial Services Register atwww.fca.org.uk. The Financial Conduct Authority require us to provide
            you with an Initial Disclosure Document. This document provides information about us, the products
            we offer, and the services we will provide, what we charge for our services, who regulates us and
            what to do if you have a complaint.
          </p>

          <h3>What do we offer?</h3>
          <p>
            We offer a range of business and personal vehicle leasing, or purchase facilities. We are a licensed
            credit brokerage (not a lender) and can introduce you to one of our carefully selected panel of
            lenders whom may pay us for the introduction to supply a vehicle.
          </p>

          <h3>What services will we provide you with?</h3>
          <p>
            We will provide you with competitive quotations from the lenders most appropriate to your
            requirements, and general information relating to finance products. While assessing your
            requirements we may require information about your personal circumstances and objectives to
            enable us to identify your needs. It is important that you provide us with accurate and relevant
            information enabling us to narrow down the selection of firms offered, from which you can easily
            make your choice.
          </p>

          <h3>Cancellation</h3>
          <p>
            In accordance with the Distance Marketing Directive, private individuals, sole traders and small
            partnerships have the right to cancel within 14 calendar days from the date you place the order
            online or “accept” our quotation via email. For orders cancelled after 14 days, a cancellation fee of 3
            months rental will be payable to cover all costs and expenses incurred in arranging the credit hire
            agreement.
          </p>

          <h3>What to do if you have a complaint?</h3>
          <p>
            Our aim is to provide a first-class level of service, we are committed to treating our customers fairly,
            however if you wish to register a complaint please contact us. By phone: <a href='tel:01457 862181'>01457 862181</a> or by email:
            <a href='mailto:paul@paulduddyvehiclesalesandfinance.co.uk'>paul@paulduddyvehiclesalesandfinance.co.uk</a> or in writing: Paul Duddy Vehicle Sales and Finance,
            Autumn Falls, Glossop Road, Marple Bridge, Stockport, SK6 5RX
          </p>
          <p>
            Our <Link to='/complaint-handling-procedure'>complaints policy and procedure</Link> is available to view on our website –
            www.paulduddyvehiclesalesandfinance.co.uk If you are not satisfied with a decision taken in respect
            of a complaint or appeal, you may contact the BVRLA who will act as an independent arbiter. The
            BVRLA can be found at www.bvrla.co.uk. Consumer Credit customers also have the right to refer
            unresolved disputes to the Financial Ombudsman Service within 6 months from the date of the final
            decision at <a href='www.financial-ombudsman.org.uk/consumer/complaints' target='_blank' rel='noreferrer'>www.financial-ombudsman.org.uk/consumer/complaints</a>
          </p>

          <h3>Personal Funding Options</h3>
          <p>
            Personal Contract Hire (Also Known as Personal Car Leasing) Personal Contract Hire is a fixed term,
            fixed cost rental agreement, and (at an additional cost) an optional fixed cost maintenance** facility
            for cars or light commercial vehicles. Mileage is agreed at the outset, based on the information
            provided to us by the customer. The rental amount you pay is determined by your chosen annual
            mileage, and the residual value of a used vehicle is determined by its mileage upon return. I.e. The
            higher the annual mileage the more expensive the rental will be. Personal Contract Hire agreements
            include Road Fund Licence for the duration of the contract. There is no option to own the vehicle.
          </p>
          <table>
            <tr>
              <th>Advantages</th>
              <th>Disadvantages</th>
            </tr>
            <tr>
              <td>Flexible initial rental*, with initial rentals as low as 1 rental in advance. The initial rental is paid by direct debit after delivery.</td>
              <td>You will never own the vehicle</td>
            </tr>
            <tr>
              <td>Fixed period of car usership, from 2 to 5 years.</td>
              <td>The contract is relative inflexible, and should you wish to leave the contract early there will be a termination fee payable.</td>
            </tr>
            <tr>
              <td>Ease of budgeting.</td>
              <td>Vehicle must be maintained in accordance with the manufacturers' requirements, there will be costs due at the end of the contract if the vehicle isn’t maintained in line with manufacturers’ recommendations.</td>
            </tr>
            <tr>
              <td>Fixed Mileage Contract, with mileages available from 5,000 to 50,000 miles per annum.</td>
              <td>If the vehicle exceeds the contracted mileage, excess mileage*** penalties will apply.</td>
            </tr>
            <tr>
              <td>No depreciation or residual risks.</td>
              <td>Vehicle must be returned in a well-maintained condition. Costs can be incurred.</td>
            </tr>
            <tr>
              <td>Option of including maintenance** with the contract.</td>
              <td>You must have full comprehensive insurance</td>
            </tr>
            <tr>
              <td>At the end of the contract, simply return the vehicle.</td>
              <td>It is difficult to change mileage after the agreement has been incepted.</td>
            </tr>
            <tr>
              <td>Fixed Term Agreement</td>
              <td>If you cancel the contract before the term has ended, early termination fees will apply. (Note – this may be up to 100% of the remaining Rentals).</td>
            </tr>
          </table>

          <p>
            Please note that you should only ever apply for a lease if you can afford to pay the monthly rentals, and you do
            not foresee any material change which would prevent you making payments in the future. All hire agreements
            are for vehicles to be used by yourself. Late payment of the monthly rental will incur additional charges, and
            may affect your ability to obtain credit in the future.
          </p>
          <p>
            *Initial Rental is the first rental payment which is usually a multiplication of the regular monthly payment. I.e.
            An agreed monthly rental of £200inc VAT, agreed on a 3 in advance, would make the initial rental £600. This
            amount can be increased or reduced to adjust the amount you will pay.
          </p>
          <p>
            **Maintenance is an option which you may wish to add to the rental agreement. This will generally include all
            servicing, routine maintenance and tyres. If you choose a ‘Customer Maintained’ agreement, then you will
            need to pay for all these costs separate to the agreement.
          </p>
          <p>
            ***Excess Mileage is the amount a leasing company will charge for exceeding your agreed mileage at the
            outset. Circumstances surrounding your motoring habits may change during the contract. As an example, if
            you’re excess Mileage is 8p per mile, and you do 1000 miles above the agreed contract, then this will cost you
            £80.
          </p>

          <h3>Your Vehicle Quotation(s)</h3>
          <p>Please check your quotation carefully to ensure you are happy with the vehicle and finance product.</p>
          <p>Please check that the vehicle is what you are expecting, please check the Model, Variant, Engine and Gearbox are what you require and desire. The vehicle specification(s) displayed on various websites are supplied by third party data suppliers, whilst every effort is made to ensure its accuracy, it should only be used as a guide. Where there are a number of free of charge options, regarding interior choice, alternative wheels and embellishment trims – unless specified by the customer – will be supplied and determined by the most popular combinations.</p>

          <h3>Vehicle Ordering</h3>
          <p>When ordering the vehicle, I need to highlight that the proposed stock date is subject to change as this can on occasion be moved by the manufacturer.</p>

          <h3>Maintenance</h3>
          <p>Maintenance packages are available for a fixed monthly fee which covers the cost of servicing, MOTs and other costs such as tyre replacement and roadside assistance. As you would expect it has some exclusions such as windscreen replacements and vandalism. If your quote does not have a maintenance quote, please don’t hesitate to ask your account manager.</p>

          <h3>Diesel Particulate Filters (Only applicable on diesel engines)</h3>
          <p>Due to changes in legislation, modern diesel engines are fitted (as standard) with Diesel Particulate Filters. These are designed to reduce pollutants entering the atmosphere and reduce Co2 emissions. The DPF filters need emptying/cleaning on a regular basis, and this is done within a motor vehicle by heat. In order for this to be done regularly, the vehicle will need to be driven at motorway speeds to allow the temperature to rise and burn off the particles held within the exhaust. If the car is only ever driven for local journeys, in town and never goes on motorways then a diesel vehicle may not be the right vehicle for you. More detailed information is available on request.</p>

          <h3>AdBlue Additives (Only applicable on diesel engines)</h3>
          <p>AdBlue is an additive which is required for all diesel engines fitted with a Selective Catalytic Reduction system, and it is designed to reduce dangerous Nitrogen Oxides into two harmless products – water vapour and Nitrogen. AdBlue is a consumable which you will have to top up at your expense, and with AdBlue tanks varying in size from 5 litres to 20 litres you will be reliant upon your on-board computer to give you a number of warnings as the level drops. It is wise not to ignore them, as once the AdBlue is all gone the car may not start until the AdBlue tank is topped up again. Topping up the tank is very easy, the AdBlue filler cap is often located next to the diesel filler and AdBlue is typically sold in handy containers that dispense without drips. (Older cars may have AdBlue filler caps inside the vehicle).</p>

          <h3>In Car Connectivity</h3>
          <p>Lease vehicles are owned by the leasing provider. In most circumstances they will not allow the manufacturer to switch on the In-Car Connectivity. This may affect Mercedes Connect Me, InControl App by Land Rover and many other systems. If this is an area of concern, please discuss this further.</p>

          <h3>Pre-Registered Vehicles</h3>
          <p>Where stated, all pre-registered vehicles supplied will have the remainder of the manufacturer’s warranty, additional services such as roadside assistance, from the date of registration. Any repairs which are required outside of the warranty period, MOT being due, will be conducted by the customer unless a maintenance package has been taken.</p>

          <h3>Vehicle Delivery</h3>
          <p>All vehicles will be driven by road, to an address as specified by you within the United Kingdom. At an additional cost, you may wish for your vehicle to be transported. If this is something you wish to consider, then please request a price?</p>

          <h3>Pricing</h3>
          <p>Paul Duddy Vehicle Sales & Finance endeavour for all “quoted” pricing to remain available during the 14-day validation period. There are things which are outside of our control, such as manufacturer price increases and the ‘Stock’ offer selling out before an acceptance is given. We may also be unaware of model year changes, which might not have been published by the manufacturer, but do usually include a price increase.</p>

          <h3>Delivery/Lead Times Quoted</h3>
          <p>Any delivery dates/lead times provided either in writing or verbally are based on information provided by our dealer/manufacturer partner, and they represent our best estimate. Whilst we endeavour to ensure that delivery dates are as accurate as possible, delivery dates are subject to change by the manufacturer and on occasion delays do occur. We have a team of people who are committed to ensuring you have a smooth delivery within the time frames we indicate, but if there are delays we will communicate with you at every stage for you to make alternative arrangements. We cannot accept any responsibility for any losses or inconvenience caused, and we do not have the ability to provide a hire vehicle for any such delays.</p>

          <h3>Missed Payments</h3>
          <p>If you fail to keep up repayments on your agreement, you may incur additional interest charges and penalties which may impact on your credit file.</p>

          <h3>End of Contract</h3>
          <p>The vehicle must be returned in good condition. For more information on guidelines you should visit the BVRLA website to view the industry standard Fair Wear and Tear guide. Vehicles must be returned with the correct documented service history in accordance with the manufacturer’s guidelines. All vehicles need to have all keys, all tools, and all manuals returned.</p>

          <h3>Privacy & Cookie Policy</h3>
          <p>Please read our <Link to='/privacy-policy'>Privacy Policy</Link> at www.paulduddyvehiclesalesandfinance.co.uk and should you require a hardcopy please do not hesitate to ask.</p>
        </div>
      </div>
    </>
  )
}

export default InitialDisclosure
