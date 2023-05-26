// import React from 'react'
import { Stack } from '@mui/material'
import {categories} from "../utils/constants"
const Sidebar = () => {
  return (
    <Stack
    direction="row"
    sx={{
        overflowY:"auto",
        height:{sx:'auto',md:'95%'},
        flexDirection:{md:'column'}
    }}
    >
    {categories.map((category)=>(
        // eslint-disable-next-line react/jsx-key
        <button
        className="category-btn"
        >
            <span>{category.icon}</span>
            &nbsp;
            &nbsp;
            <span>{category.name}</span>
        </button>
    ))}    
    </Stack>
  )
}

export default Sidebar