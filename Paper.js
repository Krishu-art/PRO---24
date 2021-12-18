class Paper {
    constructor(x, y, width) {
      var options = {
        isStatic: false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body = Bodies.circle(x, y, width, options);
      this.width = width;
      
      World.add(world, this.body);
    }
    display(){

      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("purple");
      circle(0, 0, this.width);
      pop();
    }

};