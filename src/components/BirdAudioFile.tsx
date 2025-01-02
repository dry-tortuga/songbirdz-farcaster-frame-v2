import React from "react";

const BirdAudioFile = ({ birdId }) => {

	return (
		<audio
			src={`https://songbirdz.cc/audio/${birdId}.mp3`}
			controlsList="nodownload"
			controls
			loop />
	);

};

export default BirdAudioFile;
