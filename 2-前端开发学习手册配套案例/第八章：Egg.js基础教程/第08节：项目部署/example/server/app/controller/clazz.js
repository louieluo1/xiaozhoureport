const Controller = require("egg").Controller

class ClazzController extends Controller {

    async index() {
        let clazzList = await this.app.model.Clazz.findAll();
        console.log(clazzList)
        this.ctx.body = clazzList;
    }
  
    async create(){
        let name = this.ctx.request.body.name;
        console.log(name);
        await this.app.model.Clazz.create({
            name:name
        });
        this.ctx.body = "添加成功！"
    }
  
    async destroy(){
        let id = this.ctx.params.id;
        await this.app.model.Clazz.destroy({
            where:{
                id:id
            }
        })
        this.ctx.body = "删除成功"
    }   
  
    async update(){
        let id = this.ctx.params.id;
        let name = this.ctx.request.body.name;
        await this.app.model.Clazz.update({
            name:name
        },{
            where:{
                id:id
            }
        })
        this.ctx.body = "修改成功"
    }

}

module.exports = ClazzController 