const productService = require("../services/productService");

const getAllProducts = (req,res) => {
    const allProducts = productService.getAllProducts();
    res.send({status:"OK", data:allProducts});
}

const getOneProduct = (req,res) => {
    const product = productService.getOneProduct(req.params.productId);
    res.send(`Get product ${req.params.productId}`);
}

const createNewProduct = (req,res) => {
    const { body } = req;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
      ) {
        return;
    }
    const newProduct = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
      };
    const createdProduct = productService.createNewProduct(newProduct);
    res.status(201).send({ status: "OK", data: createdProduct });
}

const updateOneProduct = (req, res) => {
    const updatedProduct = productService.updateOneProduct(req.body);
    res.send("Update an existing workout");
  };
  
  const deleteOneProduct = (req, res) => {
    productService.deleteOneProduct(req.params.productId);
    res.send("Delete an existing workout");
  };
  

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct
}