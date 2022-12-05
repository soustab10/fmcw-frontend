/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';

const PrivateRoute = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const isTokenValid = async () => {
      setIsLoading(true);
      const token = sessionStorage.getItem('tokenID');
      try {
        const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/verify-token', {
          method: 'POST',
          body: JSON.stringify({
            token: token
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();

        if (data.message === 'success') {
          console.log(data);
          setIsValid(true);
          setIsNewUser(data.isNewUser);
        }
      } catch {
        console.log('Error with authentication, login again');
      }

      setIsLoading(false);
    };
    isTokenValid();

  }, []);
  if (props.path === '/register') {
    return (
      <Route
        path={props.path}
        component={isLoading ? Loading : isNewUser && isValid ? props.component : Error}></Route>
    );
  } else if (props.path === '/dashboard') {
    return (
      <Route
        path={props.path}
        component={isLoading ? Loading : !isNewUser && isValid ? props.component : Error}></Route>
    );
  }
};

export default PrivateRoute;
