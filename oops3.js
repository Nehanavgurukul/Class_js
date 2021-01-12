class Vehicles{
    constructor(sell, buy, repair){
        this.selling = sell;
        this.buying = buy;
        this.repairing = repair;
    }
    sellof(){
        return `${this.selling}  have to sell`;
    }
    buyof(){
        return `${this.buying}  have to buy`;
    }
    repairof(){
        return `${this.repairing} have to repair`;
    }
}

class Old_vehicles extends Vehicles{
    constructor(sell, buy, repair, Red_paint){
    super(sell, buy, repair)
    this.paint = Red_paint;
    }
    paintof_red(){
        return `${this.selling} this one have to paint in this colour ${this.paint}`;
    }
}

class New_vehicles extends Vehicles{
    constructor(sell, buy, repair, blue_paint){
    super(sell, buy, repair)
    this.paint = blue_paint;
    }
    paintof_blue(){
       return `${this.repairing} repair one vehicle has to paint`;
    }
}

const my_first_vehicles = new Old_vehicles("Taxi", "bus", "police car", "Red");
console.log(my_first_vehicles.sellof());
console.log(my_first_vehicles.buyof());
console.log(my_first_vehicles.repairof());
console.log(my_first_vehicles.paintof_red());


const my_second_vehicles = new New_vehicles("Bicycle", "Ambulance", "Skateboard", "white blue");
console.log(my_second_vehicles.sellof());
console.log(my_second_vehicles.buyof());
console.log(my_second_vehicles.repairof());
console.log(my_second_vehicles.paintof_blue());




