import { Link } from 'react-router-dom';
import Footter from '../../components/footer/footter';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

export default function Login() {

  const baseUrl = 'http://localhost:8080';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();

    //adresa backend metode
    const backendLoginServiceMethodAddress = `${baseUrl}/api/login`;
    //zahtjev request -> http zahtjev -> zaglavlje + tijelo (header + body)
    const httpRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    };

    fetch(backendLoginServiceMethodAddress, httpRequest)
      .then(response => {
        if (response.ok) {
          alert('Logovan si u aplikaciju');
        } else {
          alert('Nisi logovan')
        }
      }).catch(error => {
        alert(`${error}`);
      });
    localStorage.setItem('user', username)
  }

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="usernameInput">Username</label>
                <input
                  onChange={handleUsernameChange}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid username"
                />
              </div>


              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="passwordInput">Password</label>
                <input
                  onChange={handlePasswordChange}
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">

                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <input
                  value="Login"
                  type="submit"
                  className="btn btn-primary btn-lg"
                />

                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <Link to='/register'>
                    <a href="#">Register</a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footter />
    </section>
  )
}

