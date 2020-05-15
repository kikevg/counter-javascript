const prev = document.getElementById('prev');
const next = document.getElementById('next');
const reset = document.getElementById('reset');
const counter = document.getElementById('counter');

prev.addEventListener('click', decrement);
next.addEventListener('click', increment);
reset.addEventListener('click', reload);

function decrement() {
    counter.textContent = +counter.textContent - 1;
}

function increment() {
    counter.textContent = +counter.textContent + 1;
}

function reload() {
    let num = +counter.textContent;
    num < 0 ? resetToZero(num, 'increment') : resetToZero(num, 'decrement');
}

function resetToZero(num, action) {
    let i = num;
    let handle = setInterval(function () {
        switch (action) {
            case "increment":
                i < 0 && i++;
                break;
            case "decrement":
                i > 0 && i--;
                break;
        }
        if (i === 0) {
            clearInterval(handle);
            handle = 0;
        }
        counter.textContent = i;
    }, 50);
}
