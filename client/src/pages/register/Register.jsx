import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footter from "../../components/footer/footter";
import { AuthContext } from "../../context/authContext";
import 'bootstrap/dist/css/bootstrap.css'

export default function Register() {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [err, setErr] = useState(null);
  const { register } = useContext(AuthContext)


  const handleInputChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await register(inputs)
      navigate("/")
    } catch (err) {
      setErr(err.response.data)
    }

  }


  return (
    <section
      className="h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: '#eee' }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black"

            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4"
                      onSubmit={handleRegister}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="name">
                            Your Name
                          </label>
                          <input
                            onChange={handleInputChange}
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="surname">
                            Your Surname
                          </label>
                          <input
                            onChange={handleInputChange}
                            type="text"
                            id="surname"
                            name="surname"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="username">
                            Your Username
                          </label>
                          <input
                            onChange={handleInputChange}
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="email">
                            Your Email
                          </label>
                          <input
                            onChange={handleInputChange}
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            onChange={handleInputChange}
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="confirmPassword"
                          >
                            Repeat your password
                          </label>
                          <input
                            onChange={handleInputChange}
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
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

                      <div className="d-flex flex-column gap-4 align-items-center mx-4 mb-3 mb-lg-4">
                        {err && err}
                        <input
                          type="submit"
                          value="Register"
                          className="btn btn-primary btn-lg w-100"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
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
