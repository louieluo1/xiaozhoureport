const service = require("egg").Service;

class StudentService extends Service {
    async getStduentList(){
        try{
            let StudentList = await this.app.model.Student.findAll({
                include:[
                  {
                    model:this.app.model.Clazz,
                    as:"clazz"
                  }
                ]
            });
            return StudentList;
        }catch(e){
            return null
        }
        
    }
}

module.exports = StudentService