const express = require("express");
const expressGraphQL = require("express-graphql");
const Sequelize = require('sequelize');
const frontend_schema = require("./schema/schema");
const backend_schema = require("./schema/schema");
const cors = require('cors');
const bodyParser = require('body-parser')
const jwt = require('express-jwt')
const admin =  require("./controllers/adminController")
const checkToken =  require("./common/checkToken")
const config = require("./config/config.json");

//const db =  require("./models");


/*express is using create a http server*/
const app = express();

// bodyparser
app.use(bodyParser.json())

// authentication middleware
// const authMiddleware = jwt({
//   secret: config.jwt.secret
// })
//app.use(cors)
 // auth middleware
 const auth = jwt({
	secret: config.jwt.secret,
	credentialsRequired: false
  })

app.get("/",function(req,res){
	console.log("hitting");
	res.json("api is working");
});

//admin login
app.post('/login',(req,res) => { 
	return admin.login(req,res); 
});



//backend routes
app.use("/backend/graphql",checkToken.checkToken,expressGraphQL({
		schema:backend_schema,
		graphiql: true
	})
);

//frontend Routes
app.use("/graphql",expressGraphQL({
		schema:frontend_schema,
		graphiql: true
	})
);

//Listing port
app.listen(5000, () => {
	console.log("Listing 5000");
});