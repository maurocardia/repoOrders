import React, { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../styles/order.css";
import { useNavigate } from "react-router-dom";
import { GoGift } from "react-icons/go";

const Order = () => {
  const { id } = useParams();
  const [getOrderId, setGetOrderId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/orders/${id}`)
      .then((res) => setGetOrderId(res.data.data.order));
  }, []);

  console.log(getOrderId);
  return (
    <div className="containerOrder">
      <div className="orderSpace">
        <h5>codigo de pedido: {getOrderId?.code}</h5>
        <br />
        <h5>
          <b>Cliente:</b> {getOrderId?.user.name}
        </h5>
        <h5>
          <b>Identificacion:</b> {getOrderId?.user.dniNumber}
        </h5>
        <h5>
          <b>Direccion de entrega:</b>
          <br />
          {getOrderId?.user.dress}
        </h5>
        <br />
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Ref.</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>camara</td>
              <td>10200</td>
              <td>1</td>
            </tr>
          </tbody>
        </Table>

        <br />
        <h5>
          <b>Estado del pedido:</b> {getOrderId?.status}
        </h5>
        <br />
        <h5>
          <b>Fecha estimada de entrega: </b>
          <br />

          {getOrderId?.dateDelivery}
        </h5>
        <br />
        <div className="containerButton">
          <Button variant="outline-primary" onClick={() => navigate(`/`)}>
            Nueva consulta
          </Button>{" "}
          <Button variant="outline-danger" onClick={() => navigate(`/closer`)}>
            Cerrar
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Order;
