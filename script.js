
let actors;

const jsonfile = "actors.json";

async function getData(jsonfile) {
  const jsonData = await fetch(jsonfile);
    actors = await jsonData.json();

  vis(actors);
  console.log(actors);
}

getData(jsonfile);

function vis() {
    let list = document.querySelector(".actorlist");
    let actortemplate = document.querySelector("template");
    console.log("ShowActors work");

 
  actors.forEach(actor => {
    const clone = actortemplate.cloneNode(true).content;

    clone.querySelector("li").textContent = actor.fullname;
    clone.querySelector("li").addEventListener("click", () => visDetails(actor));

    list.appendChild(clone);
  });
}

function visDetails (actor){
    popup.style.display="block";
    popup.querySelector("h2").textContent = actor.fullname;
    popup.querySelector("p").textContent = actor.movie;
    document.querySelector("#luk").addEventListener("click", () => popup.style.display="none");
}


