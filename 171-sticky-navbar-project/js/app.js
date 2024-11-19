const navBar = document.querySelector("#mainNav");
const navBarTitle = document.querySelector("li > a");
const navImg = document.querySelector("img");
scrollHandler = (event) => {
  let scrollFromTop = document.documentElement.scrollTop;
  if (scrollFromTop > 0) {
    navImg.style.height = "64px";
    navBar.classList.add("bg-black");
    navBar.classList.add("txt-white");
    // navBarTitle.classList.add("txt-white")
    console.log("scrollFromTop");
    console.log(navBarTitle);
  } else {
    navImg.style.height = "84px";
    navBar.classList.remove("txt-white");
    navBar.classList.remove("bg-black");
    // navBarTitle.classList.remove("txt-white")
    console.log(navBarTitle);
  }
};

document.addEventListener("scroll", scrollHandler);
