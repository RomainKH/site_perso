import './css/style.styl';
import * as THREE from 'three';
import Projects from './js/projects';
import Loading from './js/loader';

import img0_0 from './images/image0_0.jpg';
import img0_1 from './images/image0_1.png';
import img1_0 from './images/image1_0.png';
import img1_1 from './images/image1_1.png';
import imgPP from './images/profile.jpg';

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
camera.position.z = -10

scene.add(camera)
/**
 * Object 3D
 */

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(2, 15, 10),
    new THREE.MeshBasicMaterial({color: 0x3c3c3c, wireframe:true })
)
sphere.position.x = 0
//scene.add(sphere)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)
/**
 * Loop Render
 */
console.log(sphere.position)
const render = () =>
{
    window.requestAnimationFrame(render)
    // Update camera
    sphere.position.x = - cursor.x * 0.2
    sphere.position.y = cursor.y * 0.2
    sphere.rotation.x += 0.002
    sphere.rotation.y += 0.002
    camera.lookAt(scene.position)     
    // Render
    renderer.render( scene, camera )   
}
render()

/**
 * Utilities loop func & screen size
 */

const loop = (whatInside) => {
    window.requestAnimationFrame(loop)
    whatInside
}

/**
 * Scroll + Click > Continue to portfolio
 */ 
const buttonContinue = document.querySelector('.continueTo')
const getScrolled = () => {
    wavyText.classList.add('scrolled')
    buttonContinue.classList.add('buttonIsGone')
    const canvasToDelete = document.querySelectorAll('canvas')
    canvasToDelete[1].remove()
}
let isInFolio = false

window.addEventListener('wheel', () => {
    if (aboutMeButton.classList.contains('changeColor') == false && isInFolio == false && isPageLoaded == true) {
        getScrolled()
        isInFolio = true
        createArticles()
    }
})
window.addEventListener('scroll', () => {
    if (aboutMeButton.classList.contains('changeColor') == false && isInFolio == false && isPageLoaded == true) {
        getScrolled()
        isInFolio = true
        createArticles()
    }
})
buttonContinue.addEventListener('click', () => {
    if (aboutMeButton.classList.contains('changeColor') == false && isInFolio == false && isPageLoaded == true) {
        getScrolled()
        isInFolio = true
        createArticles()
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

const wavyText = document.querySelector('#distortion-text')
const scope = blotter.forText(text)

const h1 = document.querySelector('h1')
const checkSizes = () => {
    if (sizes.width <= 1190) {
        text = ''
        h1.innerHTML = 'romain khanoyan'
    }
    else {
        text = new Blotter.Text('ROMAIN KHANOYAN', {
            family: 'serif',
            size: 110,
            fill: '#3c3c3c',
            weight: 350,
            paddingLeft: 50,
            paddingRight: 50,
        })
        h1.innerHTML = ''
        scope.appendTo(wavyText)
    }
}
window.addEventListener('resize', () => {
    checkSizes()
})
checkSizes()

const main = document.querySelector('main')

const createArticles = () => {
    new Projects(img0_0, img0_1, '01.</br>Undertale Mandala', 'Lorem ipsum dolor amet tote bag sustainable cliche, pok pok vaporware XOXO godard twee. Sartorial truffaut cornhole quinoa, sustainable scenester tofu kinfolk VHS hashtag. Austin 8-bit cloud bread sartorial try-hard. Hot chicken poke mustache wolf biodiesel pok pok lo-fi salvia. Ugh kale chips listicle, migas pop-up paleo la croix jean shorts meditation. Bicycle rights photo booth wayfarers, air plant slow-carb dreamcatcher listicle YOLO cronut craft beer biodiesel intelligentsia food truck. Tattooed squid cornhole vape yuccie.')
    new Projects(img1_0, img1_1, '02.</br>404 Page inspired by Neo', 'Lorem ipsum dolor amet tote bag sustainable cliche, pok pok vaporware XOXO godard twee. Sartorial truffaut cornhole quinoa, sustainable scenester tofu kinfolk VHS hashtag. Austin 8-bit cloud bread sartorial try-hard. Hot chicken poke mustache wolf biodiesel pok pok lo-fi salvia. Ugh kale chips listicle, migas pop-up paleo la croix jean shorts meditation. Bicycle rights photo booth wayfarers, air plant slow-carb dreamcatcher listicle YOLO cronut craft beer biodiesel intelligentsia food truck. Tattooed squid cornhole vape yuccie.')
    new Projects(img0_0, img0_0, '03.</br>Undertale Mandala', 'Lorem ipsum dolor amet tote bag sustainable cliche, pok pok vaporware XOXO godard twee. Sartorial truffaut cornhole quinoa, sustainable scenester tofu kinfolk VHS hashtag. Austin 8-bit cloud bread sartorial try-hard. Hot chicken poke mustache wolf biodiesel pok pok lo-fi salvia. Ugh kale chips listicle, migas pop-up paleo la croix jean shorts meditation. Bicycle rights photo booth wayfarers, air plant slow-carb dreamcatcher listicle YOLO cronut craft beer biodiesel intelligentsia food truck. Tattooed squid cornhole vape yuccie.')
    const firstImgEl = document.querySelectorAll('img')
    new Loading(firstImgEl[1])
    
}


/**
 * Click > About Me
 */

const aboutMeButton = document.querySelector('nav > button'),
aboutMeInfos = document.querySelector('.aboutMe'),
profilePicture = document.createElement('img')

profilePicture.src = imgPP
aboutMeInfos.appendChild(profilePicture)
aboutMeButton.addEventListener('click', () => {
    window.scrollTo(0,0)
    aboutMeInfos.classList.toggle('goWide')
    aboutMeInfos.classList.toggle('zIndexPlus')
    aboutMeButton.classList.toggle('changeColor')
    setTimeout(function(){ document.body.style.overflowY = 'hidden' }, 200)
    if (aboutMeButton.classList.contains('changeColor') == true) {
        aboutMeButton.innerHTML = 'close'
        aboutMeButton.classList.remove('changeColorReverse')
    }
    else{
        aboutMeButton.innerHTML = 'About me'
        aboutMeButton.classList.add('changeColorReverse')
        setTimeout(function(){ document.body.style.overflowY = 'scroll' }, 200)
    }
})

/**
 * Scroll parallax
 */

window.addEventListener('scroll', () => {
    if (isInFolio == true) {
        // first block
        const blockOne = main.querySelector('article:first-child'),
        titleOne = blockOne.querySelector('h3'),
        paraOne = blockOne.querySelector('p'),
        imgsOne = blockOne.querySelectorAll('img'),
        blockTwo = main.querySelector('article:nth-child(2)'),
        titleTwo = blockTwo.querySelector('h3'),
        paraTwo = blockTwo.querySelector('p'),
        imgsTwo = blockTwo.querySelectorAll('img'),
        blockThree = main.querySelector('article:nth-child(3)'),
        titleThree = blockThree.querySelector('h3'),
        paraThree = blockThree.querySelector('p'),
        imgsThree = blockThree.querySelectorAll('img')

        if(window.scrollY >= 0 && window.scrollY <= 550) {
          blockOne.style.opacity = 1
          blockTwo.style.opacity = 0
          blockThree.style.opacity = 0
          titleOne.style.transform = `translateY(-${Math.round(window.scrollY/1.8)}px)`
          paraOne.style.transform = `translateY(-${Math.round(window.scrollY/1.5)}px)`
          imgsOne[0].style.transform = `translateY(-${Math.round(window.scrollY/1.9)}px)`
          imgsOne[1].style.transform = `translateY(-${Math.round(window.scrollY/1.65)}px)`
        }

        console.log(window.scrollY)

        //second block
        //console.log(blockTwo.offsetParent)
        if(window.scrollY >= 450 && window.scrollY <= 1000) {
          blockOne.style.opacity = 0
          blockTwo.style.opacity = 1
          blockThree.style.opacity = 0
          titleTwo.style.transform = `translateY(-${Math.round(window.scrollY/1.4)-237}px)`
          paraTwo.style.transform = `translateY(-${Math.round(window.scrollY/1.3)-257}px)`
          imgsTwo[0].style.transform = `translateY(-${Math.round(window.scrollY/1.2)-277}px)`
          imgsTwo[1].style.transform = `translateY(-${Math.round(window.scrollY/1.45)-277}px)`
        }

        //third block
        if(window.scrollY >= 950 && window.scrollY <= 1500) {
          blockTwo.style.opacity = 0
          blockOne.style.opacity = 0
          blockThree.style.opacity = 1
          titleThree.style.transform = `translateY(-${Math.round(window.scrollY/1.5)-350}px)`
          paraThree.style.transform = `translateY(-${Math.round(window.scrollY/1.5)-350}px)`
          imgsThree[0].style.transform = `translateY(-${Math.round(window.scrollY/1.5)-350}px)`
          imgsThree[1].style.transform = `translateY(-${Math.round(window.scrollY/3)-350}px)`
        }
    }
})

/**
 * Scroll indicator
 */
