const modal = document.querySelector(".modal-parent");
const btn = document.querySelector("button");
const back = document.querySelector("section");
const closeBtn = document.querySelector(".X");
const escBtn = document.querySelector("body");

function closeHandler(event) {
  modal.style.display = "none";
  back.style.filter = "blur(0px)";
  console.log("close");
}
btn.addEventListener("click", () => {
  modal.style.display = "block";
  back.style.filter = "blur(10px)";
  console.log("open");
});

closeBtn.addEventListener("click", closeHandler);

escBtn.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeHandler();
  }
});
