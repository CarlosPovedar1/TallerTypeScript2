export class Serie{
    id: number;
    nombre: string;
    canal: string;
    temporada: number;
    descripcion :string;
    link:string;
    imagenUrl:string;
    constructor(id: number, nombre: string, canal: string, temporadas: number, descripcion: string, link:string, imagenUrl:string){
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporada = temporadas;
        this.descripcion = descripcion;
        this.link = link;
        this.imagenUrl = imagenUrl;
    }
}