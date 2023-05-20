'use client';
import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
	videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
	return (
		<ReactPlayer
			className="absolute top-0 left-0 w-full h-full"
			controls={true}
			width="100%"
			height="100%"
			loading="lazy"
			url={videoUrl}
			config={{
				youtube: {
					embedOptions: {
						modestbranding: 1,
						autohide: 1,
						showinfo: 0,
						controls: 0,
					},
				},
			}}
		/>
	);
};

export default VideoPlayer;
