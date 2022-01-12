import React from 'react'
import { useParams } from 'react-router-dom'
import SubpageNavigation from '../../modules/subpage-navigation'
import '../../scss/subpage-navigation.scss'

const ServicesNav = () => {
  const params = useParams()
  const currentPage = params['*']
  const basePath = '/services/'
  const nav = [
    { title: 'All Services', path: '' },
    { title: 'Contract Purchase', path: 'contract-purchase' },
    { title: 'Lease Purchase or Hire Purchase', path: 'lease-purchasing' },
    { title: 'Straight Cash Purchase', path: 'straight-cash-purchase' },
    { title: 'Leasing', path: 'leasing' },
    { title: 'Contract Hire', path: 'contract-hire' },
    { title: 'Part Exchanges', path: 'part-exchange' },
    { title: 'Fair Wear and Tear Guide', path: 'wear-and-tear' }
  ]
  return (
    <SubpageNavigation navArray={nav} basePath={basePath} currentPage={currentPage} />
  )
}

export default ServicesNav
