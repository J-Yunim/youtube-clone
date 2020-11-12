import React from 'react'
import './Video.css';
import Avatar from "@material-ui/core/Avatar"

function Video({ image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="video">
            <img className="video_img" src={image} alt="" />
            <div className="video_info">
                <Avatar className="video_avatar" alt="" src={channelImage} />
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video
