import "./aboutme.css";
import aboutme_sean from "./aboutme_sean_2.jpg";

const AboutMe = () => {
    return (
      <div id="aboutme" className="about">
        <div className="about-title">
          <h1>About me</h1>
          <img src="" alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={aboutme_sean} className="aboutme_img" alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p><span><strong>My name is Sean Sanii Nejad</strong></span>, When I was younger, I studied classical ballet in addition to jazz and tap. I performed
              for the London's Children Ballet for two seasons, this included Jane Eyre and Snow White. I have also competed nationally at the age 11 with Hendon's Gymnastic 
              Centre and Goodwyn School. Achieving second place at the National Schools pair competition. 
              </p>
              <p>During my time at University, I attended the Barbell Weightlifting Club and played for the League of Legends National Student Esports team. 
                During this time, I gained proficiency in programming across various areas and earned a First Class Honours degree.
              </p>
              <p>Outside of my academic and professional pursuits, I find joy in maintaining an active lifestyle, often found at the gym challenging myself physically and mentally.
                I look forward to exploring opportunities that align with my skills and aspirations.
              </p>
              <div className="about-skills">
                <div className="about-skill"><p>Java, C#, C++, Unity, SFML, Unreal Engine <span><strong>| Objected Oriented Programming</strong></span></p><hr style={{ width: "100%" }} /></div>
                <div className="about-skill"><p>mySQL, PostgreSQL, UNIX, Linux, Raspberry Pi, Computer Building <span><strong>| Computer Architecture</strong></span></p><hr style={{ width: "100%" }} /></div>
                <div className="about-skill"><p>Haskell, Erlang <span><strong>| Procedural Programming</strong></span></p><hr style={{ width: "100%" }} /></div>
                <div className="about-skill"><p>HTML, CSS, JavaScript, React <span><strong>| Web Development</strong></span></p><hr style={{ width: "100%" }} /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>Queen Mary</h1>
            <h2>MSc Game Development</h2>
            <p>Merit</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>University of Kent</h1>
            <h2>BSc Computer Science</h2>
            <p>First Class Honours</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>Hammersmith</h1>
            <h2>HE Diploma Computer Science</h2>
            <p>Distinction</p>
          </div>
        </div>
      </div>
    )
  }


  export default AboutMe