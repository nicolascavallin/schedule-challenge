import firebase, { auth, providers } from './firebase'

const authApi = {
    signIn: () => auth.signInWithPopup( providers.google ),
    signOut: () => auth.signOut(),
    onChange: ( callback: ( user: firebase.User | null ) => void ) => auth.onAuthStateChanged( callback ),
}

export default authApi