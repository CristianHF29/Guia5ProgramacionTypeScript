abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    esMayorDeEdad(): string {
        return this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    }

    abstract mostrarDatos(): string;
}

class Empleado extends Persona {
    private sueldo: number = 0;

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): string {
        return `Sueldo: $${this.sueldo.toFixed(2)}`;
    }

    mostrarDatos(): string {
        return `
            Nombre: ${this.nombre} ${this.apellido}<br>
            Dirección: ${this.direccion}<br>
            Teléfono: ${this.telefono}<br>
            Edad: ${this.edad}<br>
            ${this.esMayorDeEdad()}<br>
            ${this.imprimirSueldo()}
        `;
    }
}

//Uso clase, imprimir informacion
document.addEventListener("DOMContentLoaded", () => {
    const empleado = new Empleado("Cristian", "Méndez", "Calle Futura #123", "7000-0000", 25);
    empleado.cargarSueldo(850.50);

    const contenedor = document.createElement("div");
    contenedor.innerHTML = `
        <div style="max-width: 700px; margin: 2rem auto; padding: 2rem; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); font-family: 'Segoe UI', sans-serif;">
            <h2 style="text-align: center; color: #2c3e50;">Información del Empleado</h2>
            <p style="font-size: 1.1rem; color: #34495e;">${empleado.mostrarDatos()}</p>
        </div>
    `;
    document.body.appendChild(contenedor);
});
