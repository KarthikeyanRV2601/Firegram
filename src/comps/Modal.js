import React from 'react';
import {motion} from 'framer-motion';
const Modal=({SelectedImage,setSelectedImg})=>{

    const HandleClick=(e)=>{
        if(e.target.classList.contains('backdrop'))
        setSelectedImg(null);
    }

    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="backdrop" onClick={HandleClick}>
            <motion.img 
            initial={{y:"-100vh"}}
            animate={{y:0}}
            src={SelectedImage} alt="enlarged-pic">

            </motion.img>
        </motion.div>
    )
}


export default Modal;