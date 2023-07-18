const Product = require("../database/Product");
const { v4: uuid } = require("uuid");

const getAllProducts = () => {
    const allProducts = Product.getAllProducts();
    return allProducts;
}

const getOneProduct = () => {
    return;
}

const createNewProduct = (newProduct) => {
    const productToInsert = {
        ...newProduct,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    const createdProduct = Product.createNewProduct(productToInsert);
    return createdProduct;
}

const updateOneProduct = () => {
    return;
}

const deleteOneProduct = () => {
    return;
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct
}