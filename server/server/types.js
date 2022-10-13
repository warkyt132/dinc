const graphql = require("graphql");
const grData=require('graphql-iso-date')
const {GraphQLDateTime}=grData
const { GraphQLObjectType, GraphQLString } = graphql;
;

const UserType = new GraphQLObjectType({
  name: "User",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    joined: { type: GraphQLDateTime  },
    last_logged_in: { type: GraphQLDateTime  }
  }
});

const ProjectType = new GraphQLObjectType({
  name: "Project",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    creator_id: { type: GraphQLString },
    created: { type: GraphQLDateTime },
    title: { type: GraphQLString },
    description: { type: GraphQLString }
  }
});

exports.UserType = UserType;
exports.ProjectType = ProjectType;
