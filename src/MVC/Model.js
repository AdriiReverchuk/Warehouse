export class Model{
   liquidProducts = [{
      name:"Кола",
      volume:20,
      type:"liquid"
   },
   {
      name:"Квас",
      volume:99,
      type:"liquid"
   }];
   buldProducts = [{
      name:"Сахар",
      volume:28,
      type:"bulk"
   },
   {
      name:"Рис",
      volume:45,
      type:"bulk"
   },
   ];
   constructor(){
   }
   getLiquidProducts(){
      return this.liquidProducts;
   }
   getBulkProducts(){
      return this.buldProducts;
   }
}