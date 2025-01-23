function generateAkanName() {
  // Get the values from the form
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;

  // Check if the user entered a valid birthdate
  if (!birthdate) {
    alert("Please enter your birthdate.");
    return;
  }

  // Check if the gender is selected
  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  // Parse the birthdate and get the day of the week
  const [year, month, day] = birthdate.split("-").map(Number);
  const date = new Date(year, month - 1, day); // Months are 0-indexed in JavaScript

  if (isNaN(date.getTime())) {
    alert("Invalid date! Please enter a valid date.");
    return;
  }

  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  // Akan name mapping based on the day of the week
  const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Afia", "Ama", "Akosua"],
  };

  // Get the Akan name based on gender and day of the week
  const akanName = akanNames[gender][dayOfWeek];

  // Show the result in the result div
  const resultDiv = document.getElementById("result");
  if (akanName) {
    resultDiv.innerHTML = `Your Akan name is <strong>${akanName}</strong>.`;
  } else {
    resultDiv.innerHTML = "Please select a valid gender.";
  }

  // Display the result section
  resultDiv.style.display = "block";
}
