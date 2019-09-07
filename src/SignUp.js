import { withRouter } from "react-router";
import app, { firestore } from "./base";
import React, { useCallback, useState, Component, Fragment } from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import Input from "./components/Input";
import validate from "./utils/validator";
import { Link } from "react-router-dom";
import Logo from "./assets/images/logo.svg";
const SignUp = ({ history }) => {
  const [formIsValid, setFormValid] = useState(false);
  const [formFields, setFormFields] = useState({
    firstname: {
      value: '',
      label: 'First Name*',
      valid: false,
      touched: false,
      size: "lg",
      type: "text",
      cssclass: "signup__input",
      validationRules: {
        isRequired: true
      }
    },
    lastname: {
      value: '',
      label: 'Last Name*',
      valid: false,
      touched: false,
      size: "lg",
      type: "text",
      cssclass: "signup__input",
      validationRules: {
        isRequired: true
      }
    },
    email: {
      value: '',
      label: 'Email*',
      valid: false,
      touched: false,
      size: "lg",
      type: "email",
      cssclass: "signup__input",
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
      cssclass: "signup__input",
      validationRules: {
        isRequired: true,
        minLength: 6
      }
    },
    confirmPassword: {
      value: '',
      label: 'Confirm Password*',
      valid: false,
      touched: false,
      size: "lg",
      type: "password",
      cssclass: "signup__input",
      validationRules: {
        isRequired: true,
        minLength: 6
      }
    }
  });

  const changeHandler = useCallback(event => {

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


  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, firstname, lastname } = event.target.elements;
    try {
      let { user } = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      await firestore.collection('users').doc(user.uid).set({
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value
      });
      history.push("/");
    } catch (error) {
      alert(error);
    }

  }, [history]);



  return (
    <Fragment>
      <section className="signup">
        <Link  className="signup__logo-wrapper" to="/">
          <img className="signup__logo img--responsive" src={Logo} />
        </Link>
        <h2 className="signup__header">Sign Up</h2>
        <div className="signup__card">
          <form onSubmit={handleSignUp}>
            <Grid>
              <Row>
                <Col xs={12} md={6}>
                  <Input name="firstname"
                    label={formFields.firstname.label}
                    size={formFields.firstname.size}
                    cssclass={formFields.firstname.cssclass}
                    touched={formFields.firstname.touched}
                    valid={formFields.firstname.valid}
                    value={formFields.firstname.value}
                    changeHandler={changeHandler}
                    type={formFields.firstname.type} />
                </Col>

                <Col xs={12} md={6}>
                  <Input name="lastname"
                    label={formFields.lastname.label}
                    size={formFields.lastname.size}
                    cssclass={formFields.lastname.cssclass}
                    touched={formFields.lastname.touched}
                    valid={formFields.lastname.valid}
                    value={formFields.lastname.value}
                    changeHandler={changeHandler}
                    type={formFields.lastname.type} />
                </Col>
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
                <Col xs={12}  >
                  <Input name="confirmPassword"
                    label={formFields.confirmPassword.label}
                    size={formFields.confirmPassword.size}
                    cssclass={formFields.confirmPassword.cssclass}
                    touched={formFields.confirmPassword.touched}
                    valid={formFields.confirmPassword.valid}
                    value={formFields.confirmPassword.value}
                    changeHandler={changeHandler}
                    type={formFields.confirmPassword.type} />
                </Col>

              </Row>
              <Row>
                <Col xs={12}  >
                  <button type="submit" className="signup__submit btn btn--lg btn--block btn--primary"
                    disabled={!formIsValid}>
                    Submit
                  </button>
                </Col>
              </Row>
              <Row>
                <Col xs={12}  >
                  <p className="signup__signin">Already have an account? <Link className="signup__signin-link" to="signin">Sign In</Link></p>
                </Col>
              </Row>
            </Grid>

          </form>
        </div>

      </section>
    </Fragment>
  );
};

export default withRouter(SignUp);
