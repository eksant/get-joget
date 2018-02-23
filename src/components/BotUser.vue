<template>
  <section class="hero">
    <!-- header -->
    <section class="hero is-small is-primary is-bold">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-narrow">
            <img src="../assets/logo.png" alt="Logo Get Joget" style="width:82px;height:82px;">
          </div>
          <div class="column">
            <img src="../assets/get-joget.png" alt="Logo Get Joget" style="height:96px;">
          </div>
<<<<<<< HEAD
=======
          <div class="column is-one-quarter">

            <div class="dropdown is-hoverable is-large middle">
              <div class="dropdown-trigger">
                <button class="button is-primary is-inverted is-outlined" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <span>Choose Room</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item" v-for="room in rooms" :key="room.name">
                    <a v-on:click.stop="change(room.videoId)" class="dropdown-item">{{room.name}}</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="dropdown is-large middle">
              <div class="dropdown-trigger">
                <button @click="playing" class="button is-success is-outlined" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Play</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>

          </div>
>>>>>>> before merge bikin bot user
        </div>
      </div>
    </section>

    <div class="video-background">
      <div class="video-foreground">
<<<<<<< HEAD
        <iframe src="https://www.youtube.com/embed/4WD01RMtloI?controls=0&showinfo=0&rel=0&autoplay=0&loop=0&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
=======
        <youtube :video-id="videoId" @ready="ready" @playing="playing"></youtube>
>>>>>>> before merge bikin bot user
      </div>
    </div>

    <!-- box player -->
    <section class="section content-game">
      <div class="columns is-mobile is-centered">
        <div class="column transparant" v-for='player in players'>
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Player">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{player.player.name}}</strong><br>
                    <small>Score :</small> {{player.player.score}}<br>
                    <small>
                      <input type="text" name="" value="" v-model="player.player.moves">
                      <div class="column is-1 is-primary" v-for='move in player.player.moves' style="background-color:burlywood;border:aqua;border-style:solid">
                        {{move}}
                      </div>

                    </small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- arrow game -->
      <div class="columns is-mobile arrow-game">
        <div class="column is-half is-offset-one-quarter">
          <div class="box transparant">
            {{globalArrow}}
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<<<<<<< HEAD
<script>
export default {
=======

<script>
export default {
<<<<<<< HEAD
  data () {
    return {
      videoId: '4WD01RMtloI'
    }
  },
  methods: {
    ready (player) {
      this.player = player
    },
    playing () {
      this.player.playVideo()
    },
    change (el) {
      this.videoId = el
    },
    stop () {
      this.player.stopVideo()
    },
    pause () {
      this.player.pauseVideo()
    },
    chooseRoom: function (selectRoom) {
      this.room = selectRoom
    }
  },
  computed: {
    rooms: {
      get () {
        return this.$store.state.rooms
      }
    }
=======
>>>>>>> before merge bikin bot user
  data: function () {
    return {
      players: '',
      globalArrow: 'WASDASWSA',
      moves: '',
      score: 0
    }
  },
  methods: {
    checkIsLogin(dataPlayer) {
      // console.log('INI CEK',dataPlayer);
      let loginPlayer = dataPlayer.filter(e => {
        return e.player.isLogin == true
      })

      // this.players = loginPlayer
      this.players = loginPlayer.splice(0,4)
      // console.log(data);
    },
    firebaseConverter (snapshot) {
      let result = []
      for (let a in snapshot){
        let obj = {}
        obj.id = a
        obj.player = snapshot[a]
        result.push(obj)
      }
      this.checkIsLogin(result)
    },
    create () {
      // this.$db.ref("users").push({
      //     email: 'eko@com',
      //     password: '1123',
      //     name: 'Eko',
      //     score: 0
      // });
    },
    update () {
      this.$db.ref("users/-L6-ull_4RXqh0sUJ9vB").update({
          score: 50
      });
    },
    remove (key) {
      this.$db.ref("users").child(key).remove();
    }
  },

  // watch: {
  //   players: [
  //       function handle1 (val, oldVal) { /* ... */ },
  //       function handle2 (val, oldVal) { /* ... */ }
  //     ],
  //
  //     'players.moves': function (val) {
  //       console.log(val);
  //     },
  //     deep: true
  //
  //   // {
  //   //   handler: function (newVal,oldVal){
  //   //     console.log(newVal.length);
  //   //     if (newVal[newVal.length-1] !== this.globalArrow[newVal.length-1]) {
  //   //       console.log(newVal.length-1);
  //   //       this.moves = ''
  //   //     }
  //   //     if (newVal === this.globalArrow) {
  //   //       this.moves = ''
  //   //       this.score += 10
  //   //     } else {
  //   //       console.log(newVal);
  //   //     }
  //   //   },
  //   //   deep: true
  //   // }
  // },
  watch: {
    players: {
      handler: function (newVal,oldVal){

          this.$db.ref("users").on("child_added", function (snapshot) {
            console.log(snapshot.val());
            // this.$db.ref("users").remove()
            // this.$db.ref("users").push(snapshot.val())
          })

        // console.log(result);
        // if (newVal[newVal.length-1] !== this.globalArrow[newVal.length-1]) {
        //   console.log(newVal.length-1);
        //   this.moves = ''
        // }
        // if (newVal === this.globalArrow) {
        //   this.moves = ''
        //   this.score += 10
        // } else {
        //   console.log(newVal);
        // }
      },
      deep: true
    }
  },


  created: function () {
  var users = this.$db.ref('users')
   let self = this
   users.on('value', function (snapshot) {
     let playerData = snapshot.val()
     self.firebaseConverter(playerData)
     console.log(snapshot.val());
   })
   // this.create()
   // this.remove('-L6-oiD-gpWadM3_IF56')
   this.update()
   // users.set({
   //   email: 'tobi@gmail.com',
   //   name: 'Lalala',
   //   scofe: {}
   // })
<<<<<<< HEAD
=======
>>>>>>> merge done
>>>>>>> before merge bikin bot user
  }
}
</script>

<style>
.transparant {
  /* background: rgba(76, 175, 80, 0.8); */
  opacity: 0.7;
  filter: alpha(opacity=70);
}
<<<<<<< HEAD
=======
.middle {
  padding-top: 30px;
}
>>>>>>> before merge bikin bot user
.content-game {
  position: relative;
  height: 500px;
}

.arrow-game {
  position: absolute;
  width: 100%;
  bottom: 50px;
}

* { box-sizing: border-box; }
.video-background {
  background: #000;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -99;
}
.video-foreground,
.video-background iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
