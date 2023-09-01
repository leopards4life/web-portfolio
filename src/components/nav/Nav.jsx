import "./nav.css"
import {BiHome} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {BsBook} from "react-icons/bs"
import {HiOutlineMail, HiOutlineDesktopComputer} from "react-icons/hi"
import {useState} from "react"

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><BiHome /></a>
      <a href="/#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="/#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><HiOutlineDesktopComputer /></a>
      <a href="/#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BsBook /></a>
      <a href="/#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><HiOutlineMail /></a>
    </nav>
  )
}