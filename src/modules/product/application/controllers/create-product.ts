import { left, right } from "../../../../helpers/either";
import { CreateProduct } from "../../domain/use-cases/create-product";
import { CreateProductUseCase } from "../use-cases/create-product";

export class CreateProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {
    this.createProductUseCase = createProductUseCase
  }

  async handle(input: CreateProduct.Input): Promise<CreateProduct.Output> {
    const productOrError = await this.createProductUseCase.execute(input)
    if (productOrError.isLeft()) return left(productOrError.value)
    return right(productOrError.value)
  }
}