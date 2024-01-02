import { useState } from "react";
import { Link } from "react-router-dom";
import Footter from '../../components/footer/footter';

export default function Register() {
  const baseUrl = "http://localhost:8080/api";
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }

  function handleRegister(event) {
    event.preventDefault();

    if (password != confirmPassword) {
      document.getElementById("confirmLabelMessage").innerHTML =
        "Jednostavno moraš unijesti 2x isti password";
    } else {
      document.getElementById("confirmLabelMessage").innerHTML = "";
      submitRegisterData(name, surname, username, email, password);
    }
  }

  function submitRegisterData(name, surname, username, email, password) {
    //zahtjev ili request -> header + body (zaglavlje + tijelo)
    const registerRequestParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        username,
        email,
        password,
      }),
    };
    //adresu na koju šaljemo zahtjev
    const urlAddress = `${baseUrl}/register`;
    //šaljemo podatke na servis /register
    fetch(urlAddress, registerRequestParams)
      .then((response) => {
        if (response.ok) {
          alert("Uspješno registrovan");
        } else {
          alert("Neuspješno registrovan");
        }
      })
      .catch((error) => {
        alert(`${error}`);
      });
  }

  return (
    <section
      className="h-100"
      style={{ backgroundColor: '#eee' }}
    >
      <div className="container h-50">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black"
              style={{ bordeRadius: 25 + 'px' }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={handleRegister}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="nameInput">
                            Your Name
                          </label>
                          <input
                            onChange={handleNameChange}
                            type="text"
                            id="nameInput"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="surnameInput">
                            Your Surname
                          </label>
                          <input
                            onChange={handleSurnameChange}
                            type="text"
                            id="surnameInput"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="usernameInput">
                            Your Username
                          </label>
                          <input
                            onChange={handleUsernameChange}
                            type="text"
                            id="usernameInput"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="emailInput">
                            Your Email
                          </label>
                          <input
                            onChange={handleEmailChange}
                            type="email"
                            id="emailInput"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="passwordInput">
                            Password
                          </label>
                          <input
                            onChange={handlePasswordChange}
                            type="password"
                            id="passwordInput"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="confirmPasswordInput"
                          >
                            Repeat your password
                          </label>
                          <input
                            onChange={handleConfirmPasswordChange}
                            type="password"
                            id="confirmPasswordInput"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <label
                          id="confirmLabelMessage"
                          className="text-danger"
                        ></label>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          If you have account. Please check <Link to={'/login'}><a href="#">
                            login page</a></Link>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <input
                          type="submit"
                          value="Register"
                          className="btn btn-primary btn-lg"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footter />
    </section>
  );
}
