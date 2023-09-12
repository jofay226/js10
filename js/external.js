function modeHandler() {
  const mode = document.getElementsByName("modeBtn");
  const body = document.body;

  console.log(mode[0]);
  if (mode[0].id === "one") {
    body.style.backgroundColor = "black";
    mode[0].id = "two";
    mode[0].children[0].classList.remove("fa-moon");
    mode[0].children[0].classList.add("fa-sun");
  } else {
    body.style.backgroundColor = "white";
    mode[0].id = "one";
    mode[0].children[0].classList.remove("fa-sun");
    mode[0].children[0].classList.add("fa-moon");
  }
}
