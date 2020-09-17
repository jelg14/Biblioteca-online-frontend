export class Usuario {

    /*PARA LAS PALABRAS CLAVE DE LIBROS, COMENTADOS IGUAL QUE ESTE MENSAJE 
     "para parametros opcionales agregar simbolo (?). EJ. dentro del constructor: palabrasClave?: string[] "*/
    id?: string;
    carnet: string;
    nombre: string;
    apellido: string;
    rol: string;
    password: string;
    constructor(carnet: string, nombre: string, apellido: string, rol: string, password: string, id?: string){
        this.id = id;
        this.carnet = carnet;
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
        this.password = password;
        //this.palabrasClave = palabrasClave || []
    }
}