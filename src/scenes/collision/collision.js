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
            addSphere(scene);
        }

        this.camera.position.z = 10;

        function addSphere(scene) {
            const sphere = shapeGenerator.createSmallSphere();
            spheres.push(sphere);
            scene.add( sphere );
        }

        function randomMotion() {
            return Math.random() * 0.05;
        }

        function outOfBounds(position) {
            return position > 3;
        }

        function bound(obj, dim) {
            const motion = randomMotion();
            if (outOfBounds(obj.position[dim])) {
                obj.position[dim] -= motion;
            } else {
                obj.position[dim] += motion;
            }
        }

        function animate() {
            requestAnimationFrame( animate );
            spheres.forEach(sphere => {
                console.log(sphere.position);
                sphere.rotation.x -= 0.01;
                sphere.rotation.y -= 0.01;
                sphere.rotation.z -= 0.01;
                bound(sphere, 'x');
                bound(sphere, 'y');
                bound(sphere, 'z');
            });

            renderer.render( scene, camera );
        }

        animate();
    }
}