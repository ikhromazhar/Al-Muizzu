import work from "../../assets/work.jpg"
import "./work.css"
const Work = () => {
	return (
		<section id="work">
		<div className="workDesign">
		 <div className="workTypo">
		   <h2>work</h2>
		   <h2>work</h2>
		   <h2>work</h2>
		 </div>
		   <span className="workOpening">Featured Project</span>
		 </div>
		 <div className="ContainerWork">
		  <div className="workMain">
		      <img className="workImage" src={work} alt=""/>
		    <div className="workText">
		      <span className="workNumber">1.</span>
		    <div className="workTittle">
		       <span>Project Web Film</span>
		       <span>Web Application</span>
		    </div>
		    </div>
		    </div>
		    <div className="workLink">
		      <a className="workLinked" href="#">
            <i class="uil uil-arrow-up-left"></i>
		        <span>Online Preview</span>
		      </a>
		    </div>
		</div>
		</section>
	)
}
export default Work