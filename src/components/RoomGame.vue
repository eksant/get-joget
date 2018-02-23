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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Added choose room
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
<<<<<<< HEAD
=======

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
        </div>
      </div>
    </section>
>>>>>>> Added choose room

            <div class="dropdown is-large middle">
              <div class="dropdown-trigger">
                <button @click="playing" class="button is-success is-outlined" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Play</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
=======
    <div class="video-background">
      <div class="video-foreground">
        <youtube :video-id="videoId" @ready="ready" @playing="playing"></youtube>
      </div>
    </div>

    <!-- box player -->
    <section class="section content-game">
      <div class="columns is-mobile is-centered">
        <div class="column transparant">
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
                    <strong>Player #One</strong><br>
                    <small>Score</small><br>
                    <small>[A S D W D W]</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="column transparant">
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
                    <strong>Player #One</strong><br>
                    <small>Score</small><br>
                    <small>[A S D W D W]</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="column transparant">
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
                    <strong>Player #One</strong><br>
                    <small>Score</small><br>
                    <small>[A S D W D W]</small>
                  </p>
                </div>
>>>>>>> Added background video youtube
              </div>
            </div>

          </div>
        </div>
<<<<<<< HEAD
      </div>
    </section>

    <div class="video-background">
      <div class="video-foreground">
        <youtube :video-id="videoId" @ready="ready" @playing="playing"></youtube>
      </div>
    </div>

    <!-- box player -->
    <section class="section content-game">
      <div class="columns is-mobile is-centered">

        <div class="column transparant" v-for='player in players'>
=======
        <div class="column transparant">
>>>>>>> Added background video youtube
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
                      <input type="text" name="" value="" v-model="moves">
                      <div class="column is-1 is-primary" v-for='move in moves' style="background-color:burlywood;border:aqua;border-style:solid">
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
<<<<<<< HEAD
            {{globalArrow}}
=======

>>>>>>> Added background video youtube
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
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
<<<<<<< HEAD
.middle {
  padding-top: 30px;
}
=======
>>>>>>> Added background video youtube
=======
.middle {
  padding-top: 30px;
}
>>>>>>> Added choose room
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
