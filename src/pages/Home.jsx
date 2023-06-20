import LoaderHome from "../Components/LoaderHome/LoaderHome"	
import Navbar from "../Components/navbar/Navbar"
import Intro from "../Components/Intro/Intro"
import About from "../Components/about/About"
import Work from "../Components/work/Work"
import Service from "../Components/service/Service"
import Contact from "../Components/contact/Contact"

const Home = () => {
	return (
	  <div>
  		<LoaderHome />
  		<Navbar />
	    <Intro />
	    <About />
	    <Work />
	    <Service />
	    <Contact />
	  </div>
		) 
}
export default Home