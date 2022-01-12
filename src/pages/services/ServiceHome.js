import React from 'react'
import { Link } from 'react-router-dom'

const ServiceHome = () => {
  return (
    <>
      <p>We offer a wide range of services to suit your individual needs whether it be <Link to="/services/straight-cash-purchase">Outright Purchase</Link>, <Link to="/services/part-exchange" title="car part exchange">Part Exchanging</Link> or just selling your current vehicle. All our services provide you with the best customer service at the most competitive prices.</p>
      <p>Please choose from the list below:</p>
      <ul>
        <li><Link to="/services/purchasing" title="Contract Purchase">Contract Purchase</Link></li>
        <li><Link to="/services/lease-purchasing" title="Lease Purchase or Hire Purchase">Lease Purchase or Hire Purchase</Link></li>
        <li><Link to="/services/straight-cash-purchase" title="Straight Cash Purchase">Straight Cash Purchase</Link></li>
        <li><Link to="/services/leasing" title="Lease a new car">Leasing</Link></li>
        <li><Link to="/services/contract-hire" title="Contract hire a vehicle">Contract Hire</Link></li>
        <li><Link to="/services/part-exchange" title="part exchange your old car for a new one">Part Exchanges Welcome</Link></li>
        <li>Used cars always required</li>
        <li>Sale or Return</li>
      </ul>
      <p>Please see the <Link to="/services/initial-disclosure">Initial Disclosure Document</Link> for further details.</p>
    </>
  )
}

export default ServiceHome
