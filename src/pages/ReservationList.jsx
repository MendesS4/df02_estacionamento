import React from "react";
import { useGlobal } from "../provider/GlobalProvider";

const ReservationList = () => {
  const {reservations} = useGlobal();

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <table className="reservationList">
        <thead>
          <tr>
            <th className="first-element">Placa</th>
            <th>Proprietário</th>
            <th>Numero do apartamento</th>
            <th>Bloco</th>
            <th>Modelo</th>
            <th>Cor</th>
            <th>Numero da vaga</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.placa}</td>
              <td>{reservation.dono}</td>
              <td>{reservation.numeroApartamento}</td>
              <td>{reservation.bloco}</td>
              <td>{reservation.modelo}</td>
              <td>{reservation.cor}</td>
              <td>{reservation.numeroVaga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
