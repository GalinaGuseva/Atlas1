import { useCallback, useState, useEffect } from "react";
import { valMessages } from "../constants/valMessages";

export const useFormWithValidation = (inputValues) => {
  const [values, setValues] = useState(inputValues),  
    [errors, setErrors] = useState({}),
    [isValid, setIsValid] = useState(false); 
    
    const handlePaste = e => {
      var input = e.target;      
      const { name, value } = input;     
      setValues({ ...values, [name]: value });      
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            
            if (pastedText && name === "name") {
              input.setCustomValidity("");
              if (!input.validity.valid) {
                input.setCustomValidity(valMessages.name);
              }
            }
            if (pastedText && name === "job") {
              input.setCustomValidity("");
              if (!input.validity.valid) {
                input.setCustomValidity(valMessages.job);
              }
            }
            if (pastedText && name === "email") {
              input.setCustomValidity("");
              if (!input.validity.valid) {
                input.setCustomValidity(valMessages.email);
              }
            }           
            if (pastedText && name === "phone") {
              input.setCustomValidity("");
              if (!input.validity.valid) {
                input.setCustomValidity(valMessages.phone);
              }
            }  
        }
    };
  
    useEffect(() => {
      const handlePasteAnywhere = e => {
        console.log(e.clipboardData.getData('text'));
      };
  
      window.addEventListener('paste', handlePasteAnywhere);
  
      return () => {
        window.removeEventListener('paste', handlePasteAnywhere);
      };
    }, []);
  

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
    if (name === "job") {
      input.setCustomValidity("");
      if (!input.validity.valid) {
        input.setCustomValidity(valMessages.job);
      }
    }
    if (name === "email") {
      input.setCustomValidity("");
      if (!input.validity.valid) {
        input.setCustomValidity(valMessages.email);
      }
    }  
   
    if (name === "phone") {
      input.setCustomValidity("");
      if (!input.validity.valid) {
        input.setCustomValidity(valMessages.phone);
      }
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
    handlePaste,
    resetForm,
    setValues,
    setIsValid    
  };
};
