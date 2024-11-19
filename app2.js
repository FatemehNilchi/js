// function ShowValue(number, callback) {
//   callback();
//   return number * 2;
// }
// console.log(ShowValue(5, () => console.log("محاسبه انجام شد")));

// firstLog = () => {
//   console.log(1);
//   console.log(2);
// };
// middleLog = (callback) => {
//   setTimeout(() => {
//     console.log(3);
//     callback();
//   }, 1000);
// };
// lastLog = () => {
//   console.log(4);
//   console.log(5);
// };
// firstLog();
// middleLog(lastLog);

// let books = [
//   {name: "honar", author: "reza"},
//   {name: "farsi", author: "ali"},
// ];

// bookLog = () => {
//   books.forEach((book) => {
//     console.log(book);
//   });
// };
// let newBook = {
//   name: "arabi",
//   author: "amin",
// };
// addBook = (callback) => {
//   books.push(newBook);
//   callback();
// };
// setTimeout(() => {
//   addBook(bookLog);
// }, 2000);

// let isLogInPromise = new Promise((resolve, reject) => {
//   let logIn = false;

//   if (logIn) {
//     resolve("You are login :)");
//   } else {
//     reject("You are not login :(");
//   }
// });

// isLogInPromise
//   .then((res) => {
//     console.log("Result in promise:", res);
//   })
//   .catch((rej) => {
//     console.log("Result in promise:", rej);
//   });

// firstLog = () => {
//   console.log(1);
//   console.log(2);
// };
// middleLog = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(3);
//       resolve();
//     }, 1000);
//   });
// };
// lastLog = () => {
//   console.log(4);
//   console.log(5);
// };
// firstLog();
// middleLog().then(lastLog);

// let books = [
//   {name: "honar", author: "reza"},
//   {name: "farsi", author: "ali"},
// ];
// bookLog = () => {
//   books.forEach((book) => {
//     console.log(book);
//   });
// };
// let newBook = {
//   name: "arabi",
//   author: "amin",
// };
// addBook = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       books.push(newBook);
//       resolve();
//     }, 2000);
//   });
// };

// addBook().then(bookLog);

// firstLog = () => {
//   console.log(1);
//   console.log(2);
// };
// middleLog = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(3);
//       resolve();
//     }, 1000);
//   });
// };
// lastLog = () => {
//   console.log(4);
//   console.log(5);
// };

// async function allLog() {
//   firstLog();
//   await middleLog();
//   lastLog();
// }
// allLog();

// let books = [
//   {name: "honar", author: "reza"},
//   {name: "farsi", author: "ali"},
// ];
// bookLog = () => {
//   books.forEach((book) => {
//     console.log(book);
//   });
// };

// addBook = () => {
//   let newBook = {
//     name: "arabi",
//     author: "amin",
//   };
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       books.push(newBook);
//       resolve();
//     }, 2000);
//   });
// };

// async function addAndShow() {
//   await addBook();
//   bookLog();
// }

// addAndShow();

// let newData = {
//   phone: "3-333-333-3333",
//   website: "sandra",
//   company: {
//     name: "fati",
//     bs: "e-enable strategic applications",
//   },
// };
// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   body: JSON.stringify(newData),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data)).catch(error=>console.error(error));

// fetch("users.json").then((response)=>{
// return response.json()

// }).then((data)=>{
//     console.log(data);

// })
