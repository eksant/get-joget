<template>
  <div>
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey">Login</h3>
            <p class="subtitle has-text-grey">Please login to proceed.</p>
            <div class="box">
              <figure class="avatar">
                <img src="http://icons.veryicon.com/ico/System/Icons8%20Metro%20Style/Users%20User.ico">
              </figure>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Your Email" autofocus="" v-model="form.email">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Your Password" v-model="form.password">
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox"> Remember me
                </label>
              </div>
              <button class="button is-block is-info is-large is-fullwidth" @click="login">Login</button>
            </div>
            <p class="has-text-grey">
              <router-link to="/register">Register</router-link> &nbsp;·&nbsp;
              <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import jwt from "jsonwebtoken"

  export default {
    data() {
      return {
        form: {
          email: null,
          password: null
        },
        tableUser: this.$db.ref().child('users'),
      }
    },
    methods: {
      login: function () {
        self = this;
        this.loginProcess(function (isLogin, token, user) {
          localStorage.setItem('token', token)
          console.log(user)
          localStorage.setItem('id', user.id)
          localStorage.setItem('name', user.name)
          localStorage.setItem('email', user.email)
          localStorage.setItem('score', user.score)
          self.$db.ref(`users/${user.id}`).update({
            isLogin : true
          })
          if (token !== null) {
            self.$router.push({
              name: 'RoomGame'
            })
          }
        })
      },
      loginProcess: function (callback) {
        self = this
        let users = this.$db.ref('users')
        let form = this.form

        users.on('value', function (snapshot) {
          let people = []
          let data = snapshot.val()
          for (const id in data) {
            let obj = {}
            obj.id = id
            for (const field in data[id]) {
              obj[field] = data[id][field]
            }
            people.push(obj)
          }
          console.log(people)

          let idx = people.findIndex(function (element) {
            return (element.email == form.email && element.password == form.password)
          })
          if (idx !== -1) {
            let user = {
              id: people[idx].id,
              name: people[idx].name,
              email: people[idx].email,
              score: people[idx].score
            }
            let token = jwt.sign(user, 'kmzway87aa')
            self.$store.state.token = token
            self.$notify({
              type: 'success',
              text: 'Sign in success'
            })
            callback(true, token, user)
          } else {
            self.$notify({
              type: 'error',
              text: 'Username or password you entered wrong'
            })
            callback(false, null, null)
          }
        })
      }
    }
  }
</script>


<style scoped>
  img {
    width: 100px;
    margin-top: 1em;
    margin-bottom: 2em;
  }
</style>
