import React from 'react';
import "./RecommendedVideos.css";
import Video from "./Video";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
            </div>
        </div>
    )
}

export default RecommendedVideos;
