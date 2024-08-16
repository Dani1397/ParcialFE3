import PropTypes from "prop-types";

function Card({ name, idNumber, age, symptoms }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-xl font-bold">Información del Paciente</h2>
      <p>
        <strong>Nombre:</strong> {name}
      </p>
      <p>
        <strong>N° Documento:</strong> {idNumber}
      </p>
      <p>
        <strong>Edad:</strong> {age}
      </p>
      <p>
        <strong>Síntomas:</strong> {symptoms}
      </p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  idNumber: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  symptoms: PropTypes.string.isRequired,
};

export default Card;
