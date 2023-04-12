import { ProductRepository } from "../../../modules/product/domain/repositories/product-repository";
import { InMemoryProductRepository } from "./repositories/product-repository-inmemory";

export class RepositoriesFactory {
  private productRepository: ProductRepository | null = null;

  getProductRepository(): ProductRepository {
    if (!this.productRepository) {
      this.productRepository = new InMemoryProductRepository();
    }
    return this.productRepository;
  }
}