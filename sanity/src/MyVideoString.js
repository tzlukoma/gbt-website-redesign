import React from 'react';
// These are react components
import ReactPlayer from 'react-player';

const MyVideoString = React.forwardRef((props, ref) => {
  return (
    <div>
      {props.parent.videoUrl ? (
        <ReactPlayer
          className="absolute top-0 left-0 w-full h-full"
          controls={true}
          width="600px"
          height="400px"
          loading="lazy"
          url={props.parent.videoUrl}
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
      ) : null}
    </div>
  );
});

// Create the default export to import into our schema
export default MyVideoString;
