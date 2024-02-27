import './style.css'
import Experience from './Experience/Experience'

const experience = new Experience(document.querySelector('.experience-canvas'))
const playAudio = new Audio('/sounds/bee_wasp.mp3')
const playAudio2 = new Audio('/sounds/adventure.aac')


window.addEventListener("click", (e)=>{
    playAudio2.play()
})

// Model follow mouse

window.addEventListener("mousemove", (e)=>{

    experience.world.model.bee.position.x =  (-0.5 + (e.clientX/window.innerWidth)) * 4
    experience.world.model.bee.position.y = (0.5 -(e.clientY/window.innerHeight)) * 3
    playAudio.play()
})



const getWindowHeight = () =>
{
    return window.innerHeight
}

const firstDiv = document.getElementById('section-1')

const sections = document.querySelectorAll('.current-section')

window.addEventListener('scroll', ()=>{
    console.log(getWindowHeight())

    sections.forEach((section, index)=>{

        const divProps = section.getBoundingClientRect()
    
        if(divProps.top <= getWindowHeight() && divProps.bottom>=0 )
        {
            console.log(index +'visible-' + divProps.top)
            experience.world.jar.setJarColor(section.getAttribute('color'))
        }
        else
        {
            console.log('not visible-' + divProps.top)
        }
        console.log(divProps)    
    })
})
