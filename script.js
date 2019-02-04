document
  .querySelector("#activate-flight")
  .addEventListener("click", activatePower);

document
  .querySelector("#activate-mindreading")
  .addEventListener("click", activatePower);

document
  .querySelector("#activate-xray")
  .addEventListener("click", activatePower);

// if you use const, you have to make sure that you define the function above where you're calling it! const doesn't hoist!
const activateOrDeactivate = () => {
  // get the id of the button
  const idOfButton = event.target.id.split("-");

  // reassign which class to add and which class to remove based on
  let classToAdd = "";
  let classToRemove = "";
  if (idOfButton[0] === "activate") {
    classToAdd = "enabled";
    classToRemove = "disabled";
  } else if (idOfButton[0] === "deactivate") {
    classToAdd = "disabled";
    classToRemove = "enabled";
  }
  // get all the sections and loop through them, then reassign each section's class
  const allSections = document.querySelectorAll(".power");
  allSections.forEach(singleSection => {
    singleSection.classList.replace(classToRemove, classToAdd);
  });
  // for(let i = 0; i < allSections.length; i++){
  //     console.log(allSections[i])
  // }
};

// const deactivateAllPowers = () => {
//     const allSections = document.querySelectorAll(".power");
//     allSections.forEach(singleSection => {
//         singleSection.classList.replace("enabled", "disabled");
//     })
// }

document
  .querySelector("#activate-all")
  .addEventListener("click", activateOrDeactivate);

document
  .querySelector("#deactivate-all")
  .addEventListener("click", activateOrDeactivate);

function activatePower(event) {
    // get the id of the button you clicked on, split it on the "-" (midnreading, xray, etc)
  const idOfSection = event.target.id.split("-")[1];
  // select the section that matches the button you clicked on
  const sectionToChange = document.querySelector(`#${idOfSection}`);
  sectionToChange.classList.replace("disabled", "enabled");
}

// function flightHandlerFunction(){
//     const flightSection = document.querySelector("#flight");
//     flightSection.classList.replace("disabled", "enabled");
//     // flightSection.classList.add("enabled");

// }

// function mindReadingHandler(){
//     const mindReadingSection = document.querySelector("#mindreading")
//     mindReadingSection.classList.replace("disabled", "enabled");
// }

// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

// Once that is complete, add two more buttons

// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.
