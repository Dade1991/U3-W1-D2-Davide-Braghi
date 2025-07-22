import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import sciFiBooks from "../data/scifi.json"

const CustomMainSection = () => {
  return (
    <Container>
      <Row className="justify-content-center pt-5">
        <Col xs={12} className="text-center">
          <h1>Welcome to e-Book Online Library!</h1>
          <h3>The only place on the web for your cheap e-books</h3>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        {sciFiBooks.map((singleBook) => (
          <Col xs={12} md={8} lg={4} className="pb-3" key={singleBook.asin}>
            <Card>
              <Card.Img variant="top" src={singleBook.img} />
              <Card.Body>
                <Card.Title>{singleBook.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <p>{singleBook.category}</p>
                <Button variant="primary">{singleBook.price}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CustomMainSection
