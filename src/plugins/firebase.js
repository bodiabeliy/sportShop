import firebase from 'firebase/app'
import 'firebase/database'
// Firebase app config
const config = {
  apiKey: 'AIzaSyAQFGSpaKGm-jW0f7NSbTomlRC9KC4wsE0',
  authDomain: 'sportshop-4597c.firebaseapp.com',
  databaseURL: 'https://sportshop-4597c.firebaseio.com',
  projectId: 'sportshop-4597c',
  storageBucket: 'sportshop-4597c.appspot.com',
  messagingSenderId: '389859199965',
  appId: '1:389859199965:web:3fbf30800a931cfadd8434'
}

// Init our firebase app
const db = firebase.initializeApp(config)
export default db
