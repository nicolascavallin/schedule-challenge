import { useToast } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react'
import firebase, { db } from '../utils/firebase'

interface Props {
    children: React.ReactNode
}

const DatabaseContext = createContext( {} as Context ) 

const DatabaseProvider = ({ children }: Props) => {

    const [ reservations, setReservations ] = useState< any[] >( [] )

    const [ status, setStatus ] = useState( 'init' )

    const toast = useToast()

    useEffect(() => {

        db.collection( 'schedule' ).onSnapshot( docs => {

            setReservations( docs.docs.map( doc => doc.data() ) )
            setStatus( 'restored' )

        })
        
    }, [ ])

    const onMakeReservation = ( id: string, userId: string ) => {

        db.collection( 'schedule' ).doc( id ).update({
            reservedBy: firebase.firestore.FieldValue.arrayUnion( userId )
        }).then( (_) => {
            toast({
                description: 'Has reservado un motociclista.',
                status: 'success',
                position: 'top-right'
            })
        }).catch( (_) => {
            toast({
                description: 'Se produjo un error y no se realizó la reserva.',
                status: 'error',
                position: 'top-right'
            })
        })

    }

    const onCancelReservation = ( id: string, userId: string ) => {

        db.collection( 'schedule' ).doc( id ).update({
            reservedBy: firebase.firestore.FieldValue.arrayRemove( userId )
        }).then( (_) => {
            toast({
                description: 'Has cancelado la reserva.',
                status: 'success',
                position: 'top-right'
            })
        }).catch( (_) => {
            toast({
                description: 'Se produjo un error y no se canceló la reserva.',
                status: 'error',
                position: 'top-right'
            })
        })        

    }

    const actions = { onMakeReservation, onCancelReservation }

    const state = { status, reservations }

    return (
        <DatabaseContext.Provider value={{ actions, state }}>
            { children }
        </DatabaseContext.Provider>
    )
}

export { DatabaseProvider }
export default DatabaseContext


/* --------- INTERFACES --------- */

interface Context {

    state: State
    actions: Actions

}

interface State {
    
    status: string,
    reservations: any[]
    
}

interface Actions {
    onMakeReservation: ( id: string, userId: string ) => void
    onCancelReservation: ( id: string, userId: string ) => void
}