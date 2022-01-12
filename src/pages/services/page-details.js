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
            <p>Contract Purchase......</p>
          </>
        )
      }
    case 'lease-purchasing':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Lease Purchase or Hire Purchase',
        heroContent: () => (
          <>
            <p>Lease purchase......</p>
          </>
        )
      }
    case 'straight-cash-purchase':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Straight Cash Purchase',
        heroContent: () => (
          <>
            <p>Straight Cash Purchase......</p>
          </>
        )
      }
    case 'leasing':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Leasing',
        heroContent: () => (
          <>
            <p>Leasing......</p>
          </>
        )
      }
    case 'contract-hire':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Contract Hire',
        heroContent: () => (
          <>
            <p>Contract Hire......</p>
          </>
        )
      }
    case 'part-exchange':
      return {
        backgroundImage: CarForecourt,
        pageTitle: 'Part Exchanges Welcome',
        heroContent: () => (
          <>
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
            <p>Fair Wear and Tear Guide......</p>
          </>
        )
      }
    default:
      return {
        backgroundImage: CarForecourt,
        pageTitle: '',
        heroContent: () => (
          <>
            <p>All our services</p>
          </>
        )
      }
  }
}

module.exports = {
  pageDetails
}