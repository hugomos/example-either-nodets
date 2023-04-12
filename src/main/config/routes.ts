import { Router } from "express";
import { createProductControllerFactory } from "../../modules/product/application/factories/product-controller-factory";
import { RepositoriesFactory } from "../../infra/database/inMemory/repositories-factory";

const router = Router();

router.post("/products", async (req, res) => {

  const repositoriesFactory = new RepositoriesFactory()
  const productController = createProductControllerFactory(repositoriesFactory)

  const { name, price } = req.body

  if (!name || !price) {
    return res.status(400).json({ error: "name and price parameters are mandatory and cannot be null" })
  }

  const productOrError = await productController.handle({ name, price })

  if (productOrError.isLeft()) return res.status(400).json(productOrError.value.message)

  return res.status(200).json(productOrError.value)
})

export { router }