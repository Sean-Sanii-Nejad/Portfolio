import "./contact.css"
import phone from "./phone.png"
import email from "./message.png"
import location from "./location.png"


const Contact = () => {
    return (
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-details">
               <div className="contact-detail">
                <img className="resize" src={email} alt=""/> 
                <p>ssanii.career@gmail.com</p>
               </div>
               <div className="contact-detail"> 
                <img className="resize" src={phone} alt=""/>
                <p>07305774094</p>
               </div>
               <div className="contact-detail"> 
                <img className="resize" src={location} alt=""/>
                <p>UK, London</p>
               </div>
            </div>
        </div>
      </div>
    )
  }

  export default Contact