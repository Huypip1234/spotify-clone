import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar_title_custom bg-slate-900 h-24 text-center text-white leading-[6rem] text-4xl'>
      {/* leading = line-height, 
        text-3xl = fontsize 
        bg-slate-700: background color mau den + độ mờ*/}
      <i className='fa fa-spotify mr-2'></i>
      Spotify
    </div>
  )
}
