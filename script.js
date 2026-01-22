// Phần 2. Truy cập phần tử trong DOM
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

// Phần 3. Thay đổi nội dung, styles, thuộc tính
const secondFlexItem = view1.querySelector(".flex-item:nth-child(2)");
secondFlexItem.textContent = "Item 2";
console.log(secondFlexItem);

const h1 = document.querySelector("h1");
console.log(h1.innerHTML); // Demo <span style="display: none">HTML</span> DOM
console.log(h1.textContent); // Demo HTML DOM
console.log(h1.innerText); // Demo DOM

h1.innerHTML = "Demo <strong>HTML</strong> DOM"
h1.style.color = "red";
h1.style.fontSize = "50px";
h1.style.fontWeight = "900";

// Replace h1 with newHeading
const newHeading = document.createElement("h2");
newHeading.textContent = "New Heading";
h1.replaceWith(newHeading);
newHeading.classList.add("big-h1"); // add class [big-h1]
newHeading.classList.remove("big-h1"); // remove class [big-h1]

// toggle showHideV2() use arrow function
const showHideV2 = () => {
    view2.classList.toggle("hidden");
}

// attributes DOM element
secondFlexItem.setAttribute("data-item", 123); // data-item=123
console.log(secondFlexItem.getAttribute("data-item")); // 123
console.log(secondFlexItem.getAttributeNames()); // ['class', 'data-item']
console.log(secondFlexItem.getAttributeNode("data-item")); // data-item=123
console.log(secondFlexItem.hasAttribute("data-item")); // true

const attr = document.createAttribute("data-item");
attr.value = "hello";
secondFlexItem.setAttributeNode(attr);

// Phần 4. Khám phá DOM tree
const parent = secondFlexItem.parentElement;
console.log(parent); // <div class="flex-container"></div>
console.log(parent.children);
console.log(parent.childNodes);
console.log(parent.firstElementChild); // <div class="flex-item">1</div>
console.log(parent.lastElementChild); // <div class="flex-item">9</div>
console.log(parent.lastChild);
console.log(parent.children[4]); // <div class="flex-item">5</div>
console.log(parent.parentElement);

console.log(secondFlexItem.nextElementSibling);
console.log(secondFlexItem.previousElementSibling);
console.log(secondFlexItem.nextSibling);
console.log(secondFlexItem.previousSibling);

// Phần 5. Tạo và xóa phần tử
const content = document.querySelector("#content");
const ul = content.querySelector('ul');
let listLength = ul.children.length;
const output = document.getElementById("output")

const addElement = () => {
    const li = document.createElement("li");
    li.innerHTML = `Item ${++listLength} <span onclick="deleteThisElement(event)">Xoá</span>`;
    li.classList.add("item");
    ul.appendChild(li);
    output.innerText = "Đã thêm phần tử";
}

function deleteThisElement(event) {
    const item = event.target.parentElement;
    item.remove();
}

const removeElement = () => {
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
        output.innerText = "Đã xóa phần tử cuối";
    } else {
        output.innerText = "Không còn phần tử nào để xóa";
    }
}