// Definir la función constructora
function Juego(apodo, vidas, valorCarta) {
    this.apodo = apodo;
    this.vidas = vidas;
    this.valorCarta = valorCarta;

    // Método para reducir las vidas
    this.reduceLives = function () {
        if (this.vidas > 0) {
            this.vidas--;
            alert(`Vidas restantes para ${this.apodo}: ${this.vidas}`);
            mostrarInfoJugador1();
            mostrarInfoJugador2();
        } else {
            console.log(`${this.apodo} está fuera de vidas.`);
        }
    };
}

// Instancias de jugadores
let jugador1 = new Juego("Player1", 3, 6);
let jugador2 = new Juego("Player2", 3, Math.floor(Math.random() * 10) + 1);

function mostrarInfoJugador1() {
    const jugador1Element = document.getElementById("jugador1");
    jugador1Element.innerHTML = ""; // Limpiar contenido anterior

    // Repetir el número de vidas
    for (let i = 0; i < jugador1.vidas; i++) {
        jugador1Element.innerHTML += `<p>Vida ${i + 1}</p>`;
    }
}

function mostrarInfoJugador2() {
    const jugador2Element = document.getElementById("jugador2");
    jugador2Element.innerHTML = ""; // Limpiar contenido anterior

    // Repetir el número de vidas
    for (let i = 0; i < jugador2.vidas; i++) {
        jugador2Element.innerHTML += `<p>Vida ${i + 1}</p>`;
    }
}

function determinarGanador() {
    if (jugador1.vidas === 0 && jugador2.vidas === 0) {
        document.getElementById("resultado").textContent = "¡Empate!";
    } else if (jugador1.vidas === 0) {
        document.getElementById("resultado").textContent = "¡Jugador 2 ganó!";
    } else if (jugador2.vidas === 0) {
        document.getElementById("resultado").textContent = "¡Jugador 1 ganó!";
    }
}

function iniciarJuego() {
    // Llamar a las funciones de mostrar información para ambos jugadores
    mostrarInfoJugador1();
    mostrarInfoJugador2();

    // Lógica del juego (simulación)
    while (jugador1.vidas > 0 && jugador2.vidas > 0) {
        jugador1.reduceLives();
        jugador2.reduceLives();
    }

    // Determinar al ganador después de la simulación
    determinarGanador();
}
