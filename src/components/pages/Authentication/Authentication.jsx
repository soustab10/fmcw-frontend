/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import Classes from './Authentication.module.css';

function Authentication() {

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null
  );
  const [IsnewUser, setIsNewUser] = useState(true);

  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    console.log(googleData);
    const email = googleData.profileObj.email;
    const name = googleData.profileObj.name;
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    try {
      const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/google-login', {
        method: 'POST',
        body: JSON.stringify({
          token: googleData.tokenId
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('tokenID', googleData.tokenId);

      const isNewUser = data.user.newUser;

      sessionStorage.setItem('isNewUser', isNewUser);
      if (isNewUser) {
        window.location.href = '/register';
      } else {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      alert('Unable to login using Google, Try again later!');
    }
  };

  return (
    <div className={Classes.auth_section}>
      <div className={Classes.authenticateButton}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy="single_host_origin"></GoogleLogin>
      </div>
    </div>
  );
}

export default Authentication;
