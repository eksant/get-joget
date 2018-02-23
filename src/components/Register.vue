<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please fill up the blanks.</p>
          <div class="box">
            <figure class="avatar">
              <img src="http://icons.veryicon.com/ico/System/Icons8%20Metro%20Style/Users%20User.ico">
            </figure>
            <div class="field">
              <div class="control">
                <input class="input is-large" type="name" placeholder="Your Name" autofocus="" v-model="form.name">
              </div>
            </div>
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
            <button class="button is-block is-info is-large is-fullwidth" @click="register()">Register</button>
          </div>
          <p class="has-text-grey">
            <router-link to="/signin">SignIn</router-link> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: null,
          email: null,
          password: null
        }
      }
    },
    methods: {
      validateEmail(email) {
        var re =
          '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
        return re.test(String(email).toLowerCase());
      },
      register() {
        let tableUser = this.$db.ref().child('users')
        let users = this.$db.ref('users')
        let form = this.form
        let people = []

        self = this

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

          let idx = people.findIndex(function (element) {
            return (element.email == form.email)
          })

          if (self.validateEmail(self.form.email) == true) {
            if (idx == -1) {
              tableUser.push(self.form)
                .then(payload => {
                  console.log('register success')
                  self.$notify({
                    type: 'success',
                    text: 'Register success'
                  })
                })
                .catch(error => {
                  console.log(error.message)
                  self.$notify({
                    type: 'error',
                    text: 'An error occured'
                  })
                })
            } else {
              console.log('Email you entered already exists')
              self.$notify({
                type: 'error',
                text: 'Email you entered already exists'
              })
            }
          } else {
            console.log('Email format you entered is wrong')
            self.$notify({
              type: 'error',
              text: 'Email format you entered is wrong'
            })
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