import Vue from 'vue'
import axios from 'axios'
import Notif from 'vue-notification'
import VueYouTubeEmbed from 'vue-youtube-embed'
import App from './App'
import router from './router'
import store from './vuex/index'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

var firebase = require('firebase')
var config = {
  apiKey: 'AIzaSyAZDct8zsXkFEYkt6LtxTHNHVllK_ap_1A',
  authDomain: 'learning-5708d.firebaseapp.com',
  databaseURL: 'https://learning-5708d.firebaseio.com',
  projectId: 'learning-5708d',
  storageBucket: 'learning-5708d.appspot.com',
  messagingSenderId: '303656755232'
}
firebase.initializeApp(config)

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(router)
Vue.use(Notif)
Vue.use(VueYouTubeEmbed)
Vue.prototype.$db = firebase.database()
Vue.prototype.$axios = axios.create({
  // baseURL: 'http://localhost:3000/api'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
