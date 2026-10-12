const campo = document.getElementById("conteudo");
const btnEnviar = document.getElementById('enviar')
const resultadoDiv = document.getElementById('resultado');
btnEnviar.addEventListener("click", atualizarHash);

async function atualizarHash (){
  var texto = campo.value;
  var transformado = await transformarTexto(texto);
  var final = bufferParaHex(transformado);
  resultadoDiv.innerHTML = final;
}
async function transformarTexto(texto) {
  const encoder = new TextEncoder();
  const dados = encoder.encode(texto);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dados);
  return hashBuffer;
}

function bufferParaHex(buffer) {
  const bytes = new Uint8Array(buffer);
  return Array.from(bytes)
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
}

const btnlimpar = document.getElementById('limpar')
btnlimpar.addEventListener("click", () => {
  document.getElementById('conteudo').value = '';
  resultadoDiv.innerHTML = resultadoDiv.innerHTML + ' --- RESULTADO ANTIGO';
});

let valorhash1=document.getElementById("hash1").value;
let valorhash2=document.getElementById("hash2").value;
const botao = document.getElementById("comparar");
botao.addEventListener("click", () => {
  document.getElementById('resultado-comparacao').innerHTML = valorhash1 === valorhash2 ? "Os hashes são iguais" : "Os hashes são diferentes";
});
const hash1 = document.getElementById("hash1");
const hash2 = document.getElementById("hash2");
hash1.addEventListener("input", () => {
  valorhash1 = hash1.value;
});
hash2.addEventListener("input", () => {
  valorhash2 = hash2.value;
}); 