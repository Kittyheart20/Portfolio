import React from 'react';
import { Link } from 'react-router-dom';

function WebHeader({showBackButton = false}) {
    return (
        <header>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {showBackButton ? (
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
                        ← Back to Portfolio
                    </Link>
                ) : (
                    <div></div>
                )}
                <p style={{ textAlign: "right", margin: 0 }}>
                    <a href="https://www.linkedin.com/in/erin-haynes-uiuc/" target="_blank" rel="noopener noreferrer">LinkedIn</a> • <a href="https://github.com/Kittyheart20" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
            </div>
      </header>
    )
}

function BackgroundBubbles() {
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
    )
}

export default WebHeader;
export { BackgroundBubbles };