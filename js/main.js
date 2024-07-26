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

  // Function to create new topElement inside mainBox
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

  // Function to remove the mainBox
  const removeElement = () => {
    box.remove();
  };

  const downElement = document.createElement("div");
  downElement.classList.add("downElement");
  downElement.innerHTML = `
    <i class="fa-solid fa-plus button createElement"></i> 
    <i class="fa-solid fa-trash button removeElement"></i>
  `;

  downElement.querySelector('.createElement').addEventListener('click', create);
  downElement.querySelector('.removeElement').addEventListener('click', removeElement);

  mainBox.appendChild(topElement);
  box.appendChild(mainBox);
  box.appendChild(downElement);
  boxes.appendChild(box);

  // Drag and Drop functionality
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