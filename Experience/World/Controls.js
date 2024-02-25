import * as THREE from 'three'
import Experience from '../Experience'
import GSAP from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class Controls{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.jar = this.experience.world.jar.jar

        GSAP.registerPlugin(ScrollTrigger)

        this.setScrollTrigger()
    }

    setScrollTrigger()
    {
        this.timeline = new GSAP.timeline()
        this.timeline.to(this.jar.position, {
            x:1,
            scrollTrigger: {
                trigger: ".hello",
                markers: true,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.6,
                invalidateOnRefresh: true
            }
        })
        
        console.log('gsap')
    }


    resize()
    {

    }

    update()
    {

    }
}
