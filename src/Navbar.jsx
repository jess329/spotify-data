import React from 'react'
import { BsMusicNoteBeamed } from "react-icons/bs"
import {RiPlayListFill} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"
import {AiFillAudio} from "react-icons/ai"

function Navbar(props) {

    const navLinks = document.getElementsByClassName("link")
    const navLinksArr = Array.from(navLinks)

    const changeBackground = (index) => {
        navLinksArr.map((link) => {
            if(navLinksArr.indexOf(link) == index) {
                link.style.backgroundColor = "#333"
            } else {
                link.style.backgroundColor = "#000"
            }
        })
        props.setContent(index)
    }

  return (
    <div className='navbar'>
        <div className="bottom-bar">
            <div className="menu">
                <div className='link' onClick={() => changeBackground(0)}><CgProfile/> </div>
                <div className="link" onClick={() => changeBackground(1)}><BsMusicNoteBeamed/> </div>
                <div className="link" onClick={() => changeBackground(2)}><RiPlayListFill/> </div>
                <div className="link" onClick={() => changeBackground(3)}><AiFillAudio/> </div>
            </div>
        </div>
        <div className="side-bar">

        </div>
    </div>
  )
}

export default Navbar