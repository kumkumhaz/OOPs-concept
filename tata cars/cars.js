//Parent class/ super class

class Car{
    engine="";
    seats = "";
    space = "";
    airBags = "";
    price = "";

    constructor(engine,seats,space,airBags,price){
        console.log("...parent constructor called");
        this.engine = engine;
        this.seats = seats;
        this.space = space;
        this.airBags = airBags;
        this.price = price;
    }
    drive(){
        console.log("...driving");
    }
}

// Child/ derived/sub class.
class SportsCar extends Car{
    speedlimits = "";
    hp = "";
    nitro = "";

    constructor(engine,seats,airBags,price,speedlimits,hp,nitro){
        super(engine,seats,airBags,price);
         this.speedlimits = speedlimits;
         this.hp = hp;
         this.nitro = nitro
    }
    fly(){
        console.log("....flying");

    }
    race(){
        console.log("....racing");
    }
}
class familyCar extends Car{
    comfortlevel="";
    childSafety="";


    constructor(engine,seats,airBags,price,comfortlevel, childSafety){
        super(engine,seats,airBags,price);
        this.comfortlevel = comfortlevel
        this.childSafety = childSafety;
    }
    driveSafe(){
        console.log("... driving safe");
    }
      
}
var spcar = new SportsCar("Tata", 7, 4, 5600000, 250,5009, true);
spcar.drive();  // parent
spcar.race();   // its own
var fcar = new familyCar("Tata", 5,4, 5000000, 4,true);
fcar.drive(); // parent
fcar.driveSafe(); // own 
//fcar.race();// invalid