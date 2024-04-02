import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/Untitled.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Skills</h2>
                        <p>I am constantly exploring emerging technologies and various domains to broaden my skillset. I possess various abilities, including<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
  <div className="item">
  <img src={meter2} alt="C++" />
  <h5>C++</h5>
  </div>
  <div className="item">
  <img src={meter2} alt="Java" />
  <h5>Java</h5>
  </div>
 <div className="item">
  <img src={meter2} alt="Python" />
  <h5>Python</h5>
</div>
  <div className="item">
  <img src={meter1} alt="ReactJS" />
  <h5>ReactJS</h5>
</div>
<div className="item">
  <img src={meter2} alt="ExpressJS" />
  <h5>ExpressJS</h5>
</div>
<div className="item">
  <img src={meter1} alt="JavaScript" />
  <h5>JavaScript</h5>
</div>
<div className="item">
  <img src={meter1} alt="MongoDB" />
  <h5>MongoDB</h5>
</div>
<div className="item">
  <img src={meter1} alt="NodeJS" />
  <h5>NodeJS</h5>
</div>
<div className="item">
  <img src={meter3} alt="Designing" />
  <h5>Canva</h5>
</div>
<div className="item">
  <img src={meter2} alt="Git" />
  <h5>Git</h5>
</div>
<div className="item">
  <img src={meter1} alt="Github" />
  <h5>Github</h5>
</div>                          
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Backgroundleft" ></img>
    </section>
  )
}
