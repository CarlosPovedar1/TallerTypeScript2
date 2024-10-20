import {data} from './data.js';
 var seriesTabla = document.getElementById('series');
 var temporadasPromedio =  document.getElementById('promedio');
 var seriesDetailContainer = document.getElementById('series-detail-container');
 renderSeriesInTable(data);


 temporadasPromedio.innerHTML = "Promedio temporada es: ".concat(getTemporadasProm(data));

 function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var Element = document.createElement("tr");
        Element.innerHTML = `
            <td>${s.id}</td>
            <td style="color: #4895D9; cursor: pointer;" class="serie-nombre">${s.nombre}</td>
            <td>${s.canal}</td>
            <td>${s.temporada}</td>
        `;

        // Añadir el evento click en el nombre de la serie
        Element.querySelector(".serie-nombre").addEventListener("click", function() {
            showDetails(s); // Llama a showDetails pasando la serie correspondiente
        });

        seriesTabla.appendChild(Element);
    });
}

function getTemporadasProm(series) {
    var totalTemporadas =0;
    var nSeries =0;
    series.forEach(function (s){
       totalTemporadas += s.temporada;
       nSeries+=1; 
    })
    return totalTemporadas/nSeries;
}
function showDetails(serie) {
  

    // Verificar si 'imageUrl' está definida y es válida
    const imagenSrc = serie.imageUrl ? serie.imageUrl : 'https://via.placeholder.com/150';

    seriesDetailContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${imagenSrc}" alt="${serie.nombre}" onerror="this.src='https://via.placeholder.com/150';">
        <div class="card-body">
            <h5 class="card-title">${serie.nombre}</h5>
            <p class="card-text">${serie.descripcion}</p>
            <a href="${serie.link}" class="btn btn-primary" target="_blank">Más información</a>
        </div>
    </div>
    `;
}



