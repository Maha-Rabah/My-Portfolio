import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Book from "../../src/Assets/Projects/Book.png";
import Editor from "../../src/Assets/Projects/Editor.png";
import Kasper from "../../src/Assets/Projects/Kasper.png";
import Amazon from "../../src/Assets/Projects/Amazon.png";
import Edubridge from "../../src/Assets/Projects/Edubridge.png";
import Ai from "../../src/Assets/Projects/Ai.png";
import Education from "../../src/Assets/Projects/Education.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Edubridge}
              isBlog={false}
              title="EduBridge"
              description="This Website is for a UK registered organisation working in the education sector, and is built using ReactJS and we have recently added NextJS."
              demoLink="https://www.edu-bridge.org.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Education}
              isBlog={false}
              title="Education Platform"
              description="This website is an educational platform with many features built using ReactJS."
              ghLink="https://github.com/Maha-Rabah/Task4"
              demoLink="https://maha-rabah.github.io/Task4/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              isBlog={false}
              title="Amazon"
              description="E-commerce to display and buy products, built using ReactJS, Firebase, Striple "
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="Books Store"
              description="This website To display and Sell The Books, Built using Reactjs, Tailwind, TypeScript and with a Real Api"
              ghLink="https://github.com/mohamed-arab1/books-commerce-client"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ai}
              isBlog={false}
              title="Ai Project"
              description="This website about ai Like a chatgpt, built with React, Bootstrap"
              ghLink="https://github.com/Maha-Rabah/Ai-Project"
              demoLink="https://abdullah-alashek.github.io/AI_Project-master/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Editor}
              isBlog={false}
              title="Text Editor"
              description="It is like a Microsoft office WORD, it built by using html, css, Js"
              ghLink="https://github.com/Maha-Rabah/Test_Editor"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kasper}
              isBlog={false}
              title="KASPER"
              description="This Website built for training and using animation, it built by using html, css"
              ghLink="https://github.com/Maha-Rabah/Kasper"
            />
          </Col>

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
