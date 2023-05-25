import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from "../utils/Icons & Images/logo.jpeg"
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2}
      sx={{
        position: "sticky", background: "fff", top: 0,
        justifyContent: 'space-between'
      }}
    >
      <Link to="/" style={{display:'flex' ,alignItems:'center'}}>
        <img src={logo} alt="logo" height={90} />
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar