import { ProductRepository } from "../../../../modules/product/domain/repositories/product-repository";

export interface Repositories {
  getProductRepository(): ProductRepository
}