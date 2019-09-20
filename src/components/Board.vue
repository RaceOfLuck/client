<template>
    <div>
        <div>Roll Count left : {{ diceCount }}</div>
        <div>Roll Result : {{ result }}</div>
            <br><br>
        <form>
            <div>
                <div id = "one">
                    <img src='https://66.media.tumblr.com/4487da1524b8d90e0007c5da72fc49e7/tumblr_puhatt8Lzf1s8erfco3_100.png'>
                </div>
            </div>
            <!-- <div id = "two"><img src='https://66.media.tumblr.com/fd6e3e52de325f1f2023e320a1ff8191/tumblr_puhatt8Lzf1s8erfco4_100.png'></div></div> -->
            <input type="number" min="0" v-model="numberOfRolls">
            <button @click.prevent="roll()">Roll</button>
        </form>
    </div>
</template>

<script>
export default {
    name : "Board",
    data : function () {
        return {
            diceCount : 0,
            numberOfRolls : 0,
            result : 0,
            myVar : null
        }
    },
    methods: {
        roll() {
            console.log('rolling')
            const numberOfRolls = this.numberOfRolls
            this.rollDice( numberOfRolls )
        },
        rollDice(numberOfRolls) {      
            this.$store.state.dice.isRoll = true;

            var diceThrow = Math.floor((Math.random() * 6) + 1);

            const dicePics1 = [
                "<img src='https://66.media.tumblr.com/5240dc2418bbd8cadafc6a238e84f51d/tumblr_puhatt8Lzf1s8erfco2_100.png'>",
                "<img src='https://66.media.tumblr.com/a9e433dace9d745dbd7c157ddacdf6f3/tumblr_puhatt8Lzf1s8erfco1_100.png'>",
                "<img src='https://66.media.tumblr.com/4487da1524b8d90e0007c5da72fc49e7/tumblr_puhatt8Lzf1s8erfco3_100.png'>",
                "<img src='https://66.media.tumblr.com/fd6e3e52de325f1f2023e320a1ff8191/tumblr_puhatt8Lzf1s8erfco4_100.png'>",
                "<img src='https://66.media.tumblr.com/1baf8a8bffc14a37b2ceda91d7ba495c/tumblr_puhatt8Lzf1s8erfco5_100.png'>",
                "<img src='https://66.media.tumblr.com/ee1eeff4acbec1af9223c76df28dae8a/tumblr_puhatt8Lzf1s8erfco6_100.png'>"
            ]
            let randomDice = Math.floor(Math.random() * dicePics1.length)
            one.innerHTML = dicePics1[randomDice];

            this.diceCount = numberOfRolls

            this.result = randomDice + 1
            --numberOfRolls;
            // Check if there is a throw left...
            if (numberOfRolls < 0) {
                setTimeout(() => {
                    this.$store.state.dice.isRoll = false;
                    this.$store.state.dice.result = this.result;
                    this.numberOfRolls = 0;
                }, 1000);
                return;
            }

            setTimeout(() => {
                this.rollDice(numberOfRolls);
            }, 1000);
        }
    }
}
</script>

<style scoped>
body {
    background-color:  black;
    color: white;
    text-align: center;
}
h2 {
    font-family: 'Raleway', sans-serif;

}
#one {
    height: 100px;
    width: 100px;
    
  display: inline-block;
  }
 #two {
    height: 100px;
    width: 100px;
    
      display: inline-block;
 }

 button {
     border: 2px solid white;
     font-size: 27px;
 }
</style>