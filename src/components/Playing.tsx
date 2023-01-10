import React, { useContext } from "react";
//context
import { Songs } from "../context";
//Thư viện React-h5-audio-player
import AudioPlayer from "react-h5-audio-player"; //component
import "react-h5-audio-player/lib/styles.css"; //css
//sua css
import "./playing.css";

export default function Playing() {
	//console.log(useContext(Songs));
	const { song } = useContext(Songs);
	return (
		<div>
			<AudioPlayer
				className="player-music"
				src={song.url}
				layout="stacked-reverse" //kieu giao dien
				showSkipControls={false} //hien thi nut skip
				showJumpControls={false} //ko hien thi nut jump
			/>
		</div>
	);
}
