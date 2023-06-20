import "./About.css"
const About = () => {
	return (
    <section className="about" id="about">
      <div className="aboutType">
        <span className="aboutTypeText">about me</span>
        <span className="aboutTypeText">about me</span>
        <span className="aboutTypeText">about me</span>
      </div>
      <div className="aboutContent">
      <div className="aboutText">
      <h1 className="aboutContentText">Hello!!  I am Muhammad Ikhrom,<br/> I am passionate about <span className="outlineText">devoloping website</span> both <span className="outlineText">user interface</span> and data base <span className="outlineText">management</span> system </h1>
      <a className="aboutMore" href="#">Read More About Me <i class="uil uil-arrow-up-right"></i>
       </a>
       </div>
      </div>
    </section>
	)
}
export default About 