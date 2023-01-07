'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = "hello world"
  }

  async doLogin() {
    let user = this.ctx.request.body.user;
    if (user.username === "xiaoming" && user.password === "123456") {

      const token = this.app.jwt.sign({
        username: user.username
      }, this.app.config.jwt.secret);
      this.ctx.body = {
        code: 20000,
        msg: "登录成功",
        token: token
      }
    } else {
      this.ctx.body = {
        code: 50000,
        msg: "用户名或密码错误"
      }
    }
  }

}

module.exports = HomeController;