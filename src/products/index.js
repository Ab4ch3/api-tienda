const express = require("express");
//router es una funcionalidad de express , que nos permite manejar las ruta de modulo independientemente de la aplicacion
const router = express.Router();
// Importamos el controlador para este modulo
const { ProductsController } = require("./controller.js");
// Creamos un modulo que recibe la app , y generaremos todo lo que necesita app sobre este modulo
module.exports.ProductsAPI = (app) => {
  // Se configuran las rutas en el router y no estan definidas en nuestra app , independiente de la aplicacion
  // se le pasa coloca el controlador como funciones a ejecutar
  router
    .get("/", ProductsController.getProducts) //http:localhosts:3000/api/products/
    .get("/:id", ProductsController.getProduct) //http:localhosts:3000/api/products/23
    .post("/", ProductsController.createProduct); //http:localhosts:3000/api/products/

  // Le especificamos que app prodra usar en un endPoint especifico, las peticiones especificas en router para este modulo
  app.use("/api/products", router);
};