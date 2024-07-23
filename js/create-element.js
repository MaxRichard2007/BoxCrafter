const show = () => {
    const boxs = document.querySelector(".boxs");

    const box = document.createElement("div");
    box.classList.add("box");

    const topElement = document.createElement("div");
    topElement.classList.add("top");
    topElement.innerHTML = "<p>hi hello</p>";

    const downElement = document.createElement("div");
    downElement.classList.add("down");
    downElement.innerHTML = `<i class="fa-solid fa-plus"></i>`;

    box.appendChild(topElement);
    box.appendChild(downElement);
    boxs.appendChild(box);
};

show();
show();
show();