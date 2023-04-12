import { left, right } from "../../../../helpers/either";
import { Product } from "../../domain/entities/product";
import { ProductRepository } from "../../domain/repositories/product-repository";
import { CreateProduct } from "../../domain/use-cases/create-product";

export class CreateProductUseCase implements CreateProduct {
  constructor(private readonly productRepository: ProductRepository) { }

  private formatName(name: string): string {
    return name.trim().replace(/\s+/g, '-').toLowerCase();
  }

  async execute(input: CreateProduct.Input): Promise<CreateProduct.Output> {
    const name = this.formatName(input.name);
    const price = input.price;

    const productAlreadyExists = await this.productRepository.findByName(name);

    if (productAlreadyExists) return left(new Error("Product already exists"));
    if (price <= 0) return left(new Error("Price must be greater than 0"));

    const product = new Product(name, price);
    const response = await this.productRepository.create(product);
    return right(response);
  }
}