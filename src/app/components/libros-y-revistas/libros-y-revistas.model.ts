export class LR {
    id?: string;
    tipo?: string;
    titulo: string;
    autor: string;
    edicion: string;
    palabrasClave: string[];
    descripcion: string;
    temas: string[];
    copias: number;
    disponibles: number;
    ejemplares?: number;
    constructor(titulo: string, autor: string, edicion: string
        , palabrasClave: string[], descripcion: string, temas: string[], 
        copias: number, disponibles: number, id?: string, ejemplares?: number , tipo?: string,){
        this.tipo= tipo;
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.edicion = edicion;
        this.palabrasClave = palabrasClave || [];
        this.descripcion = descripcion;
        this.temas = temas || [];
        this.copias = copias;
        this.disponibles = disponibles;
        this.ejemplares = ejemplares;
    }
}