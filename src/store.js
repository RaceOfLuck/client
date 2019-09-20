import Vue from 'vue'
import Vuex from 'vuex'
import db from './api/db';
const Player = db;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        players: [
            // {
            //   username: 'igun',
            //   position: 1,
            //   trackColor: 'lightBlue',
            //   posColor: 'blue',
            //   icon: '🧑',
            // }, 
            // {
            //   username: 'cado',
            //   position: 1,
            //   trackColor: 'GreenYellow',
            //   posColor: 'Green',
            //   icon: '🧜‍♂️'
            // }
        ],
        playing: false,
        dice: {
            isRoll: false,
            result: 0
        }
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
