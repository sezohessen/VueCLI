<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      Click Me
  </div>
</template>

<script>
export default {
    props:['delay'],
    data() {
        return {
            showBlock:false,
            timer:null,
            reactionTime:0
        }
    },
    /* Vue Life Cycle Hooks */
    mounted() {
        console.log('Component Mounted')
        setTimeout(()=>{
            this.showBlock = true
            console.log(this.delay)
        },this.delay)//Wait until delay
    },
    updated() {
        console.log('Component updated')
    },
    unmounted() {/* When using vue routing from page to page, the component will unmounted when we navigate from page */
        console.log('Component unmounted')
    },
    methods: {
        startTime(){
            this.timer = setInterval(()=>{
                this.reactionTime +=10
            },10)
        },
        stopTimer(){
            clearInterval(this.timer)
        }
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