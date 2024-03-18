import { Autor } from "./Autor";
import { Libro } from "./Libro";

export class LibroImpreso implements Libro {
    titulo: string;
    autor: Autor;
    paginas: number;

    constructor(titulo: string, autor: Autor, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas; 
    }

    obtenerResumen(): string {
        return `${this.titulo} - ${this.autor.nombre} ${this.autor.apellido} - ${this.paginas}`;
    }}