import {useState,useEffect} from 'react';
import {projectStorage,projectFirestore,timeStamp} from '../firebase/config';

const useStorage=(file,title,authors,links,venue)=>{
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
            const createdAt = timeStamp();
            collectionRef.add({url,title,authors,links,venue,createdAt})
            setUrl(url);
        });
    },[file,title,authors,links,venue]);

    return {progress,url,error}
}

export default useStorage;