import Vue from 'vue'
import Vuex from 'vuex'
import db from './api/db';
const Player = db;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        players : [],
        playing: false
    },
    mutations: {
        setPlayers( state , players ) {
            state.players = players;
        }
    },
    actions: {
        fetchRooms( context ) {
            Player.get().then((querySnapshot) => {
                const players = []
                querySnapshot.forEach((doc) => {
                    const payload = {
                        id : doc.id,
                        ...doc.data()
                    }
                    players.push( payload )
                });
                context.commit('setPlayers' , players )
            });
        }
    }
})
