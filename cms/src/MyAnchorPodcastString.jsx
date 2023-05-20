import React from 'react';
// These are react components
import { Stack } from '@sanity/ui';

const MyAnchorPodcastString = React.forwardRef((props, ref) => {
  return (
    <Stack>
      {props?.parent?.audioUrl ? (
        <iframe
          title={props.parent.title}
          src={props.parent.audioUrl}
          height="102px"
          width="600px"
          frameborder="0"
          scrolling="no"
        ></iframe>
      ) : null}
    </Stack>
  );
});

// Create the default export to import into our schema
export default MyAnchorPodcastString;
