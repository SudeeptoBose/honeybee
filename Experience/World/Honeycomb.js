import * as THREE from 'three'
import Experience from '/Experience/Experience.js'
import honeycombVertexShader from './Shaders/Honeycomb/vertexShader.glsl'
import honeycombFragmentShader from './Shaders/Honeycomb/fragmentShader.glsl'

export default class Honeycomb{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.assets = this.resources.items
        this.time = this.experience.time

        this.setHoneycomb()
    }

    setHoneycomb()
    {
        this.honeycombGeomtery = new THREE.PlaneGeometry(1,1)
        this.honeycombMaterial =  new THREE.ShaderMaterial(
            {
                vertexShader: honeycombVertexShader,
                fragmentShader: honeycombFragmentShader
            }
        )

        console.log('honey')
    }
}