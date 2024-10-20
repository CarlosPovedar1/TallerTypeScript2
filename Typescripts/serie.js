var Serie =/**@class */ (function() {
    function Serie(id, nombre,canal, temporada, descripcion,link , imageUrl){
        this.id= id;
        this.nombre= nombre;
        this.canal = canal;
        this.temporada= temporada;
        this.descripcion = descripcion;
        this.link = link;
        this.imageUrl = imageUrl;
        
    }
    return Serie;
}());

export{Serie};