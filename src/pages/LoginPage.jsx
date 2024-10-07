import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple2.png";
import { useState, useContext } from "react";
import { AuthContext } from "../utilities";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <section className="login">
      <Form className="custom-form">
        <h3>Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn w-100">
          Submit
        </Button>
        <div className="or">
          <div className="hline"></div>
          <p>Or</p>
          <div className="hline"></div>
        </div>
        <div className="social-links">
          <a href="#" id="google">
            <img src={google} />
          </a>
          <a href="#" id="facebook">
            <img src={facebook} />
          </a>
          <a href="#" id="github">
            <img src={apple} />
          </a>
        </div>

        <p id="go-to-signup">
          <Link to="/signup">Don't have an account?</Link>
        </p>
      </Form>
    </section>
  );
}

export default LoginPage;
