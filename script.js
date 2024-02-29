// JavaScript

// Array para almacenar participantes
var participants = [];

// Función para agregar participante a la lista
function addParticipant() {
    var name = document.getElementById("participantName").value;
    var number = parseInt(document.getElementById("participantNumber").value);
    if (name.trim() !== "" && !isNaN(number)) {
        // Verificar si el número ya está en uso
        var numberExists = participants.some(function(participant) {
            return participant.number === number;
        });
        if (numberExists) {
            alert("¡El número " + number + " ya está en uso!");
            return;
        }
        var newParticipant = { name: name, number: number };
        participants.push(newParticipant);
        participants.sort(function(a, b) {
            return a.number - b.number;
        });
        updateParticipantList();
        document.getElementById("participantName").value = ""; // Limpiar el campo de nombre
        document.getElementById("participantNumber").value = ""; // Limpiar el campo de número
    } else {
        alert("Por favor, ingresa un nombre y un número válido.");
    }
}

// Función para actualizar la lista de participantes
function updateParticipantList() {
    var tableBody = document.getElementById("participantList");
    tableBody.innerHTML = ""; // Limpiar la tabla antes de actualizarla
    participants.forEach(function(participant, index) {
        var row = tableBody.insertRow();
        var cellNumber = row.insertCell(0);
        var cellName = row.insertCell(1);
        cellNumber.textContent = participant.number;
        cellName.textContent = participant.name;
    });
}

// Función para realizar el sorteo
function drawWinner() {
    if (participants.length === 0) {
        alert("Agrega participantes antes de realizar el sorteo.");
        return;
    }
    var winnerIndex = Math.floor(Math.random() * participants.length);
    var winner = participants[winnerIndex];
    document.getElementById("winnerResult").textContent = "¡El ganador es: " + winner.name + "!";
}

// Event Listener para el botón "Agregar Participante"
document.getElementById("addParticipantBtn").addEventListener("click", addParticipant);

// Event Listener para la tecla Enter
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addParticipant();
    }
});

// Event Listener para el botón "Realizar Sorteo"
document.getElementById("drawWinnerBtn").addEventListener("click", drawWinner);
