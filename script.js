
let actors;

const jsonfile = "actors.json";

async function getData(jsonfile) {
  const jsonData = await fetch(jsonfile);
    actors = await jsonData.json();

  vis(actors);
  console.log(actors);
}



function vis() {
    let list = document.querySelector(".actorlist");
    let actortemplate = document.querySelector("template");
    console.log("ShowActors work");

 
  actors.forEach(actor => {
    const clone = actortemplate.cloneNode(true).content;

    clone.querySelector("li").textContent = actor.fullname;

    list.appendChild(clone);
  });
}

getData(jsonfile);
