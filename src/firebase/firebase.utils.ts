import firebase from 'firebase/app'

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
export const signIgnWithGoogle = (): Promise<unknown> => auth.signInWithPopup(provider)

export default firebase