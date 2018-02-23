<template>
  <div>
    <h2>Register</h2>
    <input type="text" v-model="form.name">
    <br>
    <input type="text" v-model="form.email">
    <br>
    <input type="password" v-model="form.password">
    <br>
    <button @click="register()">Register</button>
  </div>
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
<<<<<<< HEAD
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
=======
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
>>>>>>> jwt, auth system, validation
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
<<<<<<< HEAD

=======
          
>>>>>>> jwt, auth system, validation
          if (self.validateEmail(self.form.email) == true) {
            if (idx == -1) {
              tableUser.push(self.form)
                .then(payload => {
                  console.log('register success')
<<<<<<< HEAD
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
=======

                  // this.$notify({
                  //   type: 'success',
                  //   text: 'Register success'
                  // })
                })
                .catch(error => {
                  console.log(error.message)
                  // this.$notify({
                  //   type: 'error',
                  //   text: 'An error occured'
                  // })
                })
            } else {
              console.log('Email you entered already exists')
              // this.$notify({
              //   type: 'error',
              //   text: 'Email you entered already exists'
              // })
            }
          } else {
            console.log('Email format you entered is wrong')
>>>>>>> jwt, auth system, validation
          }
        })
      }
    }
  }
</script>
