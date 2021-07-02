import { Container } from "./Container";
export class Controller {
   constructor(model, view) {
      this.model = model;
      this.view = view;
      this.renderItems(this.model.getProducts());
      this.handleAddContainer();
   }
   handleAddContainer() {
      const btn = this.view.getElement("#add-btn");
      btn.addEventListener("click", () => {
         const nameForAdd = this.view.getElement("#nameForAdd").value;
         const selectForAdd = this.view.getElement("#selectForAdd").value;
         const amountForAdd = this.view.getElement("#amountForAdd").value;
         this.model.getProducts().push({
            name: nameForAdd,
            volume: amountForAdd,
            type: selectForAdd,
         });
         this.view.removeProducts();
         this.renderItems(this.model.getProducts());
         console.log(nameForAdd, selectForAdd, amountForAdd);
      });
   }
   renderItems(product) {
      for (let i = 0; i < product.length; i++) {
         const container = new Container(
            product[i].name,
            product[i].type,
            product[i].volume
         );
      }
   }
}
