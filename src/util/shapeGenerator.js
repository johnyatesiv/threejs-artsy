import * as Three from 'three';

class ShapeGenerator {
  createCube() {
    const geometry = new Three.BoxGeometry( 5, 0.2, 5 );
    const material = new Three.MeshBasicMaterial( { color: this.getRandomColor() } );
    return new Three.Mesh( geometry, material );
  }

  createRandomLine() {
    const material = new Three.LineBasicMaterial({
      color: this.getRandomColor()
    });

    const geometry = new Three.Geometry();
    geometry.vertices.push(
      this.createRandomVector(),
      this.createRandomVector(),
      this.createRandomVector()
    );

    return new Three.Line3(geometry, material);
  }

  createRandomVector() {
    const x = Math.round(Math.random() * 1000);
    const y = Math.round(Math.random() * 1000);
    const z = Math.round(Math.random() * 1000);
    return new Three.Vector3(x, y, z);
  }

  createRandomSphere() {
    const geometry = new Three.SphereGeometry( 2, 50, 50 );
    const material = new Three.MeshBasicMaterial( {color: this.getRandomColor()} );
    return new Three.Mesh( geometry, material );
  }

  createSmallSphere() {
    const geometry = new Three.SphereGeometry( 1, 25, 25 );
    const material = new Three.MeshBasicMaterial( {color: this.getRandomColor()} );
    return new Three.Mesh( geometry, material );
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

// function setRandomColor() {
//   $("#colorpad").css("background-color", this.getRandomColor());
// }

export default new ShapeGenerator();
