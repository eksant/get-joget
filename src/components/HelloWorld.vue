<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="form.username">
    <input type="text" v-model="form.password">
    <button type="button" @click="sendName">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      datas: [],
      msg: 'Welcome to Your Vue.js App with Firebase',
      tableUser: this.$db.ref().child('users'),
      form: {
        name: null
      }
    }
  },
  beforeCreate () {
    var users = this.$db.ref('users')
    users.on('value', function (snapshot) {
      console.log(snapshot.val())
      // this.datas.push(snapshot.val())
      // this.datas.push(snapshot.val())
    })
  },
  methods: {
    sendName () {
      this.tableUser.push(this.form)
    }
  }
}
</script>
