import UserResolvers from './resolvers/user'

export default{
    Query:{
        ...UserResolvers.Query
    },
    Mutation:{
        ...UserResolvers.Mutation
    }
}