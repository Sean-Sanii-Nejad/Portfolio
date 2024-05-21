import "./hero.css"
import profile_img from "./sean.png"

const Hero = () => {
    const githubUrl = "https://github.com/Sean-Sanii-Nejad";
    const cvUrl = "CV_LaTex.pdf";
  
    return (
    <div id="home" className="hero">
        <div className="hero-title">
            <img id="home" src={profile_img} alt="" className="profile-image" />
            <h1><span>I'm Sean Sanii Nejad,</span></h1>
        </div>  
        <div className="hero-description">
            <h1><span>Games Programmer Graduate</span> based in London</h1>
            <p>Master's in Computer Games from Queen Mary and a Bachelor's in Computer Science from the University of Kent.</p>
            <div className="hero-action">
                <a href={githubUrl} className="hero-connect" target="_blank" rel="noopener noreferrer">My GitHub</a>
                <a href={cvUrl} download="SeanCV.pdf" className="hero-resume" target="_blank" rel="noopener noreferrer">My CV</a>
            </div>
        </div>
    </div>
  )
}

export default Hero