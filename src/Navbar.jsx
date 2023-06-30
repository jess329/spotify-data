import React, { useEffect, useState } from 'react'
import { BsMusicNoteBeamed, BsSpotify } from "react-icons/bs"
import {RiPlayListFill} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"
import {AiFillAudio} from "react-icons/ai"
import {GiMicrophone} from "react-icons/gi"
import {MdAudiotrack} from "react-icons/md"


function Navbar({setContent}) {
    const [navLinksBottom, setNavLinksBottom] = useState()
    const [navLinksSide, setNavLinksSide] = useState()
    const [navMarkerBottom, setNavMarkerBottom] = useState()
    const [navMarkerSide, setNavMarkerSide] = useState()
    
    useEffect(() => {
        const navLinksBottom = Array.from(document.getElementsByClassName("link bottom"))
        setNavLinksBottom(navLinksBottom)
        const navLinksSide = Array.from(document.getElementsByClassName("link side"))
        setNavLinksSide(navLinksSide)
        const navCurrentBottom = document.getElementsByClassName("current-bottom")
        const navCurrentSide = document.getElementsByClassName("current-side")
        setNavMarkerBottom(navCurrentBottom)
        setNavMarkerSide(navCurrentSide)
    }, [])
    
    // const navCurrentBottomArr = Array.from(navCurrentBottom)
    // const navCurrentSideArr = Array.from(navCurrentSide)  
    // const [navCurrentBottomArr, navCurrentSideArr] = Array.from(navCurrentBottom, navCurrentSide)
    // console.log(navCurrentBottomArr, navCurrentSideArr);
    // console.log(navLinksArr);

    const changeBackground = (index, navbar) => {
        if(navbar == "bottom" && navLinksBottom) {
            navLinksBottom.map((link) => {
                if(navLinksBottom.indexOf(link) == index) {
                    // console.log(navMarkerBottom[index]);
                    link.style.backgroundColor = "#333"
                    navMarkerBottom[index].classList.add("active")
                } else {
                    // console.log(navMarkerBottom[navLinksBottom.indexOf(link)]);
                    link.style.backgroundColor = "#000"
                    navMarkerBottom[navLinksBottom.indexOf(link)].classList.remove("active")
                }
            })
        }
        if(navbar == "side" && navLinksSide) {
            navLinksSide.map((link) => {
                if(navLinksSide.indexOf(link) == index) {
                    // console.log(navMarkerSide[index]);
                    link.style.backgroundColor = "#333"
                    navMarkerSide[index].classList.add("active")
                } else {
                    // console.log(navMarkerSide[navLinksSide.indexOf(link)]);
                    link.style.backgroundColor = "#000"
                    navMarkerSide[navLinksSide.indexOf(link)].classList.remove("active")
                }
            })
        }
        setContent({
            index: index,
            navbar: navbar
        })
    }

  return (
    <div className='navbar'>
        <div className="bottom-bar">
            <div className="menu">
                <div className='link bottom' onClick={() => changeBackground(0, "bottom")}>
                    <div className='current-bottom'></div> <CgProfile/>
                </div>
                <div className="link bottom" onClick={() => changeBackground(1, "bottom")}>
                    <div className='current-bottom'></div><MdAudiotrack/>  
                </div>
                <div className="link bottom" onClick={() => changeBackground(2, "bottom")}>
                    <div className='current-bottom'></div><GiMicrophone/>  
                </div>
                <div className="link bottom" onClick={() => changeBackground(3, "bottom")}>
                    <div className='current-bottom'></div><RiPlayListFill/>  
                </div>
                <div className="link bottom" onClick={() => changeBackground(4, "bottom")}>
                    <AiFillAudio/><div className='current-bottom'></div>
                </div>
            </div>
        </div>
        <div className="side-bar">
            <div className="iconholder">
                <BsSpotify className='spotify-icon'/>
            </div>
            <div className="sidemenu">
                <div className='link side' onClick={() => changeBackground(0, "side")}>
                    <p>Profile</p><div className='current-side'></div>
                </div>
                <div className='link side' onClick={() => changeBackground(1, "side")}>
                    <p>Songs</p><div className='current-side'></div>
                </div>
                <div className='link side' onClick={() => changeBackground(2, "side")}>
                    <p>Artists</p><div className='current-side'></div>
                </div>
                <div className='link side' onClick={() => changeBackground(3, "side")}>
                    <p>Playlists</p><div className='current-side'></div>
                </div>
                <div className='link side' onClick={() => changeBackground(4, "side")}>
                    <p>Podcasts/Audiobooks</p><div className='current-side'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar