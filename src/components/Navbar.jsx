import React, { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from "../utils/Icons & Images/logo.png";
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop !== 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: 'space-between',
        background: isScrolled ? '#fff' : 'transparent',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height="70px" />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
