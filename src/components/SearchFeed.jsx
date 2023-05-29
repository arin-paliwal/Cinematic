import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/fetchApi";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log(searchTerm);
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);
  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h5"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search Results for :
        <span style={{ color: "#8d021f" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
