<template lang="html">
  <div class="tes">
    <button type="button" name="button" @click="generate">Generate Arrow</button>
    <input type="text" name="" value="" @keyup="tes" v-model="keyArrow">
    <br><br>
    <div v-bind:class="{borderFalse: falseArrow}" class="arrow">
      <div v-for="(number, index) in numbers" :key="index" class="puff-in-center">
        <i v-if="number.num === leftCode" class="fa fa-arrow-circle-left" v-bind:style="{color: number.color}"></i>
        <i v-else-if="number.num === upCode" class="fa fa-arrow-circle-up" v-bind:style="{color:  number.color}"></i>
        <i v-else-if="number.num === rightCode" class="fa fa-arrow-circle-right" v-bind:style="{color:  number.color}"></i>
        <i v-else-if="number.num === downCode" class="fa fa-arrow-circle-down" v-bind:style="{color:  number.color}"></i>
      </div>
      <span v-show="good">Nice !</span>
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
      rightCode: 68,
      downCode: 83,
      userInput: 0,
      reset: [],
      obj: '',
      good: false,
      falseArrow: false
    }
  },
  methods: {
    generate () {
      this.array = []
      this.keyArrow = ''
      this.userInput = 0

      const items = [this.leftCode, this.upCode, this.rightCode, this.downCode]
      for (var i = 0; i < 6; i++) {
        this.obj = {
          num: items[Math.floor(Math.random() * items.length)],
          color: 'black'
        }
        this.array.push(this.obj)
      }
      this.numbers = this.array
    },
    tes (event) {
      this.falseArrow = false
      if (this.numbers[this.userInput].num === event.keyCode) {
        this.numbers[this.userInput].color = 'lightgreen'
        this.userInput++
        let idx = this.numbers.findIndex((data) => {
          return data.color === 'black'
        })
        if (idx === -1) {
          this.good = true
          this.userInput = 0
          this.keyArrow = ''
          this.generate()
        }
      } else {
        this.falseArrow = true
        this.numbers[this.userInput].color = 'red'
        for (var i = 0; i < this.userInput; i++) {
          this.numbers[i].color = 'black'
        }
        this.userInput = 0
        this.keyArrow = ''
      }
    }
  }
}
</script>

<style lang="css" scoped>

.puff-in-center {
  -webkit-animation: puff-in-center 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  animation: puff-in-center 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
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
    transition: 0.3s;
    border: 0px;
    font-size: 50px;
    -webkit-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    -moz-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    padding: 10%;
  }

  .arrow {
    display: inline-flex;
    padding: 0.5% 0.5%;
    background-color: azure;
  }

  .borderFalse {
    border: 1px solid black;
    border-color: red;
  }
</style>
