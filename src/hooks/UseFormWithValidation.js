import { useCallback, useState, useEffect } from "react";

export const useFormWithValidation = (inputValues) => {
  const [values, setValues] = useState(inputValues),
    [errors, setErrors] = useState({}),
    [isValid, setIsValid] = useState(false),    
    [pasted, setPasted] = useState('');
    
    const handlePaste = e => {      
      const input = e.target; 
      const { name, value } = input;
      const form = input.closest("form");       
        if (pasted) {
          setValues({ ...values, [name]: value });
          setErrors({ ...errors, [name]: input.validationMessage });
          setIsValid(form.checkValidity());          
        }
    }; 
    
    useEffect(() => {
      const handlePasteAnywhere = e => {
        setPasted(e.clipboardData.getData('text'));
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