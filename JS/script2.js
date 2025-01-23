// script.js
document.getElementById("akan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the input values
  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value);
  const day = parseInt(document.getElementById("day").value);
  const gender = document.getElementById("gender").value;

  // Validate day and month
  if (month <= 0 || month > 12) {
    alert("Invalid month! Please enter a month between 1 and 12.");
    return;
  }
  if (day <= 0 || day > 31) {
    alert("Invalid day! Please enter a day between 1 and 31.");
    return;
  }

  // Extract century (CC) and year (YY)
  const CC = Math.floor(year / 100);
  const YY = year % 100;

  // Calculate the day of the week using the formula
  const d = Math.floor(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day) % 7
  );

  // Akan names based on day and gender
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Kofi",
    "Kwame",
    "Kwasi",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abena",
    "Akua",
    "Afia",
    "Ama",
    "Akosua",
  ];

  // Gender-specific name assignment
  let akanName;
  if (gender === "male") {
    akanName = maleNames[d];
  } else if (gender === "female") {
    akanName = femaleNames[d];
  }

  // Display the result
  document.getElementById(
    "result"
  ).innerText = `Your Akan name is: ${akanName}`;
});
