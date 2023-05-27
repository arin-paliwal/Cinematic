import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
    <Card
        sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            boxShadow: "none",
            borderRadius: 0,
        }}
    >
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={snippet?.title}
                sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: "#f2f2f2", height: "106px" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" color="#000">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link
                to={
                    snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
                }
            >
                <Typography variant="subtitle2" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircleIcon
                        sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                    />
                </Typography>
            </Link>
        </CardContent>
    </Card>
);

VideoCard.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.shape({
            videoId: PropTypes.string.isRequired,
        }).isRequired,
        snippet: PropTypes.shape({
            thumbnails: PropTypes.shape({
                high: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
            }),
            title: PropTypes.string,
            channelId: PropTypes.string,
            channelTitle: PropTypes.string,
        }),
    }).isRequired,
};

export default VideoCard;
