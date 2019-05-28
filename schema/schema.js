const graphql =  require("graphql");
const _ = require("lodash");
const AuthorController =  require("../controllers/AuthorController");
const schemaObjects =  require("./schema_types");
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLInputObjectType,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLNullableType
} = graphql;




//root query 
const RootQuery = new GraphQLObjectType({
	name : "Authors",
	fields : {
		Author : {
			type : schemaObjects.AuthorType,
			args : { id : { type: GraphQLInt } },
			resolve( parentValue, args) {
				//console.log(args);
				let res =  AuthorController.getOne(args);
				return res;
			}
		},
		Authors: {
			type : new GraphQLList(schemaObjects.AuthorType),
			resolve(){
				let res =  AuthorController.getAll();
				return res;
			}
	  }
	}
});

//mutation query 
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createAuthor : {
      type : schemaObjects.AuthorType,
			args : { 
						first_name: { type: GraphQLString },
						last_name: { type: GraphQLString },
						email: { type: GraphQLString }				        
			},
      resolve (parentValue, args) {
        let author = AuthorController.create(args);
        return author;
      }
		},
		updateAuthor : {
      type : schemaObjects.AuthorType,
			args : { 
						id : { type : GraphQLInt }, 
						first_name: { type: GraphQLString },
						last_name: { type: GraphQLString },
						email: { type: GraphQLString }				        
			},
      resolve (parentValue, args) {
        let author = AuthorController.update(args);
        return author;
      }
    }
  }
});

const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: mutation
});
//console.log(schema._typeMap.Author);

module.exports = schema;