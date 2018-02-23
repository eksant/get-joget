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
          <div class="column is-one-quarter">

            <div class="dropdown is-hoverable is-large middle">
              <div class="dropdown-trigger">
                <button class="button is-primary is-inverted is-outlined" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <span>Choose Room</span>
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
                </button>
              </div>
            </div>

          </div>
        </div>
<<<<<<< HEAD
        <button @click="logout" class="button is-danger">Logout</button>
=======
>>>>>>> coba merge
      </div>
    </section>

    <div class="video-background">
      <div class="video-foreground">
        <!-- <iframe src="https://www.youtube.com/embed/4WD01RMtloI?controls=0&showinfo=0&rel=0&autoplay=0&loop=0&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe> -->
        <youtube :video-id="videoId" @ready="ready" @playing="playing"></youtube>
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
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>


      <div class="columns is-mobile arrow-game">
        <div class="column is-half is-offset-one-quarter">
          <div class="box transparant">
              <input autofocus type="text" name="" style="text-align:center" class="input" value="" @keyup="tes" v-model="keyArrow">
              <br><br>
              <div v-bind:class="{borderFalse: falseArrow}" class="arrow">
                <div v-for="(number, index) in globalArrow" :key="index" class="puff-in-center" >
                  <i v-if="number.num === leftCode" class="fa fa-arrow-circle-left" v-bind:style="{color: number.color}"></i>
                  <i v-else-if="number.num === upCode" class="fa fa-arrow-circle-up" v-bind:style="{color:  number.color}"></i>
                  <i v-else-if="number.num === rightCode" class="fa fa-arrow-circle-right" v-bind:style="{color:  number.color}"></i>
                  <i v-else-if="number.num === downCode" class="fa fa-arrow-circle-down" v-bind:style="{color:  number.color}"></i>
                </div>
              </div>

            <!-- </div> -->
          </div>
        </div>
      </div>

    </section>
  </section>
</template>
<script>
export default {
  data: function () {
    return {
      resultKeyArrow: '',
      players: '',
      globalArrow: '',
    keyArrow: '',
    leftCode: 65,
    upCode: 87,
    rightCode: 68,
    downCode: 83,
    userInput: 0,
    reset: [],
    obj: '',
    good: false,
    falseArrow: false,
      score: 0,
      videoId: '4WD01RMtloI'
    }
  },
  methods: {
    generate () {
      this.array = []
      this.keyArrow = ''
      this.userInput = 0
      const items = [this.leftCode, this.upCode, this.rightCode, this.downCode]
      for (var i = 0; i < 6; i++) {
        this.obj = {
          num: items[Math.floor(Math.random() * items.length)],
          color: 'black'
        }
        this.array.push(this.obj)
      }
      this.globalArrow = this.array
    },
    tes (event) {
      this.falseArrow = false
      if (this.globalArrow[this.userInput].num === event.keyCode) {
        this.globalArrow[this.userInput].color = '#00ff00'
        this.userInput++
        let idx = this.globalArrow.findIndex((data) => {
          return data.color === 'black'
        })
        if (idx === -1) {
          this.good = true
          this.userInput = 0
          this.keyArrow = ''
          this.generate()
        }
      } else {
        this.falseArrow = true
        this.globalArrow[this.userInput].color = 'red'
        for (var i = 0; i < this.userInput; i++) {
          this.globalArrow[i].color = 'black'
        }
        this.userInput = 0
        this.keyArrow = ''
        this.resultKeyArrow = ''
      }
    },
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
<<<<<<< HEAD
    remove (key) {
      this.$db.ref("users").child(key).remove();
<<<<<<< HEAD
    },
    logout(){
      let userId = localStorage.getItem('id')
      this.$db.ref(`users/${userId}`).update({
        isLogin : false
      })
      localStorage.clear()
      this.$notify({
        type: 'success',
        text: 'Log out success'
      })
      this.$router.push({name: 'SignIn'})
=======
>>>>>>> coba merge
=======
    chooseRoom: function (selectRoom) {
      this.room = selectRoom
>>>>>>> wait to get local storage
    }
  },
  watch: {
    keyArrow: function(newVal,oldVal) {
      if (newVal[newVal.length-1] !== this.globalArrow[newVal.length-1]) {
        this.keyArrow = ''
      }
      this.resultKeyArrow += newVal
      if (this.resultKeyArrow.length === this.globalArrow.length) {
        // let score = localStorage.getItem('score') + 10
        // localStorage.SetItem('score', score)
        this.keyArrow = ''
        this.$db.ref("users/-L6-ull_4RXqh0sUJ9vB").update({
            score: 200
        });
      } else {
        console.log(newVal);
      }
    }
  },
  computed: {
    rooms: {
      get () {
        return this.$store.state.rooms
      }
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
   this.generate()
  }
}
</script>

<style>
.puff-in-center {
  -webkit-animation: puff-in-center 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  animation: puff-in-center 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  }
  @-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(2px);
            filter: blur(2px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  }
  @keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(2px);
            filter: blur(2px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  }
  .fa {
    transition: 0.3s;
    border: 0px;
    font-size: 50px;
    -webkit-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    -moz-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    padding: 10%;
  }
  .arrow {
    display: inline-flex;
    padding: 0.5% 0.5%;
    background-color: azure;
  }
  .borderFalse {
    border: 1px solid black;
    border-color: red;
  }

.transparant {
  /* background: rgba(76, 175, 80, 0.8); */
  opacity: 0.8;
  filter: alpha(opacity=80);
}
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
