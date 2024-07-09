import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";




const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;
app.use(cors());  
app.use(express.json());
//connect to mongodb
const URI=process.env.MongoDBURI;
try {
 mongoose.connect(URI,{

 });
 console.log("connected to mongodb");
} catch{
  console.log("error",error);
}

//defining routes
app.use('/book',bookRoute);
app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});