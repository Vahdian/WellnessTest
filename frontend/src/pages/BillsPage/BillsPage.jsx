import React, { useState, useEffect } from "react";
import { API } from "../../shared/consts/api.const";

export default function LandingPage() {
  const [data, setData] = useState([]);

  const getAPIData = () => {
    API.get("/data").then((res) => {
      console.log(res);
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
    <div>
      <table className="table table-dark table-striped">
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
            <tr>
              <td>{data.fecha}</td>
              <td>{data.hora}</td>
              <td>{data.consumo}</td>
              <td>{data.precio}</td>
              <td>{Math.round(data.coste * 1000000) / 1000000}</td>
              <td>
                <button>Editar</button>
                <button onClick={() => deleteEntry(data._id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
