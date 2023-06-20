import { useState } from "react"
import "./Navbar.css"
import { motion, useScroll, useTransform } from "framer-motion"
const Navbar = () => {
	const [icon, setIcon] = useState("#home")
	return (
	  <nav>
	      <motion.div 
	      initial={{x:-200, opacity:1}}
	     animate={{
	     	x:0,
	     	transition:{
	     		duration:1,
	     		delay:2,
	     	}
	     }}
	      className="navName">
	       <span className="textNav">hi, my name is</span>
	       <span className="textNav">muhammad ikhrom azhar</span>
	     </motion.div>
	     <div className="ContainerNav">
	     <motion.div
	     initial={{x:200, opacity:1}}
	     animate={{
	     	x:0,
	     	transition:{
	     		duration:1,
	     		delay:2,
	     	}
	     }}
	     className="navMenuRight">
	       <a href="#home" onClick={() => setIcon("#home")} className={icon === "#home" ? "iconActive" : "iconNon"}>
	       <i class="uil uil-estate navbarIcon"></i>
	       <span className="textNavbar">home</span>
	       </a>
	       <a href="#about" onClick={() => setIcon("#about")} className={icon === "#about" ? "iconActive" : "iconNon"}>
	       <i class="uil uil-chat-bubble-user navbarIcon"></i>
	       <span className="textNavbar">about</span>
	       </a>
	       <a className="textNav"href="#work" onClick={() => setIcon("#work")} className={icon === "#work" ? "iconActive" : "iconNon"}>
	       <i class="uil uil-notebooks navbarIcon"></i>
	       <span className="textNavbar">working</span>
	       </a>
	     </motion.div>
	     <motion.div 
	     initial={{x:-200, opacity:1}}
	     animate={{
	     	x:0,
	     	transition:{
	     		duration:1,
	     		delay:2,
	     	}
	     }}
	     className="navBott">
	       <a className="textNav"href="#service" onClick={() => setIcon("#sework")} className={icon === "#sework" ? "iconActive" : "iconNon"}>
	       <i class="uil uil-sliders-v navbarIcon"></i>
	       <span className="textNavbar">service</span>
	       </a>
	       <a className="textNav"href="#contact" onClick={() => setIcon("#contact")} className={icon === "#contact" ? "iconActive" : "iconNon"}>
	       <i class="uil uil-telegram-alt navbarIcon"></i>
	       <span className="textNavbar">contact</span>
	       </a>
	     </motion.div>
	     </div>
	  </nav>
	)
}

export default Navbar