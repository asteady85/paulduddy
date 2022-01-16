import React from 'react'
import SubHero from '../SubHero'
import backgroundImage from '../images/car-key.jpg'

const Complaints = () => {
  const heroContent = () => (<p>With over 30 years in the business, specialising in most makes of cars and light commercial vehicles</p>)
  return (
    <>
      <SubHero backgroundImage={backgroundImage}>
        {heroContent()}
      </SubHero>
      <div className='content'>
        <div className='content--wrapper'>
          <h2><span>Complaint Handling Procedure</span></h2>
          <p><strong>What you should do if you want to complain</strong></p>
          <p>If you have a complaint about us you should let us know by writing to us at:<br />
            Paul Duddy Vehicle Sales and Finance, Autumn Falls, Glossop Road, Marple Bridge, Stockport, SK6 5RX<br />
            Alternatively you can phone us on 01457 862181. Most difficulties can be resolved at an early stage by talking informally, at the earliest opportunity.</p>

          <p><strong>What we will do if you complain</strong></p>
          <p>Timescales for dealing with your complaint<br />
            If you send us your complaint in writing, we will write to you within five working days to let you know we have received it.<br />
            If you inform us of your complaint by telephone or in person we will write to you within five business days of you telling us. We will confirm in this letter the details of your complaint and ask that you write back to confirm to us that these details are correct.<br />
            If we cannot resolve your complaint within four weeks of receipt, we will write to update you about our investigation and to tell you when we will write to you informing you of our decision.<br />
            If we are unable to reach a decision sooner, we will contact you no later than eight weeks from the date we first received your complaint. We will then tell you what our final decision is or, if we have not been able to reach a resolution within this time we will give you details of the Financial Ombudsman Service which you can contact about your complaint.</p>

          <p><strong>How we will deal with your complaint</strong></p>
          <p>When we write to advise you we have received your complaint, we will tell you we are dealing with your complaint. If you have any queries while we are dealing with your complaint, you should contact the person named in that letter.<br />
            We will deal with your complaint as quickly as we can. If we have to make a lot of enquiries to investigate your complaint, it may take us longer to reach a decision. It is possible that as part of our investigations we may need to ask you for more information.<br />
            While we investigate your complaint we will keep you informed and you will not have to wait any longer than eight weeks to hear the outcome of our review.<br />
            We will only use the personal details you give us (when you make your complaint, or later on) to help us deal with your complaint as set out in this complaints handling procedure. The way we use your personal details will comply fully with the Data Protection Act 1998. For more details about how we use your personal details, please see our Privacy Policy</p>

          <p><strong>How we will reach our decision</strong></p>
          <p>When investigating your complaint, we will always take account of what you tell us. We will reach our final decision based on the outcome of our investigations and what you have told us.<br />
            We will assess complaints according to the law and the principles and guidance produced by our regulators - The Financial Conduct Authority (FCA) - the Office of Fair Trading.</p>

          <p><strong>Telling you about decision</strong></p>
          <p>If we can't reach a decision within eight weeks of receiving your complaint, we will write to you to explain the outcome of our investigation and what we propose to do about it. If we decide your complaint is unfounded, our letter will explain why.</p>

          <p><strong>What if you are not happy with our final decision?</strong></p>
          <p>If you disagree with our decision you should contact us. Alternatively, you can contact the Financial Ombudsman Service with your comments. You can also contact the Financial Ombudsman Service if you have not received a response from us within eight weeks from the date of your complaint.<br />
            If we do change our decision, our letter will tell you what our revised decision is and how and why we reached it.<br />
            If you disagree with our decision you should contact us. Alternatively, you can contact the Financial Ombudsman Service with your comments. You can also contact the Financial Ombudsman Service if you have not received a response from us within eight weeks from the date of your complaint.</p>

          <p><strong>The Financial Ombudsman Service can be contacted as follows:</strong></p>
          <p>Enquiries and consumer helpline<br />
            <br />
              Monday to Friday - 8am to 8pm<br />
              Saturday - 9am to 1pm<br />
              0800 023 4 567<br />
              calls to this number are now free on mobile phones and landlines<br />
              0300 123 9 123<br />
              calls to this number cost no more than calls to 01 and 02 numbers<br />
              These numbers may not be available from outside the UK - so please call us from abroad on +44 20 7964 0500.<br />
              The FSO will be happy to phone you back, if you're worried about the cost of calling them.<br />
              The FSO Postal Address is:<br />
              The Financial Ombudsman Service, Exchange Tower, London E14 9SR</p>
        </div>
      </div>
    </>
  )
}

export default Complaints
