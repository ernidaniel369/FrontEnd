export class Habilidades {
    id? : number;
    nombre : string;
    nivel : number;
    imagen : string;

    constructor(nombre: string, nivel: number, imagen: string){
        this.nombre = nombre;
        this.nivel = nivel;
        this.imagen = imagen;
    }
}
