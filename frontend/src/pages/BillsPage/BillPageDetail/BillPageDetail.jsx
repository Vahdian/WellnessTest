import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../../../shared/consts/api.const";
import "./BillPageDetail.scss";

export default function BillPageDetail() {
  const { id } = useParams();

  const [detail, setDetail] = useState([]);

  const getAPIDataDetail = () => {
    API.get("data/" + id).then((res) => {
      setDetail(res.data);
      console.log(res.data);
    });
  };

  useEffect(getAPIDataDetail, []);

  return (
    <div className="billPageDetail">
      <h1>BILL DETAILS</h1>
      <form className="billPageDetail--form">
        <label for="fecha">FECHA</label>
        <input
          className="billPageDetail--form--input"
          value={detail.fecha}
          name="fecha"
        ></input>
        <label for="hora">HORA</label>
        <input
          className="billPageDetail--form--input"
          value={detail.hora}
          name="fecha"
        ></input>
        <label for="hora">CONSUMO (kWh)</label>
        <input
          className="billPageDetail--form--input"
          value={detail.consumo}
          name="consumo"
        ></input>
        <label>COSTE POR HORA (€)</label>
        <input
          className="billPageDetail--form--input"
          value={Math.round(detail.coste * 100000) / 100000}
          name="coste"
        ></input>
        <label for="hora">PRECIO (€/kWh)</label>
        <input
          className="billPageDetail--form--input"
          value={detail.precio}
          name="precio"
        ></input>
        <button className="btn btn-outline-secondary btn-lg billPageDetail--form--input">
          SUBMIT CHANGES
        </button>
      </form>
      <Link to="/facturas">
        <button className="btn btn-outline-danger btn-lg">
          Back to the main page
        </button>
      </Link>
    </div>
  );
}
