class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(): string {
        if (this.cantidad < 5) {
            return "El valor a depositar debe ser mayor a $5.00";
        }
        return `Depósito exitoso. Cantidad depositada: $${this.cantidad.toFixed(2)}`;
    }

    retirar(valor: number): string {
        if (valor < 5) {
            return "El valor a retirar debe ser mayor a $5.00";
        }
        if (this.cantidad < valor) {
            return "Fondos insuficientes. No hay nada en la cuenta.";
        }
        this.cantidad -= valor;
        return `Has retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
    }

    mostrarDatos(): string {
        return `Titular: ${this.nombre}<br>Tipo de cuenta: ${this.tipoCuenta}<br>Número de cuenta: ${this.numeroCuenta}`;
    }
}

// mostrar informacion
window.addEventListener("DOMContentLoaded", () => {
    const cuenta = new Cuenta("Cristian Méndez", 10, "Ahorro", "0011223344");
    const resultado = [
        cuenta.mostrarDatos(),
        cuenta.depositar(),
        cuenta.retirar(3),
        cuenta.retirar(7)
    ];

    const contenedor = document.createElement("div");
    contenedor.innerHTML = `
        <div style="max-width: 600px; margin: 2rem auto; padding: 1.5rem; font-family: Arial, sans-serif; background: #f1f1f1; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h2 style="text-align: center; color: #2c3e50;">Resumen de Cuenta</h2>
            ${resultado.map(r => `<p>${r}</p>`).join('')}
        </div>
    `;
    document.body.appendChild(contenedor);
});
