//api.js
export async function buscarDica() {
  try {
    const resposta = await fetch("https://api.adviceslip.com/advice");

    if (!resposta.ok) {
      throw new Error("Erro ao buscar dica");
    }

    const dados = await resposta.json();
    return dados.slip.advice;
  } catch (error) {
    console.error("Erro ao buscar dica:", error);
    return null;
  }
}
