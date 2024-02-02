"use strict";
// URL for the instructions:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html
Object.defineProperty(exports, "__esModule", { value: true });
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
/*
let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToMoon: number = 384400;
let milesPerKilometer: number = 0.621;
*/
// Part 2: Print Days to Mars
// Code an output statement here (use a template literal):
/*
console.log(`Miles to Mars ${kilometersToMars * milesPerKilometer}`);
console.log(
  `Hours to Mars ${(kilometersToMars * milesPerKilometer) / speedMph}`
);
console.log(
  `Days to Mars ${(kilometersToMars * milesPerKilometer) / (24 * speedMph)}`
);
*/
// Part 3: Create a Function ("getDaysToLocation")
/*
function getDaysToLocation(kilometersAway: number): number {
   
    let milesAway:number=kilometersAway*0.621;
    let hoursAway=milesAway/speedMph;
    
    return hoursAway/24;
}
*/
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
/*
console.log(`Number of days required to reach the location which is ${100000} away is ${getDaysToLocation(100000)}`);
console.log(`Number of days required to reach Mars is ${getDaysToLocation(100000)}`);
console.log(`Number of days required to reach Moon is ${getDaysToLocation(100000)}`);
*/
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    SpaceCraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation;
        hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    SpaceCraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return SpaceCraft;
}());
var spaceShuttle = new SpaceCraft("Determinant", 17500);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', 10000000));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('MOON', 800000));
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
