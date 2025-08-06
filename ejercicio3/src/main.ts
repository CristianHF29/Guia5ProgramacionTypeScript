class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    getAutor(): string {
        return this.autor;
    }

    mostrarDatos(): string {
        return `Título: ${this.titulo}<br>Género: ${this.genero}<br>Autor: ${this.autor}`;
    }
}

//mostrar informacion
document.addEventListener("DOMContentLoaded", () => {
    const cancion = new Cancion("Bohemian Rhapsody", "Rock");
    cancion.setAutor("Freddie Mercury");

    const contenedor = document.createElement("div");
    contenedor.innerHTML = `
        <div style="max-width: 600px; margin: 2rem auto; padding: 1.5rem; font-family: Arial, sans-serif; background: #f9f9f9; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="text-align: center; color: #2c3e50;">Información de la Canción</h2>
            <p style="font-size: 1.1rem; color: #34495e;">${cancion.mostrarDatos()}</p>
        </div>
    `;
    document.body.appendChild(contenedor);
});