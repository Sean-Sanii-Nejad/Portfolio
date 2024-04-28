import "./portfolio.css"

const Portfolio = () => {
    const Services_Data= [
      {
        website:"https://github.com/Sean-Sanii-Nejad/PixelGameCode",
        s_name:"Pixel Game Unity C#",
        s_desc:"Developed using the Unity game engine and built as a WebGL game..."
      },
      {
        website:"https://github.com/Sean-Sanii-Nejad/AGD_MiniGame",
        s_name:"Axe Man Game SFML C++",
        s_desc:"Axe Man game built with C++ & SFML for a Queen Mary assignment..."
      },
      {
        website:"https://github.com/Sean-Sanii-Nejad/ChineseCheckers",
        s_name:"ChineseCheckers Java",
        s_desc:"Chinese Checkers implementation in TableTop Games (Java Framework) for AI research..."
      }
    ]
    
      return (
        <div id="portfoliox" className="portfolio">
          <div className="portfolio-title">
            <h1>My Portfolio</h1>
            <img src="" alt="" />
          </div>
          <div className="portfolio-container">
            {Services_Data.map((service, index)=>{
              return <div key={index} className="portfolio-format">
                <a className="portfolio-letters" href={service.website} target="_blank" rel="noopener noreferrer">
                  <h3>{service.s_no}</h3>
                  <h2>{service.s_name}</h2>
                  <p>{service.s_desc}</p>
                  <div className="portfolio-readmore">
                      <p>Link to GitHub</p>
                      <img src="" alt="" />
                    </div>
                  </a>
                </div>
            })}
          </div>
        </div>
      )
    }

export default Portfolio