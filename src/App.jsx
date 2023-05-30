import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, VideoDetail, SearchFeed, ChannelDetail } from "./components";
import Footer from "./components/Footer";
import Error from "./components/Error";
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
      </Box>
    </BrowserRouter>
  );
};

export default App;
