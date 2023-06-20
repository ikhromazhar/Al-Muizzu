import "./service.css"
import { motion, useScroll, useTransform } from "framer-motion"
const Service = () => {
	const {scrollYProgress} = useScroll()
  const frontend = useTransform(scrollYProgress, [0,1],[0,600])
  const backend = useTransform(scrollYProgress, [0,1],[0,400])
  const fullstack = useTransform(scrollYProgress, [0,1],[0,200])
	return (
	  <section id="service">
	     <div className="serviceTypo">
	        <motion.span style={{ x: frontend}}>
	          <span className="outLineService">frontend </span>developer-<span className="outLineService">frontend </span>developer-<span className="outLineService">frontend </span>developer 
	        </motion.span>
	        <motion.span style={{ x: backend}}>
	           backend <span className="outLineService">developer -</span>backend <span className="outLineService">developer-</span>backend <span className="outLineService">developer </span>
	        </motion.span>
	        <motion.span style={{ x: fullstack}}>
	          <span className="outLineService">fullstack</span> developer-<span className="outLineService">fullstack</span> developer-<span className="ouLineService"> fullstack</span> developer
	        </motion.span>
	     </div>
	     <div className="serviceStack">
	        <div className="serviceTechStack">
	           <span>HTML</span>
	           <span>CSS</span>
	           <span>JAVASCRIPT</span>
	           <span>REACTJS</span>
	        </div>
	        <div className="serviceTechStack">
	           <span>PYTON</span>
	        </div>
	     </div>
	  </section>
	)
}
export default Service