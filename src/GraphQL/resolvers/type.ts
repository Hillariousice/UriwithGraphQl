export interface ArgForProduct{
    id: string,
    name: string,
    image: string,
    brand: string,
    category: string,
    description: string,
    price: number,
    countInStock: string,
    rating: number,
    userId:string,
    numReviews: number
}
export interface ArgForUser{
    id:string;
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
export interface ArgForCreateUser{
    fullName:string
    email:string;
    password:string;
    
   
}
export interface CreateUser{
    input:ArgForCreateUser
}


export interface ArgForLoginUser{
    id:string
    email:string;
    password:string;
   
}
export interface LoginUser{
    input: ArgForLoginUser
}

export interface CreateProduct{
    input:ArgForProduct
}
export interface ArgForUpdateProduct{
    id: string,
    name: string,
    image: string,
    brand: string,
    category: string,
    description: string,
    price: number,
    countInStock: string,
    rating: number,
    userId:string,
    numReviews: number
}
export interface UpdateProduct{
    input: ArgForUpdateProduct
}

export interface DeleteProduct{
    id:string
}
