"use strict";

const allBtns = document.querySelectorAll('.key');

function playSound(elem) {
    const audio = document.querySelector(`audio[data-code="${elem.code}"]`),
        keyBtn = document.querySelector(`.key[data-code="${elem.code}"]`);

    if (!audio) return;

    keyBtn.classList.add('key-down');
    audio.currentTime = 0;
    audio.play();
}

function clearStyle(elem) {
    let keyBtn = document.querySelector(`.key[data-code="${elem.code}"]`);
    if (keyBtn) {
        keyBtn.classList.remove('key-down');
    }
}

allBtns.forEach(elem => {
    elem.onclick = () => {
        const audio = document.querySelector(`audio[data-code="${elem.dataset.code}"]`);

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
    }
})

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', clearStyle);