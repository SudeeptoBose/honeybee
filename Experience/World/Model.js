import * as THREE from 'three'
import Experience from '../Experience'

export default class Model{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.assets = this.resources.items
        // this.duck = this.assets.model.scene
        this.bee = this.assets.bee.scene
        this.time = this.experience.time
        console.log(this.bee)

        this.setModel()
        // this.setModelMaterial()
        // this.setMesh()
        // this.setMeshAnimation()

    }

    setModel()
    {
        this.scene.add(this.bee)
        this.bee.rotation.y = 1.5
        // this.duck.position.x = 1
        // this.bee.position.x = 1
        // this.bee.position.y = -0.4

        this.bee.scale.set(0.5,0.5,0.5)
        // this.bee.scale.set(1.5,1.5,1.5)

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
        // this.bee.rotation.z += 0.01 
        this.bee.rotation.x += 0.01 
        this.bee.position.x = (Math.sin(this.time.elapsed * 0.001))
        this.bee.position.z = (Math.cos(this.time.elapsed * 0.001)) * 1.5
    }

    resize()
    {

    }

    update()
    {
        // this.mesh.rotation.y += 0.01
        this.setMeshAnimation()
    }
}
