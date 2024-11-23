import styled from "styled-components";
import EarthScene from './EarthScene';
const CodeSnippetWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 4rem;
padding: 1.5rem;
background: rgba(255, 255, 255, 0.1);
border-radius: 60px;
color: #fff;
font-family: "Fira Code", monospace;
font-size: 0.9rem;
line-height: 1.8;
position: relative;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
border: 2px solid transparent;
flex-wrap: wrap;
perspective: 1500px; /* Create 3D space */

&:hover {
  border: 2px solid #ff79c6;
  box-shadow: 0px 0px 15px rgba(255, 121, 198, 0.8);
  transform: rotateX(10deg) rotateY(10deg); /* Add 3D rotation effect */
}

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
  animation: shineEffect 2s infinite alternate;
}

@keyframes shineEffect {
  0% {
    opacity: 0.5;
    background-position: 0 0, 50px 50px;
  }
  100% {
    opacity: 1;
    background-position: 50px 50px, 0 0;
  }
}

@media (max-width: 768px) {
  flex-direction: column;
  padding: 1.2rem;
}

@media (max-width: 480px) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 10rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 60px;
  color: #fff;
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  position: relative;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border: 5px solid transparent;
  flex-wrap: wrap;

  &:hover {
    border: 2px solid #ff79c6;
    box-shadow: 0px 0px 15px rgba(255, 121, 198, 0.8);
    transform: rotateX(10deg) rotateY(10deg);
  }

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
    animation: shineEffect 2s infinite alternate;
  }

  @keyframes shineEffect {
    0% {
      opacity: 0.5;
      background-position: 0 0, 50px 50px;
    }
    100% {
      opacity: 1;
      background-position: 50px 50px, 0 0;
    }
  }
  padding: 1rem;
  font-size: 0.6rem;
  overflow-y: auto;
}
`;

const ImageWrapper = styled.div`
  flex: 0.4;
  margin-right: 2rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;

    img {
      max-width: 80%;
      
    
    }
  }
`;

const TextWrapper = styled.div`
  flex: 0.6;
 @media (max-width: 480px){
 padding: 1rem;
    font-size: 0.55rem;
 }
  @media (max-width: 768px) {
    flex: 1;
    text-align: center;
  }
`;

const CodeSnippet = styled.div`
  background: rgba(255, 255, 255, 0.1);
  margin-top: 4rem;
  padding: 1.5rem;
  border-radius: 60px;
  color: #fff;
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  position: relative;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;
  max-height: 25rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-y: auto;

  &:hover {
  border: 2px solid #ff79c6;
  box-shadow: 0px 0px 15px rgba(255, 121, 198, 0.8);
  transform: rotateX(10deg) rotateY(10deg); /* Add 3D rotation effect */
}

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
  animation: shineEffect 2s infinite alternate;
}

@keyframes shineEffect {
  0% {
    opacity: 0.5;
    background-position: 0 0, 50px 50px;
  }
  100% {
    opacity: 1;
    background-position: 50px 50px, 0 0;
  }
}

@media (max-width: 768px) {
  flex-direction: column;
  padding: 1.2rem;
}

@media (max-width: 480px) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 10rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 60px;
  color: #fff;
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  position: relative;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border: 5px solid transparent;
  flex-wrap: wrap;

  &:hover {
    border: 2px solid #ff79c6;
    box-shadow: 0px 0px 15px rgba(255, 121, 198, 0.8);
    transform: rotateX(10deg) rotateY(10deg);
  }

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
    animation: shineEffect 2s infinite alternate;
  }

  @keyframes shineEffect {
    0% {
      opacity: 0.5;
      background-position: 0 0, 50px 50px;
    }
    100% {
      opacity: 1;
      background-position: 50px 50px, 0 0;
    }
  }
  padding: 1rem;
  font-size: 0.6rem;
  overflow-y: auto;
}
`;

const GitHubLink = styled.a`
  color: #ff79c6;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: block;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ff5f87;
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Keyword = styled.span`
  color: #ff79c6; /* Pink color for keywords */
`;

const Function = styled.span`
  color: #50fa7b; /* Green color for function names */
`;

const String = styled.span`
  color: #f1fa8c; /* Yellow color for string literals */
`;


const Project = () => {
  const blogSentences = [
    "Developed a scalable full-stack blog application using Java Spring Boot and React.",
    "Created RESTful APIs for managing blog posts and user operations,",
    "leveraging Spring Data JPA for database management and entity relationships.",
    "Containerized the application using Docker and deployed it on Amazon EKS (Elastic Kubernetes Service) for scalability.",
    "Implemented a content moderation system with a post-approval workflow.",
    "designed a responsive user interface using React and Material-UI (MUI) components.",
    "Used Redux and React Hooks for efficient state management,",
    "integrated React Router for dynamic routing, and optimized performance using React.",
    "Deployed the application using AWS services such as EC2 and CloudWatch for monitoring and employed GitHub for version control."
  ];

  const weatherAppSentences = [
    "Developed with React for real-time weather updates.",
    "Integrated the OpenWeather API for current conditions and forecasts.",
    "Designed a responsive interface with CSS and interactive components.",
    "Used data visualization tools for temperature graphs and custom weather icons.",
    "Optimized for performance using React.memo and code-splitting techniques;",
    "Future plans include weather alerts and multilingual support."
  ];

  const shoppingAppSentences = [
    "Built using React with a sleek, modern interface.",
    "Real-time cart updates streamline item management,",
    "utilizing React Hooks for state management ",
    "Managed internal product data with JSON,",
    " with future plans for RESTful API integration",
    "Implemented a customizable theme toggle for black/white modes.",
    "Responsively designed for seamless use across different devices.",
    "Offers secure payment options, including cash and card.",
    "Optimized for fast performance and smooth interactions using React."
  ];  const salesGrowthFeatures = [
    "A backend application designed for tracking and managing sales growth.",
    "Implemented RESTful APIs with Spring Boot for efficient data handling.",
    "Database management using MySQL with Spring Data JPA.",
    "Deployed on AWS, leveraging EC2 for scalability and performance.",
    "Supports data analytics for monitoring trends and sales metrics."
  ];

  const feastlyFlyingFeatures = [
    "Order Management with real-time tracking and updates.",
    "User Management to control accounts and manage permissions.",
    "Product Management for inventory, menu, and pricing.",
    "Real-time Notifications for admin alerts and updates.",
    "Detailed analytics and reports for data-driven decision-making."
  ];

  const linkedinConnectorFeatures = [
    "A Google Chrome extension for seamless LinkedIn connections.",
    "Automates the process of sending connection requests.",
    "Enhances professional networking by saving time and effort.",
    "User-friendly UI with options for customization.",
    
];

  return (
    <div>
      <EarthScene></EarthScene>
        

      <CodeSnippet>
        <GitHubLink href="https://github.com/medamcharan/BackendApp-BlogApp" target="_blank">
          GitHub Project - BlogApp
        </GitHubLink>
        <pre>
          <code>
            <Keyword>const</Keyword>{" "}
            <Function>BlogAppScalableBlogPlatform</Function> = () =&gt; {"{"}
            <br />
            {blogSentences.map((sentence, index) => (
              <String key={index}>
                {sentence}
                <br />
              </String>
            ))}
            {"}"};
          </code>
        </pre>
      </CodeSnippet>

      <CodeSnippetWrapper>
  <ImageWrapper>
    <img
      src=" weather.png"// Replace with your image URL
      alt="Weather App"
    />
  </ImageWrapper>
  <TextWrapper>
    <GitHubLink href="https://gentle-tiramisu-c41997.netlify.app" target="_blank">
      Weather App - Live
    </GitHubLink>
    <pre>
      <code>
        <Keyword>const</Keyword>{" "}
        <Function>WeatherApp</Function> = () =&gt; {"{"}
        <br />
        {weatherAppSentences.map((sentence, index) => (
          <String key={index}>
            {sentence}
            <br />
          </String>
        ))}
        {"}"}
      </code>
    </pre>
  </TextWrapper>
</CodeSnippetWrapper>

<CodeSnippetWrapper>
  <ImageWrapper>
    <img
      src="vouge.png" // Replace with your image URL
      alt="ShoppingApp"
    />
  </ImageWrapper>
  <TextWrapper>
    <GitHubLink href="https://lively-lamington-883b91.netlify.app/" target="_blank">
      ShoppingApp - Live
    </GitHubLink>
    <pre>
      <code>
        <Keyword>const</Keyword>{" "}
        <Function>ShoppingApp</Function> = () =&gt; {"{"}
        <br />
        {shoppingAppSentences.map((sentence, index) => (
          <String key={index}>
            {sentence}
            <br />
          </String>
        ))}
        {"}"}
      </code>
    </pre>
  </TextWrapper>
</CodeSnippetWrapper>

<CodeSnippetWrapper>
  <ImageWrapper>
    <img
      src="admin page.png" // Replace with your image URL
      alt="FeastlyFlying"
    />
  </ImageWrapper>
  <TextWrapper>
    <GitHubLink
      href="https://66e83942caa3970074b62c5b--spiffy-travesseiro-83b201.netlify.app"
      target="_blank"
    >
      FeastlyFlying Admin Dashboard - Live
    </GitHubLink>
    <pre>
      <code>
        <Keyword>const</Keyword>{" "}
        <Function>FeastlyFlyingDashboard</Function> = () =&gt; {"{"}
        <br />
        {feastlyFlyingFeatures.map((feature, index) => (
          <String key={index}>
            {feature}
            <br />
          </String>
        ))}
        {"}"}
      </code>
    </pre>
  </TextWrapper>
</CodeSnippetWrapper>

<CodeSnippetWrapper>
  <ImageWrapper>
    <img
      src="growth.webp" // Replace with your image URL
      alt="Sales Growth"
    />
  </ImageWrapper>
  <TextWrapper>
    <GitHubLink
      href="https://github.com/medamcharan/Sales-Growth-Backend"
      target="_blank"
    >
      Sales Growth - GitHub
    </GitHubLink>
    <pre>
      <code>
        <Keyword>const</Keyword>{" "}
        <Function>SalesGrowthBackend</Function> = () =&gt; {"{"}
        <br />
        {salesGrowthFeatures.map((feature, index) => (
          <String key={index}>
            {feature}
            <br />
          </String>
        ))}
        {"}"}
      </code>
    </pre>
  </TextWrapper>
</CodeSnippetWrapper>

<CodeSnippetWrapper>
  <ImageWrapper>
    <img
      src="li.jpg" // Replace with your image URL
      alt="LinkedIn Connector"
    />
  </ImageWrapper>
  <TextWrapper>
    <GitHubLink
      href="https://github.com/medamcharan/linkedin-connector-Charan-M"
      target="_blank"
    >
      LinkedIn Connector - GitHub
    </GitHubLink>
    <GitHubLink
      href="https://drive.google.com/file/d/16xw8IZgZIUrf730eZMnXKEojg_CBvhFs/view?usp=drive_link"
      target="_blank"
    >
      LinkedIn Connector - Demo
    </GitHubLink>
    <pre>
      <code>
        <Keyword>const</Keyword>{" "}
        <Function>LinkedInConnector</Function> = () =&gt; {"{"}
        <br />
        {linkedinConnectorFeatures.map((feature, index) => (
          <String key={index}>
            {feature}
            <br />
          </String>
        ))}
        {"}"}
      </code>
    </pre>
  </TextWrapper>
</CodeSnippetWrapper>

    </div>
  );
};

export default Project;
