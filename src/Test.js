import React, { useContext } from 'react';
import "./mycss.css";
import { FormContext } from './FormContext';
import {useNavigate} from 'react-router-dom'

function Test() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to a server or updating state.
    console.log(formData);
    navigate('/Main')
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter All The Details To Create Fake Mail</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="regNumber"
        placeholder="Reg Number"
        value={formData.regNumber}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="time"
        name="outTime"
        placeholder="Out Time"
        value={formData.outTime}
        onChange={handleChange}
      />
      <input
        type="time"
        name="returnTime"
        placeholder="Return Time"
        value={formData.returnTime}
        onChange={handleChange}
      />
      <textarea
        name="purpose"
        cols="20"
        rows="5"
        placeholder="Purpose"
        value={formData.purpose}
        onChange={handleChange}
      />
      <input
        type="text"
        name="mailDate"
        placeholder="Mail Sended Date"
        value={formData.mailDate}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Test;
