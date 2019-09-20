import Vue from 'vue'
import Vuex from 'vuex'

import room from './api/db'
import firebase from './config/firebase'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        username: '',
        roomId: '',
        room: null,
        rooms: [],
        isAdmin : false,

        dice: {
            isRoll: false,
            result: 0
        },
        players: [
            {
              username: 'igun',
              position: 1,
              trackColor: 'lightBlue',
              posColor: 'blue',
              icon: '🧑',
            }, 
            {
              username: 'cado',
              position: 1,
              trackColor: 'GreenYellow',
              posColor: 'Green',
              icon: '🧜‍♂️'
            }
        ],
    },
    mutations: {
        setRooms (state, rooms) {
            state.rooms = rooms
        },
        setRoomId (state, roomId) {
            state.roomId = roomId
        },
        setRoom (state, room) {
            state.room = room
        },
        setUsername (state, username) {
            state.username = username
        },
        setAdmin( state , stat ){
            state.isAdmin = stat
        }
    },
    actions: {
        fetchAllRoom (context) {
            room.onSnapshot(querySnapshot => {
                const rooms = []
                querySnapshot.forEach(doc => {
                    let data = {
                        id: doc.id,
                        ...doc.data()
                    }
                    rooms.push(data)
                })
                context.commit('setRooms', rooms)
            })
        },
        createRoom (context, payload) {
            room.orderBy('created').add({
                name: payload.roomName,
                players: [],
                playing: true
            })
            .then(function (docRef) {
                context.commit('setRoomId', docRef.id)
            })
            .catch(console.log)
        },
        joinRoom (context, roomId) {
            const player = {
                username: localStorage.getItem('username'),
                position: 0
            }
            room.doc(roomId).update({
                players: firebase.firestore.FieldValue.arrayUnion(player)
            })
            .then(() => {
                console.log('Join Success')
                context.dispatch('fetchRoom', roomId)
            })
            .catch(console.log)
        },
        fetchRoom ( context , roomId ) {
            if ( roomId ) {
                room.doc( roomId )
                .onSnapshot(doc => {
                    context.commit('setRoom',{ id : doc.id , ...doc.data()})
                })
            }
        }
    },
    created : function () {
        this.fetchAllRoom();
    }
})
