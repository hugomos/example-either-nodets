import { Either } from "../../../../helpers/either"
import { Product } from "../entities/product"

export interface CreateProduct {
  execute(input: CreateProduct.Input): Promise<CreateProduct.Output>
}

export namespace CreateProduct {
  export type Input = {
    name: string
    price: number
  }

  export type Output = Either<Error, Product>
}