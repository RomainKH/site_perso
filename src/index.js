import './css/style.styl';
import * as THREE from 'three';
import Projects from './js/projects';
import ScrollsElements from './js/scroll';
import Loading from './js/loader';

import imgGame_1 from './images/image_threejs_game2.png';
import imgGame_2 from './images/image_threejs_game.png';

import imgMandala_1 from './images/image_mandala.png';
import imgMandala_2 from './images/image_mandala2.png';

import imgPro_1 from './images/image_sitepro.png';
import imgPro_2 from './images/image_sitepro2.png';

import imgInterface_1 from './images/image_interface.png';
import imgInterface_2 from './images/image_interface2.png';

import img404_1 from './images/image404.png';
import img404_2 from './images/image404_2.png';

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight - 50
window.addEventListener('resize', () => {
    //Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight - 50
    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    //update
    renderer.setSize(sizes.width, sizes.height)
})


/**
 * Cursor
 */
const cursor = new THREE.Vector2()
window.addEventListener('mousemove', (event) =>
{
    cursor.x = ( event.clientX / window.innerWidth ) * 2 - 1
    cursor.y = - ( event.clientY / window.innerHeight ) * 2 + 1
})

/**
 * Scene
 */

const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xfefcfa )

/**
 * Camera
 */

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = -15


scene.add(camera)
/**
 * Object 3D
 */

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(2, 13, 5),
    new THREE.MeshStandardMaterial( {color: 0xffffff,metalness: 0.3, roughness: 0.8, wireframe:true} )
)
scene.add(sphere)

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshStandardMaterial({ color: 0xffffff,metalness: 0.3, roughness: 0.8, wireframe:true})
)
scene.add(cube)

const sunLight = new THREE.DirectionalLight(0xffcccc, 1.2)

scene.add(sunLight)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)
renderer.domElement.classList.add('three')

/**
 * Loop Render
 */
const render = () =>
{
    window.requestAnimationFrame(render)
    // Update camera
    sphere.position.x =  13 - cursor.x * 0.2
    sphere.position.y = cursor.y * 0.1
    sphere.rotation.x += 0.002
    sphere.rotation.y += 0.002

    cube.position.x = - cursor.x * 0.1 - 13
    cube.position.y = cursor.y * 0.2
    cube.rotation.x -= 0.002
    cube.rotation.y -= 0.002

    camera.lookAt(scene.position)     
    // Render
    renderer.render( scene, camera )
    sunLight.position.x -= 0.01
    sunLight.position.y += 0.01
    sunLight.position.z -= 0.01  
}
render()

/**
 * Scroll + Click > Continue to portfolio
 */ 
const buttonContinue = document.querySelector('.continueTo')
const canvasToDelete = document.querySelector('script + canvas')
const getScrolled = () => {
    wavyText.classList.add('scrolled')
    buttonContinue.classList.add('buttonIsGone')
    setTimeout(() => {
        createArticles()
        canvasToDelete.remove()
        buttonContinue.remove()

    }, 700)
    const lilLoop = () => {
        window.requestAnimationFrame(lilLoop)
        sphere.position.z -= 0.25
        cube.position.z -= 0.25
    }
    lilLoop()
    isInFolio = true
    sessionStorage.setItem('wasOnHome', true)

}

let isInFolio = false


window.addEventListener('wheel', () => {
    if (aboutMeButton.classList.contains('changeColor') == false && isInFolio == false && isPageLoaded == true) {
        getScrolled()
    }
})
window.addEventListener('scroll', () => {
    if (aboutMeButton.classList.contains('changeColor') == false && isInFolio == false && isPageLoaded == true) {
        getScrolled()
    }
})
buttonContinue.addEventListener('click', () => {
    if (aboutMeButton.classList.contains('changeColor') == false && isInFolio == false && isPageLoaded == true) {
        getScrolled()
    }
})

/**
 * No animation onload page
 */
let isPageLoaded = false
window.addEventListener('load', () => {
    aboutMeInfos.classList.add('transitionAboutMe')
    setTimeout(function(){ isPageLoaded = true }, 500)
})

const wavyText = document.querySelector('#distortion-text')

const h1 = document.querySelector('h1')
const checkSizes = () => {
    if (sizes.width <= 1190) {
        h1.innerHTML = 'romain khanoyan'
        
    }
    else {
        let text = new Blotter.Text('ROMAIN KHANOYAN', {
            family: 'serif',
            size: 110,
            fill: '#3c3c3c',
            weight: 350,
            paddingLeft: 50,
            paddingRight: 50,
        })
        const material = new Blotter.LiquidDistortMaterial()

        material.uniforms.uSpeed.value = 0.09
        material.uniforms.uVolatility.value = 0.05
        const blotter = new Blotter(material, {texts: text})
        h1.innerHTML = ''
        const scope = blotter.forText(text)
        scope.appendTo(wavyText)
    }
}
window.addEventListener('resize', () => {
    checkSizes()
})
checkSizes()

const main = document.querySelector('main')

const createArticles = () => {
    new Projects(imgGame_1, imgGame_2, 'Three.JS Space Game', `Here is a project that is close to my heart because it is one of the first projects where I really enjoyed developing it, it is a fairly simple game that is inspired by Simcity, you choose a planet and you create your colony. The biggest difficulty was managing the raycasting, i.e. detecting the mouse in the 3D space, but I'm quite happy with the rendering even if it still needs to be improved and optimized. Nevertheless it was my first Three.JS project and I remain quite proud of it, you can test it with the links below.`, 'https://webgl-game.netlify.com/')
    new Projects(imgInterface_1, imgInterface_2, `UX/UI Work on Quentin Deronzier`, `This school project aimed to highlight through interfaces the work of photographer artists, so I took Quentin Deronzier's work and designed it in a slightly original way. It's a project I enjoyed doing, because the colors of the photos and the ones I used are colors I like to work with. Some constraints were highlighted, such as the scroll indicator or image sizes. It is a project that counts for me because it allowed me to implement the UX / UI knowledge I had acquired in class.`)
    new Projects(imgPro_1, imgPro_2, `Olivier Geffard's website` , `This first was the first time I worked for a professional, it was a school project but we learned a lot, I was one of the developpers, I was in charge of different page such as the gallery and some others. It really improved my level since we also learned to work as a team with a client, and the result was pretty convincing since we only had one month to do it. Even if it was my first professionnal project, I am truly happy of it, it was my first time and I am ready to do some more!`, 'http://www.geffard.com/index.html')
    new Projects(imgMandala_1, imgMandala_2, 'Mandala Undertale', `This is a school graphic design project. The theme was mandala and the choice of the universe of it was free, so I chose a universe that I liked very much, i. e. Undertale, an independent video game, where the color palette goes from blue to purple through other interesting shades. The difficulty was to adapt the very old school style to a vector construction. It was a project that pleased me and allowed me to learn a lot about graphic design concepts.`)
    new Projects(img404_1, img404_2, '404 Page inspired by Neo', `This project is part of the DailyUI I started last year (but I didn't finish), so I had to make a 404 page in one day, so I thought about a nice theme, and the idea of Neo in Matrix seemed cool to me, so I tried to make a character recognizable enough but also simple enough not to denote with the minimalist style. I really enjoyed it and I was able to let my imagination run wild and I think that's what makes it more or less successful!`)

    const firstImgEl = document.querySelectorAll('img')
    new Loading(firstImgEl[1])
}

/**
 * Click > About Me
 */

const aboutMeButton = document.querySelector('nav > button'),
aboutMeInfos = document.querySelector('.aboutMe'),
aboutBg = document.querySelector('.aboutMeBg'),
aboutMeText = document.querySelector('.aboutMeTex')
aboutMeButton.addEventListener('click', () => {
    window.scrollTo(0,0)
    aboutMeInfos.classList.toggle('zIndexPlus')
    aboutMeButton.classList.toggle('changeColor')
    aboutBg.classList.toggle('goWide')
    aboutMeText.classList.toggle('changeColor')
    setTimeout(function(){ document.body.style.overflowY = 'hidden' }, 200)
    if (aboutMeButton.classList.contains('changeColor') == true) {
        aboutMeButton.innerHTML = 'close'
        aboutMeButton.classList.remove('changeColorReverse')
        aboutBg.classList.remove('goWideR')
        aboutMeText.classList.remove('changeColorReverse')
        aboutMeText.style.display = 'flex'

    }
    else{
        aboutMeButton.innerHTML = 'About me'
        aboutMeButton.classList.add('changeColorReverse')
        aboutMeText.classList.add('changeColorReverse')
        aboutBg.classList.add('goWideR')
        aboutMeText.style.display = 'none'

        setTimeout(function(){ document.body.style.overflowY = 'scroll' }, 600)
    }
})

/**
 * check if comeback from 404
 */
let data = sessionStorage.getItem('wasOnHome')
if (data !== null && isInFolio == false) {
    getScrolled()    
}

/**
 * Scroll parallax
 */
const scrollParallax = () => {
    window.addEventListener('scroll', () => {
        if (isInFolio == true) {
            const lastBlock = main.querySelector('article:last-child')
            const blocks = main.querySelectorAll('article')
            for (let i = 0; i < blocks.length; i++) {
                new ScrollsElements(blocks[i], blocks[i].offsetTop , blocks[i].offsetTop+blocks[i].clientHeight, blocks)
            }
        }
    })
}

// circle following mouse on move
const cursorFollowed = () => {
    const cursor_circle = {x:20, y:20}
    let underCursor
    window.addEventListener('mousemove', (event) =>
    {
        underCursor = document.elementFromPoint(event.clientX,event.clientY)
        cursor_circle.x = event.clientX - 5  
        cursor_circle.y = event.clientY + window.scrollY
    })
    window.addEventListener('wheel', (event) =>
    {
        underCursor = document.elementFromPoint(event.clientX,event.clientY)
        cursor_circle.x = event.clientX - 5  
        cursor_circle.y = event.clientY + window.scrollY
    })
    const circle_cursor = document.querySelector('#circle'),
          textToClick = document.querySelector('#clickme')

    const circle_loop = () => {

        window.requestAnimationFrame(circle_loop)
        circle_cursor.style.transform = `translate(${cursor_circle.x-12}px,${cursor_circle.y-15}px)`
        textToClick.style.transform =  `translate(${cursor_circle.x - 95}px,${cursor_circle.y - 105}px)`
        if (underCursor != null && underCursor.classList.contains('clickable')) {
            textToClick.style.opacity = 1
        }
        else{
            textToClick.style.opacity = 0
        }
    }
    circle_loop()
} 
if(data == null){
    if (sizes.width < 768) {
        buttonContinue.remove()
        const circle_cursor = document.querySelector('#circle'),
        textToClick = document.querySelector('#clickme')
        circle_cursor.remove()
        textToClick.remove()
        getScrolled()    
    }
    else if(sizes.width < 1024 && sizes.width >= 768) {
        buttonContinue.remove()
        const circle_cursor = document.querySelector('#circle'),
        textToClick = document.querySelector('#clickme')
        circle_cursor.remove()
        textToClick.remove()
        scrollParallax()
    }
    else {
        cursorFollowed()
        scrollParallax()
    }
}
else if (data !== null){
    if (sizes.width < 768) {
        buttonContinue.remove()
        const circle_cursor = document.querySelector('#circle'),
        textToClick = document.querySelector('#clickme')
        circle_cursor.remove()
        textToClick.remove()
    }
    else if(sizes.width < 1024 && sizes.width >= 768) {
        buttonContinue.remove()
        const circle_cursor = document.querySelector('#circle'),
        textToClick = document.querySelector('#clickme')
        circle_cursor.remove()
        textToClick.remove()
        scrollParallax()
    }
    else {
        cursorFollowed()
        scrollParallax()
    }
}

const footerContact = document.querySelector('footer button')
footerContact.addEventListener('click', () => {
    window.location.href = "mailto:romain.khanoyan@gmail.com"
})



// scroll indicator
const scrollIndic = document.createElement('div')
scrollIndic.classList.add('scrollIndicator')
document.body.append(scrollIndic)
window.addEventListener('scroll', () => {
    let bar = -document.body.getBoundingClientRect().top/((document.body.getBoundingClientRect().height)/ 147)
    bar > 100 ? bar = 100 : bar = -document.body.getBoundingClientRect().top/((document.body.getBoundingClientRect().height)/ 147)
    scrollIndic.style.transform = `translateX(${bar}%)`
})