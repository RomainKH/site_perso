import * as THREE from 'three'

// // random funct
// const randomNb = (min, max) =>
// {
//     return Math.random() * (max - min + 1) + min
// }

// BUTTON CLICK
let isMoving = false
const button = document.querySelector('.continueTo')
button.addEventListener('click', (_event) =>
{
    isMoving = true
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
            window.requestAnimationFrame(loop)
            if (isMoving == false) {
                if (this.container.children[2].position.z > 3.5) {
                    for (let i = 0; i < this.container.children.length; i++)
                    {
                        this.container.children[i].position.z -= 0.001
                    }
                }
            }
            else {
                if (this.container.children[2].position.z > -49) {
                    for (let i = 0; i < this.container.children.length; i++)
                    {
                        this.container.children[i].position.z -= 0.1
                    }
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