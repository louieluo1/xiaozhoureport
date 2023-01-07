<template>
  <div class="about">
    <form @submit.prevent="login">
      <input type="text" v-model="user.username">
      <input type="text" v-model="user.password">
      <button>登录</button>
    </form>
  </div>
</template>

<script>
import request from "../utils/request"
export default {
  data(){
    return {
      user : {
        username:"",
        password:"",
        
      }
    }
  },
  methods:{
    login(){
      request.post("http://127.0.0.1:7001/login",{user:this.user})
        .then(( res ) => {
          if(res.data.code === 20000){
            localStorage.setItem("token",res.data.token);
            this.$router.push("/student")
          }else{
            console.log("登录失败")
          }
        })
    }
  }
}
</script>