import { Autor } from "./Autor";

export interface Libro {
    titulo: string;
    autor: Autor;
    paginas: number;
    obtenerResumen(): string;

}

