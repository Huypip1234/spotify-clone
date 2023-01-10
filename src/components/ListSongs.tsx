import React, { useContext, useState } from "react";
import { Songs } from "../context";

export default function ListSongs() {
	const DataSongsObj = useContext(Songs);
	//tra ve 1 object gom:
	//+) 1 array object: mảng tên là DataSongs gồm các phần tử cùa file data json
	//+) 1 object prototype: gồm mấy cái linh tinh
	//console.log(DataSongsObj);
	//console.log(DataSongsObj.DataSongs[0]);
	//Lấy cái array của DataSongObj
	const DataSongsArray = DataSongsObj.songArray;
	//hoac dung const {DataSongs} = useContext(Songs)
	const { handleSetSong } = useContext(Songs);

	//state
	const [id, setId] = useState(0);
	const handlePlaySong = (id: number) => {
		setId(id);
		handleSetSong(id);
	};

	return (
		<div className="col-span-2 overflow-y-scroll">
			{/* col-span-2: chiếm 2 cột trong 3 grid khai báo ở App.js */}
			<table className="table-auto w-full">
				<thead className="text-white h-12">
					<tr>
						<th className="w-[10%]">#</th>
						<th className="text-left">Title</th>
						<th className="w-[10%]">Author</th>
						<th className="w-[10%]">
							<i className="fa fa-download"></i>
						</th>
					</tr>
				</thead>
				<tbody>
					{DataSongsArray.map((element, index: number) => {
						return (
							<tr
								key={index}
								className={`
                  bg-slate-800 h-12 text-gray-500
                  hover:bg-gray-600 
                  ${
										(function active() {
											if (element.id === id)
												return `bg-slate-600 text-teal-400`;
										})() //IIFE: ham chay ngay sau khi tao
									}
                `}
								onClick={() => {
									handlePlaySong(element.id);
								}}
							>
								<td className="text-center">{index + 1}</td>
								<td>{element.name}</td>
								<td className="text-center">{element.author}</td>
								<td className="text-center">
									<a href={element.url}>
										<i className="fa fa-download"></i>
									</a>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
