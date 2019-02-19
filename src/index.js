import './css/style.styl'
import * as THREE from 'three'
import { BloomEffect, EffectComposer, EffectPass, RenderPass, BokehEffect, GlitchEffect } from "postprocessing"
import Cubes from './js/Cubes.js'
import Controls from './js/Controls.js'

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update
    renderer.setSize(sizes.width, sizes.height)
})

// scene
const scene = new THREE.Scene()

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0
window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})

/**
 * Phone movement
 */
const functionisMobile = () => {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true
    }
    else {
        return false
    }
}

/**
 * Device orientation
 */
window.addEventListener('deviceorientation', (_event) => {
    cursor.x = _event.alpha / sizes.width - 0.5
    cursor.y = _event.gamma / sizes.height - 0.5
}, true)

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = -3
scene.add(camera)

/**
 * Cubes
 */
const cubes = new Cubes()
scene.add(cubes.container)

/**
 * Renderer
 */ 
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)

/**
 * Post processing
 */
const composer = new EffectComposer(renderer)

const effectBokeh = new EffectPass(camera, new BokehEffect())
effectBokeh.renderToScreen = true
const effectPassGlitch = new EffectPass(camera, new BloomEffect())
effectPassGlitch.renderToScreen = true


composer.addPass(new RenderPass(scene, camera))
//composer.addPass(effectPassGlitch)
composer.addPass(effectBokeh)

const clock = new THREE.Clock()

/**
 * Loop
 */

const loop = () =>
{
    window.requestAnimationFrame(loop)
    
    composer.render(clock.getDelta())

    // Update camera via cursor
    camera.position.x = cursor.x * 0.5
    camera.position.y = cursor.y * 0.5    
    camera.lookAt(new THREE.Vector3())
    
    // Renderer
    renderer.render(scene, camera)
}
loop()
