import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchApi } from "./../utils/fetchApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  // console.log(channelDetail,videos);
  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return <Box minHeight="95vh">
    <Box>
      <div style={{
      background:'black',
      zIndex:10,
      height:'300px'
      }}
      />
      <ChannelCard channelDetail={channelDetail}
      marginTop="-150px" />
      <Box display="flex" p="2">
        <Box sx={{ mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
        </Box>
    </Box>
  </Box>;
};

export default ChannelDetail;
