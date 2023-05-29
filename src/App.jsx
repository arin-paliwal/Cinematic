import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, VedioDetail, SearchFeed, ChannelDetail } from "./components"
const App = () => {
  return <BrowserRouter>
    <Box sx={{ backgroundColor: "#fff" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/vedios/:id" element={<VedioDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>

    </Box>
  </BrowserRouter>;
};

export default App;
