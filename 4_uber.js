// Total Price : Base Fare + ((Cost per minute x time of the ride) 
// +(cost per mile x ride distance) +booking fee =Passengers Ride Fare

class uber {
  constructor(time,dist,base=10,cpmin=2,cpkm=5,bookFee=5){
    this.time = time;
    this.dist=dist;
    this.base=base;
    this.cpmin=cpmin;
    this.cpkm=cpkm;
    this.bookFee=bookFee;
  }

  totalFare(){
    let p= this.base+(this.cpmin*this.time)+(this.cpkm*this.dist)+this.bookFee ;  
    return p; 
  }
}

const ride = new uber(20,7);

console.log(ride.totalFare());