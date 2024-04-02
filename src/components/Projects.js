import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CodingCard } from "./CodingCard";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/calculator.png";
import projImg2 from "../assets/img/Devfolio.png";
import projImg6 from "../assets/img/Notegen.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import leetcode from "../assets/img/leetcode.png";
import CodeChef from "../assets/img/codechef.png";
import hackerrank from "../assets/img/hackerrank.png";


import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {

  const projects = [
    {
      description: "NoteGen",
      imgUrl: projImg6,
      link: "https://notegen.vercel.app/",
    },
    {
      description: "DevFolio",
      imgUrl: projImg2,
      link: "https://devmedia-app.vercel.app/",
    },
    {
      description: "Calculator App",
      imgUrl: projImg1,
      link: "https://github.com/intensifyprakhar/Calculator-Using-Java-",
    },
   
  ];

  
  const codingProfiles = [
   
    {
      description: "CodeChef",
      imgUrl: CodeChef,
      link: "https://www.codechef.com/users/prakharsingh09",
    },
    {
      description: "Leetcode",
      imgUrl: leetcode,
      link: "https://leetcode.com/prakhar-singh/",
    },
    {
      description: "HackerRank",
      imgUrl: hackerrank,
      link: "https://www.hackerrank.com/singhprakhar359",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Portfolio</h2>
                <p>Here is my work, I am Proficient in C++, Java, Python, JavaScript, and a range of technologies including ReactJS, MongoDB, NodeJS, ExpressJS, Git, Github, and SQL. Experienced in RESTful API development and cutting edge technologies like GenAI.
</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Coding Profiles</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          codingProfiles.map((profile, index) => {
                            return (
                              <CodingCard  
                                key={index}
                                {...profile}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
