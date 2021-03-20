import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ImageViewport } from "../Components/ImageViewport";

interface CatImage {
  url: string;
}

export const PictureViewer = () => {
  // initial state
  const [image, setImage] = useState<CatImage>({ url: "https://via.placeholder.com/500?text=Load+a+cat+image" })

  // FETCH 
  const randomCat = async () => {
    // call to the nodejs backend (api-nodejs-ts) to load random cats pictures.=
    const response = await fetch("http://localhost:7000/api/cats/random")
    const cats = await response.json()
    setImage({ url: cats[0].url })
  }

  return (
    <Container fluid={"sm"}>
      <Row className="justify-content-md-center">
        <Col sm={12}>
          <h1>Cat Viewer</h1>

          <ImageViewport imageUrl={image.url} />

          <Button variant="dark" style={{ marginTop: 15 }} onClick={randomCat}>Get a random cat</Button>
        </Col>
      </Row>
    </Container>
  );
}