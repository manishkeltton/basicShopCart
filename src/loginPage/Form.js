import React, { useEffect, useState } from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';
import { useAuth0 } from '@auth0/auth0-react'; 
import { GoogleLogin } from 'react-google-login';
import { Redirect, useHistory } from 'react-router';
import MainComponent from '../components/MainComponent';

const clientId = 'process.env.REACT_APP_AUTH0_CLIENT_ID.apps.googleusercontent.com'; 

const Form = () => {

  const { loginWithRedirect } = useAuth0();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(()=>{
    setIsLogged(true);
  },[])

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <div>
    {isLogged && <MainComponent />}
    {isLogged || <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field"><br/><br/>
                <label className="label">Email Address</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth mt-1" onClick={()=>setIsLogged(true)}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>}
    </div>
  );
};

export default Form;
