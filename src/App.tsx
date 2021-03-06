import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from 'pages/homepage/homepage.component'
import ShopPage from 'pages/shop/shop.component'
import { FirebaseUser } from 'types/user-types'

import Header from 'components/header/header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import './App.scss'

// type CurrentUserType = FirebaseUser | null

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<unknown>()

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth as FirebaseUser)
        userRef?.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }

    })

    return () => {
      unSubscribeFromAuth()
    }
  }, [])

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

  return (
    <div className="App">
      <Header currentUser={currentUser as FirebaseUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
