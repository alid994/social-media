import Footter from './footter';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';

function Login () {

  const baseUrl = 'http://localhost:8080';
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsernameChange(e) {
      setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
      setPassword(e.target.value);
    }

  function handleLogin(event, username, password){
    event.preventDefault();
    
    //adresa backend metode
    const backendLoginServiceMethodAddress = `${baseUrl}/api/login`;
    //zahtjev request -> http zahtjev -> zaglavlje + tijelo (header + body)
    const httpRequest = {
        method: 'POST', 
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    };

    fetch(backendLoginServiceMethodAddress, httpRequest)
    .then(response =>{
        if(response.ok){
            alert('Logovan si u aplikaciju');
        }else{
            alert('Nisi logovan')
        }
    }).catch(error =>{
        alert(`${error}`);
    });
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
              <div
                className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
              >
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="usernameInput">Username</label>
                <input
                  handleUsernameChange={handleUsernameChange}
                  type="text"
                  id="usernameInput"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid username"
                />
              </div>

              
              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="passwordInput">Password</label>
                <input
                  handlePasswordChange={handlePasswordChange}
                  type="password"
                  id="passwordInput"
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
                  //style={{paddingLeft: 2.5 + 'rem'}, {paddingRight: 2.5 + 'rem'}}
                />
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="register.html" className="link-danger">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footter/>
    </section>
    )
}

export default Login;