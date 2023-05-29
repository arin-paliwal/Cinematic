import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
// import {SearchIcon} from "@mui/icons-material"
import { Search } from '@mui/icons-material'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate=useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault(); // prevent refresh behaviour of browser
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  }
  };
  return (
    <Paper 
    component="form"
    onSubmit={handleSubmit}
      sx={{
        display:"flex",
        borderRadius: 20,
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        backgroundColor: '#f2f2f2', // Set the background color here
      }}
    >
        <input
        className='search-bar'
        placeholder='Search'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />        
        <IconButton 
        type="submit"
        sx={{
            p:'10px',
            color:'red',            
        }}
        >
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar;