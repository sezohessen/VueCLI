<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handleClick"> Click Me</button>
  <hr>
  <button @click="ToggleModal">Open Modal</button>

  <p><button @click.right="ToggleModal">Open Modal (right click)</button></p>
    <Modal :header="header" text="This is dark theme" :age="age" theme="Dark" :ShowModal="ShowModal" @close="ToggleModal">
      <template v-slot:links><!-- Specific structure for the component -->
        <ul>
          <li><a href="#">Sign up</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">More Info</a></li>
        </ul>
      </template>
      <h1>Welcome Hussien This is Vue3 Tutorial</h1><!-- Default Content slot -->
      <p>I hope you are doing great :) </p>
    </Modal>
  <hr>
  <teleport to='.modals' >
    <Modal :header="header" text="This div not using theme, (USing teleport)" :age="age" />
  </teleport>
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
      ShowModal:false,
      age:23
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
    },
    ToggleModal(){
      this.ShowModal =!this.ShowModal
    }
  },
}
</script>

<style>
#app,.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
