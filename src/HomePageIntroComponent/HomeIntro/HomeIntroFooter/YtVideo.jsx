import React, { useState } from "react";

export const YtVideo = () => {
    const [videoId, setVideoId] = useState("dQw4w9WgXcQ");

    const handleVideoChange = (newVideoId) => {
        setVideoId(newVideoId);
    };

    return (
        <div
            style={{ display: "flex", justifyContent: "center", paddingTop: "100px" }}
        >
            <input
                type="text"
                value={videoId}
                onChange={(e) => handleVideoChange(e.target.value)}
            />

            {/* <button onClick={() => handleVideoChange('newVideoId')}>
                Change Video
            </button> */}

            {/* <iframe
                width="800px"
                height="555px"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='YtVideoTab'></iframe> */}
            <iframe
                width="900"
                height="708"
                style={{ borderRadius: "20px" }}
                src="https://www.youtube.com/embed/WBjYTkmVxhU"
                title="How to use BLACKBOX AI Code Chat?"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};
