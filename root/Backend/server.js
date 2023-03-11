const express = require("express");
const cors = require('cors');

const v1ProductRouter = require("./v1/routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", v1ProductRouter);

app.listen(PORT, () => {
    console.log(`👌 Server running on PORT=${PORT} 👌`);
});
