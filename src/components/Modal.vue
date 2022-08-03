<template>
    <div class="backdrop" @click="closeModal">
        <div class="card" v-if="ShowModal">
            <div class="card-header">
                <h1>Welcome Hussien This is Vue3 Tutorial</h1>
                <p>I hope you are doing great</p>
            </div>
        </div>
        <hr>
        <div class="modal" :class="{theme_dark: theme==='Dark'}">
            <h1>{{ header ? header: 'Not Found Title' }}</h1>
            <p>{{ text }}</p>
            <span>Your age is {{age}}</span>
            <div v-if="theme!=='Dark'">
                <button @click="ChangeTheme">Click To Choose Dark Theme</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {/* Get Data from parent component */
    props:['header','text','age','theme','ShowModal'],
    data() {
        return {
            theme: this.theme
        }
    },
    methods: {
        ChangeTheme(){
            this.theme = 'Dark'//Usual Way
        },
        closeModal(){
            this.$emit('close')//Emit way
        }
    },
}
</script>
<style scoped>

    .backdrop{
        color: #000000;
    }
    h1{
        display: inline;
        font-style: italic;
    }
    .theme_dark{
        background-color: rgb(12, 8, 8);
        color: #ffffff;
    }
    .backdrop .card{
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: rgb(0,0,0,0.5);
    }
    .backdrop .card .card-header{
        background-color: rgb(255, 89, 89);
        margin: 100px auto;
        padding: 20px;
        width: 400px;
        border-radius: 10px;
        color: #ffffff!important;
    }
</style>