import React from 'react'
import { BsMusicNoteBeamed, BsSpotify } from "react-icons/bs"
import {RiPlayListFill} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"
import {AiFillAudio} from "react-icons/ai"


function Navbar(props) {

    const navLinks = document.getElementsByClassName("link")
    const navLinksArr = Array.from(navLinks)
    const navCurrentBottom = document.getElementsByClassName("current-bottom")
    const navCurrentSide = document.getElementsByClassName("current-side")
    // const [navCurrentBottomArr, navCurrentSideArr] = Array.from(navCurrentBottom, navCurrentSide)

    const changeBackground = (index, navbar) => {
        navLinksArr.map((link) => {
            if(navLinksArr.indexOf(link) == index) {
                link.style.backgroundColor = "#333"
                navbar == "bottom" ? navCurrentBottom[index].style.opacity = "1"
                : navCurrentSide[index - 4].style.opacity = "1"
                
            } else {
                link.style.backgroundColor = "#000"
                navbar == "bottom" ? navCurrentBottom[navLinksArr.indexOf(link)].style.opacity = "0"
                : navCurrentSide[navLinksArr.indexOf(link) - 4].style.opacity = "0"
            }
        })
        props.setContent(index)
    }

  return (
    <div className='navbar'>
        <div className="bottom-bar">
            <div className="menu">
                <div className='link' onClick={() => changeBackground(0, "bottom")}>
                    <div className='current-bottom'></div> <CgProfile/>
                </div>
                <div className="link" onClick={() => changeBackground(1, "bottom")}>
                    <div className='current-bottom'></div><BsMusicNoteBeamed/>  
                </div>
                <div className="link" onClick={() => changeBackground(2, "bottom")}>
                    <div className='current-bottom'></div><RiPlayListFill/>  
                </div>
                <div className="link" onClick={() => changeBackground(3, "bottom")}>
                    <AiFillAudio/><div className='current-bottom'></div>
                </div>
            </div>
        </div>
        <div className="side-bar">
            <div className="iconholder">
                <BsSpotify className='spotify-icon'/>
            </div>
            <div className="sidemenu">
                <div className='link' onClick={() => changeBackground(4, "side")}>
                    <p>Profile</p><div className='current-side'></div>
                </div>
                <div className='link' onClick={() => changeBackground(5, "side")}>
                    <p>Most played</p><div className='current-side'></div>
                </div>
                <div className='link' onClick={() => changeBackground(6, "side")}>
                    <p>Recently played</p><div className='current-side'></div>
                </div>
                <div className='link' onClick={() => changeBackground(7, "side")}>
                    <p>Playlists</p><div className='current-side'></div>
                </div>
                <div className='link' onClick={() => changeBackground(8, "side")}>
                    <p>Podcasts/Audiobooks</p><div className='current-side'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar