// function saudacao(nome) {
//   console.log("Olá, " + nome);
// }

// function processarUsuario(saudacao) {
//   const nome = "Lucas";
//   saudacao(nome);
// }

// processarUsuario(saudacao);

function saudacao(nome) {
  console.log(`Olá, meu nome é ${nome}`);
}

function processarUsuario(callbakc) {
  const nome = "Jefferson";
  callbakc(nome);
}

processarUsuario(saudacao);
