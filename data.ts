import {Serie} from './Serie.js';

let series = [new Serie(1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
"https://www.amc.com/shows/breaking-bad","./images/BreakingBad.jpeg") ,

new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
"https://www.netflix.com/co/title/70242311","./images/Orangeisthenewblack.jpeg"),

new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
  "./images/GOT.jpeg"),

new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
    "https://www.cbs.com/shows/big_bang_theory/about/", "./images/BigbangTheory.jpeg"),

new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
    "https://www.bbc.co.uk/programmes/b018ttws", "./images/sherlock.jpeg"),

new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
    "https://www.bbc.co.uk/programmes/p065smy4", "./images/AVES.jpeg")

];


let serietable: HTMLElement = document.getElementById("serie")!;
mostrarSeries(series);


function mostrarSeries(Series:Serie[]):void
{
    let serieTbody: HTMLElement = document.createElement("tbody");
    for (let serie of Series)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML=`
        <td>${serie.id}</td>
        <td><a href='#' id=tarjeta${serie.id}> ${serie.nombre}</a></td>
        <td> ${serie.canal} </td>
        <td> ${serie.temporadas} </td>

        `
        ;
        trElement.onclick = () => abrirtarjeta(serie);
        serieTbody.appendChild(trElement);
    }
    serietable.appendChild(serieTbody);


}

let promedioTable: HTMLElement = document.getElementById("promedio")!;
mostrarpromedio(series);
function mostrarpromedio(Series: Serie[]):void{
    let totaltemporadas:number=0;
    for (let index =0; index<Series.length; index++)
        {
          let temporadas: number = Series[index].temporadas; 
          totaltemporadas+=temporadas; 

        }
    let promedio: number;
    if(Serie.length==0)
        {promedio=0;}
    else
    {promedio= totaltemporadas/(Series.length);}
    
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML=`<td>Season average: </td><td>${promedio}</td>`;
    promedioTable.appendChild(trElement);
}

function abrirtarjeta(Series: Serie):void{
let enlaces: HTMLElement = document.getElementById("enlace")!;
while(enlaces.firstChild)
    {enlaces.removeChild(enlaces.firstChild);}

  let nombre: String = Series.nombre; 
  let descripcion: String = Series.descripcion; 
  let enlace: String = Series.imagen;
  let direccion: String = Series.direccion;
  let trElement:HTMLElement = document.createElement("div");
  trElement.innerHTML= `<div class="card">
    <img class="card-img-top" src=${enlace}>
    <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">${descripcion}</p>
    <a href=${direccion}> More Information </a>
    </div>`
   enlaces.appendChild(trElement);

}