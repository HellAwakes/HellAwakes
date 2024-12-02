// Save preferences to localStorage
function savePreferences() {
  const color3 = document.getElementById("color3").value;
  const fontsize = document.getElementById("fontsize").value;

  localStorage.setItem("color3", color3);
  localStorage.setItem("fontsize", fontsize);

  alert("Settings saved!");
}

// Apply preferences immediately without saving
function applyPreferences() {
  const color3 = document.getElementById("color3").value;
  const fontsize = document.getElementById("fontsize").value;

  // Apply styles dynamically
  document.documentElement.style.setProperty("--background-color", color3);
  document.documentElement.style.setProperty("--font-size", fontsize + "px");

  document.getElementById("fontsize-value").textContent = fontsize + "px";
}

// Load preferences on page load
function loadPreferences() {
  const savedColor3 = localStorage.getItem("color3") || "#f5f5f5";
  const savedFontSize = localStorage.getItem("fontsize") || "16";
  const savedFontFamily = localStorage.getItem("font-family") || "Arial";

  // Apply saved preferences
  document.documentElement.style.setProperty("--background-color", savedColor3);
  document.documentElement.style.setProperty("--font-size", savedFontSize + "px");
  document.documentElement.style.setProperty("--font-family", savedFontFamily);

  // Reflect saved values in the inputs
  document.getElementById("color3").value = savedColor3;
  document.getElementById("fontsize").value = savedFontSize;
  document.getElementById("fontsize-value").textContent = savedFontSize + "px";
}

// Reset preferences to default
function resetPreferences() {
  // Reset to default values
  localStorage.removeItem("color3");
  localStorage.removeItem("fontsize");
  localStorage.removeItem("font-family");

  loadPreferences(); // Reload default values

  alert("Settings reset to default!");
}

// Toggle font family between Viking and Arial
function toggleFont() {
  const currentFontFamily = localStorage.getItem("font-family") || "Arial";
  const newFontFamily = currentFontFamily === "Arial" ? "Viking" : "Arial";

  // Apply and save the new font family
  document.documentElement.style.setProperty("--font-family", newFontFamily);
  localStorage.setItem("font-family", newFontFamily);

  alert(`Font switched to ${newFontFamily === "Viking" ? "Viking" : "default (Arial)"}.`);
}

// Event listeners
document.getElementById("save-settings").addEventListener("click", savePreferences);
document.getElementById("reset-settings").addEventListener("click", resetPreferences);
document.getElementById("toggle-font").addEventListener("click", toggleFont);
document.getElementById("color3").addEventListener("input", applyPreferences);
document.getElementById("fontsize").addEventListener("input", applyPreferences);

// Load preferences when the page loads
window.addEventListener("load", loadPreferences);
