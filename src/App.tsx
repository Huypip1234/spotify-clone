import "./App.css";
import { useState } from "react";
/* Component */
import Navbar from "./components/Navbar"; //tra ve 1 function
import DetailSong from "./components/DetailSong"; //tra ve 1 function
import ListSongs from "./components/ListSongs"; //tra ve 1 function
import Playing from "./components/Playing";
/* context */
import { Songs } from "./context"; //tra ve 1 object
/* Data */
import DataSongs from "./data/songs.json"; //tra ve 1 object

export interface ISong {
  name: string
  author: string
  url: string
  id: number
  links: {
    images: {
      url: string
    }[]
  }
}

export type TSongArray = typeof DataSongs

const App: React.FC = () => {
  const [song, setSong] = useState<ISong>(DataSongs[0]);

  const handleSetSong = (idSong: number) => {
    const presentSong = DataSongs.find((element) => element.id === idSong); 
    //find: trả về phần tử đầu tiên trong database có id = idSong
    if(presentSong===undefined) {setSong(DataSongs[0])} //nếu ko tìm thấy cái nào
    else {setSong(presentSong);}
  };

  return (
    <div className="App">
      <Songs.Provider value={ {
        songArray: DataSongs,
        song: song,
        handleSetSong: handleSetSong
      } }>
        {" "}
        {/* Truyền vào 1 đối tượng thì phải dùng {} giống style css trong react */}
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-[calc(100vh-6rem-6rem)] overflow-hidden">
          {/* bg-slate-700: background color mau den + do mo
            grid: khai bao grid
            grid-cols-3: 3 cot 
            h: height=100vh(chieu_cao_toan_man_hinh)-6rem(header)-6rem(footer)*/}
          <DetailSong />
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
