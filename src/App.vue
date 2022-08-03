<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handleClick"> Click Me</button>
  <Modal/>
  <Modal/>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
/* Props Make Component More Resuable */
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components:{Modal},
  data() {
    return {
      title:'Welcome Sezo'
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
