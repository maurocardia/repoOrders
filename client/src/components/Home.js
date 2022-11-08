import React from "react";
import "../styles/home.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AiOutlineShopping} from "react-icons/ai"
 
const Home = () => {
  const [inputCode, setInputCode] = useState("");
  const [typeDni, setTypeDni] = useState("");
  const [numberDni, setNumberDni] = useState("");
  const [order, setOrder] = useState({});
  const navigate = useNavigate();

  const dniRequest = {
    dniNumber: numberDni,
    dniType:typeDni
  };

  const submit = () => {
    console.log(typeDni)
    axios
      .post(`api/v1/orders/${inputCode}`, dniRequest)
      .then((res) =>  navigate(`/${inputCode}`))
      .catch(error => alert("No existe pedidos relacionados con los datos ingresados!!"))
  };



console.log(typeDni)
  return (
    <div className="containerHome">
      <div className="containerForm">
         <h1><AiOutlineShopping/> Order</h1>    
        <label htmlFor="codeInput">
          Codigo
          <br />
          <input
            type="text"
            id="codeInput"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
        </label>
        <select name="" 
                id=""
                className="selecForm"
                value={typeDni}
                onChange={(e) => setTypeDni(e.target.value)}>
                    
          
          <option selected="true">Tipo de documento</option>
          <option >CC</option>
          <option >CE</option>
          <option >NIT</option>

          </select>
          
    
        <label htmlFor="dniNumber">
          N° Documento
          <br />
          <input
            type="text"
            id="dniNumber"
            value={numberDni}
            onChange={(e) => setNumberDni(e.target.value)}
          />
        </label>
        <Button
          variant="outline-primary"
          className="buttonForm"
          onClick={submit}
        >
          Consultar
        </Button>{" "}
      </div>
    </div>
  );
};

export default Home;
