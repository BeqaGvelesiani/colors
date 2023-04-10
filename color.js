const C1 = document.getElementById("C1");
const C2 = document.getElementById("C2");
const C3 = document.getElementById("C3");
const C4 = document.getElementById("C4");
const C5 = document.getElementById("C5");
const C6 = document.getElementById("C6");
const C7 = document.getElementById("C7");

const root = document.querySelector(":root");

const CId1 = document.getElementById("CId1");
const CId2 = document.getElementById("CId2");
const CId3 = document.getElementById("CId3");
const CId4 = document.getElementById("CId4");
const CId5 = document.getElementById("CId5");
const CId6 = document.getElementById("CId6");
const CId7 = document.getElementById("CId7");

function clear() {
  CId1.innerText = "";
  CId2.innerText = "";
  CId3.innerText = "";
  CId4.innerText = "";
  CId5.innerText = "";
  CId6.innerText = "";
  CId7.innerText = "";
}



C1.addEventListener("click", () => {
  clear();
  root.style.setProperty("--Bcolor", "#e0ceb6");
  CId1.innerText = "#e0ceb6";
});

C2.addEventListener("click", () => {
  clear();
  root.style.setProperty("--Bcolor", "#d9c9bd");
  CId2.innerText = "#d9c9bd";
});

C3.addEventListener("click", () => {
  clear();
  root.style.setProperty("--Bcolor", "#faf0d3");
  CId3.innerText = "#faf0d3";
});

C4.addEventListener("click", () => {
  clear();
  root.style.setProperty("--Bcolor", "#d8cdc1");
  CId4.innerText = "#d8cdc1";
});

C5.addEventListener("click", () => {
  clear();
  root.style.setProperty("--Bcolor", "#e8d9c9");
  CId5.innerText = "#e8d9c9";
});

C6.addEventListener("click", () => {
  clear();
  root.style.setProperty("--Bcolor", "#e3d5be");
  CId6.innerText = "#e3d5be";
});

C7.addEventListener("click", () => {
  clear();
  root.style.setProperty("--Bcolor", "#e2d7cd");
  CId7.innerText = "#e2d7cd";
});
