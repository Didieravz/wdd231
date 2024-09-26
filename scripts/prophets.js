const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //muestra en consola una tabla con la data
  //console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    //crea un nuevo elemento
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    //creo la img del profeta
    const portrait = document.createElement("img");
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    //se agrega el nombre completo del profeta al encabesazo
    fullName.textContent = `${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`;

    // Información adicional
    const birthDate = document.createElement("p");
    birthDate.textContent = `Birth Date: ${prophet.birthdate}`;

    const deathDate = document.createElement("p");
    deathDate.textContent = `Death Date: ${prophet.death}`;

    //Agrega el h2 a la section
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(deathDate);
    //Agrega la img a la section
    card.appendChild(portrait);

    //agrego section al main
    cards.appendChild(card);
  });
};
