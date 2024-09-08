<template>
   
       
        <div id="app" class="container bg-white p-8">
        <h2 class="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form>
            <div class="mb-4">
                <input type="text" v-model="name"
                       placeholder="Name"
                       class="form-input">
            </div>
            <div class="mb-4">
                <input type="email" v-model="email" 
                       placeholder="Email" 
                       class="form-input">
            </div>
            <div class="mb-4">
                <input type="password" v-model="password"
                       placeholder="Password" 
                       class="form-input">
            </div>
            <div class="mb-6">
                <input type="password" 
                       v-model="confirmPassword" 
                       placeholder="Confirm Password" 
                       class="form-input">
            </div>
            <button @click.prevent="signUp"
                class="w-full bg-blue-500 hover:bg-blue-600 
                       text-white font-semibold py-2
                       rounded-md focus:outline-none">Sign
                Up</button>
        </form>
        <p class="mt-4 text-sm text-center
                  text-gray-600">Already have 
                                   an account? <a href="#"
                class="text-blue-500 hover:underline">Sign in here</a></p>
    </div>
    
</template>
<script>
import axios from 'axios'
export default{
    name :"signup",
    data()
    {
        return{
            name:'',
            email:'',
            password:'',

        }
    },
    methods:{
        async signUp()
        {
           let result = await axios.post("http://localhost:3000/user",{
            email:this.email,
           password:this.password,
           name:this.name
           });
        console.warn(result);
        if(result.status=201)
        {
           localStorage.setItem("user-info",JSON.stringify(result.data))
           this.$router.push({name:''})
        }
        }
    }
}
</script>