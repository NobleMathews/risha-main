import {useState,useEffect} from 'react';
import {projectStorage,projectFirestore} from '../firebase/config';

const useStorage=(imgBypass,selectedOpt,file,title,direct,createdAt,authors,links,venue)=>{
    const [progress,setProgress]=useState(0);
    const [error,setError]=useState(null);
    const [url,setUrl]=useState(null);

    useEffect(()=>{
        //ref
        const collectionRef = projectFirestore.collection('publications');
        if(!imgBypass){
            const storageRef = projectStorage.ref(file.name);
            storageRef.put(file).on('state_changed',(snap)=>{
                let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
                setProgress(percentage);
            },(err)=>{
                setError(err)
            },async ()=>{
                const url = await storageRef.getDownloadURL();
                selectedOpt==="New"?collectionRef.add({url,title,direct,createdAt,authors,links,venue}):collectionRef.doc(selectedOpt).set({url,title,direct,createdAt,authors,links,venue});
                setUrl(url);
            });
        }
        else{
            const url = 'https://firebasestorage.googleapis.com/v0/b/risha-lab-server.appspot.com/o/placeholder.png?alt=media&token=f7b4c0ab-89a8-43a6-8b7c-88a1f156f1ce';
            selectedOpt==="New"?collectionRef.add({url,title,direct,createdAt,authors,links,venue}):collectionRef.doc(selectedOpt).set({url,title,direct,createdAt,authors,links,venue});
            setProgress(100);
            setUrl(url);
            setProgress(0);
        }

    },[file,title,authors,links,venue,createdAt,direct,imgBypass,selectedOpt]);

    return {progress,url,error}
}

export default useStorage;