import * as THREE from 'three'
import Experience from '../Experience'

export default class Jar{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.jarGroup = this.resources.items.jar
        this.assets = this.resources.items
        this.time = this.experience.time

        this.setJar()
    }

    setJar()
    {
        this.jar = this.jarGroup.scene
        this.jar.scale.set(0.4,0.4,0.4)
        this.scene.add(this.jar);
        this.jar.position.y = -3.1
        // this.jar.position.x = 1.5
    }

    setJarAnimation()
    {
        this.jar.rotation.y += 0.005
        // this.cube1.rotation.y += 0.05
        // this.cube2.rotation.y += 0.05
        // this.jar.rotation.x += 0.03

        // this.jar.scale.set(Math.sin(this.time.elapsed * 0.0001)/2,Math.sin(this.time.elapsed * 0.0001)/2,Math.sin(this.time.elapsed * 0.0001)/2)
        // this.cube1.rotation.z += 0.05
        // this.cube2.rotation.z += 0.05

        this.jar.position.x = (Math.sin(window.scrollY/500)) * 2
        this.jar.position.z = -(Math.cos(window.scrollY/500))
        this.jar.position.y = -(window.scrollY/500)-0.5
    }

    resize()
    {

    }

    update()
    {
        this.setJarAnimation()
    }
}