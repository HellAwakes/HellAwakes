// Save preferences to localStorage
function savePreferences() {
  const color3 = document.getElementById("color3").value;
  const fontsize = document.getElementById("fontsize").value;

  // Save preferences to localStorage
  localStorage.setItem("color3", color3);
  localStorage.setItem("fontsize", fontsize);

  alert("Settings saved!");
}

// Apply preferences immediately without saving
function applyPreferences() {
  const color3 = document.getElementById("color3").value;
  const fontsize = document.getElementById("fontsize").value;

  // Apply styles
  document.documentElement.style.setProperty("--background-color", color3);
  document.documentElement.style.setProperty("--font-size", fontsize + "px");

  // Update font size display
  document.getElementById("fontsize-value").textContent = fontsize + "px";
}

// Load saved preferences on page load
function loadPreferences() {
  const savedColor3 = localStorage.getItem("color3") || "#000000"; // Default: black
  const savedFontSize = localStorage.getItem("fontsize") || "16";

  // Apply saved preferences
  document.getElementById("color3").value = savedColor3;
  document.getElementById("fontsize").value = savedFontSize;

  document.documentElement.style.setProperty("--background-color", savedColor3);
  document.documentElement.style.setProperty("--font-size", savedFontSize + "px");

  // Update font size display
  document.getElementById("fontsize-value").textContent = savedFontSize + "px";
}

// Reset preferences to default
function resetPreferences() {
  const defaultColor = "#000000"; // Black
  const defaultFontSize = "16";  // 16px

  // Clear localStorage
  localStorage.removeItem("color3");
  localStorage.removeItem("fontsize");

  // Apply default styles
  document.getElementById("color3").value = defaultColor;
  document.getElementById("fontsize").value = defaultFontSize;

  document.documentElement.style.setProperty("--background-color", defaultColor);
  document.documentElement.style.setProperty("--font-size", defaultFontSize + "px");

  // Update font size display
  document.getElementById("fontsize-value").textContent = defaultFontSize + "px";

  alert("Settings reset to default!");
}

// Event listeners
document.getElementById("save-settings").addEventListener("click", savePreferences);
document.getElementById("reset-settings").addEventListener("click", resetPreferences);
document.getElementById("color3").addEventListener("input", applyPreferences);
document.getElementById("fontsize").addEventListener("input", applyPreferences);

// Load preferences when the page is loaded
window.addEventListener("load", loadPreferences);
