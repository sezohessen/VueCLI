<template>
    <div class="backdrop">
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
    props:['header','text','age','theme'],
    methods: {
        ChangeTheme(){
            this.theme = 'Dark'
        }
    },
}
</script>
<style scoped>
    .backdrop{
        color: #000000;
    }
    h1{
        color: red;
        display: inline;
        border-bottom: 1px solid #ccc;
    }
    .theme_dark{
        background-color: rgb(12, 8, 8);
        color: #ffffff;
    }
</style>