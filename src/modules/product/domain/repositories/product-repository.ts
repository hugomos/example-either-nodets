import { Product } from "../entities/product";

export interface ProductRepository {
  create(product: Product): Promise<Product>
  findAll(): Promise<Product[]>
  findByName(name: string): Promise<Product | null>
}