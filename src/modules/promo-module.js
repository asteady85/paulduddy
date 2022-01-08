import React from 'react'
import './promo-module.scss'

const PromoModule = ({ children }) => (
  <div className='promo-module'>
    <div className='grid grid-gap grid--col3 border-between'>
      {children}
    </div>
  </div>
)

export default PromoModule