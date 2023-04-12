export class Product {
  private readonly id: string;

  constructor(private name: string, private price: number) {
    this.id = new Date().toISOString();
    this.name = name;
    this.price = price
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}