const addForm = document.querySelector(".add");
const ul = document.querySelector(".todos");
const search = document.querySelector(".search input");

const arr = [];

addForm.addEventListener("submit", e => {
    const addText = addForm.add.value.trim();

    if (addText.length) {

        arr.push(addText);
        localStorage.setItem("todos",JSON.stringify(arr));

        const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-capitalize"
        style="background: hsla(${Math.floor(Math.random() * 360)}, 100%, 50%, 0.8); font-weight: 700; letter-spacing: 1px">
        <span>${addText}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

        ul.innerHTML += html;
    }

    addForm.reset();
    e.preventDefault();

});

const getArr = JSON.parse(localStorage.getItem('todos'));
if (localStorage.getItem.length && localStorage.todos) {

    getArr.forEach((text) => {

        const todo_item = document.createElement('li');
        todo_item.className = 'list-group-item d-flex justify-content-between align-items-center text-capitalize';
        todo_item.style.cssText = `
        background: hsla(${Math.floor(Math.random() * 360)}, 100%, 50%, 0.8); 
        font-weight: 700; 
        letter-spacing: 1px`;
        todo_item.innerHTML = text;
        todo_item.innerHTML += `<i class="far fa-trash-alt delete"></i>`;
        ul.appendChild(todo_item);
    });
};



ul.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    };

    if (getArr.length) {
        getArr.forEach((item, index) => {
            if (item == e.target.parentElement.innerText.toLowerCase().trim()) {
                getArr.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(getArr));
            };
        });
    };
});


search.addEventListener("keyup", () => {
    const term = search.value.trim().toLowerCase();

    Array.from(ul.children)
        .filter(li => !li.textContent.toLowerCase().includes(term))
        .forEach(item => item.classList.add("filtered"));

    Array.from(ul.children)
        .filter(li => li.textContent.toLowerCase().includes(term))
        .forEach(item => item.classList.remove("filtered"));
});


setTimeout(() => {
    ul.firstElementChild.style.transition = '500ms all';
    ul.firstElementChild.style.opacity = '0';

    setTimeout(() => {
        ul.firstElementChild.remove();
    }, 500);
}, 3000);



//CLOCK SECTION

const clock = document.querySelector(".clock");

const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockHtml = `${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)}`;

    clock.innerHTML = clockHtml;
}

const addZero = (time) => {
    let str = time.toString();

    if (str.length === 1) {
        return "0" + str;
    } else {
        return str;
    }
}

setInterval(updateTime, 1000);
