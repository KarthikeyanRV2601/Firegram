import React, { useEffect, useState } from 'react';
import UseFirestore from'../hooks/useFirestore';
import {motion} from 'framer-motion';

const ImageGrid=({setSelectedImg})=>{
    const {Docs,DeleteObject,setDeleteObject}=UseFirestore('images');
    const [DisplayOverlay,setOverlay]=useState({
        id:null,
        bool:false});
    

   
    return(
        <div className="Image-Grid">
            {Docs&&Docs.map(doc=>(
                <motion.div className="Image-wrap" key={doc.id}
                layout
                whileHover={{opacity:0.8}}
                onHoverStart={()=>{setOverlay({id:doc.id,bool:true})}}
                onHoverEnd={()=>{setOverlay({id:null,bool:false})}}
                
                onClick={(e)=>{
                
                if(e.target.id!=="Delete")
                setSelectedImg(doc.url);}
                }
                >
                    <motion.img 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}
                    src={doc.url} alt="uploadedPic"/>
                <button 
                id="Delete"
                style={{display: ((DisplayOverlay.id==doc.id)&&DisplayOverlay.bool)? 'inherit' : 'none' }}
                 onClick={
                    async ()=>{
                        
                        await setDeleteObject({
                            id:doc.id
                        })
                    }
                     
                 }
                 className="Delete-image"></button>
                </motion.div>
            )
            )
            }
        </div>
    )
}


export default ImageGrid;