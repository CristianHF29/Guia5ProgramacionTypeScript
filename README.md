# Guia5ProgramacionTypeScript
Programacion TypeScript POO

Este repositorio contiene la solución a una guía de ejercicios prácticos de **Programación Orientada a Objetos con TypeScript**, enfocados en los pilares fundamentales de la POO: clases, encapsulamiento, herencia, abstracción y más.

---

## 📘 Ejercicios incluidos

Cada carpeta (`ejercicio1`, `ejercicio2`, etc.) contiene una solución completa e independiente, con su propio archivo TypeScript, HTML y configuración opcional de desarrollo.

| Carpeta       | Descripción resumida                                     |
|--------------|-----------------------------------------------------------|
| ejercicio1    | Clase `CabeceraPagina` que imprime título con estilos    |
| ejercicio2    | Clase `Calculadora` con operaciones matemáticas básicas  |
| ejercicio3    | Clase `Cancion` con encapsulamiento y métodos getter/set |
| ejercicio4    | Clase `Cuenta` que valida depósitos y retiros            |
| ejercicio5    | Clases `Persona` (abstracta) y `Empleado` con herencia   |

---

## ⚙️ Requisitos para ejecutar

- [Node.js](https://nodejs.org/) instalado (v18+ recomendado)
- npm (se instala junto con Node)

---

## 📦 Instalación

Dentro de cada carpeta de ejercicio (`ejercicio1`, `ejercicio2`, etc.):

```bash
npm install
```

Esto instalará:
- `typescript` para compilar los `.ts`
- `lite-server` para correr el HTML con recarga
- `concurrently` para compilar y servir al mismo tiempo

---

## 🚀 Ejecución en modo desarrollo

Usa este comando en la carpeta de cada ejercicio:

```bash
npm run dev
```

Este comando hace dos cosas:
- Compila automáticamente los archivos `.ts` con `tsc --watch`
- Abre el archivo `index.html` con recarga automática usando `lite-server`

---

## 📁 Estructura típica de cada ejercicio

```
ejercicioX/
├── dist/               # Código compilado (IGNORADO en Git)
├── node_modules/       # Dependencias (IGNORADO en Git)
├── src/
│   └── main.ts         # Código fuente principal
├── index.html          # Página de prueba visual
├── package.json        # Scripts de ejecución y dependencias
├── tsconfig.json       # Configuración del compilador TypeScript
└── .gitignore          # Define qué archivos se deben ignorar en Git
```

---

## 🧾 Archivos que deben subirse a Git

✔️ Subir:
- `src/`
- `index.html`
- `package.json`
- `tsconfig.json`
- `.gitignore`

❌ No subir:
- `dist/`
- `node_modules/`

---

## ✨ Vista previa

Cada ejercicio genera una visualización limpia en el navegador usando HTML y estilos básicos. Puedes ver los resultados directamente abriendo el HTML o usando el servidor de desarrollo con `lite-server`.

---

## 🧠 Autor

Cristian Méndez  
Guía de ejercicios de Programación Orientada a Objetos con TypeScript
