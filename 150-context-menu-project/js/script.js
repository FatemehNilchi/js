const html = document.querySelector("html");
const body = document.querySelector("body");
const menu = document.querySelector("#contextMenu");
let isTranceParent = true;
html.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
body.addEventListener("contextmenu", (event) => {
  if (isTranceParent) {
    console.log(event.pageX);
    menu.style.left = event.pageX;
    menu.style.top = event.pageY;
    menu.style.display = "inline";
    isTranceParent = !isTranceParent;
  } else {
    menu.style.display = "none";
    isTranceParent = !isTranceParent;
  }
});

body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menu.style.display = "none";
    isTranceParent = true;
  }
});
