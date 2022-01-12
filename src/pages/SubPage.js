import React from 'react'
import SubHero from '../SubHero'
import ServicesNav from './services/nav'
import '../scss/SubPage.scss'

const SubPage = ({ children, heroContent, heroBackgroundImage }) => {
  return (
    <>
      <SubHero backgroundImage={heroBackgroundImage}>
        {heroContent}
      </SubHero>
      <div className='sub-page-wrapper'>
        <div className='sub-page-wrapper--nav'>
          <ServicesNav />
        </div>
        <div className='sub-page-wrapper--content'>
          {children}
        </div>
      </div>
    </>
  )
}

export default SubPage
