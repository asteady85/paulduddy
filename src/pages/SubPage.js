import React from 'react'
import SubHero from '../SubHero'

const SubPage = ({ children }) => {
  return (
    <>
      <SubHero />
      {children}
    </>
  )
}

export default SubPage
