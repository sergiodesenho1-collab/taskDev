//dom.js
export function obterTextoTarefa() {
  const input = document.querySelector("#input-tarefa");
  return input.value;
}

//função para limpar o campo do input apos adicionar uma tarefa
export function limparInput() {
  const input = document.querySelector("#input-tarefa");
  input.value = "";
  input.focus();
}

//função para renderizar a lista de tarefas no DOM
export function renderizarTarefas(tarefas) {
  const lista = document.querySelector("#lista-tarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa) => {
    const li = document.createElement("li");
    li.textContent = tarefa.texto;

    if (tarefa.concluida) {
      li.style.textDecoration = "line-through";
      li.style.opacity = "0.6";
    }

    lista.appendChild(li);
  });
}

//função para exibir mensagens de validaçao ou sucesso para o usuário
export function exibirMensagem(mensagem, tipo) {
  let areaMessage = document.querySelector("#mensagem");

  if (!areaMessage) {
    areaMessage = document.createElement("p");
    areaMessage.id = "mensagem";
    document.body.insertBefore(
      areaMessage,
      document.querySelector("#lista-tarefas"),
    );
  }

  areaMessage.textContent = mensagem;

  if (tipo === "erro") {
    areaMessage.style.color = "red";
  } else {
    areaMessage.style.color = "green";
  }
}

//função para exibir dados da API
export function exibirDica(dica) {
  let areaDica = document.querySelector("#dica");

  if (!areaDica) {
    areaDica = document.createElement("p");
    areaDica.id = "dica";
    document.body.appendChild(areaDica);
  }

  if (dica) {
    areaDica.textContent = `💡Dica do dia: ${dica}`;
  } else {
    areaDica.textContent = `⚠️ Não foi possível carregar a dica. `;
  }
}
