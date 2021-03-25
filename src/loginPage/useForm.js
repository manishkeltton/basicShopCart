import { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router';
import MainComponent from '../components/MainComponent';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLogged,setIsLogged] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values.email + values.password);
    if(values.email == "mk@gmail.com" && values.password == "12345678"){
      localStorage.setItem("token", "T");
      setIsLogged(true);
    }
    if (event) event.preventDefault();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;