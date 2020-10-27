import { projectFirestore } from '../firebase/config';


const useFirestore = () => {
    const getDocument = (documentPath, onUpdate) => {
      projectFirestore
        .doc(documentPath)
        .onSnapshot(onUpdate);
    }
  
    const saveDocument = (documentPath, document) => {
      projectFirestore
        .doc(documentPath)
        .set(document);
    }
  
    const getCollection = (collectionPath, onUpdate) => {
      projectFirestore
        .collection(collectionPath)
        .orderBy('createdAt', 'desc')
        .onSnapshot(onUpdate);
    }
  
    const saveCollection = (collectionPath, collection) => {
      projectFirestore
        .collection(collectionPath)
        .set(collection)
    }
  
    return { getDocument, saveDocument, getCollection, saveCollection }
  }

  export default useFirestore;