try {
    const { formSubmission } = require("./scriptHelper");
} catch(error){

}

// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let doc = document
        event.preventDefault()
        let list = document.querySelector("#faultyItems");
        let pilotName = document.querySelector("input[name=pilotName]").value;
       let copilotName = document.querySelector("input[name=copilotName]").value;
       let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
       let cargoLevel = document.querySelector("input[name=cargoLevel]").value;

     formSubmission(doc, list, pilotName, copilotName, fuelLevel, cargoLevel)
     updateList(fuelLevel,cargoLevel)
       
    });
 });

 
   let listedPlanets;
   let listedPlanetsResponse = response.json()
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
