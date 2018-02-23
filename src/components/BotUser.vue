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
        </div>
<<<<<<< HEAD
        <button @click="logout" class="button is-danger">Logout</button>
=======
>>>>>>> coba merge
      </div>
    </section>

    <div class="video-background">
      <div class="video-foreground">
        <iframe src="https://www.youtube.com/embed/4WD01RMtloI?controls=0&showinfo=0&rel=0&autoplay=0&loop=0&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
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

      <!-- arrow game -->
      <div class="column is-half is-offset-one-quarter">
        <div class="box transparant">
           <input type="text" name="" value="" v-model="moves">
        </div>
      </div>



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
<script>
export default {
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
    update () {
      this.$db.ref("users/-L6-ull_4RXqh0sUJ9vB").update({
          score: 50
      });
    },
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
    }
  },
  watch: {
    moves: function(newVal,oldVal) {
      if (newVal[newVal.length-1] !== this.globalArrow[newVal.length-1]) {
        console.log(newVal.length-1);
        this.moves = ''
      }
      if (newVal === this.globalArrow) {
        this.moves = ''
        this.$db.ref("users/-L6-ull_4RXqh0sUJ9vB").update({
            score: 70
        });
      } else {
        console.log(newVal);
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
   // this.create()
   // this.remove('-L6-oiD-gpWadM3_IF56')
   // this.update()
   // users.set({
   //   email: 'tobi@gmail.com',
   //   name: 'Lalala',
   //   scofe: {}
   // })
  }
}
</script>

<style>
.transparant {
  /* background: rgba(76, 175, 80, 0.8); */
  opacity: 0.7;
  filter: alpha(opacity=70);
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
