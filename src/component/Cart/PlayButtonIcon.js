import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const PlayButton = () => {
  return (
    <div>
      <FontAwesomeIcon style={{opacity: 0.40}} icon={faPlayCircle} size="5x" />
    </div>
  );
};

export default PlayButton;