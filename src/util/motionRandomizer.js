export default class MotionRandomizer {
  constructor() {

  }

  rotate(obj) {
    obj.rotation.x = this.randomNumber();
    obj.rotation.y = this.randomNumber();
    obj.rotation.z = this.randomNumber();
  }

  move(obj) {
    obj.position.x += this.randomNumber();
    obj.position.y += this.randomNumber();
    obj.position.z += this.randomNumber();
  }

  rotateAndMove(obj) {
    this.rotate(obj);
    this.move(obj);
  }

  randomNumber() {
    const number = Math.round(Math.random() * 10);
    if (Math.random() > 0.5) {
      return number * -1;
    }
  }
}
