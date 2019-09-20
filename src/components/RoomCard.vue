<template>
    <div class="card mt-3">
        <div>Room Name : {{ room.name }} </div>
        <button @click.prevent="joinRoom(`${ room.id }`)">Join room</button>
    </div>
</template>

<script>
export default {
    name: 'RoomCard',
    data: function () {
        return {

        }
    },
    props: ['room'],
    methods: {
        joinRoom (roomId) {
            this.$store.dispatch('joinRoom', roomId)
            // this.$store.dispatch('fetchRoom')
            this.$router.push('/userRoom').catch(_ => {})
        }
    }

}
</script>

<style scoped>
</style>
