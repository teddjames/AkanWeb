// JavaScript for generating Akan Name
function generateAkanName() {
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;
  const resultDiv = document.getElementById("result");

  if (!birthdate || !gender) {
    resultDiv.textContent = "Please fill out all fields.";
    return;
  }

  // Get the day of the week (0 = Sunday, 6 = Saturday)
  const dayOfWeek = new Date(birthdate).getDay();

  // Akan names data
  const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afia", "Ama"],
  };

  // Determine the Akan name
  const akanName = akanNames[gender][dayOfWeek];
  resultDiv.textContent = `Your Akan name is ${akanName}.`;
}
