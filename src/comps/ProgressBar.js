import React, { useEffect } from'react';
import useStorage from '../hooks/useStorage';   
import {motion} from 'framer-motion';
const ProgressBar=({File,setFile})=>{
    const{Url,Progress}=useStorage(File);

    useEffect(()=>{
        if(Progress===100){
            setFile(null);
        }
    },[Progress]);

    return(
        <motion.div 
        initial={{width:0}}
        animate={{width:Progress+'%'}}
        className="Progress-Bar"></motion.div>
    )
}

export default ProgressBar;