import Vue from 'vue'
import Vuex from 'vuex'
import db from './api/db';
const { Room , Player } = db;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        rooms : []
    },
    mutations: {
        setRooms( state , rooms ) {
            state.rooms = rooms;
        }
    },
    actions: {
        fetchRooms( context ) {
            Room.get().then((querySnapshot) => {
                const rooms = []
                querySnapshot.forEach((doc) => {
                    rooms.push( doc.id )
                    console.log( rooms )
                });
                context.commit('setRooms' , rooms )
            });
        }
    }
})
