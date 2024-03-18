"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.libros = [];
    }
    agregarLibro(libro) {
        this.libros.push(libro);
        console.log(`Libro agregado a la biblioteca: ${libro.obtenerResumen()}`);
        return libro;
    }
    mostrarCatalogo() {
        console.log("Catálogo de la biblioteca");
        this.libros.map(libro => {
            console.log(libro.obtenerResumen());
        });
        return this.libros;
    }
}
exports.Biblioteca = Biblioteca;
