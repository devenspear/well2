import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <Head>
        <title>Wellness 2 Test Page</title>
        <meta name="description" content="Modern wellness platform - Test page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="container">
        {/* Animated Background */}
        <div className="bg-animation"></div>
        
        {/* Main Content */}
        <main className={`main ${isLoaded ? 'loaded' : ''}`}>
          <div className="hero-section">
            {/* Animated Logo */}
            <h1 className="animated-logo">
              <span className="wellness">Wellness</span>
              <span className="number">2</span>
              <span className="test">Test page</span>
            </h1>
            
            <p className="subtitle">
              Modern wellness solutions for a healthier tomorrow
            </p>
            
            <div className="cta-section">
              <button className="cta-button primary">
                Get Started
              </button>
              <button className="cta-button secondary">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Wellness Tracking</h3>
              <p>Monitor your health journey with advanced analytics</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💪</div>
              <h3>Fitness Goals</h3>
              <p>Set and achieve your fitness milestones</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧘</div>
              <h3>Mindfulness</h3>
              <p>Practice meditation and stress management</p>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          overflow-x: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .bg-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, 
            rgba(102, 126, 234, 0.1) 0%, 
            rgba(118, 75, 162, 0.1) 25%,
            rgba(102, 126, 234, 0.1) 50%,
            rgba(118, 75, 162, 0.1) 75%,
            rgba(102, 126, 234, 0.1) 100%);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .main {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }

        .main.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .animated-logo {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .wellness {
          color: #ffffff;
          display: inline-block;
          animation: slideInLeft 1s ease-out 0.3s both;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .number {
          color: #ffd700;
          display: inline-block;
          animation: bounceIn 1s ease-out 0.6s both;
          margin: 0 0.2em;
          text-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
        }

        .test {
          color: #ffffff;
          display: inline-block;
          animation: slideInRight 1s ease-out 0.9s both;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .subtitle {
          font-size: clamp(1rem, 3vw, 1.5rem);
          color: rgba(255, 255, 255, 0.9);
          font-weight: 300;
          margin-bottom: 2.5rem;
          max-width: 600px;
          animation: fadeInUp 1s ease-out 1.2s both;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cta-section {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease-out 1.5s both;
        }

        .cta-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .cta-button.primary {
          background: linear-gradient(45deg, #ff6b6b, #ee5a24);
          color: white;
          box-shadow: 0 4px 20px rgba(255, 107, 107, 0.4);
        }

        .cta-button.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .cta-button.primary:hover {
          box-shadow: 0 8px 30px rgba(255, 107, 107, 0.6);
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
          animation: fadeInUp 1s ease-out 1.8s both;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.15);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: float 3s ease-in-out infinite;
        }

        .feature-card:nth-child(2) .feature-icon {
          animation-delay: 1s;
        }

        .feature-card:nth-child(3) .feature-icon {
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .feature-card h3 {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .features {
            grid-template-columns: 1fr;
          }
          
          .cta-section {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </>
  )
}
