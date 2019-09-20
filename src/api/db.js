import firebase from '../config/firebase'

let db = firebase.firestore();
const room = db.collection('room')
export default room