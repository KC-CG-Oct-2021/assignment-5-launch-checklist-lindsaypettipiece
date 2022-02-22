// Write your helper functions here!

try {
    require('isomorphic-fetch');
} catch(error){

}
let message = ""
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
                
}

function validateInput(testInput) {
    if (testInput === "") {
        return ("Empty")        
     } else if ( isNaN(testInput) ) {
         return ("Not a Number")
        
     } else {
         return ("Is a Number")
     }
    }
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 message = ""
    let validPilot = isValidInput(validateInput(pilot), "pilot")
  let validCopilot = isValidInput(validateInput(copilot), "copilot")
  let validFuelLevel = isValidInput(validateInput(fuelLevel), "fuelLevel")
  let validCargoLevel = isValidInput(validateInput(cargoLevel),"cargoLevel")
  console.log(`valid`,validPilot)
    if (validPilot === false || validCopilot === false || validFuelLevel === false || validCargoLevel === false){
        try{
            alert(message)
        } catch(error){
        }
    }
}
function isValidInput(data, input){
    if ((input === "pilot" || input === "copilot") && data === "Not a Number"){
        return true;
    } else if ((input === "pilot" || input === "copilot") && data === "Is a Number"){
        message += "pilot/copilot cannot be a number\n"
        return false;
    } else if ((input === "pilot" || input === "copilot") && data === "Empty"){
        if (!message.includes("all")){
            message += "all fields must be filled out\n"
            }
    }
    if ((input === "fuelLevel" || input === "cargoLevel") && data === "Is a Number"){
        return true;
    } else if  ((input === "fuelLevel" || input === "cargoLevel") && data === "Not a Number"){
        message +=  "fuelLevel/cargoLevel must be a number\n"
        return false;
    } else if ((input === "fuelLevel" || input === "cargoLevel") && data === "Empty"){
        if (!message.includes("all")){
        message += "all fields must be filled out\n"
        }
    }
    return false
}

function updateList(fuel, cargo) {
    let pilotName = document.querySelector("input[name=pilotName]").value;
       let copilotName = document.querySelector("input[name=copilotName]").value;
    document.getElementById("pilotStatus").innerHTML = `${pilotName} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName} is ready for launch`;
    if(fuel < 10000){
      document.getElementById("faultyItems").style.visibility= "visible";
      document.getElementById("fuelStatus").innerHTML =  "Fuel level too low for launch";
      document.getElementById("launchStatus").innerHTML =  "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "red"
    } else {
        document.getElementById("launchStatus").innerHTML =  "Shuttle is ready for launch"
    }
    if (cargo > 10000){
      document.getElementById("faultyItems").style.visibility= "visible";
      document.getElementById("cargoStatus").innerHTML =  "Cargo mass too high for launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    }else {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green"
    }

}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response)
        return response.json()
});

    return planetsReturned;
}

function pickPlanet(planets) {
    let planets = math.random(planetsReturned)
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
