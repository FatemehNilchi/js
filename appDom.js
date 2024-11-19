// ? دسترسي به المنت ها
// * getElementById
// * getElementsByClassName
// * getElementsByName
// * getElementsByTagName
// * querySelectorAll
// * querySelector

// ? دسترسي به محتواي المنت ها
// * console.log(titleHtml[0].innerHTML)
// * console.log(titleHtml[0].innerText)
// * console.log(titleHtml[0].textContent)
// * console.log(inputText[0].value)

// ? دسترسي به استايل و اتريبيوت المنت ها
// * titleHtml[0].style.color = 'red'
// * console.log(titleHtml[0].getAttribute('style'))
// * titleHtml[0].setAttribute('align' , 'left')

// ? ساخت المنت
// * let newDiv = document.createElement('h2')
// * newDiv.style.color= 'red'
// * newDiv.setAttribute('class' , 'myDiv')
// * newDiv.innerText = 'by'
// * console.log(newDiv)

// ? اپند كردن المنت ساخته شده به دام

// * let titleHtml = document.getElementsByTagName("div");
// * let newDiv = document.createElement("h2");
// * let newDiv2 = document.createElement("h3");
// * newDiv.style.color = "red";
// * newDiv.setAttribute("class", "myh2");
// * newDiv.innerText = "by";
// * newDiv2.innerText = "good";
// * titleHtml[0].append(newDiv);
// * titleHtml[0].appendChild(newDiv2);

// ? ميني پروژه لامپ

// * let pic = document.querySelector("img");
// * let source = pic.getAttribute("src");
// * let btnText = document.querySelector("button");
// * let lampFlag = false;

// * function clickFunction() {
// *  if (lampFlag) {
// *    pic.setAttribute("src", "./bulboff.gif");
// *    btnText.innerText = "click me to turning ON";
// *    lampFlag = false;
// *  } else {
// *    pic.setAttribute("src", "./bulbon.gif");
// *    btnText.innerText = "click me to turning OFF";

// *    lampFlag = true;
// *  }
// * }

// ? ميني پروژه چك كردن ورودي ها

// * let nameInpt = document.querySelector("#name");
// * let passInpt = document.querySelector("#password");
// * let btn = document.querySelector(".btn");
// * let modal = document.querySelector(".modal");

// * function checkValues() {
// *   if (nameInpt.value.length < 8 || passInpt.value.length < 4) {
// *     modal.style.backgroundColor = "#d45252";
// *     modal.innerText = "لطفا اطلاعات را به درستي وارد كنيد";
// *     modal.style.display = "inline";
// *     let timer = setTimeout(() => {
// *       modal.style.display = "none";
// *     }, 2000);
// *   } else {
// *     modal.style.backgroundColor = "#208b32";
// *     modal.innerText = "لاگين با موفقيت انجام شد";
// *     modal.style.display = "inline";
// *     let timer = setTimeout(() => {
// *       modal.style.display = "none";
// *     }, 2000);
// *   }
// * }
//  ////////////////////////////////////////
// function pressInput() {
//   let passInpt = document.querySelector(".input");
//   let validation = document.querySelector(".validation");
//   if (passInpt.value.length < 8) {
//     validation.innerText = " رمز بايد حداقل 8 رقم باشد";
//     validation.style.color = "red";
//   } else {
//     validation.innerText = "رمز معتبر است";
//     validation.style.color = "green";
//   }
// }

////////////////////////////////////////
// ? ميني پروژه بليت كشور ها
// * let cities = document.querySelector(".cities");
// * let towns = document.querySelector(".towns");
// * let townsArr = {
// *   "Select Country": ["Select City..."],
// *   Iran: ["Tehran", "Shiraz", "Esfahen", "Gilan"],
// *   Canada: ["Torento", "Quebec", "Montral", "Vancouver"],
// *   "United State": ["San Diego", "Los Angles", "Chicago", "Boston"],
// * };

// * cities.addEventListener("change", function () {
// *   towns.innerHTML = "";
// *   let shahr = cities.value;
// *   console.log(shahr);
// *   townsArr[shahr].forEach((element, index) => {
// *     console.log(element);
//     //////////
// *     let newOption = document.createElement("option");
// *     newOption.value = element;
// *     newOption.innerText = element;
// *     towns.append(newOption);

//     // todo: به جاي بالايي از اين خطم مستوني استفاده كني
//     // * // towns.innerHTML +=
//     // * //  "<option value= " + element + " >" + element + "</option>";
// *   });

// *   console.log(towns);
// * });
////////////////////////////////////////////////////////
// ? ميني پروژه تبديل دما

// let inputVal = document.getElementById("input");
// let firstVal = document.getElementById("first");
// let secondVal = document.getElementById("second");
// let resultVal = document.getElementById("result");

// let switchBtn = document.getElementById("switch");
// let convertBtn = document.getElementById("convert");
// let clearBtn = document.getElementById("clear");

// function funcSwitch() {
//   if (firstVal.innerText === "°C") {
//     firstVal.innerText = "°F";
//     secondVal.innerText = "°C";
//     inputVal.setAttribute("placeholder", "°F");
//     console.log(inputVal.value);
//   } else {
//     firstVal.innerText = "°C";
//     secondVal.innerText = "°F";
//     inputVal.setAttribute("placeholder", "°C");

//     console.log(inputVal.value);
//   }
// }
// function funcConvert() {
//   if (firstVal.innerText === "°C") {
//     resultVal.innerText = ((inputVal.value * 9) / 5 + 32).toFixed(2);
//   } else {
//     resultVal.innerText = ((inputVal.value - 32) * (5 / 9)).toFixed(2);
//   }
// }
// function funcClear() {
//   inputVal.value = "";
//   resultVal.innerText = "";
//   firstVal.innerText = "°C";
//   secondVal.innerText = "°F";
//   inputVal.setAttribute("placeholder", "°C");
// }

// switchBtn.addEventListener("click", funcSwitch);
// convertBtn.addEventListener("click", funcConvert);
// clearBtn.addEventListener("click", funcClear);

// ///////////////////////////////////////////////////////
//? حذف آيتم از دام
// const $ = document;
// function _queryAll(query) {
//   return $.querySelectorAll(query);
// }
// let list = _queryAll(".list");
// let items = _queryAll(".list-item");
// // let items = Array.from(_class("list-item"));

// items.forEach((item) => {
//   item.addEventListener("click", (item) => {
//     item.target.parentElement.remove();
//   });
// });
//////////////////////////////////////////////////////
//? contextmenu  --- copy-cut-clipboard

// const input = document.querySelector("textarea");
// // input.addEventListener("contextmenu", () => {
// //   console.log("input")
// // });
// input.addEventListener("copy", () => {
//   event.preventDefault();
// });
// input.addEventListener("cut", () => {
//   event.preventDefault();
// });
// input.addEventListener("paste", () => {
//   event.preventDefault();
// });
////////////////////////////////////////////////////
// ! تمرين مطالب قبلي
//? includes() , some(), splice() , every() -->
// const inputNewTask = document.querySelector("#taskInput");
// const inputCheckTask = document.querySelector("#taskCheckInput");
// const listTask = document.querySelector("#taskList");
// const addTaskBtn = document.querySelector("#addTaskBtn");
// const checkTaskBtn = document.querySelector("#checkTaskBtn");
// const checkSomeBtn = document.querySelector("#checkSomeBtn");
// const checkEveryBtn = document.querySelector("#checkEveryBtn");

// let tasks = [
//   "learning js",
//   "learning vue",
//   "learning react js",
//   "learning react native",
// ];

// // funcAddTask = () => {
// //   listTask.innerHTML = "";
// //   tasks.forEach((task) => {
// //     let newTask = document.createElement("li");
// //     newTask.className = "task-item";
// //     newTask.innerText = task;
// //     listTask.appendChild(newTask);
// //   });
// // };

// // addTaskBtn.addEventListener("click", () => {
// //   tasks.push(inputNewTask.value);
// //   inputNewTask.value = "";
// //   funcAddTask();
// // });

// funcAddTask = (task) => {
//   let newTask = document.createElement("li");
//   newTask.className = "task-item";
//   newTask.innerHTML = `<button class="delete">delete</button><span>${task}</span>`;
//   newTask.querySelector(".delete").addEventListener("click", () => {
//     let taskText = newTask.querySelector("span").textContent;
//     tasks = tasks.filter((t) => t !== taskText);
//     newTask.remove();
//   });
//   listTask.appendChild(newTask);
// };

// window.onload = () => {
//   tasks.forEach((task) => funcAddTask(task));
// };
// addTaskBtn.addEventListener("click", () => {
//   let newTask = inputNewTask.value.trim();
//   if (newTask && !tasks.includes(newTask)) {
//     tasks.push(inputNewTask.value);
//     funcAddTask(newTask);
//     inputNewTask.value = "";
//     console.log(tasks);
//   } else {
//     alert("لطفا تسك خالي يا تكراري وارد نكنيد");
//     inputNewTask.value = "";
//   }
// });
// checkTaskBtn.addEventListener("click", () => {
//   if (tasks.includes(inputCheckTask.value)) {
//     console.log("first");
//   }
// });

// checkSomeBtn.addEventListener("click", () => {
//   if (
//     tasks.some((item) => {
//       return item.length > 12;
//     })
//   ) {
//     alert("تسك طولاني هم داريد");
//   }
// });

// checkEveryBtn.addEventListener("click", () => {
//   let check = tasks.every((item) => {
//     return item.includes("learning");
//   });
//   if (check) {
//     alert("بله، همه وظايف شما شامل كلمه learning ميشود.");
//   }
// });
//////////////////////////////////////////////////////////////////////////////////////////
//? keyup
// const body = document.querySelector("body");
// let colors = [
//   "#8B5DFF",
//   "#AE445A",
//   "#FF6500",
//   "#B17457",
//   "#EEDF7A",
//   "#03346E",
//   "#E90074",
//   "#373A40",
//   "#750E21",
//   "#00712D",
// ];
// setTimeout(() => {
//   let randomeColorIndex = Math.floor(Math.random() * 10);
//   console.log(randomeColorIndex);
//   body.style.backgroundColor = colors[randomeColorIndex];
// }, 1000);
// setInterval(() => {
//   let randomeColorIndex = Math.floor(Math.random() * 10);
//   console.log(randomeColorIndex);
//   body.style.backgroundColor = colors[randomeColorIndex];
// }, 2000);
//////////////////////////////
// const body = document.querySelector("body");
// body.innerHTML = `<input placeholder="Write"/>`;
// const input = document.querySelector("input");
// // const input2 = document.createElement("input");
// // body.append(input2);

// let colors = [
//   "#8B5DFF",
//   "#AE445A",
//   "#FF6500",
//   "#B17457",
//   "#EEDF7A",
//   "#03346E",
//   "#E90074",
//   "#373A40",
//   "#750E21",
//   "#00712D",
// ];

// colorRandomeHandler = () => {
//   let randomeColorIndex = Math.floor(Math.random() * 10);
//   console.log(randomeColorIndex);
//   body.style.backgroundColor = colors[randomeColorIndex];
// };

// input.addEventListener("focus", (event) => {
//   colorRandomeHandler();
//   input.classList.toggle('toggled')
// });
// input.addEventListener("blur", (event) => {
//   body.style.backgroundColor = "#fff";
// });
// //////////////////////////////////////////////////////////////////////////////


let testObject = JSON.parse(localStorage.getItem("testObject")) || {}; // بررسی برای مقداردهی اولیه
let list = document.querySelector("#taskList");
let input = document.querySelector("#taskInput");
let btn = document.querySelector("button");

// بارگذاری تسک‌ها از localStorage
const loadTasks = () => {
  list.innerHTML = "";
  Object.keys(testObject).forEach(function (key) {
    let newLi = document.createElement("li");
    newLi.innerText = testObject[key];
    list.appendChild(newLi);
  });
};

document.addEventListener("DOMContentLoaded", loadTasks);

btn.addEventListener("click", () => {
  // اضافه کردن تسک جدید به testObject
  let taskId = Object.keys(testObject).length + 1;
  testObject[taskId] = input.value;

  // افزودن تسک جدید به لیست در HTML
  let newLi = document.createElement("li");
  newLi.innerText = input.value;
  list.appendChild(newLi);

  // ذخیره testObject در localStorage
  localStorage.setItem("testObject", JSON.stringify(testObject));

  // پاک کردن ورودی بعد از اضافه کردن تسک
  input.value = "";
});