import mongoose from "mongoose"
import dotenv from "dotenv"
import{ApolloServer} from "apollo-server"
dotenv.config()
import typeDefs from './GraphQL/type-def'
import resolvers from './GraphQL'


// const app = express()
// app.use(logger('dev'))


const server = new ApolloServer({
    typeDefs,
    resolvers

})

mongoose.connect(process.env.DATABASE_URL!,()=>{
    console.log(`Connected to database successfully`)
})



const Port = 4000
server.listen(Port,()=>{console.log(`Server listening on http://localhost:${Port}`)})