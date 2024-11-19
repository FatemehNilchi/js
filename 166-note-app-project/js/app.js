const input = document.querySelector("#input-field");
const colors = document.querySelectorAll(".color-box");
const addBtn = document.querySelector("#btn-save");
const delBtn = document.querySelector("#btn-delete");
const listBox = document.querySelector("#listed");
let listItems = document.querySelectorAll("div.card");
let backColor = "";

colors.forEach((color) => {
  color.addEventListener("click", () => {
    backColor = color.style.backgroundColor;
    input.style.backgroundColor = backColor;
  });
});

addBtn.addEventListener("click", () => {
  const text = input.value;
  if (text.trim() !== "") {
    let newElm = document.createElement("div");
    newElm.className = "card shadow-sm rounded";
    newElm.style.backgroundColor = backColor;
    newElm.innerHTML = `<p class="card-text p-3">${text}</p>`;
    listBox.appendChild(newElm);
    input.value = "";
    listItems = document.querySelectorAll("div.card");
    console.log(listItems);
    listItems.forEach((item) => {
        item.addEventListener("click", (e) => {
          console.log(listItems);
          e.target.parentElement.remove();
        });
      });
  }
});

delBtn.addEventListener("click", () => {
  input.value = "";
  input.style.backgroundColor = "#fff";
});


