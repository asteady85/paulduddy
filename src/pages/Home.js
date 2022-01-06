import React from 'react'
import Hero from '../Hero'
import HomeLink from '../modules/home-link'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='content tall'>
        <div className='content--wrapper'>
          <h2 className='text-center'>Our Services</h2>
          <div className='grid grid-gap grid--col3'>
            <HomeLink title='Contract Purchase'>
              <p>This is the description I need to</p>
            </HomeLink>
            <HomeLink title='Lease or Hire Purchase'>
              <p>This is the description I need to</p>
            </HomeLink>
            <HomeLink title='Straight Cash Purchase'>
              <p>This is the description I need to</p>
            </HomeLink>
            <HomeLink title='Leasing'>
              <p>This is the description I need to</p>
            </HomeLink>
            <HomeLink title='Contract Hire'>
              <p>This is the description I need to</p>
            </HomeLink>
            <HomeLink title='Part Exchanges Welcome'>
              <p>This is the description I need to</p>
            </HomeLink>
          </div>
        </div>
      </div>
      <div className='content feature text-center'>
        <p>We offer a wide range of services to suit your individual needs whether it be Outright Purchase, Part Exchanging or just selling your current vehicle. All our services provide you with the best customer service at the most competitive prices.</p>
      </div>
      <div className='content tall text-center'>
        <h2>About</h2>
        <p>Paul Duddy has been employed in the motor industry for over 30 years supplying vehicles for business and on a personal basis.</p>
        <p>Now specialises in sourcing most makes of cars and light commercial vehicles to suit ones individual requirements, whether it is for Outright Purchase or for any particular Finance Option.</p>
        <p>Even though the main core of the business is for the supply of new vehicles we are also able to source a wide range of used vehicles.</p>
      </div>
    </>
  )
}

export default Home
