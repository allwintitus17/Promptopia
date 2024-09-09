import mongoose from 'mongoose'

let isConnected=false;//track the connection

export const connectToDB=async()=>{
      mongoose.set('strictQuery',true);

      if(isConnected){
        console.log("Mongo db is Already Connected");
        return;
      }
      try{
        await mongoose.connect(process.env.MONGODB_URI,{
             dbName:"share_prompt",
        })
       isConnected=true;
       
       console.log('Mongo Db Connected')
      }catch(error){
     console.log(error)
      }
}