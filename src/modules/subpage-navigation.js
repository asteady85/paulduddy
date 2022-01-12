import React from 'react'
import { Link } from 'react-router-dom'
import {HiMenu} from 'react-icons/all'

const SubPageNavigation = ({navArray, basePath, currentPage}) => {
  const [active, setActive] = React.useState(false)

  const openClass = (active) ? 'open' : 'closed'

  return (
    <nav className="subpage-nav">
      <div
        className='menu-toggle'
        onClick={() => setActive(!active)}
      >
        <HiMenu />
      </div>
      <ul className={openClass}>
        {
          navArray.map(({ path, title }) => {
            const isActive = (currentPage === path) ? 'active' : ''
            return (<li key={basePath+path} className={isActive}><Link to={basePath+path}>{title}</Link></li>)
          })
        }
      </ul>
    </nav>
  )
}

export default SubPageNavigation
