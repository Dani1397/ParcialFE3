import { useState } from "react";
import Card from "./Components/Card";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    age: "",
    symptoms: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    if (
      !formData.name ||
      !formData.idNumber ||
      !formData.age ||
      !formData.symptoms
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (isNaN(formData.age) || formData.age <= 0) {
      setError("La edad debe ser un número positivo");
      return;
    }

    console.log(formData);
  };

  return (
    <div className="md:w-auto lg:w-screen mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="idNumber" className="text-sm uppercase font-bold">
            N° Documento
          </label>
          <input
            id="idNumber"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="N° Documento del Paciente"
            value={formData.idNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="age" className="text-sm uppercase font-bold">
            Edad
          </label>
          <input
            id="age"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Edad del Paciente"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3 border border-gray-100"
            placeholder="Síntomas del Paciente"
            value={formData.symptoms}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col items-center">
          <input
            type="submit"
            className="bg-indigo-600 w-auto rounded-md p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value="Guardar Paciente"
          />

          {error && <p className="bg-red-300 text-red-600 font-bold rounded-md py-5 px-5 mt-5">{error}</p>}
        </div>
      </form>

      <Card {...formData} />
    </div>
  );
}

export default App;
