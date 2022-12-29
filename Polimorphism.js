/// RUN-TIME POLYMORPHISM (Method- overriding)////////////

//Parent class/ super class/ base class

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
    build(){ // build of car
        console.log("...building car");
    }
}

// Child/ derived/sub class.
class SportsCar extends Car{
    speedlimits = "";
    hp = "";
    nitro = "";

    constructor(engine,seats,airBags,price,speedlimits,hp,nitro){
        // call base class constructor
        console.log("...child constructor called");
        super(engine,seats,airBags,price);
         this.speedlimits = speedlimits;
         this.hp = hp;
         this.nitro = nitro
    }
    fly(){
        console.log("....flying");

    }
    race(){
        console.log("...racing");
    }

    // overridden logic of base class build method.
    build(){
        console.log("...building sports car with special tools");
    }
}
class FamilyCar extends Car{
    comfortlevel="";
    childSafety="";


    constructor(engine,seats,airBags,price,comfortlevel, childSafety){
        console.log("...child constructor called");
        super(engine,seats,airBags,price);
        this.comfortlevel = comfortlevel
        this.childSafety = childSafety;
    }
    driveSafe(){
        console.log("... driving safe");
    }
    
    // we want override the build method but also want to access the parent class build method then we use use super keyword with .method(name) like follow
    build(){
        super.build();   //will be called before child class method   // build of family car
        console.log("...building better entertainmet feature")
        //super.build();  // will be called after child class method.

    }      
}
class BudgetFamilyCar extends FamilyCar{

    
    // we want override the build method but also want to access the parent class build method then we use use super keyword with .method(name) like follow
    build(){
       // super.build();   //will be called before child class method
        console.log("...building car with less number of seats")
        super.build();  // will be called after child class method.

    }
      
}
// var scar = new SportsCar("Tata", 7, 4, 5600000, 250,5009, true);
// scar.drive();  // parent
// scar.race();   // its own
// scar.build();

// var fcar = new FamilyCar("Tata", 5,4, 5000000, 4,true);
// fcar.drive(); // parent
// fcar.driveSafe(); // own 
// fcar.build();
// //fcar.race();// invalid
var bfcar = new BudgetFamilyCar();
bfcar.build();