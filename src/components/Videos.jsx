// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <div>Videos will display here!</div>
  );
};

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default Videos;
