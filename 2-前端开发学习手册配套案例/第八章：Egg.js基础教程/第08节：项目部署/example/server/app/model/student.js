module.exports = app => {
    const { STRING,INTEGER,DOUBLE } = app.Sequelize; 

    const Student = app.model.define('student',{
        name:STRING, 
        achievement:DOUBLE
    })
    Student.associate = function() {  //所属与那本书，指向书籍的主键
        app.model.Student.belongsTo(app.model.Clazz,{
            foreignKey: 'clazz_id',
            as:'clazz'
        })
    }
    return Student;

}