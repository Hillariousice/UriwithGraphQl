import mongoose,{Schema} from 'mongoose';

 export interface  IUser{
    _id:string;
    email:string;
    password:string;
    fullName:string;
    gender:string;
    salt:string;
    address:string;
    phone:string;
    lng:number;
    lat:number;
    verified:boolean;
    role:string
  
}

const userSchema = new Schema({
    fullName: {
        type: String,
       
    },
    email: {
        type: String,
    
    },
    password: {
        type: String,
      
    },
    address: {
        type: String,
     
    },
    phone:{
        type: String,
       
    },
    gender: {
        type: String,
       
    },
   salt:{
        type: String,
       
    },
    
    lng:{
        type:Number,
        
    },
    lat:{
        type:Number,
    },
    verified:{
        type:Boolean,
      
    },
    role:{
        type:String,
       
    }
}, {
    timestamps: true
})



export const User = mongoose.model<IUser>('users',userSchema)