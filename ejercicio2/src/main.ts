class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos");
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Mostrar resultados en pantalla
window.addEventListener("DOMContentLoaded", () => {
    const calc = new Calculadora();

    const resultados = `
        <h2>Resultados de la Calculadora</h2>
        <p>Suma (5 + 3): ${calc.sumar(5, 3)}</p>
        <p>Resta (10 - 4): ${calc.restar(10, 4)}</p>
        <p>Multiplicación (6 * 7): ${calc.multiplicar(6, 7)}</p>
        <p>División (20 / 4): ${calc.dividir(20, 4)}</p>
        <p>Potencia (2^5): ${calc.potencia(2, 5)}</p>
        <p>Factorial (5!): ${calc.factorial(5)}</p>
    `;

    const contenedor = document.createElement("div");
    contenedor.innerHTML = resultados;
    document.body.appendChild(contenedor);
});
