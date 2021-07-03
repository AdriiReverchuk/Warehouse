import { Container } from './Container';
export class Controller {
   constructor(model, view) {
      this.model = model;
      this.view = view;
      this.renderItems(this.model.getProducts());
      this.handleAddContainer();
   }
   handleAddContainer() {
      const btnAdd = this.view.getElement('#add-btn');
      const btnDel = this.view.getElement('#btn-delete');
      btnAdd.addEventListener('click', () => {
         const nameForAdd = this.view.getElement('#nameForAdd').value;
         const selectForAdd = this.view.getElement('#selectForAdd').value;
         const amountForAdd = this.view.getElement('#amountForAdd').value;
         let index;
         this.model.getProducts().forEach((element, i) => {
            if (nameForAdd.toLowerCase() === element.name.toLowerCase()) {
               index = i;
            }
         });
         if (index) {
            let volume = this.model.getProducts()[index].volume + +amountForAdd;
            if (volume <= 100) {
               this.model.getProducts()[index].volume = volume;
               alert(`Контейнер ${nameForAdd} существует доавляем в него`);

               console.log(this.model.getProducts()[index].volume);
            } else {
               alert(`Контейнер ${nameForAdd} переполнен  создаю еще один`);
               this.model.getProducts()[index].volume = 100;
               this.model.getProducts().push({
                  name: nameForAdd,
                  volume: volume - this.model.getProducts()[index].volume,
                  type: selectForAdd,
               });
            }
         } else {
            let result = window.confirm(
               'Такого контейнера нет!!! Создать его?'
            );
            if (result) {
               this.model.getProducts().push({
                  name: nameForAdd,
                  volume: amountForAdd,
                  type: selectForAdd,
               });
            }
         }
         this.view.removeProducts();
         this.renderItems(this.model.getProducts());
      });
      btnDel.addEventListener('click', () => {
         const nameForDel = this.view.getElement('#inputForNameDelete').value;
         const selectForDel = this.view.getElement('#selectForDelete').value;
         const amountForDel = this.view.getElement('#amountForDelete').value;
         let index;
         this.model.getProducts().forEach((element, i) => {
            if (nameForDel.toLowerCase() === element.name.toLowerCase()) {
               index = i;
               if (element.volume <= +amountForDel) {
                  let result = window.confirm(
                     'В контейнере ничего не осталось!!! Удалить его?'
                  );
                  if (result) {
                     this.model.getProducts().splice(i, 1);
                     console.log(this.model.getProducts());
                  } else {
                     element.volume = 0;
                  }
               } else {
                  element.volume -= amountForDel;
               }
            }
         });
         this.view.removeProducts();
         this.renderItems(this.model.getProducts());
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
