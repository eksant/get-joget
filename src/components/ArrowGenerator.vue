<template lang="html">
  <div class="">
    <button type="button" name="button" @click="generate">Generate Arrow</button>
    <input type="text" name="" value="" @keyup="tes" v-model="keyArrow">
    <br><br>
    <div class="arrow puff-in-center" v-for="(number, index) in numbers" :key="index">
      <i v-if="number === 1" class="fa fa-arrow-circle-left" style="font-size:35px;" v-bind:value="leftCode" :style="{color: leftColor}"></i>
      <i v-else-if="number === 2" class="fa fa-arrow-circle-up" style="font-size:35px;" v-bind:style="{color: upColor}"></i>
      <i v-else-if="number === 3" class="fa fa-arrow-circle-right" style="font-size:35px;" v-bind:style="{color: rightColor}"></i>
      <i v-else-if="number === 4" class="fa fa-arrow-circle-down" style="font-size:35px;" v-bind:style="{color: downColor}"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      array: [],
      numbers: '',
      keyArrow: '',
      leftCode: 65,
      upCode: 87,
      righCode: 68,
      downCode: 83,
      leftColor: '',
      upColor: '',
      rightColor: '',
      downColor: ''
    }
  },
  methods: {
    generate (event) {
      this.array = []
      this.leftColor = ''
      this.upColor = ''
      this.rightColor = ''
      this.downColor = ''
      this.keyArrow = ''

      for (var i = 0; i < 6; i++) {
        this.array.push(Math.floor(Math.random() * 4) + 1)
      }
      this.numbers = this.array
    },
    tes (event) {
      for (var i = 0; i < this.numbers.length; i++) {
        if (this.numbers[i] === 1) {
          if (event.keyCode === this.leftCode) {
            this.leftColor = 'lightgreen'
          }
        } else if (this.numbers[i] === 2) {
          if (event.keyCode === this.upCode) {
            this.upColor = 'lightgreen'
          }
        } else if (this.numbers[i] === 3) {
          if (event.keyCode === this.righCode) {
            this.rightColor = 'lightgreen'
          }
        } else if (this.numbers[i] === 4) {
          if (event.keyCode === this.downCode) {
            this.downColor = 'lightgreen'
          }
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>

.puff-in-center {
  -webkit-animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  }

  @-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(2px);
            filter: blur(2px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  }
  @keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(2px);
            filter: blur(2px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  }

  .fa {
    transition: 0.5s;
    border: 0px;
    -webkit-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    -moz-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
  }

  .arrow {
    display: inline-flex;
    padding: 0.5% 1%;
    color: white;
    background-color: rgba(0,0,0, 0.5);
  }
</style>
