const db = require("../models");
const AuthorController = {
    //getting data from database
    getAll(){
        return db.authors.findAll({  
            attributes: ['id', 'first_name', 'last_name', 'email', 'birthdate']
        });
    },
    getOne(args)  {
        console.log("args== ",args.hasOwnProperty("id"));
        if(args.hasOwnProperty("id")){
            if("undefined" !== typeof(args["id"])){
                return db.authors.findOne({  
                    attributes: ['id', 'first_name', 'last_name', 'email', 'birthdate'],
                    where: {id:args["id"]} 
                });
            }
        }  
    },
    create(args){
        let author  = db.authors.create({ first_name: args.first_name, last_name: args.last_name, email: args.email });
        return author;
    },
    update(args){
        let author  = db.authors.update({ first_name: first_name, last_name: last_name, email: email }, {
            where: {
              id:args.id
            }
          });
        return author;
    },
    delete(args){
        db.authors.destroy({
            where: {
              id: args.id
            }
          });
    },


}
module.exports = AuthorController;
