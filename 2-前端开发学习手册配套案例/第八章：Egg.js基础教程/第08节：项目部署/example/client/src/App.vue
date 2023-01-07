<template>
    <div>
        <router-link to="/student">学生管理</router-link> | 
        <router-link to="/clazz">班级管理</router-link> | 
        <el-button type="text" @click="logout">注销</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods:{
        logout() {
            localStorage.setItem("token", "");
            location.reload();
        }
    }
}
</script>




