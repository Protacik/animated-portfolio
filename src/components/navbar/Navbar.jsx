import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}>VM</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/vitaly-maksimchuk-2b30012b2/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/Protacik"><img src="/github-mark-white.png" alt="" /></a>
                <a href="https://www.instagram.com/protacik/"><img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar

