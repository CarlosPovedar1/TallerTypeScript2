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
    seriesDetailContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${serie.image}" alt="${serie.title}">
        <div class="card-body">
            <h5 class="card-title">${serie.title}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.url}" class="btn btn-primary">Más información</a>
        </div>
    </div>
    `;
}


