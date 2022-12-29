import mongoose,{Schema} from 'mongoose';

interface  IProducts{
    _id: string,
    name: string,
    image: string,
    brand: string,
    category: string,
    description: string,
    price: number,
    countInStock: string,
    rating: number,
    userId:string,
    numReviews: number,
   }

const productSchema = new Schema({

    name: {
        type: String,
       
      
    },
    brand:{
        type: String,
      
    },
    image:{
        type: String,
      
    },
    category :{
        type: String,
      
      
    },
    description: {
        type: String,
 
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    price:{
        type: Number,
      
    },
    countInStock: {
        type: String,
        
    },
    rating:{
        type: Number,
    }
    ,
    numReviews: {
        type: Number,
    }
},
    {
        timestamps: true
    })



export const Products  = mongoose.model<IProducts>('Product',productSchema);