//importando funções do módulo DOM
import {
  obterTextoTarefa,
  limparInput,
  renderizarTarefas,
  exibirMensagem,
  exibirDica,
} from "./dom.js";

//importando funções do módulo tarefas
import { validarTarefa, adicionarTarefa, obterTarefas } from "./tarefas.js";

//importando função para buscar dica
import { buscarDica } from "./api.js";

//selecionar o formulario para adicionar um evento de submit
const form = document.querySelector("#form-tarefa");

let timeoutMensagem;

//função para iniciar a aplicação e buscar a dica e exibindo-a
async function iniciarAplicacao() {
  const dica = await buscarDica();
  exibirDica(dica);
}

//evento de submit para adicionar uma nova tarefa
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const texto = obterTextoTarefa();
  const resultado = validarTarefa(texto);

  if (!resultado.valida) {
    exibirMensagem(resultado.mensagem, "erro");
    return;
  }

  adicionarTarefa(texto);
  renderizarTarefas(obterTarefas());
  exibirMensagem("tarefa adicionada com sucesso!", "sucesso");
  clearTimeout(timeoutMensagem);
  timeoutMensagem = setTimeout(() => {
    const mensagem = document.querySelector("#mensagem");
    if (mensagem) {
      mensagem.style.display = "none";
    }
  }, 3000);
  limparInput();
});

//Iniciar a aplicação ao carrega a pagína
iniciarAplicacao();
