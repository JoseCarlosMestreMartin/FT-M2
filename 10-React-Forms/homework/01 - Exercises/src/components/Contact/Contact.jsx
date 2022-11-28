import React from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!Object.values(errors).length){
      alert("Datos completos");
    } else{
      alert("Debes corregir los errores");
    }
      
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          className={errors.name && "warning"}
          onChange={handleChange}
          type="text"
          name="name"
          value={inputs.name}
          placeholder="Escribe tu nombre..."
        />
        <p className="danger">{errors.name}</p>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          className={errors.email && "warning"}
          onChange={handleChange}
          type="text"
          name="email"
          value={inputs.email}
          placeholder="Escribe tu email..."
        />
        <p className="danger">{errors.email}</p>
        <label htmlFor="phone">Teléfono:</label>
        <input
          className={errors.phone && "warning"}
          onChange={handleChange}
          type="number"
          name="phone"
          value={inputs.phone}
          placeholder="Escribe un teléfono..."
        />
        <p className="danger">{errors.phone}</p>
        <label htmlFor="subject">Asunto:</label>
        <input
          className={errors.subject && "warning"}
          onChange={handleChange}
          type="text"
          name="subject"
          value={inputs.subject}
          placeholder="Escribe el asunto..."
        />
        <p className="danger">{errors.subject}</p>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          className={errors.message && "warning"}
          onChange={handleChange}
          type="text"
          name="message"
          value={inputs.message}
          placeholder="Escribe tu mensaje..."
          cols="30"
          rows="10"
        />
        <p className="danger">{errors.message}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export function validate(inputs) {
  let errors = {};
 
  if (inputs.name.length === 0) errors.name = "Se requiere un nombre";
  if (!regexEmail.test(inputs.email))errors.email = "Debe ser un correo electrónico";
  if (inputs.phone <= 0) errors.phone = "Sólo números positivos";
  if (inputs.subject.length === 0) errors.subject = "Se requiere un asunto";
  if (inputs.message.length === 0) errors.message = "Se requiere un mensaje";
  return errors;
}
