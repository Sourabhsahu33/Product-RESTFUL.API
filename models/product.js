const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be provided"],
    },
    feature:{
        type: Boolean,
        default:true,
    },
    rating:{
        type : Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company:{
        type: String,
         enum:{
            values:["Apple", "Samsung", "Dell","HP","Lenovo","Vivobook","ASUS", "Xiaomi","Oppo","mi","Vivo","POCO", "Infinix","Sony","Google", "Realme", "OnePlus", "Motorola", "Nokia","Microsoft Surface series","Acer","MSI (Micro-Star International)","Toshiba"],
            message:`{VALUE} is not supported`,
        },
    },
});
module.exports  = mongoose.model("Product",productSchema); 