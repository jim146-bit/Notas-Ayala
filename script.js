// Obtenemos el formulario y el div donde mostraremos el resultado
const form = document.getElementById('codeForm');
const resultadoDiv = document.getElementById('resultado');

// Creamos un objeto de códigos y sus respectivas notas (usando los datos de la imagen)
const codigosNotas = {
    "22120111": "16",
    "22120134": "10",
    "21120089": "9",
    "22120006": "4",
    "21120043": "2",
    "22120113": "8.5",
    "22120112": "13",
    "22120115": "0",
    "22120135": "12",
    "22120015": "14",
    "22120136": "17",
    "22120099": "4",
    "21120110": "10",
    "22120020": "5",
    "22120021": "15",
    "22120105": "18",
    "22120114": "2"
};

// Evento cuando el usuario envía el formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener el valor ingresado en el input
    const codigo = document.getElementById('codigo').value;

    // Validar si el código tiene exactamente 8 dígitos
    if (codigo.length !== 8 || isNaN(codigo)) {
        resultadoDiv.textContent = "Por favor, ingrese un código válido de 8 dígitos.";
        resultadoDiv.style.color = 'red';
        return;
    }

    // Verificar si el código existe en el objeto codigosNotas
    const nota = codigosNotas[codigo];

    if (nota) {
        resultadoDiv.textContent = `La nota correspondiente al código es: ${nota}`;
        resultadoDiv.style.color = 'green';
    } else {
        resultadoDiv.textContent = "El código no es válido o no tiene una nota asignada.";
        resultadoDiv.style.color = 'red';
    }
});
