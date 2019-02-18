import './css/style.styl'
import * as THREE from 'three'
import { BloomEffect, EffectComposer, EffectPass, RenderPass, BokehEffect, GlitchEffect } from "postprocessing"
import Cubes from './js/Cubes.js'
import Controls from './js/Controls.js'

console.log('Hello webpack')

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
 * Lights
 */

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const sunLight = new THREE.DirectionalLight(0xffcccc, 0.6)
sunLight.castShadow = true
sunLight.position.x = -2
sunLight.position.y = 5 
sunLight.position.z = -1
scene.add(sunLight)



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

const effectBokeh = new EffectPass(camera, new BokehEffect(),)
effectBokeh.renderToScreen = true
const effectPassGlitch = new EffectPass(camera, )
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

    // Update camera
    camera.position.x = cursor.x * 0.5
    camera.position.y = cursor.y * 0.5
    camera.lookAt(new THREE.Vector3())
    // Renderer
    renderer.render(scene, camera)
}
loop()



