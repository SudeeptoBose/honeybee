import './style.css'
import Experience from './Experience/Experience'

const experience = new Experience(document.querySelector('.experience-canvas'))


// // Model follow mouse
// window.addEventListener("mousemove", (e)=>{
//     console.log(0.5-(e.clientY/window.innerHeight), (e.clientX/window.innerWidth) - 0.5)

//     experience.world.model.bee.position.x = ((e.clientX/window.innerWidth) - 0.5) *2
//     experience.world.model.bee.position.y = (0.5-(e.clientY/window.innerHeight)) * 2
// })

window.addEventListener("scroll", (e)=>{
    experience.camera.onScrollCameraUpdate(e)
    // console.log(window.scrollY/500)
    // if(window.scrollY/500 >=2)
    // {
    //     experience.world.jar.setJarAnimation()
    // }

})