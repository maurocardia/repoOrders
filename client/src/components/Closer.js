import React from "react";
import "../styles/closer.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Closer = () => {
  const navigate = useNavigate();
  return (
    <div className="containerCloser">
      <h1>
        Thanks!!
        <br />
        for using the app
        <br />
        to track orders
        <br />
        <Button variant="outline-primary" onClick={() => navigate(`/`)}>
          Nueva consulta
        </Button>{" "}
      </h1>
    </div>
  );
};

export default Closer;
