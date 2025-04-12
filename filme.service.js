const filmeService = {
  findByUser(user) {
    return firebase.firestore()
      .collection("filmes")
      .where("userId", "==", user.uid)
      .get()
      .then(snapshot => snapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() })));
  }
}