import { Col } from "react-bootstrap";

export const CodingCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="code-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="code-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
