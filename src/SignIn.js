import React, { Fragment, useState, useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import { Grid, Row, Col } from "react-flexbox-grid";
import Input from "./components/Input";
import validate from "./utils/validator";
import { Link } from "react-router-dom";
import Logo from "./assets/images/logo.svg";

const SignIn = ({ history }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const [formIsValid, setFormValid] = useState(false);
  const [formFields, setFormFields] = useState({
    email: {
      value: '',
      label: 'Email*',
      valid: false,
      touched: false,
      size: "lg",
      type: "email",
      cssclass: "signin__input",
      validationRules: {
        isRequired: true,
        isEmail: true
      }
    },
    password: {
      value: '',
      label: 'Password*',
      valid: false,
      touched: false,
      size: "lg",
      type: "password",
      cssclass: "signin__input",
      validationRules: {
        isRequired: true,
        minLength: 6
      }
    },

  });

  const handleSignin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          history.push("/comingsoon");
        } catch (error) {
        setErrorMessage(error.message);
      }
    },
    [history]
  );

  const changeHandler = useCallback(event => {
    setErrorMessage("");

    const name = event.target.name;
    const value = event.target.value;
    let formIsValid = true;

    setFormFields(prevUserText => {

      const formFields = {
        ...prevUserText
      };
      const currentField = {
        ...formFields[name]
      };
      currentField.value = value;
      currentField.touched = true;
      currentField.valid = validate(value, currentField.validationRules);

      formFields[name] = currentField;
      let formIsValid = true;
      for (let field in formFields) {
        formIsValid = formFields[field].valid && formIsValid;
      }
      return formFields;
    });
    setFormValid(formIsValid);

  }, []);
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <section className="signin">
      <Link  className="signin__logo-wrapper" to="/">
          <img className="signin__logo img--responsive" src={Logo} />
        </Link>
        <h2>Sign In</h2>

        <div className="signin__card">
          <form onSubmit={handleSignin}>
            <Grid>
              <Row>
                <Col xs={12}  >
                  <Input name="email"
                    label={formFields.email.label}
                    size={formFields.email.size}
                    cssclass={formFields.email.cssclass}
                    touched={formFields.email.touched}
                    valid={formFields.email.valid}
                    value={formFields.email.value}
                    changeHandler={changeHandler}
                    type={formFields.email.type} />
                </Col>
                <Col xs={12}>
                  <Input name="password"
                    label={formFields.password.label}
                    size={formFields.password.size}
                    cssclass={formFields.password.cssclass}
                    touched={formFields.password.touched}
                    valid={formFields.password.valid}
                    value={formFields.password.value}
                    changeHandler={changeHandler}
                    type={formFields.password.type} />
                </Col>

              </Row>
              <Row>
                <Col xs={12}  >
                  <button type="submit" className="signin__submit btn btn--lg btn--block btn--primary"
                    disabled={!formIsValid}>
                    Submit
                  </button>
                </Col>
              </Row>
              <Row>
                <Col xs={12}  >
                  <p className="signin__signup">Don't have an account? <Link className="signin__signup-link" to="signup">Sign Up</Link></p>
                </Col>
              </Row>
              {errorMessage && <Row>
                <Col xs={12}  >
                  <p className="signin__error">{errorMessage}</p>
                </Col>
              </Row>}
            </Grid>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default withRouter(SignIn);
