const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    // if (e.propertyName === 'flex-grow') { // rest of browsers
    // if (e.propertyName === 'flex') { // safari
    if (e.propertyName.includes('flex')) { // supports all browsers
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));