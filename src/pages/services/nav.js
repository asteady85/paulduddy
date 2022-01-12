import React from 'react'
import { Link } from 'react-router-dom'

const ServicesNav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/services/">All Services</Link></li>
        <li><Link to="/services/contract-purchase">Contract Purchase</Link></li>
        <li><Link to="/services/lease-purchasing">Lease Purchase or Hire Purchase</Link></li>
        <li><Link to="/services/straight-cash-purchase">Straight Cash Purchase</Link></li>
        <li><Link to="/services/leasing">Leasing</Link></li>
        <li><Link to="/services/contract-hire">Contract Hire</Link></li>
        <li><Link to="/services/part-exchange">Part Exchanges</Link></li>
        <li><Link to="/services/wear-and-tear">Fair Wear and Tear Guide</Link></li>
      </ul>
    </nav>
  )
}

export default ServicesNav
