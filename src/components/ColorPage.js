import React from "react";
import ColorCollection from "./ColorCollection";
import ColorForm from "./ColorForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function ColorPage() {
  return (
    <Container>
      <h1>Color Searcher</h1>
      <br />
      <ColorForm />
      <br />
      <Search />
      <br />
      <ColorCollection />
    </Container>
  );
}

export default ColorPage;
