import "./style.css";
import image from "./F15-launching-missile.jpeg";

const contentBlock = document.getElementById("content");

const addHeadline = function () {
  const h1 = document.createElement("div");
  h1.classList.add("headline");
  h1.innerHTML = "Welcome To My Restaurant!";
  contentBlock.appendChild(h1);
};

const addImg = function () {
  const img = new Image();
  img.src = image;
  img.classList.add("f15");
  contentBlock.appendChild(img);
};

const addText = function () {
  const text = document.createElement("div");
  text.classList.add("text");
  text.innerHTML = "To eat a missile! HAHAHA!";
  contentBlock.appendChild(text);
};

addHeadline();
addImg();
addText();
