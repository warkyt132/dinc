const { db } = require("./db");
const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");
const { UserType, ProjectType } = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM project WHERE id=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM users WHERE id=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    users: {
      type: new GraphQLList  (UserType),
      //args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `select * from users`;
        return db
          .manyOrNone(query)
          .then(res => res)
          .catch(err => err);
      }
    },
    projects: {
      type: new GraphQLList  (ProjectType),
      //args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `select * from project`;
        return db
          .manyOrNone(query)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.query = RootQuery;
