import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: 'AIzaSyA0HeCS3z9EdqRJfKQhFGbcGSGqmhZGUnc',
    authDomain: 'challenges-nico.firebaseapp.com',
    projectId: 'challenges-nico',
    storageBucket: 'challenges-nico.appspot.com',
    messagingSenderId: '556669074687',
    appId: '1:556669074687:web:7c5da520a04073490160ca'    
})

const auth = firebase.auth()
const providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

const db = firebase.firestore()

export { auth, providers, db }
export default firebase