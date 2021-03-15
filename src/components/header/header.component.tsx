import * as React from 'react'
import { Link } from 'react-router-dom'

import Logo from './../logo/logo.component'

import './header.styles.scss'

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Header
