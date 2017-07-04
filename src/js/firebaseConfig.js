import firebase from 'firebase'
import firebaseui from 'firebaseui'

const config = {
  apiKey: 'AIzaSyCnHwJKU4veg6cxZgbOR6jXhT_EoZUDays',
  authDomain: 'osiris-ee264.firebaseapp.com',
  databaseURL: 'https://osiris-ee264.firebaseio.com',
  projectId: 'osiris-ee264',
  storageBucket: 'osiris-ee264.appspot.com',
  messagingSenderId: '1006426027892'
}
export const fb = firebase.initializeApp(config)
export const db = fb.database()
export const fbUI = new firebaseui.auth.AuthUI(firebase.auth(fb))
