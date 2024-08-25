import React, { createContext, useState } from 'react';

// Create the context
export const FormContext = createContext();

// Create the provider component
export const FormProvider = ({ children }) => {
  // Initialize state with default values
  const [formData, setFormData] = useState({
    name: '',
    regNumber: '',
    email: '',
    date: '',
    outTime: '',
    returnTime: '',
    purpose: '',
    mailDate: '',
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
