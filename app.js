require("dotenv").config();
const express = require("express");
// const res = require("express/lib/response");

const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");
app.get("/", (req, res) => {
    res.send("Hi I'm Live");
});

// middleware or set routers
app.use("/api", products_routes);
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,() =>{
            console.log(`${PORT} Yes, I am Connected`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();

