export class Model {
   products = [
      {
         name: "Кола",
         volume: 20,
         type: "Liquid Products",
      },
      {
         name: "Квас",
         volume: 99,
         type: "Liquid Products",
      },
      {
         name: "Сахар",
         volume: 28,
         type: "Buld Products",
      },
      {
         name: "Рис",
         volume: 45,
         type: "Buld Products",
      },
   ];
   constructor() {}
   getProducts() {
      return this.products;
   }
}
