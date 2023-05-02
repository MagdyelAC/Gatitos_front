import firebase from "../firebase";

const db = firebase.collection("/gatitos");

class GatitoDataService {
  getAll() {
    return db;
  }

  create(gatito) {
    return db.add(gatito);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

const gatitoDataService = new GatitoDataService();

export default gatitoDataService;