// function createBox() {
//   const boxes = document.querySelector(".boxes");

//   const box = document.createElement("button");
//   box.classList.add("box");

//   const topElement = document.createElement("div");
//   topElement.classList.add("top");
//   topElement.innerHTML = "<p>hi hello</p>";
//   topElement.setAttribute("draggable", "true");

//   const downElement = document.createElement("div");
//   downElement.classList.add("down");
//   downElement.innerHTML = `<i class="fa-solid fa-plus"></i>`;

//   box.appendChild(topElement);
//   box.appendChild(downElement);
//   boxes.appendChild(box);

//     // اضافه کردن رویدادهای درگ به topElement
//     topElement.addEventListener("dragstart", (e) => {
//       e.dataTransfer.setData("text/plain", null); // برای کار با فایرفاکس
//       topElement.classList.add("dragging");
//     });

//     topElement.addEventListener("dragend", () => {
//       topElement.classList.remove("dragging");
//     });

//     // اضافه کردن رویدادهای درگ به باکس
//     box.addEventListener("dragover", (event) => {
//       event.preventDefault(); // برای اجازه دادن به دراپ
//     });

//     box.addEventListener("drop", () => {
//       const draggedElement = document.querySelector(".dragging");
//       if (draggedElement) {
//         box.appendChild(draggedElement);
//       }
//     });
//   }

