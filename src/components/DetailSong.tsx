import React, { useContext } from "react";
import { Songs } from "../context";

export default function DetailSong() {
	const { song } = useContext(Songs);
	return (
		<div className="col-span-1 p-3">
			{/* p-3: padding=3s
      col-span-1: Chiếm 1 cột trong 3 grid khai báo ở App.js */}
			<h2 className="text-cyan-500 font-bold">Now playing</h2>
			<h2 className="text-neutral-400 text-2xl">{song.name}</h2>
			{/* image avt*/}
			<div className="w-[240px] m-auto mt-10">
				<img
					src={song.links.images[0].url}
					className="w-full"
					alt="avtar"
				/>
			</div>
			{/* end image avt*/}
			<div className="flex justify-evenly items-center mt-10">
				{/* justify: bao gom between, around, evenly giong flexbox 
        items: giong align-items*/}
				<img
					src={song.links.images[1].url}
					className="w-[70px] rounded-full"
					alt="avatar_desc"
				/>
				{/* rounded = border-radious */}
				<span className="text-xl text-white">{song.author}</span>
			</div>
		</div>
	);
}
