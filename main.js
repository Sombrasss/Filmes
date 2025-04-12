// main.js
const db = firebase.firestore();

document.getElementById("adicionarFilmeButton").addEventListener("click", async () => {
  const nome = document.getElementById("nomeFilme").value.trim();
  const foto = document.getElementById("fotoFilme").value.trim();
  const categoria = document.getElementById("categoriaFilme").value.trim();
  const trailer = document.getElementById("trailerFilme").value.trim();
  const assistir = document.getElementById("assistirFilme").value.trim();
  const dataLancamento = document.getElementById("dataLancamentoFilme").value;
  const duracao = document.getElementById("duracaoFilme").value.trim();
  const partes = document.getElementById("partesFilme").value.trim();
  const tipo = document.getElementById("tipoFilme").value;
  const info = document.getElementById("infoFilme").value.trim();
  const patrocinado = document.getElementById("patrocinadoFilme").value === "true";

  if (!nome || !foto || !categoria) {
    alert("Preencha nome, foto e categoria!");
    return;
  }

  const botao = document.getElementById("adicionarFilmeButton");
  botao.disabled = true;
  botao.textContent = "Salvando...";

  try {
    await db.collection("filmes").add({
      nome,
      foto,
      categoria,
      trailer,
      assistir,
      dataLancamento,
      duracao,
      partes,
      tipo,
      info,
      patrocinado,
      criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert("Filme salvo com sucesso!");
    document.querySelectorAll(".formularioFilme input, .formularioFilme textarea, .formularioFilme select")
      .forEach(el => el.value = "");
  } catch (erro) {
    console.error("Erro ao salvar:", erro);
    alert("Erro ao salvar o filme.");
  } finally {
    botao.disabled = false;
    botao.textContent = "Adicionar Filme";
  }
});