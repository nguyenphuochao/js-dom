// Truy cập phần tử trong DOM
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

const containers = document.getElementsByClassName("container");
console.log(containers);


const samContainers = document.querySelectorAll(".container");
console.log(samContainers);

// Chọn các div trong view1
const divs = view1.querySelectorAll("div");
console.log(divs);

const divs2 = view1.getElementsByTagName("div");
console.log(divs2);

// Thay đổi nội dung, styles, thuộc tính
const secondFlexItem = view1.querySelector(".flex-item:nth-child(2)");
secondFlexItem.textContent = "Item 2";
console.log(secondFlexItem);

const h1 = document.querySelector("h1");
console.log(h1.innerHTML);