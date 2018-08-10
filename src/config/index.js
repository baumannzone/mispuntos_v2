import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import settings from './settings'

const firebaseApp = firebase.initializeApp( settings )
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db, auth }
