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
        const spheres = [];
        const sphereCount = 50;

        for (let i = 0; i < sphereCount; i++) {
            const sphere = shapeGenerator.createSmallSphere();
            spheres.push(sphere);
            this.scene.add( sphere );
        }

        this.camera.position.z = 10;

        function randomMotion() {
            let coefficient = 0.5;
            if(Math.random() > 0.1) {
                coefficient = -0.1
            }

            return coefficient * Math.random();
        }

        function animate() {
            requestAnimationFrame( animate );
            spheres.forEach(sphere => {
                sphere.rotation.x -= 0.01;
                sphere.rotation.y -= 0.01;
                sphere.rotation.z -= 0.01;
                sphere.position.z += randomMotion();
                sphere.position.y += randomMotion();
                sphere.position.x += randomMotion();
            });

            renderer.render( scene, camera );
        }

        animate();
    }
}