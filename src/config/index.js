import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import settings from './settings'

const firebaseApp = firebase.initializeApp( settings, { timestampsInSnapshots: true } )
const auth = firebaseApp.auth()
const db = firebaseApp.firestore()
db.settings( { timestampsInSnapshots: true } )

export { db, auth }
