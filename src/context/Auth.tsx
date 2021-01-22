import React, { createContext, useEffect, useState } from 'react'
import LoginScreen from '../LoginScreen'
import authApi from '../utils/authApi'
import firebase from '../utils/firebase'

interface Props {
    children: React.ReactNode
}

const AuthContext = createContext( {} as Context )

const AuthProvider = ({ children }: Props) => {

    const [ user, setUser ] = useState<firebase.User | null>( null )
    const [ status, setStatus ] = useState( 'init' )
    
    useEffect(() => {

        authApi.onChange( user => {

            setStatus( 'restored' )
            setUser( user )
            // console.log( user )

        })
        
    }, [])

    if ( !user ) return <LoginScreen signIn={ authApi.signIn } status={ status } />

    const state = { user }
    const actions = { signOut: authApi.signOut }

    return (
        <AuthContext.Provider value={{ state, actions }}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext

/* --------- INTERFACES --------- */

interface Context {

    state: State
    actions: Actions

}

interface State {
    user: firebase.User | null
}

interface Actions {
    signOut: () => Promise<void>
}