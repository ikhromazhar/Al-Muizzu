import "./LoaderHome.css"
import {motion} from "framer-motion"
const LoaderHome = () => {
	return(
		 <motion.section
		  initial={{y:0, opacity:1}}
      animate={{	
      	y: -1000,
      	transition: {
      		duration:1.5,
      		delay: 2,
      	}
      }}
		  exit={{ y: window.innerWidth}}
		 className="LoaderHome">
		    <div className="ContainerLoaderHome">
		       <motion.span initial={{opacity: 0}}
		        animate={{
		        	opacity: 1,
		        	transition: {delay: .5},
		        	transitionEnd: {display: "none",}
		        }}
		       className="textLoader">hai</motion.span>
		       <motion.span initial={{opacity: 0}}
		        animate={{
		        	opacity: 1,
		        	transition: {delay: .8},
		        	transitionEnd: {display: "none",}
		        }}
		       className="textLoader">hallo</motion.span>
		       <motion.span initial={{opacity: 0}}
		        animate={{
		        	opacity: 1,
		        	transition: {delay: 1.1},
		        	transitionEnd: {display: "none",}
		        }}
		       className="textLoader">مرحبا</motion.span>
		       <motion.span initial={{opacity: 0}}
		        animate={{
		        	opacity: 1,
		        	transition: {delay: 1.4},
		        	transitionEnd: {display: "none",}
		        }}
		       className="textLoader">こんにちは</motion.span>
		       <motion.span initial={{opacity: 0}}
		        animate={{
		        	opacity: 1,
		        	transition: {delay: 1.7},
		        }}
		       className="textLoader">Привет</motion.span>
		    </div>
		 </motion.section>
		)
}
export default LoaderHome