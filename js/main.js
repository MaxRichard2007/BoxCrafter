let bigBox;

const initializeBigBox = () => {
  if (!bigBox) {
    bigBox = document.createElement("div");
    bigBox.classList.add("bigBox");

    const boxes = document.createElement("div");
    boxes.classList.add("boxes");
    bigBox.appendChild(boxes);

    document.body.appendChild(bigBox);
  }
  return bigBox.querySelector(".boxes");
};

const createBox = () => {
  const boxes = initializeBigBox();

  const box = document.createElement("div");
  box.classList.add("box");

  const mainBox = document.createElement("div");
  mainBox.classList.add("mainBox");

  const topElement = document.createElement("div");
  topElement.classList.add("topElement");
  topElement.innerHTML = `hello`;
  topElement.setAttribute("draggable", "true");

  const create = () => {
    const newTopElement = document.createElement("div");
    newTopElement.classList.add("topElement");
    newTopElement.innerHTML = `hello`;
    newTopElement.setAttribute("draggable", "true");

    newTopElement.addEventListener("dragstart", () => {
      newTopElement.classList.add("dragging");
    });

    newTopElement.addEventListener("dragend", () => {
      newTopElement.classList.remove("dragging");
    });

    mainBox.appendChild(newTopElement);
  };

  const removeElement = () => {
    mainBox.remove();
  };

  const downElement = document.createElement("div");
  downElement.classList.add("downElement");
  downElement.innerHTML = `
    <i class="fa-solid fa-plus button createElement" onclick="create()"></i> 
    <i class="fa-solid fa-trash button removeElement" onclick="removeElement()"></i>
  `;

  mainBox.appendChild(topElement);
  box.appendChild(mainBox);
  box.appendChild(downElement);
  boxes.appendChild(box);

  // Drag And Drop
  topElement.addEventListener("dragstart", () => {
    topElement.classList.add("dragging");
  });

  topElement.addEventListener("dragend", () => {
    topElement.classList.remove("dragging");
  });

  mainBox.addEventListener("dragover", (event) => {
    event.preventDefault();
    const draggedElement = document.querySelector(".dragging");
    mainBox.appendChild(draggedElement);
  });
};
