<template>
    <div>
        <el-button type="text" @click="dialogVisible = true">添加班级</el-button>
        <el-table :data="clazzList" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="120"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="del(scope.row.id)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="添加学生信息" :visible.sync="dialogVisible" width="30%">
            <el-form>
                <el-form-item label="姓名">
                    <el-input v-model="name"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="onSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import request from "../utils/request"
export default {
    data(){
        return {
            name:"",
            clazzList:[],
            dialogVisible:false
        }
    },
    methods:{
        onSubmit(){
            request.post("/clazz",{name:this.name}).then(() => {
                this.getClazzList();
                this.dialogVisible = false;
            })
        },
        del(id){
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    request.delete(`/clazz/${id}`).then(() => {
                        this.getClazzList();
                        this.dialogVisible = false;
                    })
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        },
        getClazzList(){
            request.get("/clazz").then((res) => {
                this.clazzList = res.data;
            })
        }
    },
    created(){
        this.getClazzList();
    }
}
</script>