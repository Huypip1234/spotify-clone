import React from 'react'
import { ISong } from './App';
import { TSongArray } from './App';

interface IContext {
    songArray: TSongArray
    song: ISong
    handleSetSong: (idSong: number) => void
}

const initState: IContext = {
    songArray: [],
    song: {
        "name": "",
        "author": "",
        "url": "",
        "id": 2,
        "links": {
            "images": [
                {
                    "url": ""
                },
                {
                    "url": ""
                }
            ]
        }
    },
    handleSetSong: (idSong: number) => {}
}

export const Songs = React.createContext<IContext>(initState);