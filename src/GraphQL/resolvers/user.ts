import {User} from '../../model/userModel'
import {Products} from '../../model/productModel'
import { ArgForProduct,ArgForUser, CreateUser, CreateProduct, UpdateProduct, DeleteProduct, LoginUser } from './type'
import bcrypt, { genSalt } from 'bcryptjs'
import { verifyPassword,signToken, hashPassword } from '../../utils'
// import {generateToken} from '../'


const UserResolvers = {
    Query:{
        getProducts: async()=>{
            try{
                const products = await Products.find({})
                return products
            }catch(err){
                console.log(err)
            }
        },
        getProductById:async(_:unknown,args:ArgForProduct)=>{
            try{
                const oneProduct = await Products.findById(args.id)
                return oneProduct
            }catch(err){
                console.log(err)
            }
            
        },
        getUsers:async()=>{
            try{
               
                const users = await User.find({})
                return users
            }catch(err){
                console.log(err)
            }
        },
        getUserById:async(_:unknown,args:ArgForUser)=>{
            try{
                const oneUser = await User.findById(args.id)
                    return oneUser
            }catch(err){
                console.log(err)
            }
        },
        
}
    ,
    Mutation:{
        registerUser:async(_:unknown,args:CreateUser)=>{
            try{
                const salt = await genSalt();
                const password = await bcrypt.hash(args.input.password, salt)
                const newUser ={
                    fullName:args.input.fullName,
                    password,
                    email:args.input.email,
                    salt
                }
                const  userall = await User.create(newUser)
                if(userall){
                    return {...newUser,_id:userall._id}
                }
            }catch(err){
                console.log(err)
            }
        },
        loginUser:async (parent: any, args:LoginUser,context: any) => {
            try{
                const {password,email} = args.input



                const output = await User.findOne({email}) 
              
                const isValidPassword = await verifyPassword(args.input.password, password);
              
                if (!isValidPassword) {
                  throw new Error("Invalid password");
                  console.error("Invalid password");
                }
              
                return {
                  id:args.input.id,
                  email:args.input.email,
                  token: signToken({ userId:args.input.id }),
                };
             
              
            }catch(err: any){
             console.log(err)
            }
         },
        createProduct:async(_:unknown,args:CreateProduct)=>{
            try{
                const newProduct = {
                    name:args.input.name,
                    image:args.input.image,
                    brand:args.input.brand,
                    category:args.input.category,
                    description:args.input.description,
                    price:args.input.price,
                    countInStock:args.input.countInStock,
                    rating:args.input.rating,
                    userId:args.input.userId,
                    numReviews:args.input.numReviews,
                }
                const products = await Products.create(newProduct)
                if(products){
                    return products
                }
            }catch(err){

            }
        },
         updateProduct:async(_:unknown,args:UpdateProduct)=>{
           try{
          const id = args.input.id
          const updateProduct={
                    id : args.input.id,
                    name:args.input.name,
                    image:args.input.image,
                    brand:args.input.brand,
                    category:args.input.category,
                    description:args.input.description,
                    price:args.input.price,
                    countInStock:args.input.countInStock,
                    rating:args.input.rating,
                    userId:args.input.userId,
                    numReviews:args.input.numReviews,
          }
          const updateNew = await Products.findByIdAndUpdate(id,updateProduct,{new:true})
          if(updateNew){
            return updateNew
        }
           }catch(err){
            console.log(err)
           }
         },
         deleteProduct: async(_:unknown,args:DeleteProduct)=>{
            try{
                
                const deleteOne =await Products.findById({_id:args.id})
                console.log(deleteOne)
                if(deleteOne){
                    return {message:`Product with ${args.id} has been deleted`}
                }
            }catch(err){
                console.log(err)
            }
         } 
      
    }
}



export default UserResolvers