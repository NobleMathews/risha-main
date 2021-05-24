import { projectFirestore } from '../firebase/config';
import * as firebase from 'firebase/app';

const useFirestore = () => {
    const getDocument = (documentPath, onUpdate) => {
      projectFirestore
        .doc(documentPath)
        .onSnapshot(onUpdate);
    }
    
    const deleteDocument = (collectionPath, documentPath) =>{
      projectFirestore
      .collection(collectionPath)
      .doc(documentPath)
      .delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    }

    const saveDocument = (collectionPath, documentPath, document) => {
      projectFirestore
      .collection(collectionPath)
        .doc(documentPath)
        .set({...document, createdAt: firebase.firestore.FieldValue.serverTimestamp()});
    }
  
    const getCollection = (collectionPath, onUpdate) => {
      projectFirestore
        .collection(collectionPath)
        .orderBy('createdAt', 'desc')
        .onSnapshot(onUpdate);
      // unsubscribe();
    }
  
    const saveCollection = (collectionPath, document) => {
      projectFirestore
        .collection(collectionPath)
        .add({
          ...document,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
  
    return { getDocument, saveDocument, getCollection, saveCollection, deleteDocument }
  }

  export default useFirestore;