import React from 'react'
import { Link } from 'react-router-dom'

const ServiceHome = () => {
  return (
    <>
      <p>Service Home page</p>
      <Link to='/new/services/part-exchange'>Part Exchange</Link>
    </>
  )
}

export default ServiceHome
