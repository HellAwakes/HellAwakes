const sidebar = document.getElementById("Sidebar");
const openButton = document.getElementById("open");

openButton.addEventListener("click", () => {
    const isClosed = sidebar.style.transform === "translateX(-100%)";
    sidebar.style.transform = isClosed ? "translateX(0)" : "translateX(-100%)";
});
