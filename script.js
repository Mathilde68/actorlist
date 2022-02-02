
let actors;
let filter="all";



const fil ="./jsondata/actors.json";


async function hentData() {
    const result = await fetch(fil);
  actors = await result.json();

    vis(actors);
}




document.addEventListener("DOMContentLoaded", start)
function start() {
    const filterKnapper =document.querySelectorAll("nav #button");
   filterKnapper.forEach(knap => knap.addEventListener("click", filtrer)); 
    console.log(filterKnapper);
    hentData(fil);

}


function filtrer() {
    console.log("i work");
    //sætter filters værdi lig med værdien fra data af den knap der førte ind i funktionen
    filter = this.dataset.movie;

    //fjerner og tilføjer valgt class til den rigtige knap
    document.querySelector(".valgt").classList.remove("valgt");
    this.classList.add("valgt");
console.log(filter);

    vis();
}

function vis() {
    let list = document.querySelector(".actorlist");
    let actortemplate = document.querySelector("template");
    console.log("ShowActors work");

    list.textContent = " ";
  actors.forEach(actor => {
    if (filter == actor.movie || filter == "all") {
        const clone = actortemplate.cloneNode(true).content;

    clone.querySelector("li").textContent = actor.fullname;
    clone.querySelector("li").addEventListener("click", () => visDetails(actor));

    list.appendChild(clone);
    }
  });
}


function visDetails (actor){
    popup.style.display="block";
    popup.querySelector("h2").textContent = actor.fullname;
    popup.querySelector("p").textContent = actor.movie;
    document.querySelector("#luk").addEventListener("click", () => popup.style.display="none");
}



