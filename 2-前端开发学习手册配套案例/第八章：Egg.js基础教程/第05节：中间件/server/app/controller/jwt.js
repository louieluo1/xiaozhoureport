const Controller = require("egg").Controller;


class JwtController extends Controller {
    async doLogin(){
        let user = this.ctx.request.body.user;  //user.username;user.password
        if(user.username === "xiaoming" && user.password === "123"){
            let user_jwt = {username:user.username}
            let token = this.app.jwt.sign(user,this.app.config.jwt.secret);
            this.ctx.body = {
                code:20000,
                token:token
            }
        }else{
            this.ctx.body = {
                code:40000,
                msg:"用户名或密码错误"
            }
        }

    }

    async getMessage(){
        this.ctx.body = "hello jwt";
    }
    
}

module.exports = JwtController