import express from "express";
import cors from "cors";

import route from "./Routes/userRoute.js";
import router from "./Routes/productRoute.js";
const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", route);
app.use("/product", router);


const port = 9000;
//const PORT = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`server started at port ${port}`)
});

