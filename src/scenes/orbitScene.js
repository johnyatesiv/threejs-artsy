import shapeGenerator from '../util/shapeGenerator';
export default class OrbitScene {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.run();
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

        this.camera.position.z = 5;

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