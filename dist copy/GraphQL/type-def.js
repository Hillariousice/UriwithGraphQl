"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `

type User{
    _id:ID!
    email:String!
    password:String!
    fullName:String!
    salt:String!
}
input CreateUser{
    email:String!
    password:String!
    fullName:String!
  
}

input userInput{
   email:String!
   password:String!
}

input UserLogin{
    email:String!
    password:String!
}

 type Product{
    _id:ID!
    name:String!
    brand:String!
    image:String!
    category: String!
    description: String!
    price: Int!
    countInStock: String!
    rating: Int!
    userId:String!
    numReviews:Int!
    
 }
 input ProductCreate{
    name:String!
    brand:String!
    image:String!
    category: String!
    description: String!
    price: Int!
    countInStock: String!
    rating: Int!
    userId:String!
    numReviews:Int!
 }
 input ProductUpdate{
    _id:ID!
    name:String
    brand:String
    category: String
    description: String
    price: Int
    countInStock: String
    rating: Int
    userId:String
    numReviews:Int
 }
 type Message{
   message:String
}
 type Query{
   getProducts:[Product]!
   getProductById(_id:ID!):Product
   getUsers:[User]!
   getUserById(_id:ID!):User
   

 }
 type Mutation{
    registerUser(input:CreateUser):User!
    loginUser(input:UserLogin):User!
    createProduct(input:ProductCreate):Product!
    updateProduct(input:ProductUpdate):Product!
    deleteProduct(_id:ID!):Message!
 }

`;
exports.default = typeDefs;
