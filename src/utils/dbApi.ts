import firebase, { db } from './firebase'

const dbApi = {
    makeReservation: ( userId: string, time: string ) => db.collection( 'schedule' ).doc( time ).update({ reservedBy: firebase.firestore.FieldValue.arrayUnion( userId ) }),
    cancelReservation: ( userId: string, time: string ) => db.collection( 'schedule' ).doc( time ).update({ reservedBy: firebase.firestore.FieldValue.arrayRemove( userId ) }),
}

export default dbApi