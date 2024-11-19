// let num1 = prompt("نمره را وارد كن ");

// switch (true) {
//   case num1 >= 18:
//     alert("A");
//     break;
//   case num1 >= 15:
//     alert("B");
//     break;
//   case num1 >= 10:
//     alert("C");
//     break;
//   default:
//     alert("Faild");

//     break;
// }
//****************************************** */
// //محاسبه ميانگين
// let array1 = [];
// let num;
// do {
//   num = prompt("enter num, if yodont enter -1");
//   if (num !== "-1") {
//     array1.push(num);
//   }
//   console.log(array1);
//   console.log(array1.length);
// } while (num !== "-1");
// let len = array1.length;
// let sum = 0;
// let avg = 0;
// for (let i = 0; i < len; i++) {
//   sum = sum + Number(array1[i]);

// }
// avg = sum / len
// console.log(sum, avg);
// alert('Numbers:' + array1 + '\n' + 'sum is:'  + sum + '\n' + 'avg is:'  + avg)
//******************************************** */
// //تمرين تبديل دقيقه به ساعت
// let hour = 0;
// let minutse = 0;
// const min = prompt("دقيقه را وارد كنيد");
// if (isNaN(min)) {
//   alert("is not a number");
// } else {
//   hour = min / 60;
//   minutse = Math.round((hour - Math.floor(hour)) * 60);
//   alert(Math.floor(hour) + "ساعت" + "\n" + minutse + "دقيقه");
// }
//**************************************** */
// //تمرين سطح دسترسي
// let sex, age;
// sex = prompt("enter your sex", "");
// age = prompt("enter your age", 18);

// if (age < 18 || sex == "female") {
//   alert("شما مجاز به ورود نيستيد");
// } else {
//   alert("تبريك، شما مجاز به ورود هستيد");
// }

/////////شرط تك خطي
// age < 18 || sex == "female"
//   ? alert("شما مجاز به ورود نيستيد")
//   : alert("تبريك، شما مجاز به ورود هستيد");
//**************************************** */
///زوج يا فرد بودن عدد ورودي به كمك تابع

// let number = function (num) {
//   if (num % 2 === 0) {
//     alert("عدد زوجه");
//   } else {
//     alert("عدد فرده");
//   }

//   return num
// };
// let numb = prompt("عدد را وارد كن");
// alert(number(numb))
//********************************************* */
// let userName = prompt("enter username:");
// let password = prompt("enter password:");

// if (userName.length < 3) {
//   alert("please enter name with more than 3 char");
// } else if (password.length < 8) {
//   alert("please enter password with more than 8 char");
// } else if (userName.length >= 3 && password.length >= 8) {
//   alert("data saved");
// }
///******************************* */
// let userName = prompt("enter name:");
// (userName.toLowerCase() === "ali")
//   ? alert("yes")
//   : alert("no");
// *******************************
// let rand = Math.floor(Math.random() * 100000);
// let num = prompt(rand);
// if (num == rand) {
//   alert("yes");
// } else {
//   alert("no");
// }
////******************************************* */

// let num = prompt("enter num");
// let sum = 0;
// for (let i = 0; num / 10 != 0; i++) {
//   sum = sum + Math.floor(num % 10);
//   num = Math.floor(num / 10);
// }
// alert(sum);

///***************** */
// let num = prompt("enter num");
// let sum = 0;
// for (let i = 0; num / 10 != 0; i++) {
//   sum++;
//   num = Math.floor(num / 10);
// }
// alert(sum);
/////////////////////////////////////////////////
// let arr = [12, 32, 3];
// console.log(arr)
// arr[4] = 34
// console.log(arr)

// let num1 = prompt("enter num1");
// let num2 = prompt("enter num2");
// let power = 1;
// for (num2; (num2 > 0); num2--) {
//   console.log("1:" + num1);
//   console.log("2:" + num2);
//   console.log("p:" + power);
//   power = num1 * power;
// }

////////
// let i = 0;
// if (num2 != 0) {
//   do {
//     power = num1 * power;
//     i++;
//   } while (i < num2);
// }
////////////////////
// while (i < num2) {
//   power = num1 * power;
//   i++;
// }
// alert(power);

///////////////////////************************************* */
// let num1 = prompt("enter num1");
// let sum = 0;
// let arr = [];
// while (num1 != -1) {
//   arr.push(num1);
//   sum = parseInt(sum) + parseInt(num1);
//   num1 = prompt("enter num1");
// }

// alert(sum / arr.length);
//////////////*************************************** */
// let users = [
//   { id: 1, name: "sara", family: "safavi", age: 21 },
//   { id: 2, name: "ali", family: "sadeghi", age: 61 },
//   { id: 3, name: "amin", family: "razavi", age: 41 },
// ];
// let newUser = {};
// let name = prompt("name");
// while (name.length < 3 || name.length > 10) {
//   name = prompt("enter again name");
// }
// let family = prompt("family");
// while (family.length < 3 || family.length > 15) {
//   family = prompt("enter again family");
// }
// let age = prompt("age");
// while (age.length > 3 || isNaN(age)) {
//   age = prompt("enter again age");
// }
// newUser.id = users.length + 1;
// newUser.name = name;
// newUser.family = family;
// newUser.age = parseInt(age);
// console.log(newUser);
// users.push(newUser);
// console.log(users);
// **********************************************************
// let users = [
//   { id: 1, name: "sara", family: "safavi", age: 21 },
//   { id: 2, name: "ali", family: "sadeghi", age: 61 },
//   { id: 3, name: "amin", family: "razavi", age: 41 },
// ];

// let userFind = users.some((user) => {
//   console.log(user);
//   return user.age > 40;
// });

// console.log(userFind);

// let texts = "hello js";
// let userFind = texts.includes("js");

// console.log(userFind);
// *****************************************************************
// let databese = [
//   { id: 1, pruduct: "book", price: 450, mojood: true },
//   { id: 2, pruduct: "pen", price: 350, mojood: true },
//   { id: 3, pruduct: "headphone", price: 230, mojood: false },
//   { id: 4, pruduct: "bag", price: 430, mojood: true },
//   { id: 5, pruduct: "phone", price: 120, mojood: true },
// ];

// let userShop = [
//   { id: 2, pruduct: "pen", price: 350 },
//   { id: 4, pruduct: "bag", price: 430 },
//   { id: 5, pruduct: "phone", price: 120 },
// ];
// let target;
// let sum = 0
// let newShop = prompt("enter pruduct");
// let myRes = databese.some((pruductName) => {
//   target = pruductName;
//   return pruductName.pruduct == newShop && pruductName.mojood;
// });
// if (myRes) {
//   userShop.push({
//     id: target.id,
//     pruduct: target.pruduct,
//     price: target.price,
//   });
//   console.log(target);
//   console.log(userShop);
// } else {
//   console.log("اين محصول موجود نيست");
// }
// userShop.forEach(element => {
//   sum = sum + element.price
// });

// console.log(sum);
// **************************************************
// let databese = [
//   { id: 1, pruduct: "book", price: 450, mojood: true },
//   { id: 2, pruduct: "pen", price: 350, mojood: true },
//   { id: 3, pruduct: "headphone", price: 230, mojood: true },
//   { id: 4, pruduct: "bag", price: 430, mojood: true },
//   { id: 5, pruduct: "phone", price: 120, mojood: true },
// ];
// let isPruduct = databese.every((item) => {
//   return item.mojood === true;
// });
// console.log(isPruduct);
//////////////////////********************************************** */
// let databese = [
//   { id: 1, pruduct: "book", price: 450, mojood: true },
//   { id: 2, pruduct: "pen", price: 350, mojood: true },
//   { id: 3, pruduct: "headphone", price: 230, mojood: true },
//   { id: 4, pruduct: "bag", price: 430, mojood: true },
//   { id: 5, pruduct: "phone", price: 120, mojood: true },
// ];
// let userShop = [
//   { id: 2, pruduct: "pen", price: 350 },
//   { id: 4, pruduct: "bag", price: 430 },
//   { id: 5, pruduct: "phone", price: 120 },
// ];
// let addOrRem;
// do {
//   addOrRem = prompt("1 for add / 2 for remove /-1 finish");
//   if (addOrRem == 1) {
//     let newProduct = prompt("enter product");

//     let result = databese.some((item) => {
//       if (item.pruduct == newProduct) {
//         userShop.push({
//           id: item.id,
//           pruduct: item.pruduct,
//           price: item.price,
//         });
//         return item.pruduct == newProduct;
//       } else {
//         alert("محصول موجود نيست");
//         return 0;
//       }
//     });

//     // console.log(target);
//     console.log(userShop);
//   }

//   if (addOrRem == 2) {
//     let remProduct = prompt("enter product");
//     let target;
//     // let result = userShop.some((item , index) => {
//     //   if (item.pruduct == remProduct) {
//     //     target = index;
//     //     // userShop.splice();
//     //     return true;

//     //   }
//     //   //  else {
//     //   //   alert('محصول موجود نيست')
//     //   //   return false;
//     //   // }
//     // });

//     let result = userShop.findIndex((item) => {
//       return item.pruduct == remProduct;
//     });

//     if (target != -1) {
//       userShop.splice(result, 1);
//     }
//     console.log(userShop);
//   }
// } while (addOrRem != -1);
////******************************************** */
// let databese = [
//   { id: 1, pruduct: "book", price: 450, mojood: true },
//   { id: 2, pruduct: "pen", price: 350, mojood: true },
//   { id: 3, pruduct: "headphone", price: 230, mojood: true },
//   { id: 4, pruduct: "bag", price: 430, mojood: true },
//   { id: 5, pruduct: "phone", price: 120, mojood: true },
//   { id: 6, pruduct: "pencil", price: 90, mojood: true },
// ];

// let sum = 0;
// let posts = 0;

// let pricePost = databese.filter((item) => {
//   return item.price < 150;
// });
// // pricePost.forEach(() => {
// //   posts = posts + 10;
// // });
// //or
// posts = pricePost.length * 10;

// databese.forEach((elm) => {
//   sum = sum + elm.price;
// });
// // console.log("all price:" + " " + (sum + posts));
// console.log(databese.join('/'));

////////////////******************************************* */
// let text = prompt("enter text");

// let textArr = text.split("");
// // let revTextArr = [...textArr].reverse();
// // console.log(textArr);

// // let isPalindrome = true;
// // for (let i = 0; i < textArr.length; i++) {
// //   if (textArr[i] !== revTextArr[i]) {
// //     isPalindrome = false;
// //     break;
// //   }
// // }
// // // console.log(isPalindrome)
// // isPalindrome ? alert("yes it is") : alert("no it is'nt");
// // or *********
// let revTextArr = textArr.reverse();
// let revTextWord = revTextArr.join("");
// revTextWord === text ? alert("yes it is") : alert("no it is'nt");
//********************************************
// ! todo project
// let toDos = [
//   { id: 1, title: "js", text: "finish js", status: true },
//   { id: 2, title: "css", text: "finish css", status: true },
//   { id: 3, title: "html", text: "finish html", status: true },
// ];

// let program;
// do {
//   program = prompt("1.add todo:\n2.remove todo:\n3.done todo:\n-1.end process");
//   if (program == 1) {
//     let newTitle = prompt("write title:");
//     let newText = prompt("write text:");
//     toDos.push({
//       id: toDos.length + 1,
//       title: newTitle,
//       text: newText,
//       status: true,
//     });
//     console.log(toDos);
//   }
//   if (program == 2) {
//     let remTitle = prompt("write title for remove:");
//     let newArr = toDos.filter((item) => {
//       return item.title !== remTitle;
//     });
//     console.log(newArr);
//   }
//   if (program == 3) {
//     let doneTitle = prompt("write title for done:");
//     let doneDo;
//     toDos.some((item) => {
//       if (item.title == doneTitle) {
//         item.status = false;
//       }
//     });
//     console.log(toDos);
//   }
//   console.log(toDos);
// } while (program != -1);
