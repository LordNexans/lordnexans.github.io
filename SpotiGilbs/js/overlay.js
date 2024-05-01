function toggleOverlay(id) {
    var overlay = document.getElementById(id);
    if (overlay.style.display === "block") {
        overlay.style.display = "none";
    } else {
        overlay.style.display = "block";
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const div = document.getElementById('dynamicText');
    const text = div.textContent;
    if (text.includes('-')) {
        div.innerHTML = text.replace(/-/g, '</h1><br><h6>');
    }
});