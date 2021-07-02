import { View } from "./View";
export class Container {
   constructor(name, type, amount) {
      this.name = name;
      this.type = type;
      this.amount = amount;
      this.addContainer(this.name, this.type, this.amount);
   }
   addContainer(name, type, amount) {
      if (type === "Liquid Products") {
         const liquidContainer = document.querySelectorAll(".row .box-c");
         const col = document.createElement("div");
         col.classList.add("col");
         const cylinder = document.createElement("div");
         cylinder.classList.add("cylinder");
         col.append(cylinder);
         const frame = document.createElement("div");
         frame.classList.add("frame");
         cylinder.append(frame);
         const strips = document.createElement("div");
         strips.classList.add("strips");
         frame.append(strips);
         for (let i = 1; i <= 24; i++) {
            const strip = document.createElement("div");
            strip.classList.add(`strip-${i}`);
            if (i === 24) {
               strip.textContent = `${name} ${amount}/100l`;
            }
            strips.append(strip);
         }
         if (liquidContainer) {
            if (
               liquidContainer[liquidContainer.length - 1].childNodes.length <=
               3
            ) {
               liquidContainer[liquidContainer.length - 1].append(col);
            } else {
               const row = document.createElement("div");
               row.classList.add("row", "box-c");
               row.append(col);
               const block = document.getElementById("liquid");
               block.append(row);
            }
         }
      } else {
         const block = document.getElementById("buld");
         const buldContainer = document.querySelectorAll(".row .box");
         const col = document.createElement("div");
         col.classList.add("col", "cube");
         const figureTop = document.createElement("figure");
         figureTop.classList.add("side", "top");
         const figureLeft = document.createElement("figure");
         figureLeft.classList.add("side", "left");
         figureLeft.textContent = name;
         const figureRight = document.createElement("figure");
         figureRight.classList.add("side", "right");
         figureRight.textContent = `${amount}/100kg`;
         col.append(figureTop, figureLeft, figureRight);
         if (buldContainer) {
            if (
               buldContainer[buldContainer.length - 1].childNodes.length <= 3
            ) {
               buldContainer[buldContainer.length - 1].append(col);
            } else {
               const row = document.createElement("div");
               row.classList.add("row", "box");
               row.append(col);
               block.append(row);
            }
         }
      }
   }
}
