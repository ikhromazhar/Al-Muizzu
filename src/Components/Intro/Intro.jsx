import profileIntro from "../../assets/profileIntro.jpg"
import { motion, useScroll, useTransform } from "framer-motion"
import "./Intro.css"

const Intro = () => {
	
		const {scrollYProgress} = useScroll()
		const right = useTransform(scrollYProgress, [0,1],[0,250])
		const left = useTransform(scrollYProgress, [0,1],[0,-250])
	return (
		
		   <section className="Intro" id="home">
		     <div className="ContainerIntro">
		      <div className="firstText">
		       <motion.h1 
		       initial={{x: -1500}}
		       animate={{
		       	x: 0,
		       	transition: {
		       		duration: .8,
		       		delay: 2,
		       	},
		       }}
		       style={{x: right}}
		       className="textfilled">software engineer</motion.h1>
		       <motion.h1
		       initial={{x: -1500}}
		       animate={{
		       	x: 0,
		       	transition: {
		       		duration: .8,
		       		delay: 2,
		       	},
		       }}
		       style={{x: right}}
		       className="textoutline">software engineer</motion.h1>
		      </div>
		      <div className="secondText">
		       <motion.h1 
		       initial={{x: 1500}}
		       animate={{
		       	x: 0,
		       	transition: {
		       		duration: .8,
		       		delay: 2,
		       	},
		       }}
		       style={{x: left}}
		       className="textfilled">javascipt tech stack</motion.h1>
		       <motion.h1
		       initial={{x: 1500}}
		       animate={{
		       	x: 0,
		       	transition: {
		       		duration: .8,
		       		delay: 2,
		       	},
		       }}
		       style={{x: left}}
		       className="textoutline">javascipt tech stack</motion.h1>
		     </div>
		     <div className="introImage">
		       <motion.img
		       initial={{y:200, opacity:1}}
		       animate={{
		       	y: 0,
		       	transition: {
		       		duration: 1,
		       		delay: 2.1,
		       	},
		       }}
		      className="introPicture" src={profileIntro} alt="" />
		     </div>
		     </div>
		   </section>
		
	)
}
export default Intro