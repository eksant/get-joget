// import axios from 'axios'

const mutations = {
  getRooms () {
    this.state.rooms = [{
      name: 'What makes you beautiful',
      videoId: '4WD01RMtloI',
      link: 'https://www.youtube.com/embed/4WD01RMtloI'
    }, {
      name: 'Mundian To Bach Ke',
      videoId: 'CgrrLtD0Zq8',
      link: 'https://www.youtube.com/embed/CgrrLtD0Zq8'
    }, {
      name: 'Waka Waka',
      videoId: 'OobR681KUTo',
      link: 'https://www.youtube.com/embed/OobR681KUTo'
    }, {
      name: 'Turn Up The Love',
      videoId: 'LplwKWMipqA',
      link: 'https://www.youtube.com/embed/LplwKWMipqA'
    }, {
      name: 'The lion sleeps tonight',
      videoId: 'UD-MkihnOXg',
      link: 'https://www.youtube.com/embed/UD-MkihnOXg'
    }, {
      name: 'Pecaahh (Favorite)',
      videoId: 'dolKtbR828I',
      link: 'https://www.youtube.com/embed/dolKtbR828I'
    }]
  }
}

export default mutations
