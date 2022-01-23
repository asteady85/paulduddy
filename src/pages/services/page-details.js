const React = require('react')
import CarForecourt from '../../images/cars-forecourt.jpg'
import CarKey from '../../images/car-key.jpg'

const pageDetails = (page) => {
  switch (page) {
    case 'contract-purchase':
      return {
        backgroundImage: CarKey,
        pageTitle: 'Personal or Business Contract Purchase',
        heroContent: () => (
          <>
            <h1>Contract Purchase</h1>
            <p>A fixed monthly payment for personal or business use.</p>
          </>
        )
      }
    case 'lease-purchasing':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Lease Purchase or Hire Purchase',
        heroContent: () => (
          <>
            <h1>Lease Purchase or Hire Purchase</h1>
            <p>Lease or hire a vehicle where you own it at the end of the agreement</p>
          </>
        )
      }
    case 'straight-cash-purchase':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Straight Cash Purchase',
        heroContent: () => (
          <>
            <h1>Straight Cash Purchase</h1>
            <p>If you prefer to buy a vehicle outright without a contract, we can ensure you get the best deal possible.</p>
          </>
        )
      }
    case 'leasing':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Leasing',
        heroContent: () => (
          <>
            <h1>Leasing</h1>
            <p>Lease a new vehicle for 2 to 5 years, enjoy the benefits with out the hassle of owning it yourself.</p>
          </>
        )
      }
    case 'contract-hire':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Contract Hire',
        heroContent: () => (
          <>
            <h1>Contract Hire</h1>
            <p>Pay for the use of a vehicle for a period of 2 to 5 years without owning it.</p>
          </>
        )
      }
    case 'part-exchange':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Part Exchanges Welcome',
        heroContent: () => (
          <>
            <h1>Part Exchange</h1>
            <p>Part exchange your old car to go towards your new one</p>
          </>
        )
      }
    case 'wear-and-tear':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Fair Wear and Tear Guide',
        heroContent: () => (
          <>
            <h1>Wear and Tear Guide</h1>
            <p>Understand what this means for each type of contract we offer</p>
          </>
        )
      }
    default:
      return {
        backgroundImage: CarForecourt,
        pageTitle: '',
        heroContent: () => (
          <>
            <h1>Our Services</h1>
            <p>We offer a wide range of services to suit your individual needs</p>
          </>
        )
      }
  }
}

module.exports = {
  pageDetails
}