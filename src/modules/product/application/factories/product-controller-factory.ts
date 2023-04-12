import { RepositoriesFactory } from "../../../../infra/database/inMemory/repositories-factory";
import { Repositories } from "../../../../infra/database/inMemory/repositories/repositories";
import { CreateProductController } from "../controllers/create-product";
import { CreateProductUseCase } from "../use-cases/create-product";

export function createProductControllerFactory(repositoriesFactory: Repositories) {
  const createProductUseCase = new CreateProductUseCase(
    repositoriesFactory.getProductRepository()
  );

  const createProductController = new CreateProductController(
    createProductUseCase
  )

  return createProductController
}