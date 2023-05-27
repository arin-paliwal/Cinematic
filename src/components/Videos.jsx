// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import { Stack, Box } from '@mui/material';
const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap"
      justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default Videos;
