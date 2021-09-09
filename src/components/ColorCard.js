import React from "react";
import { Card } from "semantic-ui-react";

function ColorCard() {
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">COLOR NAME HERE</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            COLOR HEX CODE HERE
          </span>
        </div>
      </div>
    </Card>
  );
}

export default ColorCard;
