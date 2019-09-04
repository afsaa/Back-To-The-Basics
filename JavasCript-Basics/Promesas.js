const API_URL = `https://swapi.co/api/`;
const people = [1, 2, 3, 4, 5, 6, 7];

people.map(id => {
  let PEOPLE_URL = `${API_URL}people/:id`.replace(":id", id);
  $.get(PEOPLE_URL, function(data) {
    let promesaPersona = new Promise((resolve, reject) => {
      resolve(`Se cumplió la promesa`);
      reject(`No se cumplió la promesa`);
    });

    promesaPersona
      .then(() => {
        console.log(`Mi nombre es ${data.name}`);
        $("body").append(`<div><h1>Mi nombre es ${data.name}</h1></div>`);
      })
      .catch(() => console.log(`No se pudo completar la acción`));
  });
});
