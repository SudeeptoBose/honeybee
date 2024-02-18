import './style.css'
import Experience from './Experience/Experience'

const experience = new Experience(document.querySelector('.experience-canvas'))


// Model follow mouse


window.addEventListener("scroll", (e)=>{
    console.log(window.scrollY/500, 'window scroll')
    if(window.scrollY/500 > 0.2)
    {
        experience.world.model.flag = false 
        window.addEventListener("mousemove", (e)=>{
            // console.log(0.5-(e.clientY/window.innerHeight), (e.clientX/window.innerWidth) - 0.5)
            // console.log(experience.world.model.flag)
            console.log( 0.5 -(e.clientY/window.innerHeight))
            experience.world.model.bee.position.x =  (-0.5 + (e.clientX/window.innerWidth)) * 4
            experience.world.model.bee.position.y = -2.5  + (0.5 -(e.clientY/window.innerHeight)) * 3
        })
    }else if (window.scrollY/500 === 0)
    {
        experience.world.model.flag = true
        experience.world.model.bee.position.x = 2
        experience.world.model.bee.position.y = 1
        // console.log(window.scrollY/500)
    }

    if(window.scrollY/500 < 1.4)
    {
        console.log(experience.world.jar.jar.position.y += (window.scrollY/500))
        // experience.camera.onScrollCameraUpdate(e)
    }
    // console.log(window.scrollY/500)
    // if(window.scrollY/500 >=2)
    // {
    //     experience.world.jar.setJarAnimation()
    // }

})