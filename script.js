function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.className == "dark") {
        document.getElementById("moon-icon").style.display = "none";
        document.getElementById("sun-icon").style.display = "flex";
    } else {
        document.getElementById("moon-icon").style.display = "flex";
        document.getElementById("sun-icon").style.display = "none";
    }

}
