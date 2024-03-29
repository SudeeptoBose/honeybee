import * as THREE from 'three'
import Experience from "./Experience";

export default class Renderer{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera

        this.setRenderer()
        console.log('renderer')
    }

    setRenderer()
    {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        this.renderer.useLegacyLights = false
        this.renderer.outputColorSpace = THREE.SRGBColorSpace
        this.renderer.toneMapping = THREE.ReinhardToneMapping
        this.renderer.toneMappingExposure = 1.75
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type =  THREE.PCFSoftShadowMap
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
        this.renderer.setClearColor(0xFEB415)
    }

    

    resize()
    {
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
    }

    update()
    {
         this.renderer.render(this.scene, this.camera.perspectiveCamera)
    }
}
