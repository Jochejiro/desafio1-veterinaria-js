const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const citasJson = fs.readFileSync('citas.json', 'utf8');
  const citas = JSON.parse(citasJson);
  citas.push({ nombre, edad, animal, color, enfermedad });
  fs.writeFileSync('citas.json', JSON.stringify(citas));
};

const leer = () => {
  const citasJson = fs.readFileSync('citas.json', 'utf8');
  const citas = JSON.parse(citasJson);
  console.log(citas);
};

module.exports = { registrar, leer };
