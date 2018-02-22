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
      </div>
    </section>

    <!-- box player -->
    <section class="section content-game">
      <div class="columns is-mobile is-centered">
        <div class="column">
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
        <div class="column">
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
        <div class="column">
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
        <div class="column">
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
      </div>

      <!-- arrow game -->
      <div class="columns is-mobile arrow-game">
        <div class="column is-half is-offset-one-quarter">
          <div class="box">
            
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
}
</script>

<style>
.content-game {
  position: relative;
  height: 600px;
}

.arrow-game {
  position: absolute;
  width: 100%;
  bottom: 10px;
}
</style>
