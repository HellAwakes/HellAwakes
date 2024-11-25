
const Sidebar = document.getElementsByClassName("sidebar");
document.getElementById("open"),addEventListener('click', openSideBar);

function openSideBar() {
    if(Sidebar.style.display === 'none' || Sidebar.style.display === '') {
        Sidebar.style.display = 'block';
        } else {
            Sidebar.style.display = 'none';

        }
    )
}

