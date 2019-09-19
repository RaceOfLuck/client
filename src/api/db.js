import firebase from '../config/firebase'

let db = firebase.firestore();
const Player = db.collection('Players')
export default Player
