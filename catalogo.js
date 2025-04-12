// Firebase já deve estar iniciado com firebase-init.js
const db = firebase.firestore();

function carregarFilmesDoFirestore() {
  showLoading();
  db.collection("filmes").get()
    .then(snapshot => {
      const filmes = snapshot.docs.map(doc => doc.data());
      window.todosFilmes = filmes;
      atualizarFiltroCategorias(filmes);
      mostrarFilmes();
      hideLoading();
    })
    .catch(error => {
      hideLoading();
      console.error("Erro ao carregar filmes:", error);
      alert("Erro ao carregar filmes");
    });
}

window.onload = () => {
  carregarFilmesDoFirestore();
};