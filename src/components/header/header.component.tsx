import * as React from 'react'
import { Link } from 'react-router-dom'
import { FirebaseUser } from 'types/user-types'

import { auth } from './../../firebase/firebase.utils'
import Logo from './../logo/logo.component'

import './header.styles.scss'

type HeaderProps = {
  currentUser: FirebaseUser
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const handleSignOut = () => auth.signOut()
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
        {currentUser ? (
          <div className="option" onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="sign-in">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
