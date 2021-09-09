import React from "react";
import ColorCard from "./ColorCard";
import { Card } from "semantic-ui-react";

function ColorCollection() {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Color Collection</h1>
    </Card.Group>
  );
}

export default ColorCollection;
