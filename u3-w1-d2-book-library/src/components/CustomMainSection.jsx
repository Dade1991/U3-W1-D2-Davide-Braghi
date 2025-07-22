import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./CustomMainSection.css"
import sciFiBooks from "../data/scifi.json"

const CustomMainSection = () => {
  return (
    <Container className="mb-5">
      <Row className="justify-content-center pt-5">
        <Col xs={12} className="text-center">
          <h1>Welcome to e-Book Online Library!</h1>
          <h3>The only place on the web for your cheap e-books</h3>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        {sciFiBooks.map((singleBook) => (
          <Col xs={12} md={8} lg={4} className="pb-3" key={singleBook.asin}>
            <Card className="book-Card">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={singleBook.img}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{singleBook.title}</Card.Title>
                <Card.Text className="flex-grow-1"></Card.Text>
                <hr />
                <p>Book category: {singleBook.category}</p>
                <Button className="custom-btn" variant="primary">
                  {singleBook.price} €
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CustomMainSection
