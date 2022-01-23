import React from 'react'
import Hero from '../Hero'
import HomeLink from '../modules/home-link'
import { Handshake } from '@styled-icons/fa-solid/Handshake'
import { CarAlt } from '@styled-icons/fa-solid/CarAlt'
import { PoundSign } from '@styled-icons/fa-solid/PoundSign'
import PromoModule from '../modules/promo-module'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='content tall'>
        <div className='content--wrapper'>
          <h2><span>Our Services</span></h2>
          <p>We offer a wide range of services to suit your individual needs whether it be Outright Purchase, Part Exchanging or just selling your current vehicle. All our services provide you with the best customer service at the most competitive prices.</p>
          <div className='grid grid-gap grid--col3'>
            <HomeLink title='Contract Purchase' link='/services/contract-purchase'>
              <p>A fixed monthly payment for personal or business use.</p>
            </HomeLink>
            <HomeLink title='Lease or Hire Purchase' link='/services/lease-purchasing'>
              <p>Lease or hire a vehicle where you own it at the end of the agreement</p>
            </HomeLink>
            <HomeLink title='Straight Cash Purchase' link='/services/straight-cash-purchase'>
              <p>If you prefer to buy a vehicle outright without a contract, we can ensure you get the best deal possible.</p>
            </HomeLink>
            <HomeLink title='Leasing' link='/services/leasing'>
              <p>Lease a new vehicle for 2 to 5 years, enjoy the benefits with out the hassle of owning it yourself.</p>
            </HomeLink>
            <HomeLink title='Contract Hire' link='/services/contract-hire'>
              <p>Pay for the use of a vehicle for a period of 2 to 5 years without owning it.</p>
            </HomeLink>
            <HomeLink title='Part Exchanges Welcome' link='/services/part-exchange'>
              <p>Why not part exchange your current vehicle to go towards your new one.</p>
            </HomeLink>
          </div>
        </div>
      </div>
      <div className='content feature'>
        <div className='content--wrapper'>
          <h2><span>Our Promise To You</span></h2>
          <p>We offer a wide range of services to suit your individual needs whether it be Outright Purchase, Part Exchanging or just selling your current vehicle. All our services provide you with the best customer service at the most competitive prices.</p>
          <PromoModule>
            <div className='col'>
              <div className='round-icon'>
                <span className='round-icon--wrapper'>
                  <PoundSign />
                </span>
                <div className='round-icon--content'>
                  Competitive prices everyday
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='round-icon'>
                <span className='round-icon--wrapper'>
                  <Handshake />
                </span>
                <div className='round-icon--content'>
                  Friendly and helpful
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='round-icon'>
                <span className='round-icon--wrapper'>
                  <CarAlt />
                </span>
                <div className='round-icon--content'>
                  Great range of new and used cars
                </div>
              </div>
            </div>
          </PromoModule>
        </div>
      </div>
      <div className='content tall text-center'>
        <h2><span>About</span></h2>
        <p>Paul Duddy has been employed in the motor industry for over 30 years supplying vehicles for business and on a personal basis.</p>
        <p>Now specialises in sourcing most makes of cars and light commercial vehicles to suit ones individual requirements, whether it is for Outright Purchase or for any particular Finance Option.</p>
        <p>Even though the main core of the business is for the supply of new vehicles we are also able to source a wide range of used vehicles.</p>
      </div>
    </>
  )
}

export default Home
