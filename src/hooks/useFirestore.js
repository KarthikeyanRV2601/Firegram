import  {useState,useEffect} from 'react';
import {Firestore} from'../firebase/config';


const UseFirestore=(collection)=>{
    const [Docs,setDocs] =useState([]);
    const [DeleteObject,setDeleteObject]=useState({
        id:null
    })

   
    useEffect(()=>{
        if(DeleteObject.id!==null){
        const unsub=Firestore.collection(collection)
            .orderBy('createdAt','desc')
            .onSnapshot((Snap)=>{
                //Snap returns all the docs present at that instance
                let documents=[];
                Snap.forEach(doc=>{
                    
                    if(doc.id!==DeleteObject.id)
                    {
                    
                    documents.push({...doc.data(),id:doc.id});
                    }
                    else{
                        console.log(doc.id);
                    }
                });
                setDocs(documents)
            })
    
            return()=>unsub();
        }
        
    },[DeleteObject])
            
    
    

    useEffect(()=>{
    const unsub=Firestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((Snap)=>{
            //Snap returns all the docs present at that instance
            let documents=[];
            Snap.forEach(doc=>{
                documents.push({...doc.data(),id:doc.id});
            });

            setDocs(documents)
        })

        return()=>unsub();
    },[collection])

    return{Docs,DeleteObject,setDeleteObject};
}

export default UseFirestore;