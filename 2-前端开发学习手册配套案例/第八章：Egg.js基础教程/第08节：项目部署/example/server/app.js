module.exports = app => {
    app.beforeStart(async function() {
        //sync方法可以根据model自动生成所有表格
        // await app.model.sync({ force: true }); // 开发环境使用，会删除数据表
        await app.model.sync({});
    });
};