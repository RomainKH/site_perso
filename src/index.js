import './css/style.styl';
import * as THREE from 'three';
import Projects from './js/projects';
import ScrollsElements from './js/scroll';
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
    
    $canvas.width = sizes.width
    $canvas.height = sizes.height
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
/**
 * Loop Render
 */
console.log(sphere.position)
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
const getScrolled = () => {
    wavyText.classList.add('scrolled')
    buttonContinue.classList.add('buttonIsGone')
    const canvasToDelete = document.querySelector('script + canvas')
    setTimeout(() => {
        createArticles()
        canvasToDelete.remove()
    }, 1000)
    const lilLoop = () => {
        window.requestAnimationFrame(lilLoop)
        sphere.position.z -= 0.2
        cube.position.z -= 0.2
    }
    lilLoop()
    isInFolio = true


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
    setTimeout(function(){ document.body.style.overflowY = 'scroll' }, 200)
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
        const blockOne = main.querySelector('article:first-child'),
        blockTwo = main.querySelector('article:nth-child(2)'),
        blockThree = main.querySelector('article:nth-child(3)')

        //first block
        new ScrollsElements(blockOne, 150, 650, [blockTwo, blockThree])
        //second block
        new ScrollsElements(blockTwo, 600, 1350, [blockOne, blockThree])
        //third block
        new ScrollsElements(blockThree, 1300, 1800, [blockOne, blockTwo])
    }
})

/**
 * Scroll indicator
 */
const $canvas = document.querySelector('.js-canvas')
const context = $canvas.getContext('2d')
let posX,
    posY

$canvas.width = sizes.width
$canvas.height = sizes.height
window.addEventListener('mousemove', (_event) => {
    posY = _event.clientY -33
    posX = _event.clientX +4.5
})
window.addEventListener('scroll', (_event) => {
    $canvas.style.top = `${window.scrollY +33}px`
    
})

/**
 * Utilities loop func & screen size
 */

const loop = () => {
    window.requestAnimationFrame(loop)
    context.clearRect(0, 0, sizes.width, sizes.height)

    context.beginPath()
    context.strokeStyle = '#0c0c0c'
    context.lineWidth = 2
    context.arc(posX, posY, 10, 0, Math.PI * 2)
    context.stroke()

    // context.beginPath()
    // context.fillStyle = '#0c0c0c'
    // context.arc(posX, posY, 2, 0, Math.PI * 2)
    // context.fill()

}
loop()
