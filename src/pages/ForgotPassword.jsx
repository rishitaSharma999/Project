import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

import { getPasswordResetToken } from "../services/operations/authapi";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Spinner />
      </div>
      ) : (
        <div>
          <Container>
            <Row className="justify-content-center align-items-center h-100 mt-5">
              <Col xl={5}>
                <h1
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: "rgb(28 46 52);",
                    textShadow: "2px 2px 4px #ccccff",
                  }}
                >
                  
                  {!emailSent ? "Reset your password" : "Check email"}
                </h1>
                <Form onSubmit={handleOnSubmit}>
                  {!emailSent && ( <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                    />
                  </Form.Group>
                )}
                 

                  <Button
                    variant="success"
                    className="button-success"
                    type="submit"
                  >
                    {!emailSent ? "Submit" : "Resend Email"}
                  </Button>
                </Form>
                <Link to="/login">
                  <p className="flex items-center gap-x-2 text-blue-100">
                    <BiArrowBack /> Back To Login
                  </p>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
