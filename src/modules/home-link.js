import React from 'react'

const HomeLink = ({ title, children }) => (
  <div className='some-module col'>
    <div className='some-module--header'>
      <h4>{title}</h4>
      <div className='some-module--content'>
        {children}
      </div>
    </div>
  </div>
)

export default HomeLink