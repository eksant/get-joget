<template lang="html">
  <div class="content">
    <div class="container">
      <h1>ini player</h1>
      <div class="columns">
        <div class="column" v-for='player in players'>
          {{player.name.name}}
          <br>
          MOVES
          <br>
          SCORE : {{score}}
          <input type="text" name="" value="" v-model="moves">
          <br>
          <br>
          <div class="columns">
            <div class="column is-1 is-primary" v-for='move in moves' style="background-color:burlywood;border:aqua;border-style:solid">
              {{move}}
            </div>
          </div>
        </div>
      </div>
      <br><br><br><br>
      <div class="columns is-primary">
        <div class="column is-1 is-primary" v-for='arrow in globalArrow' style="background-color:burlywood;border:aqua;border-style:solid">
          {{arrow}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      players: [ { "id": "-L5y62AqIcDM0tBR_ZVW", "name": { "name": "sTobi" } }, { "id": "-L5y67VzilUo0ooFTQth", "name": { "name": "Lutfi" } }, { "id": "-L5y68ow_3C63y6bM_fQ", "name": { "name": "Eksa" } }, { "id": "-L5y6nwWcKQNlMxyjYsx", "name": { "password": "password", "username": "eksa" } } ],
      globalArrow: 'WASDASWSA',
      moves: '',
      score: 0
    }
  },
  methods: {
    firebaseConverter (snapshot) {
      let result = []
      for (let a in snapshot){
        let obj = {}
        obj.id = a
        obj.name = snapshot[a]
        result.push(obj)
      }
      this.players = result
    },
    getColor () {

    }
  },
  watch: {
    moves: function (newVal,oldVal){
      console.log(newVal.length);
      if (newVal[newVal.length-1] !== this.globalArrow[newVal.length-1]) {
        console.log(newVal.length-1);
        this.moves = ''
      }
      if (newVal === this.globalArrow) {
        this.moves = ''
        this.score += 10
      } else {
        console.log(newVal);
      }
    }
  }
  // computed: {
  //   checkArrow () {
  //     return this.globalArrow
  //   }
  // }
  // beforeCreate () {
  //   var users = this.$db.ref('users')
  //   let self = this
  //   users.on('value', function (snapshot) {
  //     let playerData = snapshot.val()
  //     self.firebaseConverter(playerData)
  //   })
  // }
}
</script>

<style lang="css">
</style>
