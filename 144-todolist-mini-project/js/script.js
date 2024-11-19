const $ = document;
function _queryAll(query) {
  return $.querySelectorAll(query);
}
function _query(query) {
  return $.querySelector(query);
}
let list = _query(".list-group");
let items = _queryAll(".list-group-item  > .delete");
let input = _query(".form-control");


// !پروژه تو دو ليست
function funcAdd() {
  const text = input.value;
  if (text.trim() !== "") {
    // چک کردن که ورودی خالی نباشد
    let newTodo = document.createElement("li");
    newTodo.className = "list-group-item";
    newTodo.innerHTML = `<span>${text}</span><i class="delete">delete</i>`;
    list.appendChild(newTodo);
    input.value = ""; // پاک کردن مقدار ورودی بعد از اضافه کردن به لیست
  }
}

input.addEventListener("keydown", function (e) {
  // بررسی اینکه آیا دکمه فشرده شده "Enter" است
  if (e.key === "Enter") {
    funcAdd();
    e.preventDefault();
  }
});

// استفاده از event delegation برای حذف آیتم
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
