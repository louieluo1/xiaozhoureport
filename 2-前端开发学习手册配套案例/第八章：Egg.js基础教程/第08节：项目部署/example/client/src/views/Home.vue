<template>
    <div>
        <button @click="getMessage">获取数据</button>
        <h1>{{message}}</h1>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            message:""
        }
    },
    methods:{
        getMessage(){
            let token = localStorage.getItem("token");
            console.log(token);
            axios.get("http://127.0.0.1:7001/message",{headers: {'token': token}}).then( res => {
                if(res.data.code === 20000){
                    this.message = res.data.data;
                }else{
                    console.log(res.data.msg);
                }
            } )
        }
    }
}
</script>

