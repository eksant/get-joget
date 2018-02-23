<template>
  <div>
    <h2>Login</h2>
    <input type="text" v-model="form.email">
    <br>
    <input type="password" v-model="form.password">
    <br>
    <button @click="login()">Login</button>
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
      this.loginProcess(function (isLogin, token, user) {
        localStorage.setItem('token', token)
        console.log(token)
      })
    },
    loginProcess: function (callback) {
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
            email: people[idx].email
          }
          let token = jwt.sign(user, 'kmzway87aa')
          callback(true, token, user)
        } else {
          callback(false)
        }
      })
    }
  }
}
</script>
