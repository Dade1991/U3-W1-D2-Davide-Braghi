import Container from "react-bootstrap/Container"

const CustomFooter = () => {
  return (
    <>
      <footer>
        <Container className="bg-dark text-light p-3" fluid={true}>
          <p className="text-center m-0">
            e-Book Library -{" "}
            <span className="fw-bold fst-italic">
              {new Date().getFullYear()}
            </span>
          </p>
        </Container>
      </footer>
    </>
  )
}

export default CustomFooter
