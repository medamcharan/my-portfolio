
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";



const Hero = () => {
  const [typedText, setTypedText] = useState(""); // State for the typewriter text
  const fullText = "Full Stack Developer..."; // The text to type out

  useEffect(() => {
    let typingIndex = 0; // Current index in the fullText
    let isDeleting = false; // Whether we are deleting text
    const typingSpeed = 250; // Speed of typing
    const deletingSpeed = 100; // Speed of deleting
    const resetDelay = 1000; // Delay before restarting the typing loop

    const typeWriter = () => {
      setTypedText((prev) =>
        isDeleting ? prev.slice(0, -1) : fullText.slice(0, typingIndex + 1)
      );

      if (!isDeleting && typingIndex < fullText.length) {
        typingIndex++;
      } else if (isDeleting && typingIndex > 0) {
        typingIndex--;
      }

      if (typingIndex === fullText.length) {
        isDeleting = true; // Start deleting after typing finishes
      } else if (isDeleting && typingIndex === 0) {
        isDeleting = false; // Restart typing after deleting
      }

      const nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

      // Wait longer after typing finishes before deleting
      setTimeout(typeWriter, typingIndex === fullText.length ? resetDelay : nextSpeed);
    };

    const typingInterval = setTimeout(typeWriter, typingSpeed); // Initial delay

    return () => clearTimeout(typingInterval); // Cleanup on component unmount
  }, []);

  const handleContactClick = () => {
    window.location.href = "tel:+91 8074103658";
  };

  const handleResumeClick = () => {
    // Downloads the resume file
    const link = document.createElement("a");
    link.href = "/Charan_Resume.pdf";
    link.download = "Charan_Medam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const sizes = {
  mobile: '600px',
  tablet: '768px',
  desktop: '1024px',
};

const HeroContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 100vh;
  position: relative;
  overflow: hidden;
  flex-direction: row;

  &::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(
        rgba(255, 255, 255, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: -1;
    animation: fadeInOut 4s infinite alternate;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${sizes.mobile}) {
  
   
  }
`;

const TextContent = styled.div`
  max-width: 50%;
  h1 {
    font-size: 2.5rem;
    line-height: 1;
    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  h2 {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 0.5rem;
  }
  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    line-height: 1.6;
  }

  @media (max-width: ${sizes.tablet}) {
    max-width: 80%;
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: ${sizes.mobile}) {
    max-width: 100%;
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  button {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
    transition: background 0.3s, color 0.3s;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 200%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        ${({ theme }) => theme.colors.primary},
        transparent
      );
      transition: transform 0.5s;
      transform: translateX(-100%);
      z-index: 0;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};

      &::before {
        transform: translateX(100%);
      }
    }

    &:hover::before {
      animation: shine 1.5s infinite;
    }

    @keyframes shine {
      0% {
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(150%);
      }
    }

    &:hover {
      box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${sizes.mobile}) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;


const ColorCircles = styled.div`
  display: flex;
  gap: 0rem;
  margin-bottom: -1rem;

  .circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ff6b6b;
    transition: background 0.3s ease;
    margin-left: 1rem;
  }

  .circle:nth-child(2) {
    background: #50fa7b;
  }

  .circle:nth-child(3) {
    background: #6b92ff;
  }

  @media (max-width: ${sizes.tablet}) {
    gap: 0.8rem;
  }

  @media (max-width: ${sizes.mobile}) {
    gap: 0.5rem;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  margin: 2rem 0;

  @media (max-width: ${sizes.mobile}) {
    margin: 2rem 0;
     gap: 0rem;
  margin-bottom: 0.5rem;
  }
`;

const CodeSnippet = styled.div`
  background: #1e1e2e; /* Darker background color for 3D effect */
  padding: 1rem;
  border-radius: 70px;
  color: #fff;
  font-family: "Fira Code", monospace;
  font-size: 0.85rem;
  line-height: 1.6;
  position: relative;
  box-shadow: 
    4px 4px 10px rgba(0, 0, 0, 0.8), /* 3D depth shadow */
    -4px -4px 10px rgba(255, 255, 255, 0.05); /* Highlight for a beveled effect */
  border: 2px solid transparent;
  transition: box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    box-shadow: 
      8px 8px 20px rgba(0, 0, 0, 0.8), /* Enhance depth */
      -4px -4px 15px rgba(255, 121, 198, 0.4); /* Add subtle glow */
    background: #161622; /* Slightly darker on hover */
  }

  pre {
    span.keyword {
      color: #ff79c6;
    }
    span.string {
      color: #50fa7b;
    }
    span.object {
      color: #bd93f9;
    }
    span.function {
      color: #8be9fd;
    }
    span.boolean {
      color: #ffb86c;
    }
    span.number {
      color: #ff5555;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    padding: 1.5rem;
  }

  @media (max-width: ${sizes.mobile}) {
    padding: 1rem;
    font-size: 0.6rem;
    border-radius: 70px;
    border: 1px solid transparent;
  }
`;


const ContactIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
      opacity: 0.9;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    gap: 0.8rem;
  }

  @media (max-width: ${sizes.mobile}) {
    gap: 0.5rem;
  }
`;



  return (
    
    <HeroContainer>
      <TextContent>
        <h1>
          Hello, <br /> This is <span>Charan Medam</span>
        </h1>
        <h2>
          I'm a <span>{typedText}</span>
        </h2>
        <p>
          "Building modern, scalable applications with React, TypeScript, and JavaScript, complemented by robust backend solutions using Java Spring Boot."
        </p>
        <ButtonContainer>
          <button onClick={handleContactClick}>
            Contact Me<FaPhone />
          </button>
          <button onClick={handleResumeClick}>Get Resume</button>
        </ButtonContainer>
        <ContactIcons>
          <a href="mailto:charanm5049@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/charan-medam/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/medamcharan"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
              href="https://leetcode.com/charanm5049"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
            >
              <FaCode />
            </a>
        </ContactIcons>
      </TextContent>
      <ColorCircles />
      <Divider />
      <CodeSnippet>
      <ColorCircles>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </ColorCircles>

      <Divider />
     
        <pre>
          <span className="keyword">const</span> coder ={" "}
          <span className="object">{"{"}</span>
          {"\n"}
          &nbsp; <span className="object">name</span>:{" "}
          <span className="string">'Medam Charan'</span>,{"\n"}
          &nbsp; <span className="object">title</span>:{" "}
          <span className="string">'Full Stack Developer'</span>,{"\n"}
          &nbsp; <span className="object">location</span>:{" "}
          <span className="string">'Hyderabad, India'</span>,{"\n"}
          &nbsp; <span className="object">skills</span>: [
          <span className="string">'Java'</span>,{" "}
          <span className="string">'JavaScript'</span>,{" "}
          <span className="string">'TypeScript'</span>,{" "}
          <span className="string">'React.js'</span>,{" "}
          <span className="string">'Redux'</span>,{"\n "}
          <span className="string">           'HTML'</span>,{" "}
          <span className="string">'CSS'</span>,{" "}
          <span className="string">'Spring Boot'</span>,{""}
          <span className="string">'Docker'</span>,{" "}
          <span className="string">'Git'</span>,{"\n "}
          <span className="string">           'GitHub Actions'</span>,{" "}
          <span className="string">'MongoDB'</span>,{" "}
          <span className="string">'MySQL'</span>,{" "}
          <span className="string">'REST APIs'</span>,{" "}
          ],{"\n"}
          &nbsp; <span className="object">hobbies</span>: [
          <span className="string">'Problem-solving'</span>,{" "}
          <span className="string">'Learning new technologies'</span>,{"\n"}
          <span className="string"> 'Reading tech blogs'</span>
          ],{"\n"}
          &nbsp; <span className="object">hardWorker</span>:{" "}
          <span className="boolean">true</span>,{"\n"}
          &nbsp; <span className="object">quickLearner</span>:{" "}
          <span className="boolean">true</span>,{"\n"}
          &nbsp; <span className="object">problemSolver</span>:{" "}
          <span className="boolean">true</span>,{"\n"}
          &nbsp; <span className="object">hireable</span>:{" "}
          <span className="function">function()</span>{" "}
          <span className="object">{"{"}</span> {"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp; <span className="keyword">return</span> (
          {"\n"}
          <span className="object">this.hardWorker</span> && {"\n"}
          <span className="object">this.problemSolver</span> &&{"\n"}
          <span className="object">this.skills.length</span> &gt;= 5 &&<br />
          &nbsp; <span className="object">{"     );"}</span>{"\n"}
          &nbsp; <span className="object">{"   };"}</span>{"\n"}
          &nbsp; <span className="object">{"};"}</span>
        
        </pre>
        
      </CodeSnippet>
     
    </HeroContainer>
      
   
  );
  
};

export default Hero;
