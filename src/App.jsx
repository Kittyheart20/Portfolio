import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AiChatbot from './assets/AiBot.png';
import Embernote from './assets/Embernote.png';
import OlympicSmashdown from './assets/OlympicSmashdown.png';

function App() {
  const bubbleSettings = [
    { size: 60, left: "10%", delay: "0s", duration: "18s" },
    { size: 40, left: "20%", delay: "-3s", duration: "15s" },
    { size: 80, left: "35%", delay: "-8s", duration: "22s" },
    { size: 25, left: "50%", delay: "-12s", duration: "12s" },
    { size: 55, left: "65%", delay: "-5s", duration: "20s" },
    { size: 35, left: "80%", delay: "-15s", duration: "16s" },
    { size: 45, left: "90%", delay: "-7s", duration: "19s" },
    { size: 70, left: "75%", delay: "-10s", duration: "14s" }
  ];

  return (
    <div>
      <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0f0b1a 0%, #1a1332 50%, #2d1b69 100%)",
        zIndex: -2
        }}
      ></div>
      <div className="bubbles">
        {bubbleSettings.map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: b.left,
              animationDelay: b.delay,
              animationDuration: b.duration
            }}
          ></div>
        ))}
      </div>
      <header>
        <p style={{ textAlign: "right" }}>
        <a href="https://www.linkedin.com/in/erin-haynes-uiuc/" target="_blank" rel="noopener noreferrer">LinkedIn</a> • <a href="https://github.com/Kittyheart20" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </header>
      <main>
        <div className="HeaderBox">
          <h1>Hi! I'm Erin Haynes</h1>
          <h3>Computer Engineer • UIUC Graduate • Artificial Intelligence</h3>
        </div>

        <div className="MainBox">
          <p>
            I'm a computer engineer with a passion for AI and machine learning. I also have experience with web, mobile, and FPGA development.
            <br /><br />
            My technical expertise includes programming languages such as Python, Java, Swift, C++, C, JavaScript, and x86 and RISC-V Assembly; as well as hardware description languages such as SystemVerilog. 
            I have buisness experience with marketing, customer feedback, and product management. I'm constantly keeping up with the latest in AI and machine learning and sharpening my skills.
          </p>
        </div>

        <div className="ProjectsBox">
          <h2>Personal Projects</h2>

          <div className="ProjectBox">
            <img src = {AiChatbot} alt = "AiChatbot on Twitch" />
            <div className="ProjectText">
              <h3>Starby - Live AI Chatbot</h3>
              <span className="project-date">December 2024 - Present</span>
              <p>
                Starby is an AI chatbot written in python utilizing Google Cloud Speech-to-Text and ChatGPT's API. 
                It can have a live spoken conversation with a streamer, and stop it's audio when spoken over. 
              </p>
              <p>
                It can change expressions by changing it's own overlay on OBS. 
                It is able to read and interact with chat, as well as channel points using Twitch eventsub.
              </p>
            </div>  
          </div>
          
          <div className="ProjectBox">
            <img src = {Embernote} alt = "Screenshot of Homepage" />
            <div className="ProjectText">
              <h3>Embernote - AI Note Taking App</h3>
              <span className="project-date">May 2025</span>
              <p>
                Embernote is a note taking app written in Swift to track a user's mood and give analytics based on general trends.
                It offers a free trial using storekit for a subscription that gives AI insights into a person's mood 
                and additional reflection cards they can use that will help guide them into a better mindset.
                <br /><br />
                <a href="https://github.com/Kittyheart20/Embernote" target="_blank" rel="noopener noreferrer">Github</a>
                <br />
                <a href="https://apps.apple.com/no/app/embernote/id6747328552" target="_blank" rel="noopener noreferrer">App Store</a>
              </p>
            </div>
          </div>

          <div className="ProjectBox">
            <img src = {OlympicSmashdown} alt = "Game Thumbnail" />
            <div className="ProjectText">
              <h3>Olympic Smashdown - Gamejam Project</h3>
              <span className="project-date">March 2023</span>
              <p>
                This was a team submission made for 7DRL Challenge 2023. 
                The player defends themselves against enemies that throw damaging sports balls and gets health boosts and buffs dropped by enemies. 
                Map is randomly generated for each game with obstacles and powerups.  
                <br /><br />
                <a href="https://jackypark9852.itch.io/olympic-smashdown" target="_blank" rel="noopener noreferrer">Game Page</a>
              </p>
            </div>
          </div>
        </div>

        <div className="timeline">
          <h2>School Projects</h2>
          <div className="timeline-entry right">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>AI Python Projects</h3>
              <span className="project-date">May 2025</span>
              <p>
                Solo Projects
                <br />
                <a href="https://github.com/Kittyheart20/AI-Projects">Github</a>
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default App
