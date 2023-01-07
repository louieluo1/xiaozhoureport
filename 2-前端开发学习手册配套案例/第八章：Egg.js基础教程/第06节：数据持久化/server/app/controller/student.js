const Contoller = require("egg").Controller;

class StudentController extends Contoller {
    async create(){
        let name = this.ctx.request.body.name;
        let achievement = this.ctx.request.body.achievement;
        let clazz_id = this.ctx.request.body.clazz_id;
        await this.app.model.Student.create({
            name:name,
            achievement:achievement,
            clazz_id:clazz_id
        })
        this.ctx.body = "添加成功";
    }

    async index(){
        let studentList = await this.app.model.Student.findAll();
        this.ctx.body = studentList;
    }

    async update(){

    }

    async destroy(){
        
    }
}

module.exports = StudentController;