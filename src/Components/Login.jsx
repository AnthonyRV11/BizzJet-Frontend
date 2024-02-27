import { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form style={{ backgroundColor: 'orange', padding: '20px', borderRadius: '20px', width: '450px', height: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
        <h1 style={{ color: '#fff', textAlign: 'center', fontSize: '2em', marginBottom: '20px' }}><FontAwesomeIcon icon={faUser} style={{ color: '#fff', fontSize: '1.5em' }} /></h1>
        <br />
        <br />
        <div style={{ display: 'flex', alignItems: 'center', width: '80%', marginBottom: '20px' }}>
          <input type="email" id="username" name="username" placeholder='Email' style={{ width: '100%', borderRadius: '20px', padding: '10px', fontSize: '1em', border: '1px solid #ddd' }} />
          <style>
            {`
              #username::placeholder {
                color: orange;
                text-align: center;
                flex: 1;
              }
            `}
          </style>
        </div>
        <br />
        <div style={{ display: 'flex', alignItems: 'center', width: '80%', marginBottom: '20px' }}>
          <input type="password" id="password" name="password" placeholder='**********' style={{ width: '100%', borderRadius: '20px', padding: '10px', fontSize: '1em', border: '1px solid #ddd' }} />
          <style>
            {`
              #password::placeholder {
                color: orange;
                text-align: center;
                flex: 1;
              }
            `}
          </style>
        </div>
        <div className='container' style={{ display: 'flex', justifyContent: 'space-between', width: '80%', color: '#fff', marginBottom: '20px' }}>
          <div>
            <a href="" style={{ color: '#fff', textDecoration: 'none', fontSize:'20px' }}>Register</a>
          </div>
          <div>
            <a href="" style={{ color: '#fff', textDecoration: 'none', fontSize:'20px' }}>Forgot password?</a>
          </div>
        </div>
        <button type="submit" style={{ backgroundColor: '#00abf0', color: '#fff', padding: '10px', width: '40%', borderRadius: '20px', cursor: 'pointer', fontSize: '1.3em', border: 'none', fontWeight: 'bold', marginTop: '50px' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
