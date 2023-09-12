import { add, sub, createH } from "./Utils.mjs";

const btn = document.querySelector("#addBtn");
btn.addEventListener("click", handleBtn);

const btn2 = document.querySelector("#subBtn");
btn2.addEventListener("click", handleBtn2);

const btn3 = document.querySelector("#btnCreateH");
btn3.addEventListener("click", handleBtn3);

function handleBtn() {
  let num1 = document.querySelector("#firstVal").value;
  let num2 = document.querySelector("#secondVal").value;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let result = document.querySelector("#result");
  const sum = add([num1, num2]);
  result.innerHTML = sum;
}

function handleBtn2() {
  let num1 = document.querySelector("#firstVal2").value;
  let num2 = document.querySelector("#secondVal2").value;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let result = document.querySelector("#result2");
  const sum = sub([num1, num2]);
  result.innerHTML = sum;
}

// h1 one adding
function handleBtn3() {
  const text = document.querySelector("#text").value;
  createH(text);
}

// bulb
const onBtn = document.querySelector("#on");
const offBtn = document.querySelector("#off");
const bulb = document.querySelector("#bulb");
onBtn.addEventListener("click", turnOn);
offBtn.addEventListener("click", turnOff);
bulb.addEventListener("click", toggle);

function turnOn() {
  bulb.src = "./images/pic_bulbon.gif";
}
function turnOff() {
  bulb.src = "./images/pic_bulboff.gif";
}
function toggle() {
  if (bulb.src === "http://127.0.0.1:5500/images/pic_bulboff.gif") {
    bulb.src = "./images/pic_bulbon.gif";
  } else {
    bulb.src = "./images/pic_bulboff.gif";
  }
}
