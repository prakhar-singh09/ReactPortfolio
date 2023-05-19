import { Col } from "react-bootstrap";
export const CourseCard = ({ title, description, imgUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
        <div className="cor-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="cor-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
    </Col>
  );
};
