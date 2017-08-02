console.log("js loaded");

class ElectricBike {
  constructor(batteryCapacity, color) {
    this.batteryCapacity = batteryCapacity; // Maximum capacity of the battery
    this.color = color; // Color of the water bottle
    this.chargeLevel = 0; // Amount of liquid the container holds
  }

  // Add liquid if space is available
  charge(amountToCharge) {
    if(this.chargeLevel + amountToCharge <= this.batteryCapacity) {
      this.chargeLevel = this.chargeLevel + amountToCharge;
    } else {
      console.log('Battery is full!');
    }
  }
}

let specializedTurbo = new ElectricBike(100, 'grey');

console.log(specializedTurbo.chargeLevel);
specializedTurbo.charge(33);
console.log(specializedTurbo.chargeLevel); // Will log 8
specializedTurbo.charge(89); // A total of 12 would put us over the limit
console.log(specializedTurbo.chargeLevel); // Will log 8
