const randomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll('button')

for (let btn of buttons) {
    btn.addEventListener('click', colorrize)
}

const h1s = document.querySelectorAll('h1')

for (let h1 of h1s) {
    h1.addEventListener('click', colorrize)
}

function colorrize() {
    this.style.backgroundColor = randomColor()
    this.style.color = randomColor()
}
