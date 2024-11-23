import React from 'react';
import { FaUserGraduate } from 'react-icons/fa'; // Importing an icon
import './Educations.css'; // Importing the CSS file
import Skills from './Skills';

const Educations: React.FC = () => {
  return (
    <div className="educations-container">
       <h2 className="educations-title">E  d  u  c  a  t  i  o  n</h2>
      <video className="background-video" autoPlay loop muted>
        <source src="2.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     

      <div className="educations-list">
        {/* Education Card */}
        <div className="education-card">
          {/* Icon */}
          <div className="education-icon">
            <FaUserGraduate />
          </div>

          {/* Year */}
          <div className="education-year">2020 - 2024</div>

          {/* Content */}
          <div className="education-content">
            <h3 className="education-degree">Bachelor Degree</h3>
            <p className="education-institute">Christ (Deemed to be University), 2024 , CGPA: 9.27</p>
          </div>
        </div>

        <div className="education-card">
          {/* Icon */}
          <div className="education-icon">
            <FaUserGraduate />
          </div>

          {/* Year */}
          <div className="education-year">2018 - 2020</div>

          {/* Content */}
          <div className="education-content">
            <h3 className="education-degree">12th Grade</h3>
            <p className="education-institute">Narayana Junior College, 2020 , CGPA: 9.53</p>
          </div>
        </div>

        <div className="education-card">
          {/* Icon */}
          <div className="education-icon">
            <FaUserGraduate />
          </div>

          {/* Year */}
          <div className="education-year"> 2018</div>

          {/* Content */}
          <div className="education-content">
            <h3 className="education-degree">10th Grade</h3>
            <p className="education-institute">Indus High School, 2018 ,CGPA: 9.7</p>
          </div>
        </div>
      </div>
      <Skills />
    </div>
     
  );
};

export default Educations;
