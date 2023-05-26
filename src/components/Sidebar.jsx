// import React from 'react'
import { Stack } from '@mui/material'
import {categories} from "../utils/constants"
const selectedCategory = "Recent Uploads";
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
        <button
        className="category-btn"
        style={{
          background:category.name===selectedCategory && '#f2f2f2'
        }}
        key={category.name}
        >
            <span>{category.icon}</span>
            &nbsp;
            &nbsp;
            <span >{category.name}</span>
        {/* style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }} */}
        </button>
    ))}    
    </Stack>
  )
}

export default Sidebar