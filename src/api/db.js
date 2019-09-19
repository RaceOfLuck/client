import firebase from '../config/firebase'

let db = firebase.firestore();
const Player = db.collection('Players')
const Room = db.collection('Rooms')
export default {
    Player,
    Room
}