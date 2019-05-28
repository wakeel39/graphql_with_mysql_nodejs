const db = require("../models");

const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const config = require("../config/config.json");

const AdminController = {
    //getting data from database
    getAll(){
        return db.admins.findAll({  
            attributes: ['id', 'name', 'email']
        });
    },
    getOne(args)  {
        //console.log("args== ",args.hasOwnProperty("id"));
        if(args.hasOwnProperty("id")){
            if("undefined" !== typeof(args["id"])){
                return db.admins.findOne({  
                    attributes:['id', 'name', 'email'],
                    where: {id:args["id"]} 
                });
            }
        }  
    },
    create(args){
        //let password  = (args.password);
        let password = bcrypt.hashSync(args.password, 10);
        let author  = db.admins.create({ name: args.name, password: password, email: args.email });
        return author;
    },
    update(args){
        let data = [];
        if(args.hasOwnProperty("password")){
            data["password"] = bcrypt.hashSync(args.password, 10);
        }
        data["name"] = args.name;
        data["email"] = args.email;
        let author  = db.admins.update(data, {
            where: {
              id:args.id
            }
          });
        return author;
    },
    delete(args){
        db.admins.destroy({
            where: {
              id: args.id
            }
          });
    },
    login(req,res){
        const user = db.admins.findOne({ where: { email:req.body.email } })
        .then(user => {
           if (!user) {
               //throw new Error('No user with that email')
               return res.status(404).json({
                   message: 'incorrect credentials',
                   data: ""
               })
             }
   
           bcrypt.compare(req.body.password, user.password)
           .then(valid => {
               if (!valid) {
                return res.status(404).json({
                       message: 'incorrect credentials',
                       data: ""
                   })
               }
   
               // signin user and generate a jwt
               const token = jsonwebtoken.sign({
                   id: user.id,
                   email: user.email
               }, config.jwt.secret, { expiresIn: '1y' })
   
               // return json web token
               return res.json({
                   message: 'Authentication successful!',
                   data: token
               })
           })
         }).catch(err => {
           return err;
           /* err will be equal to error on line 4*/
         })
    }


}
module.exports = AdminController;
