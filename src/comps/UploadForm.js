import React, { useEffect, useState } from 'react';
import ProgressBar from '../comps/ProgressBar';
const UploadForm=()=>{
    const [File,setFile]=useState(null);
    const [Error,setError]=useState(null);

    useEffect(()=>{
        if(Error)
        alert(Error);
    },[Error])
    const types=['image/png','image/jpeg'];
    
    const changeHandler=(e)=>{
        let Selected=e.target.files[0];
        if(Selected && types.includes(Selected.type))    setFile(Selected);
        else setError('Invalid image type.Please select a png or jpeg');
    }
    return(
        <form>
            <label for="file-input">
                <img className="Icon" src={require('../media/icons/plus.png')}/>
            </label>
            <input className="Upload-Button" id="file-input" type="file" onChange={changeHandler}></input>
            <div className="Output">
                {File&&<div>{File.name}</div>}
                {File&&<ProgressBar File={File} setFile={setFile}/>}
            </div>
        </form>
    )
}


export default UploadForm;