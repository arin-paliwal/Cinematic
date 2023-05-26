import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
// import {SearchIcon} from "@mui/icons-material"
import { Search } from '@mui/icons-material'
const SearchBar = () => {
  return (
    <Paper 
    component="form"
    onSubmit={()=>{}}
      sx={{
        borderRadius: 20,
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        backgroundColor: '#d5d5d5', // Set the background color here
      }}
    >
        <input
        className='search-bar'
        placeholder='Search'
        value=""
        onChange={()=>{}}
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