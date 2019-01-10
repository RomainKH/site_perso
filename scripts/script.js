const body = document.querySelector(`body`)
const canvas = document.createElement(`canvas`)
body.appendChild(canvas)
const context = canvas.getContext(`2d`)
let fill = false
const coords = { x: 0, y: 0 }
const mouse = { x: 0, y: 0 }
const resize = () => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight

    canvas.width = windowWidth
    canvas.height = windowHeight
}
window.addEventListener('resize', resize)
resize()
window.addEventListener(`mousemove`, (event) =>
{
    mouse.x = event.clientX
    mouse.y = event.clientY
})
window.addEventListener(`mousedown`, (event) =>
{
    fill = true
})
window.addEventListener(`mouseup`, (event) =>
{
    fill = false
})
const loop = () =>
{
    window.requestAnimationFrame(loop)  

    coords.x += (mouse.x - coords.x)
    coords.y += (mouse.y - coords.y)

    context.fillStyle = `black`
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.beginPath()
    context.arc(coords.x, coords.y, 20, 0, Math.PI * 2)
    if(fill == true){
        context.fillStyle = `white`
        context.fill()
    }
    else{
        context.strokeStyle = `white`
        context.stroke()
    }
}
loop()


for (let i = 0; i < 10; i++) {
    var star = document.createElement('div')
    
    
}