<template>
  <div class="block" v-if="showBlock">
      Click Me
  </div>
</template>

<script>
export default {
    props:['delay'],
    data() {
        return {
            showBlock:false,
        }
    },
    /* Vue Life Cycle Hooks */
    mounted() {
        console.log('Component Mounted')
        setTimeout(()=>{
            this.showBlock = true
            console.log(this.delay)
        },this.delay)
    },
    updated() {
        console.log('Component updated')
    },
    unmounted() {/* When using vue routing from page to page, the component will unmounted when we navigate from page */
        console.log('Component unmounted')
    },
}
</script>

<style>
.block{
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>