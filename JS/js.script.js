// Akan Name Generator function
function generateAkanName() {
  // Get the values from the form
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;

  // Check if the user entered a valid birthdate
  if (!birthdate) {
    alert("Please enter your birthdate.");
    return;
  }

  // Split the birthdate into year, month, day
  const [year, month, day] = birthdate.split("-").map(Number);

  // Validate the date and month
  if (day <= 0 || day > 31) {
    alert("Invalid day! Please enter a valid day (1-31).");
    return;
  }
  if (month <= 0 || month > 12) {
    alert("Invalid month! Please enter a valid month (1-12).");
    return;
  }

  // Extract century and year from the birth year
  const CC = Math.floor(year / 100); // Century (first two digits of year)
  const YY = year % 100; // Year (last two digits of year)

  // Apply the formula to calculate the day of the week (d)
  const d =
    Math.floor(
      CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day
    ) % 7;

  // Akan name mapping based on the day of the week
  const akanNames = {
    male: ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Kofi", "Kwame", "Kwasi"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Afia", "Ama", "Akosua"],
  };

  // Array of Akan names (male and female) based on the day of the week
  const akanName = akanNames[gender][d];

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
