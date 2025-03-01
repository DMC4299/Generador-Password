const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";

function obtenerCaracterAleatorio(grupo) {
    return grupo[Math.floor(Math.random() * grupo.length)];
}

function generarContrasena(longitud, incluirNumeros, incluirSimbolos, incluirMayusculas, incluirMinusculas) {
    let caracteresDisponibles = "";

    if (incluirNumeros) caracteresDisponibles += numeros;
    if (incluirSimbolos) caracteresDisponibles += simbolos;
    if (incluirMayusculas) caracteresDisponibles += mayusculas;
    if (incluirMinusculas) caracteresDisponibles += minusculas;

    if (!caracteresDisponibles) return "Selecciona al menos un tipo de carácter";

    return Array.from({ length: longitud }, () => obtenerCaracterAleatorio(caracteresDisponibles)).join('');
}

document.getElementById("Generar").addEventListener("click", function () {
    const longitud = parseInt(document.getElementById("Longitud").value);
    const incluirNumeros = document.getElementById("numeros").checked;
    const incluirSimbolos = document.getElementById("simbolos").checked;
    const incluirMayusculas = document.getElementById("mayusculas").checked;
    const incluirMinusculas = document.getElementById("minusculas").checked;

    if (isNaN(longitud) || longitud < 8 || longitud > 128) {
        alert("Por favor, introduce una longitud válida (entre 8 y 128 caracteres).");
        return;
    }

    const contrasena = generarContrasena(longitud, incluirNumeros, incluirSimbolos, incluirMayusculas, incluirMinusculas);
    document.getElementById("Contragen").value = contrasena;
});
