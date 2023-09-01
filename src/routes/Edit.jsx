import React from 'react'
import { useNavigate } from 'react-router-dom';

const Edit = ({handleEdit,list}) => {
  //const product = list?.find((item) => item.id === id);
  const navigate = useNavigate();
  return (
    <div style={{color:'black',padding:24}}>Edit
    
    
    <form onSubmit={null}>

    </form>
    
    </div>
  )
}

export default Edit