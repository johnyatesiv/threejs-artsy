import shapeGenerator from '../..//util/shapeGenerator';
import * as Three from 'three'

export default class OrbitScene {
    constructor(renderContainer) {
        this.scene = new Three.Scene()
        this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.renderer = new Three.WebGLRenderer({ alpha: true })
        this.renderer.setClearColor( 0x000000, 0 );
        this.renderer.setSize( window.innerWidth, window.innerHeight )
        renderContainer.appendChild(this.renderer.domElement)
        this.run()
    }

    run() {
        const renderer = this.renderer;
        const scene = this.scene;
        const camera = this.camera;
        const cube = shapeGenerator.createCube();
        this.scene.add( cube );

        const cube2 = shapeGenerator.createCube();
        this.scene.add( cube2 );

        const sphere1 = shapeGenerator.createRandomSphere();
        this.scene.add( sphere1 );

        const sphere2 = shapeGenerator.createRandomSphere();
        this.scene.add( sphere2 );

        const sphere3 = shapeGenerator.createRandomSphere();
        this.scene.add( sphere3 );

        // const line1 = shapeGenerator.createRandomLine();
        // scene.add( line1 );

        this.camera.position.z = 7;

        function animate() {
            requestAnimationFrame( animate );
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
            cube.rotation.y += 0.01;
            cube2.rotation.y -= 0.01;
            cube.rotation.x += 0.01;
            cube2.rotation.x -= 0.01;
            // cube2.material.color.set(shapeGenerator.getRandomColor());
            // cube.color = shapeGenerator.getRandomColor();
            sphere1.rotation.x -= 0.01;
            sphere1.rotation.y -= 0.01;
            sphere1.rotation.z -= 0.01;
            // sphere1.material.color.set(shapeGenerator.getRandomColor());


            renderer.render( scene, camera );
        }

        animate();
    }
}