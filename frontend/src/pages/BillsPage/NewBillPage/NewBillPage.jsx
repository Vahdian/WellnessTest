import React from "react";
import { Link } from "react-router-dom";
import { API } from "../../../shared/consts/api.const";
import "../BillPageDetail/BillPageDetail.scss";
import { useForm } from "react-hook-form";

export default function BillPageDetail() {
  const { register, handleSubmit } = useForm();

  function onSubmit(newFactura) {
    API.post("/data", newFactura).then((res) => {
      console.log(newFactura);
    });
  }

  return (
    <div className="billPageDetail animatedContentFaster">
      <img
        src="https://wellnesstg.com/wp-content/themes/wtechgroup/img/logo-Wellness-TechGroup.svg"
        alt="Wellness tech group"
      ></img>
      <h1>NUEVA FACTURA</h1>
      <form className="billPageDetail--form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fecha">FECHA</label>
        <input
          className="billPageDetail--form--input"
          placeholder="YYYY-MM-DD"
          name="fecha"
          {...register("fecha", { required: true })}
        ></input>
        <label htmlForfor="hora">HORA</label>
        <input
          className="billPageDetail--form--input"
          placeholder="HH:MM"
          name="hora"
          {...register("hora", { required: true })}
        ></input>
        <label htmlForfor="consumo">CONSUMO (kWh)</label>
        <input
          className="billPageDetail--form--input"
          placeholder="Consumo (kWh)"
          name="consumo"
          {...register("consumo", { required: true })}
        ></input>
        <label htmlForfor="coste">COSTE POR HORA (€)</label>
        <input
          className="billPageDetail--form--input"
          placeholder="Coste por Hora (€)"
          name="coste"
          {...register("coste", { required: true })}
        ></input>
        <label htmlForfor="precio">PRECIO (€/kWh)</label>
        <input
          className="billPageDetail--form--input"
          placeholder="Precio (€/kWh)"
          name="precio"
          {...register("precio", { required: true })}
        ></input>
        <input
          className="btn btn-outline-secondary btn-lg billPageDetail--form--input"
          value="Crear entrada"
          type="submit"
        ></input>
      </form>
      <Link to="/facturas">
        <button className="btn btn-outline-danger btn-lg">
          Volver a la pagina anterior
        </button>
      </Link>
    </div>
  );
}
