const addForm = document.querySelector(".add");
const ul = document.querySelector(".todos");
const search = document.querySelector(".search input");

addForm.addEventListener("submit", e => {
    e.preventDefault();
    const addText = addForm.add.value.trim();

    if (addText.length) {
        const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-capitalize"
        style="background: hsla(${Math.floor(Math.random() * 360)}, 100%, 50%, 0.5); font-weight: 700; letter-spacing: 1px">
        <span>${addText}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

        ul.innerHTML += html;
        addForm.reset();
    }
});

ul.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
})

search.addEventListener("keyup", () => {
    const term = search.value.trim().toLowerCase();

    Array.from(ul.children)
        .filter(li => !li.textContent.toLowerCase().includes(term))
        .forEach(item => item.classList.add("filtered"));

    Array.from(ul.children)
        .filter(li => li.textContent.toLowerCase().includes(term))
        .forEach(item => item.classList.remove("filtered"));
})



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