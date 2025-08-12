import React from 'react';
import { Link } from 'react-router-dom';
import WebHeader, { BackgroundBubbles } from './parts';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AiChatbot from './assets/AiBot.png';
import Embernote from './assets/Embernote.png';
import OlympicSmashdown from './assets/OlympicSmashdown.png';

// Import all skill icons
import pythonIcon from './assets/python.svg';
import javaIcon from './assets/java.svg';
import swiftIcon from './assets/swift.svg';
import cIcon from './assets/C.png';
import cplusplusIcon from './assets/cplusplus.svg';
import javascriptIcon from './assets/javascript.svg';
import assemblyIcon from './assets/assembly.png';
import systemverilogIcon from './assets/sv.jpeg';
import tensorflowIcon from './assets/tensorflow.svg';
import pytorchIcon from './assets/pytorch.svg';
import reactIcon from './assets/react.svg';
import dockerIcon from './assets/docker.svg';
import openaiIcon from './assets/openai.png';

function Portfolio() {
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
      <BackgroundBubbles />
      <WebHeader />
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
              <p>
                <Link to="/starby-demo" style={{ 
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  marginRight: '1rem',
                  display: 'inline-block'
                }}>
                  🚀 Try Live Demo
                </Link>
                <a href="https://github.com/Kittyheart20/Starby" target="_blank" rel="noopener noreferrer">GitHub</a>
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
          
          <div className="timeline-entry left">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Out-Of-Order Processor</h3>
              <span className="project-date">March 2025 - May 2025</span>
              <p>
                Team Project of 3
                <br />
                <a href="https://github.com/Kittyheart20/sp25_ece411_Team_9">Github</a>
              </p>
            </div>
          </div>

          <div className="timeline-entry right">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>AI Python Projects</h3>
              <span className="project-date">January 2024 - May 2024</span>
              <p>
                Solo Projects
                <br />
                <a href="https://github.com/Kittyheart20/AI-Python-Projects">Github</a>
              </p>
            </div>
          </div>

          <div className="timeline-entry left">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>SystemVerilog Pac-Man FPGA</h3>
              <span className="project-date">October 2023 - December 2023</span>
              <p>
                Team Project of 2
                <br />
                <a href="https://github.com/Kittyheart20/pacman">Github</a>
              </p>
            </div>
          </div>

          <div className="timeline-entry right">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>C++ Operating System</h3>
              <span className="project-date">October 2023 - December 2023</span>
              <p>
                Team Project of 4
              </p>
            </div>
          </div>

          <div className="timeline-entry left">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Unreal Engine Tower Defense FPS</h3>
              <span className="project-date">October 2023 - December 2023</span>
              <p>
                Team Project of 4
                <br />
                <a href="https://github.com/Kittyheart20/Unreal-FPS-Tower-Defense">Github</a>
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          
          <div className="skills-category">
            <h3>Languages</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={pythonIcon} alt="Python" />
                </div>
                <div className="skill-name">Python</div>
                <div className="skill-proficiency">Proficiency: Excellent</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={javaIcon} alt="Java" />
                </div>
                <div className="skill-name">Java</div>
                <div className="skill-proficiency">Proficiency: Excellent</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={swiftIcon} alt="Swift" />
                </div>
                <div className="skill-name">Swift</div>
                <div className="skill-proficiency">Proficiency: Excellent</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={cIcon} alt="C" />
                </div>
                <div className="skill-name">C</div>
                <div className="skill-proficiency">Proficiency: Comfortable</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={cplusplusIcon} alt="C++" />
                </div>
                <div className="skill-name">C++</div>
                <div className="skill-proficiency">Proficiency: Comfortable</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={javascriptIcon} alt="JavaScript" />
                </div>
                <div className="skill-name">JavaScript</div>
                <div className="skill-proficiency">Proficiency: Learning</div>
              </div>
               <div className="skill-item">
                 <div className="skill-icon">
                   <img src={assemblyIcon} alt="Assembly" />
                 </div>
                 <div className="skill-name">Assembly</div>
                 <div className="skill-proficiency">Proficiency: Basics</div>
               </div>
               <div className="skill-item">
                 <div className="skill-icon">
                   <img src={systemverilogIcon} alt="SystemVerilog" />
                 </div>
                 <div className="skill-name">SystemVerilog</div>
                 <div className="skill-proficiency">Proficiency: Comfortable</div>
               </div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Frameworks & Tooling</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={tensorflowIcon} alt="TensorFlow" />
                </div>
                <div className="skill-name">TensorFlow</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={pytorchIcon} alt="PyTorch" />
                </div>
                <div className="skill-name">PyTorch</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={reactIcon} alt="React" />
                </div>
                <div className="skill-name">React</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={dockerIcon} alt="Docker" />
                </div>
                <div className="skill-name">Docker</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <img src={openaiIcon} alt="OpenAI" />
                </div>
                <div className="skill-name">OpenAI API</div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Portfolio; 