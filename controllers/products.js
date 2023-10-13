const { PRODUCT } = require("../productData.js");
const productSchema = require("../models/product.js");
const product = require("../models/product.js");


const getAllProducts = async (req, res) => {
  const { company, name, feature, sort, select} = req.query;
  const queryObject = {};
  if(company){
    queryObject.company = company;
    console.log(queryObject);
  }
  
  if(name){
    queryObject.name = { $regex:name, $options:"i"};
  }
  if(feature){
    queryObject.feature= feature;
  }

  let apiData = productSchema.find(queryObject); 

  if(sort){
    let sortFix = sort.split(",").join(" ");;
    apiData = apiData.sort(sortFix);
  }
  if(select){
    //let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;
  let skip = (page - 1)* limit;

  //apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  try {
    const myData = await apiData;
    res.status(200).json({ PRODUCTS: myData , nbHits: myData.length});
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Failed to get all prodeucts", err: error.message });
  }
}; 

const getAllProductsTesting = async (req, res) => {
  console.log(req.query);
  const myData = await product.find(req.query);
  res.status(200).json({myData});
  // res.status(200).json({ msg: "I am getAllProductsTesting" });
};

const saveproducts = async (req, res) => {
  try {
    const deleted = await productSchema.deleteMany();
    const result = await productSchema.insertMany(PRODUCT);
    res.status(201).json({ msg: "All products saved successfully" });
    console.log(result);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", err: error.message });
  }
};
module.exports = { getAllProducts, getAllProductsTesting, saveproducts };
