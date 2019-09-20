<template>
    <div>
        <div>
            <input type="text" v-model="newRoomName" placeholder="new room name">
            <button @click="createRoom()">Create Room</button>
        </div>
        <div class="row">
            <div v-for="room in this.$store.state.rooms" :key="room.id" class="col">
                <RoomCard :room='room'></RoomCard>
            </div>
        </div>

    </div>
</template>

<script>
import room from '../api/db'
import RoomCard from '../components/RoomCard'
export default {
    name: 'CreateRoom',
    data: function () {
        return {
            newRoomName: '',
            roomName: ''
        }
    },
    methods: {
        createRoom () {
            room.add({
                name : this.newRoomName,
                players: [],
                admin : localStorage.getItem('username'),
                created: new Date(),
                isPlaying : false
            })
            .then(doc => {
                console.log(doc.id)
                localStorage.setItem('isAdmin' , true )
            })
            .catch(console.log)
        }
    },
    components: {
        RoomCard
    }
}
</script>

<style>

</style>
