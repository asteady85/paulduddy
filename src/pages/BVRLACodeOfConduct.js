import React from 'react'
import SubHero from '../SubHero'
import backgroundImage from '../images/car-key.jpg'

const BVRLACodeOfConduct = () => {
  const heroContent = () => (<p>With over 30 years in the business, specialising in most makes of cars and light commercial vehicles</p>)
  return (
    <>
      <SubHero backgroundImage={backgroundImage}>
        {heroContent()}
      </SubHero>
      <div className='content'>
        <div className='content--wrapper'>
          <h2><span>BVRLA Code of Conduct</span></h2>
          <h3>Using the BVRLA's conciliation service</h3>
          <p>The British Vehicle Rental and Leasing Association (BVRLA) is approved by Government as a Consumer ADR body under the Alternative Dispute Resolution for Consumer Disputes (Competent Authorities and Information) Regulations 2015. Please see details from the <a href="http://ec.europa.eu/consumers/solving_consumer_disputes/non-judicial_redress/national-out-of-court-bodies/index_en.htm" target="_blank">European Commission website</a><br />
            Unresolved disputes may be referred to the BVRLA by either the customer or the member involved, however the member cannot initiate a complaint against the customer.</p>
          <p>
            Details should be submitted by email to: <a href='mailto:complaint@bvrla.co.uk'>complaint@bvrla.co.uk</a>. Please complete and return our <a href="http://www.bvrla.co.uk/sites/default/files/u103/bvrla_complaint_form_2017.docx" target="_blank">complaint form</a> giving us authority to act on your behalf.<br />
            If the customer does not have access to email, details can be sent by post to:<br />
            BVRLA<br />
            River Lodge<br />
            Badminton Court<br />
            Amersham<br />
            HP7 0DD
          </p>
          <p>or Fax: 01494 434499</p>
          <p>The BVRLA will aim to resolve the matter using the information presented by both parties to the dispute. Any information requested from the member should be sent to the BVRLA within five working days. Based on the information available, the BVRLA will provide both parties with its findings and recommendations. The BVRLA aims to resolve complaints through the Conciliation Service within 30 days.</p>

          <h3>What is covered under the Conciliation Service?</h3>
          <p>The Conciliation Service will investigate potential breaches of the Codes of Conduct, which sets out the standards the BVRLA expects from its members. The Conciliation Service can only look at matters that relate to disputes arising from the activities of BVRLA members.<br />
            Please note that Associate member complaints are not covered by the Conciliation Service as they do not adhere to a BVRLA Code of Conduct.</p>

          <h3>Refunds</h3>
          <p>Where the Conciliation Service finds in favour of the customer, we will look to ensure that any unjustified charges incorrectly raised by the member are refunded in full. The service cannot adjudicate on the quantum of the amount charged, only on whether the charge was correctly raised.</p>

          <h3>Compensation</h3>
          <p>The Conciliation Service does not have any jurisdiction to award compensation payments.<br />
            No restriction of rights<br />
            BVRLA members must comply with the rulings of the Conciliation Service. Use of the Conciliation Service does not restrict the rights of a complainant to pursue remedies through the courts. Customers are not obliged to retain a lawyer or legal advisor but may seek independent legal advice or be represented or assisted by a third party at any stage of the procedure.</p>

          <h3>Annual Report</h3>
          <p>The BVRLA's annual complaint report is <a href="http://www.bvrla.co.uk/sites/default/files/documents/annual_activity_report_oct_15_-_sep_16_0.pdf" target="_blank">available here</a>.</p>

          <h3>ADR Procedures</h3>
          <p>The ADR procedures are <a href="http://www.bvrla.co.uk/sites/default/files/u103/adr_procedures.pdf" target="_blank">available here</a>.</p>

          <h3>Outside of the UK</h3>
          <p>We are unable to investigate disputes arising outside of the UK, as the scope and application of our Codes of Conduct extends only to members operating within the UK. Rental complaints relating to a cross border rental within Europe may be referred to the European Car Rental Conciliation Service<a href="http://www.ecrcs.eu" target='_blank'> (ECRCS).</a></p>

          <h3>Useful Contacts</h3>
          <p>If you are unable to invoke our conciliation service, the following organisations may be able to assist you further.</p>
          <ul>
            <li><strong>UK European Consumer Centre: </strong> <a href="http://www.ukecc.net/" target="_blank">http://www.ukecc.net/</a><br />The UK ECC provides free information on consumer rights in Europe and assists in cross-border disputes.</li>
            <li><strong>Citizens Advice Bureau: </strong> <a href="http://www.citizensadvice.org.uk/" target="_blank">http://www.citizensadvice.org.uk/</a></li>
            <li><strong>Trading Standards: </strong> <a href="https://www.tradingstandards.uk/consumers/support-advice" target="_blank">https://www.tradingstandards.uk/consumers/support-advice</a></li>
            <li><strong>Financial Ombudsman Service: </strong> <a href="http://www.financial-ombudsman.org.uk" target="_blank">http://www.financial-ombudsman.org.uk</a><br />The Financial Ombudsman Service is the official independent expert in settling complaints between consumers and businesses providing financial services, including many types of lending and insurance. Established by parliament, its services are free to consumers.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default BVRLACodeOfConduct
