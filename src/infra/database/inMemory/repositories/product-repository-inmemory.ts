import { Product } from "../../../../modules/product/domain/entities/product";
import { ProductRepository } from "../../../../modules/product/domain/repositories/product-repository";

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  async create(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }

  async findAll(): Promise<Product[]> {
    return [...this.products]
  }

  async findByName(name: string): Promise<Product | null> {
    const product = this.products.find(product => product.getName() === name);
    return product || null
  }
}