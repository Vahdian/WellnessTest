import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { API } from "../../shared/consts/api.const";
import { LoadingContext } from "../../core/components/Loader/context/LoadingContext";

import "./BillsPage.scss";

export default function LandingPage() {
  const { setIsLoading } = useContext(LoadingContext);
  const [data, setData] = useState([]);

  const getAPIData = () => {
    setIsLoading(true);
    API.get("/data").then((res) => {
      setIsLoading(false);
      setData(res.data);
    });
  };

  const deleteEntry = (index) => {
    console.log(index);
    API.delete(`/data/${index}`);
    console.log("Entrada borrada con exito");
  };
  useEffect(getAPIData, []);

  return (
    <div className="billsPage animatedContent">
      <h1>REGISTRO DE FACTURAS</h1>
      <Link to="/nuevo">
        <button className="btn btn-outline-dark btn-lg billsPage--button">
          + Crear nueva entrada
        </button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Consumo (Wh)</th>
            <th scope="col">Precio (€/kWh)</th>
            <th scope="col">Coste por hora (€)</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.fecha}</td>
              <td>{data.hora}</td>
              <td>{data.consumo}</td>
              <td>{data.precio}</td>
              <td>{Math.round(data.coste * 1000000) / 1000000}</td>
              <td>
                <Link to={"/facturas/" + data._id}>
                  <button className="btn btn-outline-secondary btn-sm">
                    Editar
                  </button>
                </Link>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => deleteEntry(data._id)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
