import  {useState,useEffect} from 'react';
import {Storage,Firestore,TimeStamp} from'../firebase/config';

const useStorage=(File)=>{
    const [Progress,setProgress]=useState(0);
    const [Error,setError]=useState(null);
    const [Url,setUrl]=useState(null);


    useEffect(()=>{
        //references
        const StorageRef=Storage.ref(File.name);
        const Collectionref=Firestore.collection('images');

        StorageRef.put(File).on('state_changed',(Snap)=>{
            let Percentage=(Snap.bytesTransferred/Snap.totalBytes)*100;
            setProgress(Percentage);
        },
        (error)=>{
            setError(error);
        },
        async ()=>{
            const url=await StorageRef.getDownloadURL();
            Collectionref.add({url,'createdAt':TimeStamp()})
            setUrl(url);
        }
        )
    },[File]);

    return {Progress,Url,Error}
}

export default useStorage;