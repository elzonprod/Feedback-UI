import React from "react";
import Card from "../shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This project</h1>
        <p>This is a React app tp leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <a href="/">Back to Home</a>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
