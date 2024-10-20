export class Serie{
    id: number;
    nombre: String;
    canal: String;
    temporada: number;
    descripcion :String;
    link:String;
    imageUrl:String;
    constructor(id, nombre, canal, temporada, descripcion, link, imageUrl) {
            this.id = id;
            this.nombre = nombre;
            this.canal = canal;
            this.temporada = temporada;
            this.descripcion = descripcion;
            this.link = link;
            this.imageUrl = imageUrl;
        }
    
}