<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handleClick"> Click Me</button>
  <hr>
  <Modal :header="header" text="This is dark theme" :age="age" theme="Dark"/>
  <hr>
  <Modal :header="header" text="This div not using theme" :age="age" />
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
/* 
  Props Make Component More Resuable and Dynmaic
  Each time you use the modal you can pass different content 
  into it as  <<Prop>>  from it's parent component
*/
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components:{Modal},
  data() {
    return {
      title:'Welcome Sezo',
      header:'Hello From Root',
      age:23
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
