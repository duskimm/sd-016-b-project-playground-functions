// Desafio 10
function techList(tech, name) {
  // seu código aqui
  if (tech.length === 0) {
    return 'Vazio!';
  }

  tech.sort();
  let list = [];
  for (let i = 0; i < tech.length; i += 1) {
    list[i] = {
      tech: tech[i],
      name,
    };
  }
  return list;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
