import mongoose from "mongoose";

console.log(process.env.MONGO);
const connectToDb=async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO);
        console.log(`Connected To Mongodb Database ${conn.connection.host}`);
    }catch(error){
        console.log(`Mongodb Error ${error}`);
    };
}

export default connectToDb;