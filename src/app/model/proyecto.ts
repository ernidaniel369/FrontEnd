export class Proyecto {
    id? : number;
    titulo : string;
    resumen : string;
    enlace : string;

    constructor(titulo: string, resumen: string, enlace: string){
        this.titulo = titulo;
        this.resumen = resumen;
        this.enlace = enlace;
    }
}