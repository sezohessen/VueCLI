<template>
    <div class="backdrop">
        <div class="card" v-if="ShowModal" @click.self="closeModal">
        <!-- Click.self : click on this element itself and only this element not any element inside it -->
            <div class="card-header">
                <slot>Default content</slot>
                <!-- Default content will appear iff there is no content in parent -->
                <!-- Slots useful for passing custom template into components -->
                <div class="links">
                    <slot name="links"></slot>
                </div>
            </div>
        </div>
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
            /* Not recommended */
        },
        closeModal(){
            this.$emit('close')//Emit way
            /* 
            Its efficent to edit the value from parent class instead of rewrite it in child class
            Because if the page is rendering , the child class will take it's values from parent.
            */
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