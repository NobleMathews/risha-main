import {useState,useEffect} from 'react';
import {projectStorage,projectFirestore} from '../firebase/config';

const useStorage=(selectedOpt,file,title,direct,createdAt,authors,links,venue)=>{
    const [progress,setProgress]=useState(0);
    const [error,setError]=useState(null);
    const [url,setUrl]=useState(null);

    useEffect(()=>{
        //ref
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('publications');

        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percentage);
        },(err)=>{
            setError(err)
        },async ()=>{
            const url = await storageRef.getDownloadURL();
            selectedOpt==="New"?collectionRef.add({url,title,direct,createdAt,authors,links,venue}):collectionRef.doc(selectedOpt).update({url,title,direct,createdAt,authors,links,venue});
            setUrl(url);
        });
    },[file,title,authors,links,venue]);

    return {progress,url,error}
}

export default useStorage;