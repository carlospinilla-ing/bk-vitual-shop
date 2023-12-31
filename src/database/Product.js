const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllProducts = () => {
  return DB.products;
};

const createNewProduct = (newProduct) => {
    const isAlreadyAdded = DB.products.findIndex((product) => product.name === newProduct.name) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.products.push(newProduct);
    saveToDatabase(DB);
    return newProduct;
}

module.exports = { 
    getAllProducts,
    createNewProduct
};