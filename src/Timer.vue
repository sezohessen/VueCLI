<template>
  <div style="margin:20px;height:500px">
    <h1>Sezo Reaction Time</h1>
    <button @click="Start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
    <p v-if="showResults">Reaction Time:  {{ score }} ms</p>
  </div>
</template>

<script>
import Block from './components/Block.vue'
export default {
  name: 'Timer',
  components:{Block},
  data() {
    return {
      isPlaying:false,
      delay:null,
      score:null,
      showResults:false
    }
  },
  methods: {
    Start(){
      this.delay = 2000 + Math.random() * 5000//2~7
      this.isPlaying = true
      this.showResults = false
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  },
}
</script>

<style>
  #reaction_time {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>