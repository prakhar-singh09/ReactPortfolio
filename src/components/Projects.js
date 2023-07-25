import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CodingCard } from "./CodingCard";
import { CourseCard } from "./CourseCard";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/calculator.png";
import projImg2 from "../assets/img/Url_Shortener.png";
import projImg6 from "../assets/img/github.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import leetcode from "../assets/img/leetcode.png";
import CodeChef from "../assets/img/codechef.png";
import hackerrank from "../assets/img/hackerrank.png";
import dbms from "../assets/img/dbms.png";
import cn from "../assets/img/cn.png";
import OS from "../assets/img/OS.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {

  const projects = [
    {
      
      description: "Calculator Android App",
      imgUrl: projImg1,
      link: "https://github.com/intensifyprakhar/Calculator-Using-Java-",
    },
    {
      description: "URL Shortener Using MongoDB and ExpressJS",
      imgUrl: projImg2,
      link: "https://url-shortener-service-2705.onrender.com/login",

    },
    {
      description: "More Projects",
      imgUrl: projImg6,
      link: "https://github.com/intensifyprakhar",
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
      link: "https://leetcode.com/intensifyprakhar/",
    },
    {
      description: "HackerRank",
      imgUrl: hackerrank,
      link: "https://www.hackerrank.com/singhprakhar359",
    },
  ];

  const Course = [
   
    {
      description: "DBMS",
      imgUrl: dbms,
    
    },
    {
      description: "Operating System",
      imgUrl: OS,
    
    },
     {
      description: "Coumputer Networks",
      imgUrl: cn,
      
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
                <p>I show you to all the big and small Skills I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Coding Profiles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Course Work</Nav.Link>
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          Course.map((course, index) => {
                            return (
                              <CourseCard
                                key={index}
                                {...course}
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
