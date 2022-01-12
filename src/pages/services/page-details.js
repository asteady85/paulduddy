const React = require('react')
import CarForecourt from '../../images/cars-forecourt.jpg'

const pageDetails = (page) => {
  switch (page) {
    case 'contract-purchase':
      return {
        backgroundImage: CarForecourt,
        pageTitle: () => (<h3>Personal or Business Contract Purchase</h3>),
        heroContent: () => (
          <>
            <p>Contract Purchase......</p>
          </>
        )
      }
    case 'lease-purchasing':
      return {
        backgroundImage: CarForecourt,
        pageTitle: () => (<h3>Lease Purchase or Hire Purchase</h3>),
        heroContent: () => (
          <>
            <p>Lease purchase......</p>
          </>
        )
      }
    case 'straight-cash-purchase':
      return {
        backgroundImage: CarForecourt,
        pageTitle: () => (<h3>Straight Cash Purchase</h3>),
        heroContent: () => (
          <>
            <p>Straight Cash Purchase......</p>
          </>
        )
      }
    case 'leasing':
      return {
        backgroundImage: CarForecourt,
        pageTitle: () => (<h3>Leasing</h3>),
        heroContent: () => (
          <>
            <p>Leasing......</p>
          </>
        )
      }
    case 'contract-hire':
      return {
        backgroundImage: CarForecourt,
        pageTitle: () => (<h3>Contract Hire</h3>),
        heroContent: () => (
          <>
            <p>Contract Hire......</p>
          </>
        )
      }
    case 'part-exchange':
      return {
        backgroundImage: CarForecourt,
        pageTitle: () => (<h3>Part Exchanges Welcome</h3>),
        heroContent: () => (
          <>
            <p>Part exchange your old car to go towards your new one</p>
          </>
        )
      }
    case 'wear-and-tear':
      return {
        backgroundImage: CarForecourt,
        pageTitle: () => (<h3>Fair Wear and Tear Guide</h3>),
        heroContent: () => (
          <>
            <p>Fair Wear and Tear Guide......</p>
          </>
        )
      }
    default:
      return {
        backgroundImage: CarForecourt,
        pageTitle: () => (<></>),
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