import * as THREE from 'three'

// BUTTON CLICK
let isMoving = false
const button = document.querySelector('.continueTo')
const h1 = document.querySelector('h1')
const wip = document.querySelector('article p')
button.addEventListener('click', () =>
{
    isMoving = true
    button.classList.add('buttonIsGone')
    h1.classList.add('repositionH1')
    setTimeout(function(){ wip.classList.add('textAppears') }, 2200)
})
window.addEventListener('mousewheel', (_event) => {
    isMoving = true
    button.classList.add('buttonIsGone')
    h1.classList.add('repositionH1')
    setTimeout(function(){ wip.classList.add('textAppears') }, 2200)
})
window.addEventListener('scroll', (_event) => {
    isMoving = true
    button.classList.add('buttonIsGone')
    h1.classList.add('repositionH1')
    setTimeout(function(){ wip.classList.add('textAppears') }, 2200)
})



export default class Cubes
{
    constructor(_options)
    {
        this.container = new THREE.Object3D()
        
        this.setCubes()
        this.setAnimation()
        this.startSite()
    }
    
    setCubes()
    {
        this.cubes = {}
        let g = 9
        let x = 9
        for (let i = 0; i < 10; i++) {
            this.cubes.geometry = new THREE.BoxGeometry(0.5, 20000, 0.1),
            this.cubes.material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: false})
            this.cubes.mesh = new THREE.Mesh(this.cubes.geometry, this.cubes.material)
            this.cubes.mesh.position.x = g
            this.cubes.mesh.position.z = x
            this.cubes.mesh.rotation.x = g
            this.container.add(this.cubes.mesh)
            g -= 2
            x -= 0.5
        }
    }

    setAnimation()
    {
        const loop = () =>
        {
            
            if (isMoving == false) {
                if (this.container.children[2].position.z > 3.5) {
                    for (let i = 0; i < this.container.children.length; i++)
                    {
                        this.container.children[i].position.z -= 0.001
                    }
                }
                window.requestAnimationFrame(loop)
            }
            else {
                if (this.container.children[2].position.z > -49) {
                    for (let i = 0; i < this.container.children.length; i++)
                    {
                        this.container.children[i].position.z -= 0.1
                    }
                    window.requestAnimationFrame(loop)
                }
                
            }
        }
        loop()
    }

    startSite()
    {
        let i = 0
        const loop = () =>
        {
            if (i < 10) {
                this.container.children[i].material.color.set(0x4000CC)
                i++
                setTimeout(function(){window.requestAnimationFrame(loop)}, 200)
            }
        }
        loop()
    }
}