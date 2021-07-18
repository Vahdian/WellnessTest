import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../../../shared/consts/api.const";
import "./BillPageDetail.scss";
import { useForm } from "react-hook-form";
import { Bar } from "react-chartjs-2";

export default function BillPageDetail() {
  const { id } = useParams();

  const [detail, setDetail] = useState([]);

  const getAPIDataDetail = () => {
    API.get("data/" + id).then((res) => {
      setDetail(res.data);
    });
  };

  useEffect(getAPIDataDetail, []);

  const { register, handleSubmit } = useForm();

  function onSubmit(facturaEditada) {
    console.log(facturaEditada);
    API.put("data/" + id, facturaEditada).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div>
      <div className="billPageDetail">
        <img
          src="https://wellnesstg.com/wp-content/themes/wtechgroup/img/logo-Wellness-TechGroup.svg"
          alt="Wellness tech group"
        ></img>
        <h1>EDIT BILL DETAILS</h1>
        <form
          className="billPageDetail--form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="fecha">FECHA</label>
          <input
            className="billPageDetail--form--input"
            placeholder={detail.fecha}
            name="fecha"
            {...register("fecha", { required: true })}
          ></input>
          <label htmlForfor="hora">HORA</label>
          <input
            className="billPageDetail--form--input"
            placeholder={detail.hora}
            name="hora"
            {...register("hora", { required: true })}
          ></input>
          <label htmlForfor="consumo">CONSUMO (kWh)</label>
          <input
            className="billPageDetail--form--input"
            placeholder={detail.consumo}
            name="consumo"
            {...register("consumo", { required: true })}
          ></input>
          <label htmlForfor="coste">COSTE POR HORA (€)</label>
          <input
            className="billPageDetail--form--input"
            placeholder={detail.coste}
            name="coste"
            {...register("coste", { required: true })}
          ></input>
          <label htmlForfor="precio">PRECIO (€/kWh)</label>
          <input
            className="billPageDetail--form--input"
            placeholder={detail.precio}
            name="precio"
            {...register("precio", { required: true })}
          ></input>
          <input
            className="btn btn-outline-secondary btn-lg billPageDetail--form--input"
            placeholder="SUBMIT CHANGES"
            type="submit"
          ></input>
        </form>
        <Link to="/facturas">
          <button className="btn btn-outline-danger btn-lg">
            Back to the main page
          </button>
        </Link>
      </div>
      <div className="container">
        <Bar
          data={{
            labels: ["Precio (€/kWh)"],
            datasets: [
              {
                label: `Precio (€/kWh) del ${detail.fecha}`,
                data: [detail.precio],
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(153, 102, 255, 1)"],
                borderWidth: 2,
              },
              {
                label: `Precio (€/kWh) dia anterior`,
                data: [0.087],
                backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                borderColor: ["rgba(153, 102, 255, 1)"],
                borderWidth: 2,
              },
            ],
          }}
          height={2}
          width={10}
        ></Bar>
      </div>
    </div>
  );
}
