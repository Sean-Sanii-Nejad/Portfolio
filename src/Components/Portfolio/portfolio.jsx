import "./portfolio.css"
import React, { useState } from 'react'

import video from "./Videos/axeman.mp4"
import video_pixel_movement from "./Videos/playermovement.mp4"
import video_pixel_interaction from "./Videos/interaction.mp4"
import video_pixel_debuff from "./Videos/debuff.mp4"
import video_pixel_combat from "./Videos/combat.mp4"

import video_unreal_movement from "./Videos/unrealmovement.mp4"
import video_unreal_combat from "./Videos/unrealcombat.mp4"

import image_pixel_command_0 from "./Images/pixel_commad_code_0.png"
import image_pixel_command_1 from "./Images/pixel_commad_code_1.png"
import image_pixel_command_2 from "./Images/pixel_commad_code_2.png"

import image_pixel_interaction from "./Images/pixel_interaction_code.png"
import image_pixel_interaction_1 from "./Images/pixel_interaction_code_1.png"
import image_pixel_interaction_2 from "./Images/pixel_interaction_code_2.png"

import image_pixel_debuff from "./Images/pixel_debuff_code.png"
import image_pixel_debuff_1 from "./Images/pixel_debuff_code_1.png"
import image_pixel_debuff_2 from "./Images/pixel_debuff_code_2.png"

import image_pixel_combat from "./Images/pixel_combat.png"
import image_pixel_combat_1 from "./Images/pixel_combat_1.png"
import image_pixel_combat_2 from "./Images/pixel_combat_2.png"

import image_axeman_command_0 from "./Images/command_code.png"
import image_axeman_command_1 from "./Images/command_code_2.png"
import image_axeman_command_2 from "./Images/command_code_3.png"
import image_axeman_command_3 from "./Images/command_code_4.png"

import image_flyweight from "./Images/flyweight_code.png"
import image_flyweight_2 from "./Images/flyweight_code_2.png"
import image_flyweight_3 from "./Images/flyweight_code_3.png"
import image_flyweight_4 from "./Images/flyweight_code_4.png"
import image_flyweight_5 from "./Images/flyweight_code_5.png"

import image_unreal from "./Images/unreal_movement.png"
import image_unreal_1 from "./Images/unreal_movement_1.png"
import image_unreal_2 from "./Images/unreal_movement_2.png"

import image_unreal_ai from "./Images/unreal_ai.png"
import image_unreal_ai_1 from "./Images/unreal_ai_1.png"


const Portfolio = () => {
  const [activeTabb, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div id="portfoliox" className="portfolio">
      <div className="portfolio-title">
        <h1>My Portfolio</h1>
        <img src="" alt="" />
      </div>
      <div className="portfolio-container">
        <div
          id="portfolio-format"
          className={activeTabb === 0 ? 'active-tabb' : ''}
          onClick={() => handleTabClick(0)}
        >
          <a>
            <h2>Pixel Game Unity C#</h2>
            <p>
              Developed using the Unity game engine and built as a WebGL game...
            </p>
            <div className="portfolio-readmore">
              <p>Click for more Information</p>
              <img src="" alt="" />
            </div>
          </a>
        </div>
        <div
          id="portfolio-format"
          className={activeTabb === 1 ? 'active-tabb' : ''}
          onClick={() => handleTabClick(1)}>
          <a>
            <h2>Axe Man Game SFML C++</h2>
            <p>
              Axe Man game built with C++ & SFML for a Queen Mary assignment...
            </p>
            <div className="portfolio-readmore">
              <p>Click for more Information</p>
              <img src="" alt="" />
            </div>
          </a>
        </div>
        <div
          id="portfolio-format"
          className={activeTabb === 2 ? 'active-tabb' : ''}
          onClick={() => handleTabClick(2)}>
          <a>
            <h2>Spell Caster C++ / Unreal</h2>
            <p>
              Developed using Unreal Engine 5, focusing on the GAS system for a MOBA game...
            </p>
            <div className="portfolio-readmore">
              <p>Click for more Information</p>
              <img src="" alt="" />
            </div>
          </a>
        </div>
      </div>
      {activeTabb === 0 && (
        <div className="game-title">
          <h2>Pixel Game <span>C# & Unity</span></h2>
          <div className="game-row">
            <div className="game-intro">
              <h3>Introduction</h3>
              <p>For this project, I aim to create a polished and aesthetically pleasing game. I've decided to go with a 2D pixel art style, which can effectively achieve this visual appeal. The game will incorporate RPG elements, featuring an inventory system, player attributes, and turn-based combat similar to Pokémon.</p>
              <p>Players will be able to interact with various objects, including doors, NPCs, and containers holding items. To ensure the code is maintainable and scalable, I've implemented the command and state design patterns. My goal is to adhere to industry standards, preparing the project for professional-level development.</p>
            </div>
          </div>
          <div className="game-row1">
            <h3>Videos</h3>
            <div className="video-row">
              <div className="video-container">
                <h4>Player Movement</h4>
                <video width="640" height="360" controls>
                  <source src={video_pixel_movement} type="video/mp4" />
                </video>
              </div>
              <div className="video-container">
                <h4>Player Interaction</h4>
                <video width="640" height="360" controls>
                  <source src={video_pixel_interaction} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="video-row">
              <div className="video-container">
                <h4>Player Debuffs</h4>
                <video width="640" height="360" controls>
                  <source src={video_pixel_debuff} type="video/mp4" />
                </video>
              </div>
              <div className="video-container">
                <h4>Turn-based Combat (In Development)</h4>
                <video width="640" height="360" controls>
                  <source src={video_pixel_combat} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="game-row">
            <h3>Code Snippet</h3>
            <h4>Player Movement <span>- Command Design Pattern</span></h4>
          </div>
          <div className="command-titless">
            <p>ICommand & CommandMove</p>
            <p>Static Invoker</p>
            <p>PlayerController</p>
          </div>
          <div className="code-roww">
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-smalll" src={image_pixel_command_0} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-mediumm" src={image_pixel_command_1} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-smalll" src={image_pixel_command_2} alt="Scrollable" />
              </div>
            </div>
          </div>
          <div className="player-interaction-snippet">
            <h4>Player Interaction <span>- Door and Entities</span></h4>
          </div>
          <div className="command-titless">
            <p>Collision Controller</p>
            <p>Entity's Data</p>
            <p>Interaction Controller &nbsp;  &nbsp;</p>
          </div>
          <div className="code-roww">
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-perfect" src={image_pixel_interaction} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-smalll" src={image_pixel_interaction_1} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-smalll" src={image_pixel_interaction_2} alt="Scrollable" />
              </div>
            </div>
          </div>
          <div className="player-interaction-snippet">
            <h4>Player Debuffs <span>- Grass Slow Debuff</span></h4>
          </div>
          <div className="command-titless">
            <p>AbilitySystem Controller</p>
            <p>Collision Controller</p>
            <p>Interaction Controller &nbsp;  &nbsp;</p>
          </div>
          <div className="code-roww">
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-perfect" src={image_pixel_debuff} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-smalll" src={image_pixel_debuff_1} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-tinyy" src={image_pixel_debuff_2} alt="Scrollable" />
              </div>
            </div>
          </div>
          <div className="player-interaction-snippet">
            <h4>Turn-based Combat <span>- State Design Pattern</span></h4>
          </div>
          <div className="command-titless">
            <p>Battle System</p>
            <p>BattleHUD</p>
            <p>Interaction Controller &nbsp;  &nbsp;</p>
          </div>
          <div className="code-roww">
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-perfect" src={image_pixel_combat} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-smalll" src={image_pixel_combat_1} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-tinyy" src={image_pixel_combat_2} alt="Scrollable" />
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTabb === 1 && (
        <div className="game-title">
          <h2>Axe Man Game <span>C++ & SFML</span></h2>
          <div className="game-row">
            <div className="game-intro">
              <h3>Introduction</h3>
              <p>This was a pair programming assignment for the Advanced Game Development module at Queen Mary University, where my programming partner and I achieved an overall score of 98%. We learned to code in C++ and implemented various design patterns to get the SFML Axeman game working. I implemented the flyweight, command, and observer patterns, and collaborated on the game loop pattern through pair programming.</p>
            </div>
            <div className="game-row1">
              <h3>Videos</h3>
              <div className="video-row-1">
                <div className="video-container">
                  <h4>Player Movement</h4>
                  <video width="640" height="360" controls>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="player-interaction-snippet">
            <h4>Switching Controls <span>- Command Pattern</span></h4>
          </div>
          <div className="command-titless">
            <p>Command.h</p>
            <p>InputHandler.h</p>
            <p>InputHandler.cpp &nbsp;  &nbsp;</p>
          </div>
          <div className="code-roww">
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-perfect" src={image_axeman_command_0} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-smalll" src={image_axeman_command_1} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-smalll" src={image_axeman_command_3} alt="Scrollable" />
              </div>
            </div>
          </div>
          <p className="code-titlee">PlayerCommand.cpp</p>
          <div className="code">
            <div className="scrollable-image-container-special">
              <div className="image-wrapper">
                <img className="img-special" src={image_axeman_command_2} alt="Scrollable" />
              </div>
            </div>
          </div>
          <div className="player-interaction-snippet">
            <h4>Improving Efficiency <span>- Flyweight Pattern</span></h4>
          </div>
          <div className="command-titless">
            <p>TextureType.h</p>
            <p>TextureType.cpp</p>
            <p>Board.h (snippet)</p>
          </div>
          <div className="code-roww">
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
          <div className="command-titlesss">
            <p>Board.cpp</p>
            <p>Tile.h</p>
          </div>
          <div className="code-rowww">
            <div className="scrollable-image-container">
              <div className="image-wrapper">
                <img src={image_flyweight_4} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-container">
              <div className="image-wrapper">
                <img className="img-special-smalll" src={image_flyweight_5} alt="Scrollable" />
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTabb === 2 && (
        <div className="game-title">
          <h2>Spell Caster <span>C++ & Unreal Engine</span></h2>
          <div className="game-row">
            <div className="game-intro">
              <h3>Introduction</h3>
              <p>For this project, I aim to improve my C++ and Multiplayer programming, I am following an Unreal Gameplay-Ability-System Udemy course. The focus to implement a top-down MOBA-style game. So far, I've implemented Gameplay Abilities, Gameplay Effects, Input Systems, UI Controllers, and Behaviour Trees & Blackboards.
              </p>
            </div>
          </div>
          <div className="game-row1">
            <h3>Videos</h3>
            <div className="video-row">
              <div className="video-container">
                <h4>Player Movement</h4>
                <video width="640" height="360" controls>
                  <source src={video_unreal_movement} type="video/mp4" />
                </video>
              </div>
              <div className="video-container">
                <h4>Player Auto Attack / AI Combat NPCs</h4>
                <video width="640" height="360" controls>
                  <source src={video_unreal_combat} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="player-interaction-snippet">
            <h4>Player Movement <span>- Enhanced Input</span></h4>
          </div>
          <div className="command-titless">
            <p>InputConfig / MappingContext</p>
            <p>AuraPlayerController.cpp</p>
            <p>InputHandler.cpp &nbsp;  &nbsp;</p>
          </div>
          <div className="code-roww">
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-perfect_" src={image_unreal} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-perfect_" src={image_unreal_1} alt="Scrollable" />
              </div>
            </div>
            <div className="scrollable-image-containerr">
              <div className="image-wrapper">
                <img className="img-special-perfect_" src={image_unreal_2} alt="Scrollable" />
              </div>
            </div>
          </div>
          <div className="player-interaction-snippet">
            <h4>AI Combat NPCs <span>- Behaviour Trees & BlackBoards</span></h4>
          </div>
          <p className="code-titlee">Shaman's BlackBoard</p>
          <div className="code">
            <div className="scrollable-image-container">
              <div className="image-wrapper">
                <img className="img-special-perfect-perfect" src={image_unreal_ai_1} alt="Scrollable" />
              </div>
            </div>
          </div>
          <p className="code-titlee">Shaman's Behaviour Tree</p>
          <div className="code">
            <div className="scrollable-image-container-speciall">
              <div className="image-wrapper">
                <img className="img-special-perfect-perfect" src={image_unreal_ai} alt="Scrollable" />
              </div>
            </div>
          </div>
          
        </div>
        
      )}
    </div>
  );
};


export default Portfolio