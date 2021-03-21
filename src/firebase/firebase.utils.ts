import firebase from 'firebase/app'
import { FirebaseUser } from 'types/user-types'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBtU0prP6Ic60Hxw9A2idVCbBQpZU7VQKM',
  authDomain: 'eshop-46aff.firebaseapp.com',
  projectId: 'eshop-46aff',
  storageBucket: 'eshop-46aff.appspot.com',
  messagingSenderId: '735796630177',
  appId: '1:735796630177:web:d81663509832e317dcd6e0',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signIgnWithGoogle = (): Promise<unknown> =>
  auth.signInWithPopup(provider)

export const createUserProfileDocument = async (
  userAuth: FirebaseUser,
  additionalData?: Record<string, unknown>,
): Promise<
  | firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
  | undefined
> => {
  if (!userAuth) return
  console.log(additionalData)
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      const user = {
        displayName,
        email,
        createdAt,
        ...additionalData,
      }
      await userRef.set(user)
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }
  return userRef
}

export default firebase
