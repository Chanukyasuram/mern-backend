import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cors from 'cors'
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
const DB_USER=process.env.DB_USER;
const DB_PASSWORD=process.env.DB_PASSWORD;
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.v802djb.mongodb.net/backendcafe?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
     app.listen(8080, () => {
     console.log("Server started");
   });
});

// mongoose.connect(``).then(() => {
//      app.listen(8080, () => {
//      console.log("Server started");
//    });
// });
app.use("/api/users", userRouter);


// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import mongoose from "mongoose";
// import userRouter from "./routes/userRoute.js";
// import cors from 'cors'


// const app = express();
// app.use(cors())
// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/backendcafe")
//   .then(() => {
//     console.log("Connected to local MongoDB");
//     app.listen(8080, () => {
//       console.log("Server started on port 8080");
//     });
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));

// app.use("/api/users", userRouter);

// export default app;





app.use("/api/products", productRouter);