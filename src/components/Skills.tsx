import React, { useEffect, useRef } from 'react';
import { FaJava, FaJsSquare, FaReact, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiTypescript, SiMongodb, SiHtml5, SiCss3 } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';


import './Skills.css';

import EatSleepRave from './EatSleepRave';


const Skills: React.FC = () => {
  const skillsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (skillsContainerRef.current) {
              skillsContainerRef.current.classList.add('visible');
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (skillsContainerRef.current) {
      observer.observe(skillsContainerRef.current);
    }

    return () => {
      if (skillsContainerRef.current) {
        observer.unobserve(skillsContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="skills-container" ref={skillsContainerRef}>
      <EatSleepRave />
      <h2 className="skills-title"></h2>

      <div className="skills-list">
        {/* Java */}
        <div className="skill-card">
          <div className="skill-icon">
            <FaJava />
          </div>
          <div className="skill-name">Java</div>
          
        </div>

        {/* JavaScript */}
        <div className="skill-card">
          <div className="skill-icon">
            <FaJsSquare />
          </div>
          <div className="skill-name">JavaScript</div>
          
        </div>

        {/* HTML */}
        <div className="skill-card">
          <div className="skill-icon">
            <SiHtml5 />
          </div>
          <div className="skill-name">HTML</div>
         
        </div>

        {/* CSS */}
        <div className="skill-card">
          <div className="skill-icon">
            <SiCss3 />
          </div>
          <div className="skill-name">CSS</div>
          
        </div>

        {/* Tailwind CSS */}
        <div className="skill-card">
          <div className="skill-icon">
            <SiTailwindcss />
          </div>
          <div className="skill-name">Tailwind CSS</div>
          
        </div>

        {/* TypeScript */}
        <div className="skill-card">
          <div className="skill-icon">
            <SiTypescript />
          </div>
          <div className="skill-name">TypeScript</div>
          
        </div>

        {/* React */}
        <div className="skill-card">
          <div className="skill-icon">
            <FaReact />
          </div>
          <div className="skill-name">React</div>
       
        </div>

        {/* Spring Boot */}
        <div className="skill-card">
          <div className="skill-icon">
            <SiSpringboot />
          </div>
          <div className="skill-name">Spring Boot</div>
          
        </div>

        {/* MySQL */}
        <div className="skill-card">
          <div className="skill-icon">
            <DiMysql />
          </div>
          <div className="skill-name">MySQL</div>
       
        </div>

        {/* MongoDB */}
        <div className="skill-card">
          <div className="skill-icon">
            <SiMongodb />
          </div>
          <div className="skill-name">MongoDB</div>
          
        </div>

        {/* Docker */}
        <div className="skill-card">
          <div className="skill-icon">
            <FaDocker />
          </div>
          <div className="skill-name">Docker</div>
         
        </div>

        {/* Git */}
        <div className="skill-card">
          <div className="skill-icon">
            <FaGitAlt />
          </div>
          <div className="skill-name">Git/GitHub</div>
          
        </div>

        
      </div>
      
    </div>
  );
};

export default Skills;
