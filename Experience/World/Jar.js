import * as THREE from 'three'
import Experience from '../Experience'

export default class Jar{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.assets = this.resources.items
        this.time = this.experience.time

        this.setJar()

    }

    setJar()
    {
        const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
        const material = new THREE.MeshStandardMaterial( { color: 0xff00ff } );
        this.cube = new THREE.Mesh( geometry, material );
        this.cube1 = new THREE.Mesh( geometry, material );
        this.cube2 = new THREE.Mesh( geometry, material );

        this.scene.add( this.cube);
        this.cube.position.y = -2
        this.cube.position.x = 1.5
    }

    setJarAnimation()
    {
        this.cube.rotation.y += 0.05
        // this.cube1.rotation.y += 0.05
        // this.cube2.rotation.y += 0.05
        this.cube.rotation.z += 0.05
        // this.cube1.rotation.z += 0.05
        // this.cube2.rotation.z += 0.05

        this.cube.position.x = (Math.sin(window.scrollY/500))
        this.cube.position.z = -(Math.cos(window.scrollY/500))
        this.cube.position.y = -(window.scrollY/500)
    }

    resize()
    {

    }

    update()
    {
    }
}