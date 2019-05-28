const graphql =  require("graphql");
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

//post 
const PostType = new GraphQLObjectType({
    name : "Post",
    fields : () => ({
        id : { type:  GraphQLInt }, 
        title : { type:  GraphQLString },
        slug : { type:  GraphQLString },
        content : { type:  GraphQLString },
        type : { type:  GraphQLString },
        template : { type:  GraphQLString },
        link : { type:  GraphQLString },
        doctor_id  : { type:  GraphQLInt },
        categories  : { type:  GraphQLString },
        metas : { type: new GraphQLList(PostMetaType)  }
     })
});

//post meta
const PostMetaType = new GraphQLObjectType({
    name : "PostMeta",
    fields : () => ({
        id : { type:  GraphQLInt }, 
        post_id : { type:  GraphQLInt },
        meta_key : { type:  GraphQLString },
        meta_value : { type:  GraphQLString },
        type : { type:  GraphQLString }
        
     })
});


//Appointments
const AppointmentsType = new GraphQLObjectType({
    name : "Appointment",
    fields : () => ({
        id : { type:  GraphQLInt }, 
        appointment_date : { type:  GraphQLString },
        patient_first_name : { type:  GraphQLString },
        patient_last_name : { type:  GraphQLString },
        patient_email : { type:  GraphQLString },
        patient_zip : { type:  GraphQLString },
        patient_phone : { type:  GraphQLString },
        nature_of_appointment : { type:  GraphQLString },
        additional_comments : { type:  GraphQLString },
        is_received_updates : { type:  GraphQLString },
        learn_about_from : { type:  GraphQLString },
        type  : { type:  GraphQLString }
        
     })
});

//other_entities
const OtherEntitiesType = new GraphQLObjectType({
    name : "other_entities",
    fields : () => ({
        id : { type:  GraphQLInt }, 
        title : { type:  GraphQLString },
        slug : { type:  GraphQLString },
        content : { type:  GraphQLString },
        type : { type:  GraphQLString },
        status : { type:  GraphQLString }
     })
});

//doctors
const DoctorsType = new GraphQLObjectType({
    name : "doctors",
    fields : () => ({
        id : { type:  GraphQLInt }, 
        first_name : { type:  GraphQLString },
        last_name : { type:  GraphQLString },
        title : { type:  GraphQLString },
        specialties : { type:  GraphQLString },
        clinical_expertise : { type:  GraphQLString },
        education_training : { type:  GraphQLString },
        certifications : { type:  GraphQLString },
        interesting_facts : { type:  GraphQLString },
        info_video : { type:  GraphQLString },
        pic : { type:  GraphQLString },
        locations : { type: new GraphQLList(LocationsType)  }
     })
});

//Locations
const LocationsType = new GraphQLObjectType({
    name : "locations",
    fields : () => ({
        id : { type:  GraphQLInt }, 
        title : { type:  GraphQLString },
        slug : { type:  GraphQLString },
        content : { type:  GraphQLString },
        address : { type:  GraphQLString },
        lat : { type:  GraphQLString },
        lng : { type:  GraphQLString },
        city : { type:  GraphQLString },
        country : { type:  GraphQLString },
        zipcode : { type:  GraphQLString },
        location_categories  : { type:  GraphQLString },
        phone  : { type:  GraphQLString },
        fax  : { type:  GraphQLString },
        pic  : { type:  GraphQLString },
        hours  : { type:  GraphQLString }
     })
});




//create types  
const AuthorType = new GraphQLObjectType({
    name : "Author",
    fields : () => ({
        id : { type:  GraphQLInt }, 
        first_name : { type:  GraphQLString },
        last_name : { type:  GraphQLString },
        email : { type:  GraphQLString },
        birthdate : { type:  GraphQLString }
     })
});

/** pagination  type */
//https://medium.com/@mattmazzola/graphql-pagination-implementation-8604f77fb254
// export function Edge(itemType: any) {
//     return new graphql.GraphQLObjectType({
//         name: "Edge",
//         description: "Generic edge to allow cursors",
//         fields: () => ({
//             node: { type: itemType },
//             cursor: { type: graphql.GraphQLString }
//         })
//     });
// }

// export function Page(itemType: any) {
//     return new graphql.GraphQLObjectType({
//         name: "Page",
//         description: "Page",
//         fields: () => ({
//             totalCount: { type: graphql.GraphQLInt },
//             edges: { type: new graphql.GraphQLList(Edge(itemType)) },
//             pageInfo: { type: PageInfo }
//         })
//     });
// }

// export const PageInfo = new graphql.GraphQLObjectType({
//     name: "PageInfo",
//     description: "Information about current page",
//     fields: () => ({
//         startCursor: { type: graphql.GraphQLString },
//         endCursor: { type: graphql.GraphQLString },
//         hasNextPage: { type: graphql.GraphQLBoolean }
//     })
// });

// export function convertNodeToCursor(node: { id: number }): string {
//     return bota(node.id.toString());
// }

// export function bota(input: string): string {
//     return new Buffer(input.toString(), 'binary').toString("base64");
// }

// export function convertCursorToNodeId(cursor: string): number {
//     return parseInt(atob(cursor));
// }

// export function atob(input: string): string {
//     return new Buffer(input, 'base64').toString('binary');
// }

const schemaObjects = {
        AuthorType:AuthorType
};

module.exports = schemaObjects;