import { useCallback, useState } from "react";
import { valMessages } from "../constants/valMessages";

export const useFormWithValidation = (inputValues) => {
  const [values, setValues] = useState(inputValues),  
    [errors, setErrors] = useState({}),
    [isValid, setIsValid] = useState(false); 
    
   
     

  const handleChange = (e) => {
    const input = e.target;
    const { name, value } = input;
    const form = input.closest("form");
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(form.checkValidity());
    if (name === "name") {
      input.setCustomValidity("");
      if (!input.validity.valid) {
        input.setCustomValidity(valMessages.name);
      }
    }
    if (name === "email") {
      input.setCustomValidity("");
      if (!input.validity.valid) {
        input.setCustomValidity(valMessages.email);
      }
    } 
    if (name === "phone") {
      function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if(phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
           return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
         3, 
         6,
       )}-${phoneNumber.slice(6, 10)}`;
      }   
      input.setCustomValidity("");      
      if (!input.validity.valid) {
        input.setCustomValidity(valMessages.phone);
      }
      const formattedPhoneNumber = formatPhoneNumber(e.target.value);
      setValues({ ...values, [name]: formattedPhoneNumber});
    }        
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);     
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setValues,
    setIsValid    
  };
};
