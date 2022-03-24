import React from 'react';
// These are react components
import ReactPlayer from 'react-player';

const MyIframeEmbed = React.forwardRef((props, ref) => {
  return (
    <div>
      {props.parent.iframeUrl ? (
        <iframe
          title={props.parent.iframeTitle}
          src={props.iframeUrl}
          height={props.iframeHeight}
          width={props.iframeWidth}
          frameborder="0"
          scrolling="no"
        ></iframe>
      ) : null}
    </div>
  );
});

// Create the default export to import into our schema
export default MyVideoString;
