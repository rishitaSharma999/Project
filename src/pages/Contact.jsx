import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Contact = () => {
  const formInitialDetails = {
    Name: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  useEffect(() => {
    console.log(formDetails); // log the updated form details to the console
  }, [formDetails]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormDetails({...formDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("handleSubmit called");
    e.preventDefault();
    setButtonText("Sending...");

    const timeout = 5000; // 5 seconds
  const controller = new AbortController();
  const signal = controller.signal;
    try {
        const response = await fetch("http://127.0.0.1:5174/contact", {
            
            method: "POST",
            
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
          
          });
         
      
      
      const result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent Successfully" });
        console.log("sent successfully");
      }  else {
        console.log("not sent");
        setStatus({ success: false, message: "Something went wrong, please try again later" });
      }
      setTimeout(() => {
        controller.abort();
      }, timeout);
    } catch (error) {
      console.log(error);
      setStatus({ success: false, message: "Error sending message: " + error.message });
    }
   
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="jane doe"
            name="Name"
            value={formDetails.Name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={formDetails.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formDetails.message}
            onChange={handleInputChange}
          />
          <Button variant="success" type="submit">{buttonText}</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Contact;