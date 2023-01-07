function checktoken() {
    return async function (ctx, next) {
        try {
            const token = ctx.request.header.token;
            let decode = ctx.app.jwt.verify(token,ctx.app.config.jwt.secret);
            if (decode && decode.username) {
                await next();
            } else {
                ctx.body = {
                    code: 40000,
                    msg: "用户验证失败"
                }
            }

        } catch (e) {
            ctx.body = {
                code: 40000,
                msg: "token验证失败"
            }
        }
    }
}

module.exports = checktoken;