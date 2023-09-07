const inputCep = document.getElementById("js-input-cep");
const btnPrimary = document.querySelector(".btn ");
const inputBairro = document.getElementById("js-input-bairro");
const inputCepDado = document.getElementById("js-input-cep-dados");
const inputLogradouro = document.getElementById("js-input-logradouro");
const inputEstado = document.getElementById("js-input-estado");

const areaDados = document.querySelector(".js-dados");
const msgErro = document.querySelector(".js-error");

btnPrimary.addEventListener("click", () => {
  if (inputCep.value !== "") {
    const cepValue = inputCep.value.replace(/[.,-]/g, "");

    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
    .then(res => res.json())
    .then (json => {
     inputBairro.value = json.bairro
     inputCepDado.value = json.cep
     inputLogradouro.value = json.logradouro
     inputEstado.value = json.uf

     msgErro.style.display = "none";
     areaDados.style.display = "block";
     inputCep.value = ""
    })


  }
  else{
    msgErro.style.display = "block";
    setTimeout(() => {
        const msgErro = document.querySelector(".js-error");

      msgErro.style.display = "none";
  
    },4000);
  }
  
  }
);
