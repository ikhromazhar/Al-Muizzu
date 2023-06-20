import profilFt from "../../assets/profilFt.jpg"
import "./contact.css"
const Contact = () => {
	return (
	  <section id="contact">
	     <div className="contactText">
	        <img src={profilFt} alt=""/>
	        <span>let's work together!</span>
	     </div>
	     <div className="contactLink">
	        <a href="#">Whatsapp Me</a>
	        <a href="#">Email Me</a>
	        <a href="#">More Contact</a>
	     </div>
	     <div className="contactSosmed">
	        <a href="#">Instagram</a>
	        <a href="#">Tiktok</a>
	        <a href="#">Twitter</a>
	        <a href="#">LinkedIn</a>
	     </div>
	  </section>
	)
}
export default Contact