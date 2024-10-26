import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Maha Rabah </span>
            from <span className="purple"> Damascus, Syria.</span>
            <br />
            I am currently employed as a frontend developer at EduBridge "Remote".
            <br />
            I am studying Information Technology Engineering at the Syrian Virtual University
             in my final year and I recently graduated from Damascus University with a major in Business Administration.
            <br />
            <br />
            I interned at focal x in web development using react js and got a very good grade with a letter of recommendation
          </p>
  
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
