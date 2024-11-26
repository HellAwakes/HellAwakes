const sidebar = document.getElementById("Sidebar");
const openButton = document.getElementById("open");

sidebar.style.transform = "translateX(-100%)";
sidebar.style.transition = "transform 0.3s ease";


openButton.addEventListener("click", () => {
    if (sidebar.style.transform === "translateX(-100%)") {
        sidebar.style.transform = "translateX(0)";
    } else {
        sidebar.style.transform = "translateX(-100%)";
    }
});
