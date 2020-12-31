class Dustbin{
constructor(){
var options={
 isStatic:true,
 restitution:0.3,
 friction:0.5,
 density:1.2,
}
this.image=loadImage("dustbingreen.png")
this.body1=Bodies.rectangle(400,600,20,20,options);
this.body2=Bodies.rectangle(550,550,20,20,options);
this.body3=Bodies.rectangle(700,600,20,20,options);
World.add(world,this.body1)
World.add(world,this.body2)
World.add(world,this.body3)
}
display(){
 push()
 image(this.image,this.body2.position.x,this.body2.position.y,100,100)
 strokeWeight(3);
 fill(255,0,255)
 ellipse(0,0,this.r, this.r);
 pop()
}
}