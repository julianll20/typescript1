"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroImpreso = void 0;
class LibroImpreso {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    obtenerResumen() {
        return `${this.titulo} - ${this.autor.nombre} ${this.autor.apellido} - ${this.paginas}`;
    }
}
exports.LibroImpreso = LibroImpreso;
