const sidebar = document.getElementById("Sidebar");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

openButton.addEventListener("click", () => {
    const isClosed = sidebar.style.transform === "translateX(-100%)";
    sidebar.style.transform = isClosed ? "translateX(0)" : "translateX(-100%)";
});

closeButton.addEventListener("click", () => {
    sidebar.style.transform = "translateX(-100%)";
});

function showbutton(choice) {
    if (choice ==1){
    document.getElementById("close").style.display = "block"
     document.getElementById("open").style.display = "none"
    }
    
if (choice ==2){
document.getElementById("close").style.display = "none"
     document.getElementById("open").style.display = "block"
}
}