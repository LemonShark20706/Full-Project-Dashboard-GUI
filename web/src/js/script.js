function sendToPython() {
    const name = document.getElementById("name").value;

    eel.hello_from_python(name)(function(response) {
        document.getElementById("response").innerText = response;
    });
}

eel.expose(updateTicketsFromPython);
function updateTicketsFromPython(value) {
    const days = value;

    const dropdown = document.getElementById("ticketDropdown");
    dropdown.innerHTML = "";

    days.forEach(day => {
        const li = document.createElement("li");
        li.innerHTML = `<a class="dropdown-item" href="#">Ticker ${day}</a>`;
        dropdown.appendChild(li);
    });
}


eel.expose(updateLaborsFromPython);
function updateLaborsFromPython(value) {
    const days = value;

    const dropdown = document.getElementById("laborDropdown");
    dropdown.innerHTML = "";

    days.forEach(labor => {
        const li = document.createElement("li");
        li.innerHTML = `<a class="dropdown-item" href="#">${labor}</a>`;
        dropdown.appendChild(li);
    });
}

function goFull() {
    document.documentElement.requestFullscreen();
}

document.addEventListener('keydown', (e) => { if (e.key === "Escape") { eel.close_app(); } });