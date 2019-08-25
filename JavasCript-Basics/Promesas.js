const API_URL = `https://swapi.co/api/`;
const PEOPLE_URL = `${API_URL}people/:id`.replace(":id", 1);

$.get(PEOPLE_URL, function(data) {
  let promesaPersona = new Promise((resolve, reject) => {
    resolve(`Se cumplió la promesa`);
    reject(`No se cumplió la promesa`);
  });

  promesaPersona.then(() => {
    console.log(`Mi nombre es ${data.name}`);
    $("body").html(`<div><h1>Mi nombre es ${data.name}</h1></div>`);
  });
  promesaPersona.catch(() => {
    console.log(`No se pudo completar la acción`);
  });
});
