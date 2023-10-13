require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./product.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);

        // Create a new Product with data
        await Product.create({
            name: "Product Name",
            price: 10.99,
            description: "Product Description"
        });

        console.log("Success: Product created!");
    } catch (error) {
        console.error("Error:", error);
    } finally {
        // Close the database connection (optional)
        // mongoose.connection.close();
    }
};

start();
