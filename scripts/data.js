import { Serie } from './Serie.js';
var series = [new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "./images/BreakingBad.jpeg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "./images/Orangeisthenewblack.jpeg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "./images/GOT.jpeg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "./images/BigbangTheory.jpeg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "./images/sherlock.jpeg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "./images/AVES.jpeg")
];
var serietable = document.getElementById("serie");
mostrarSeries(series);
function mostrarSeries(Series) {
    var serieTbody = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td><a href='#' id=tarjeta").concat(serie.id, "> ").concat(serie.nombre, "</a></td>\n        <td> ").concat(serie.canal, " </td>\n        <td> ").concat(serie.temporadas, " </td>\n\n        ");
        trElement.onclick = function () { return abrirtarjeta(serie); };
        serieTbody.appendChild(trElement);
    };
    for (var _i = 0, Series_1 = Series; _i < Series_1.length; _i++) {
        var serie = Series_1[_i];
        _loop_1(serie);
    }
    serietable.appendChild(serieTbody);
}
var promedioTable = document.getElementById("promedio");
mostrarpromedio(series);
function mostrarpromedio(Series) {
    var totaltemporadas = 0;
    for (var index = 0; index < Series.length; index++) {
        var temporadas = Series[index].temporadas;
        totaltemporadas += temporadas;
    }
    var promedio;
    if (Serie.length == 0) {
        promedio = 0;
    }
    else {
        promedio = totaltemporadas / (Series.length);
    }
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Season average: </td><td>".concat(promedio, "</td>");
    promedioTable.appendChild(trElement);
}
function abrirtarjeta(Series) {
    var enlaces = document.getElementById("enlace");
    while (enlaces.firstChild) {
        enlaces.removeChild(enlaces.firstChild);
    }
    var nombre = Series.nombre;
    var descripcion = Series.descripcion;
    var enlace = Series.imagen;
    var direccion = Series.direccion;
    var trElement = document.createElement("div");
    trElement.innerHTML = "<div class=\"card\">\n    <img class=\"card-img-top\" src=".concat(enlace, ">\n    <div class=\"card-body\">\n    <h5 class=\"card-title\">").concat(nombre, "</h5>\n    <p class=\"card-text\">").concat(descripcion, "</p>\n    <a href=").concat(direccion, "> More Information </a>\n    </div>");
    enlaces.appendChild(trElement);
}
