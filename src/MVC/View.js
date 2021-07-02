export class View {
   constructor() {}
   removeProducts() {
      const allProducts = document.querySelectorAll(".col");
      for (let i = 0; i < allProducts.length; i++) {
         allProducts[i].remove();
      }
   }
   getElement(tag) {
      const element = document.querySelector(tag);
      return element;
   }
   createElement(tag, className, text) {
      const element = document.createElement(tag);
      if (className) element.classList.add(className);
      if (text) element.textContent = text;
      return element;
   }
}
