import React,{useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
    
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/");
        },2000);
    },[])
    return (<h1 style={{color:'red'}}>Error! Page Not Found <p>Coming Back to Home page....</p></h1>)
    
  }

export default Error;