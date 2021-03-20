import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from 'pages/homepage/homepage.component'
import ShopPage from 'pages/shop/shop.component'

import Header from 'components/header/header.component'

import { auth } from './firebase/firebase.utils'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import './App.scss'

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<unknown>()

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return () => {
      unSubscribeFromAuth()
    }
  }, [])

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
