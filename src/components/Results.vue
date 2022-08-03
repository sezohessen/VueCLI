<template>
  <p>Reaction Time - {{ score }} ms</p>
  <p class="rank"> {{ rank }} </p>
</template>

<script>
export default {
    props:['score'],
    data() {
        return {
            rank:null
        }
    },
    mounted() {
        if(this.score <250)this.rank = 'Anta NinJaaaaa'
        else if(this.score < 400)this.rank = 'Gamed'
        else this.rank = 'GG well played'
    },
}
</script>

<style>
.rank{
    color: #0faf87;
    font-size: 1.4rem;
    font-weight: bold;
}
</style>