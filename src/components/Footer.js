import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
    
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/prakhar-singh09/" ><img src={navIcon1} alt="Icon"  /></a>
              <a href="https://instagram.com/prakhar___singh___"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/prakhar-singh09"><img src={navIcon4} alt="" /></a>
              <a href="https://twitter.com/intensifyprakha?t=c4glOsFVu_YbHXaOOiWPQw&s=09"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Made with love❤️ by Prakhar Singh ©2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
