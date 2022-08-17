<template>
  <form>
      <label>Email:</label>
      <input type="email" name="" id="" required v-model="email" >
      <label>Password:</label>
      <input type="password" name="" id="" required v-model="password">
      <label >Role:</label>
      <select v-model="role">
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
      </select>
      <div class="terms">
          <input type="checkbox" required v-model="terms">
          <label>Accept terms and conditions</label>
      </div>
      <label>Skills: <span>(Press enter to add skill)</span> </label>
      <input type="text"  v-model="tempSkill" @keyup="addSkill">
      <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>
      <!-- 
        V-model tracking the value of attribute and update it to the input
        v-model is two way data binding:
        1- one way from data to the templete
        2- the other way from templete to update data
      -->
  </form>
  <p>Email: {{email}}</p>
  <p>Password: {{password}}</p>
  <p>Role: {{role}}</p>
  <p>terms: accepted : {{terms}}</p>
</template>

<script>
export default {
    data() {
        return {
            email:'',
            password:'',
            role:'',
            terms:false,
            tempSkill:'',
            skills:[]
        }
    },
    methods: {
        addSkill(e){
            if((e.key === 'Enter')&& this.tempSkill){
                if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter(item => {
                return skill !== item
            })
            /* 
            Filter method cycle through an array and fires funtion for each item
            if it return true for an item in array then we keep it in the array if we return false
            we remove it from array 
             */
        }
    },
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
</style>