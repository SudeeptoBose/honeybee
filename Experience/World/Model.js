import * as THREE from 'three'
import Experience from '../Experience'

export default class Model{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.assets = this.resources.items
        this.bee = this.assets.bee.scene
        this.time = this.experience.time
        // console.log(this.bee)

        this.setModel()
        this.flag =true
        // console.log(this.flag)
        // this.setModelMaterial()
        // this.setMesh()
        // this.setMeshAnimation()

    }

    setModel()
    {
        this.scene.add(this.bee)
        this.bee.rotation.y = 1.5
        this.bee.position.x = 2
        this.bee.position.y = 1

        this.bee.scale.set(0.1,0.1,0.1)

    }

    setModelMaterial()
    {
        this.bee.traverse((child)=>{
            if(child.isMesh = true)
            {
                if(child.material = true)
                {
                    child.material = new THREE.MeshToonMaterial(
                        {color: 0xFFFF00,}
                    )
                }
            }
        })
    }

    setMesh()
    {
        const geometry = new THREE.OctahedronGeometry(1, 30);
        const material = new THREE.MeshStandardMaterial( { 
            map: this.assets.baseColor,
            aoMap: this.assets.ambientOcclusion,
            displacementMap: this.assets.heightMap,
            displacementScale: 0.1,
            normalMap: this.assets.normalMap,
            roughnessMap:this.assets.roughnessMap,
            color: 0x00ff00 
        } );
        this.mesh = new THREE.Mesh( geometry, material );
        this.scene.add( this.mesh );
        this.mesh.position.x = -1
    }
    
    setMeshAnimation()
    {
        this.bee.children[1].rotation.x =(Math.sin(this.time.elapsed * 0.01))/2
        this.bee.children[2].rotation.x =(Math.sin(-this.time.elapsed * 0.01))/2
        this.bee.rotation.y += 0.01 
        if(this.flag === true)
        {
            this.bee.position.x = -(Math.sin(this.time.elapsed * 0.001)) *2
        } 
        // this.bee.position.z = (Math.cos(this.time.elapsed * 0.001)) * 1.5
    }

    resize()
    {

    }

    update()
    {
        this.setMeshAnimation(this.flag)
    }
}
