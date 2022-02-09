class circle{
   constructor(radius=1.0,color="red"){
      this.radius = radius;
      this.color = color;
   }
   circle(){
      return `The radius is ${this.radius} and the color is ${this.color}`;
   }
   circle(radius){
    return `The radius is ${radius} and the color is ${this.color}`;
   }
   circle(radius,color){
      return `The radius is ${radius} and color is ${color}`;
   }
   getRadius(){
      return `The radius is ${this.radius}`;
   }
   setRadius(radius){
      return `The radius is ${radius}`;
   }
   getColor(){
        return `The color is ${this.color}`;
   }
   setColor(color){
      return `the color is ${color}`;
   }
   toString(){
      return `circle[radius=${this.radius},color=${this.color}]`
   }
   getArea(){
      return `Area of the circle is ${(22/7)*(this.radius)*(this.radius)} square units` 
   }
   getCircumference(){
      return `Circumference of the circle is ${(2*22/7)*(this.radius)} units`
   }
}

const c = new circle();

console.log(c.circle(1,2))
console.log(c.getRadius())
console.log(c.setRadius(5))
console.log(c.getColor())
console.log(c.setColor("black"))
console.log(c.toString())
console.log(c.getArea())
console.log(c.getCircumference())
