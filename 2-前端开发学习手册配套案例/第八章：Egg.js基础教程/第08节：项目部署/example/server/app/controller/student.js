'use strict';

const Controller = require('egg').Controller;

class StudentController extends Controller {
  async index() {
    let StudentList = await this.app.Service.Student.getStduentList();
    if(StudentList){
      this.ctx.body = StudentList;
    }else{
      this.ctx.body = []
    }
  }

  async create() {
    let name = this.ctx.request.body.name;
    let achievement = this.ctx.request.body.achievement;
    let clazz_id = this.ctx.request.body.clazz_id;
    console.log(name);
    await this.app.model.Student.create({
      name,
      achievement,
      clazz_id
    });
    this.ctx.body = "添加成功！"
  }

  async destroy() {
    let id = this.ctx.params.id;
    await this.app.model.Student.destroy({
      where: {
        id: id
      }
    })
    this.ctx.body = "删除成功"
  }

  async update() {
    let id = this.ctx.params.id;
    let name = this.ctx.request.body.name;
    await this.app.model.Student.update({
      name: name
    }, {
      where: {
        id: id
      }
    })
    this.ctx.body = "修改成功"
  }
}

module.exports = StudentController;