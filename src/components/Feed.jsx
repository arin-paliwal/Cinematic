import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Sidebar from './Sidebar'
const Feed = () => {
  return (
    <Stack 
    sx={{
      flexDirection:{
        sx:"column",md:"row"
      }
    }}
    >
      <Box
      sx={{height:{
        sx:'auto',
        md:'92vh'
      },
    // borderRight:'1px solid #3d3d3d',
    px:{sx:0,md:2}
    }}
      >
        <Sidebar/>
        <Typography className='copyright' variant='body2'
        sx={{mt:1.5,
        color:"#000"}}
        >
          {/* Copyright 2023 Arin Paliwal */}
        </Typography>
      </Box>
      <Box p={2}
      sx={{
        overflowY:'auto',
        height:'90vh',
        flex:2
      }}
      >
        <Typography variant="h5" mb={2}
        sx={{
          color:'white'
        }}
        >
          <span style={{ color:'#8d021f'}} >Recently Added</span>
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed