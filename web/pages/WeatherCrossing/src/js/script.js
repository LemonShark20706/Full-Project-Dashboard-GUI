function sendToPython() {
    const name = document.getElementById("name").value;

    eel.hello_from_python(name)(function(response) {
        document.getElementById("response").innerText = response;
    });
}

function goFull() {
    document.documentElement.requestFullscreen();
}

document.addEventListener('keydown', (e) => { if (e.key === "Escape") { eel.close_app(); } });