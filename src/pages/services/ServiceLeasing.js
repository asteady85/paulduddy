import React from 'react'
import { Link } from 'react-router-dom'

const ServiceLeasing = () => {
  return (
    <>
      <p>Finance Lease is a flexible form of finance, where the customer/end user enjoys all the benefits of use without ownership. The agreements can be drawn up with or without a residual value (Balloon), and can be written between 2 to 5 years.</p>
      <p>The finance rentals are calculated on the VAT exclusive price, including Road Fund Licence and any Optional Extras.</p>
      <p>The asset remains the property of the finance company, but the V5 should be in the customers name usually registered C/O the Finance Company. Title cannot pass to the Hirer.</p>
      <p>Unlike <Link to="contract-hire" title="Contract Hire">contract hire</Link>, the vehicle does register as an asset (and liability) on the customer’s balance sheet. SSAP 21.</p>
      <p>The hirer is responsible for any Residual Value payments, and therefore accepts the Risk or Reward of this agreement.</p>
      <p>At the end of the agreement, the customer can retain use of the vehicle by paying a peppercorn rental (usually one monthly payment per annum), or the customer will retain a percentage of the sale proceeds if he sells it to an independent third party.</p>
      <p>The hirer is responsible for all Maintenance and Road Fund Licence.</p>
    </>
  )
}

export default ServiceLeasing
