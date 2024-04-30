import "./codesnippet.css"
import React, { useState } from 'react';
import video from "./axeman.mp4"
import pixelGameVideo from "./pixelgame.mp4"
import image_command from "./command_code.png"
import image_command_inputhandler_h from "./command_code_2.png"
import image_command_playercommand_cpp from "./command_code_3.png"
import image_command_inputhandler_cpp from "./command_code_4.png"
import image_flyweight from "./flyweight_code.png"
import image_flyweight_2 from "./flyweight_code_2.png"
import image_flyweight_3 from "./flyweight_code_3.png"
import image_flyweight_4 from "./flyweight_code_4.png"
import image_flyweight_5 from "./flyweight_code_5.png"
import image_pixel_command_0 from "./pixel_commad_code_0.png"
import image_pixel_command_1 from "./pixel_commad_code_1.png"
import image_pixel_command_2 from "./pixel_commad_code_2.png"


    const CodeSnippet = () => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    return (
      <div id="codesnippetsx" className="codesnippet">
        <div className="example">
          <h1>Code Snippets</h1>
  
          <ul className="nav-menu">
            <li>
              <p
                id="AxeMan"
                className={activeTab === 0 ? 'active-tab' : ''}
                onClick={() => handleTabClick(0)}
              >
                Axe Man
              </p>
            </li>
            <li>
              <p
                id="PixelGame"
                className={activeTab === 1 ? 'active-tab' : ''}
                onClick={() => handleTabClick(1)}
              >
                Pixel Game
              </p>
            </li>
          </ul>
  
          {activeTab === 0 && (
            <div className="example2">
              <h2>Axe man <span>C++ & SFML</span></h2>
              <video width="640" height="360" controls>
                <source src={video} type="video/mp4" />
              </video>
              <h3>Command Pattern</h3>
              <div className="codesnippet-what-why-how">
                <div className="command-left-column">
                  <p><span>What?</span></p>
                  <hr />
                  <p><span>Why?</span></p>
                  <hr />
                  <p><span>How?</span></p>
                  <hr />
                </div>
                <div className="command-right-column">
                  <p>In this video, I demonstrate the use of the Command Pattern. Here the player Axeman is controlled first by the wasd keys, then by the ↑ ↓ → ← and finally using the mouse cursor.</p>
                  <hr />
                  <p>The purpose of the Command Pattern is to untangle some potential gnarly code. It does this by encapsulating requests as an object, thereby letting users parameterise the game with different controls.</p>
                  <hr />
                  <p> </p>
                </div>
              </div>
              <div className="command-titles">
                <p>Command.h</p>
                <p>InputHandler.h</p>
                <p>InputHandler.cpp</p>
              </div>
              <div className="code-row">
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img src={image_command} alt="Scrollable" />  
                  </div>
                </div>
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img src={image_command_inputhandler_h} alt="Scrollable" />  
                  </div>
                </div>
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img src={image_command_inputhandler_cpp} alt="Scrollable" />  
                  </div>
                </div>
              </div>
              <p className="code-title">PlayerCommand.cpp</p>
              <div className="code">
                <div className="scrollable-image-container-special">
                  <div className="image-wrapper">
                    <img className="img-special" src={image_command_playercommand_cpp} alt="Scrollable" />  
                  </div>
                </div>
              </div>
              <h3>Flyweight Pattern</h3>
              <div className="codesnippet-what-why-how">
                <div className="command-left-column">
                  <p><span>What?</span></p>
                  <hr />
                  <p><span>Why?</span></p>
                  <hr />
                  <p><span>How?</span></p>
                  <hr />
                </div>
                <div className="command-right-column">
                  <p>The Flyweight Pattern organises game objects into intrinsic and extrinsic states. The intrinsic states are shared across all instances of the object. The extrinsic states are replicated as needed.</p>
                  <hr />
                  <p>This is to optimise the memory usage which may lead to enhanced performance, especially in big 3D games.</p>
                  <hr />
                </div>
              </div>
              <div className="command-titles">
                <p>TextureType.h</p>
                <p>TextureType.cpp</p>
                <p>Board.h (snippet)</p>
              </div>
              <div className="code-row">
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img src={image_flyweight} alt="Scrollable" />  
                  </div>
                </div>
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img src={image_flyweight_2} alt="Scrollable" />  
                  </div>
                </div>
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img src={image_flyweight_3} alt="Scrollable" />  
                  </div>
                </div>
              </div>
              <div className="command-titles">
                <p>Board.cpp</p>
                <p>Tile.h</p>
              </div>
              <div className="code-row">
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img src={image_flyweight_4} alt="Scrollable" />  
                  </div>
                </div>
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img src={image_flyweight_5} alt="Scrollable" />  
                  </div>
                </div>
              </div>
            </div>
          )}
  
          {activeTab === 1 && (
            <div className="example2">
              <h2>Pixel Game <span>Some Tech</span></h2>
              <video width="640" height="360" controls>
                <source src={pixelGameVideo} type="video/mp4" />
              </video>
              <h3>Command Pattern</h3>
              <div className="codesnippet-what-why-how">
                <div className="command-left-column">
                  <p><span>What?</span></p>
                  <hr />
                  <p><span>Why?</span></p>
                  <hr />
                  <p><span>How?</span></p>
                  <hr />
                </div>
                <div className="command-right-column">
                  <p>This video showcases the Pixel Game which uses a PlayerController, ICommand Interface, a static Invoker and CommandMove class to allow the user to move the player around the map.</p>
                  <hr />
                  <p>This allows for future development, either a replay system or an undo button, as each command is stored in a queue and can be saved for later use.</p>
                  <hr />
                  <p> </p>
                </div>
              </div>
              <div className="command-titles">
                <p>ICommand & CommandMove</p>
                <p>Static Invoker</p>
                <p>PlayerController</p>
              </div>
              <div className="code-row">
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img className="img-special-small" src={image_pixel_command_0} alt="Scrollable" />  
                  </div>
                </div>
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img className="img-special-medium" src={image_pixel_command_1} alt="Scrollable" />  
                  </div>
                </div>
                <div className="scrollable-image-container">
                  <div className="image-wrapper">
                    <img className="img-special-small" src={image_pixel_command_2} alt="Scrollable" />  
                  </div>
                </div>
              </div>
            </div>
          )}
  
        </div>
      </div>
    );
  };

  export default CodeSnippet