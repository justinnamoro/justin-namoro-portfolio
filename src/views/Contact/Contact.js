import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar";
import {motion} from 'framer-motion';
import {useForm} from '@formspree/react';
import Footer from "components/Footer/Footer.js";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const pageTransition = {
    in:{
        opacity: 1,
        y:0
    },
    out:{
        opacity: 0,
        y:-100
    }
}

export default function Contact() {

    // const [state, handleSubmit] = useForm('https://formspree.io/f/mrgrqlrl');
    // if (state.succeeded) {
    //   return <div>Thank you! We will get back to you shortly!</div>;
    // }

  return (
    <>
    <div className="section section-signup">
      <IndexNavbar/>

      <Container>

        <motion.div
          className="contact-page"
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
          style={{ maxWidth: 620, margin: "50px auto 0" }}
        >
          <div
            style={{
              padding: "clamp(24px, 5vw, 48px)",
              borderRadius: 20,
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <h2 style={{ marginBottom: 8 }}>Get in touch</h2>
            <p style={{ marginBottom: 28, opacity: 0.8 }}>
              Questions or ideas? Send them right here, and I'll get back to you.
            </p>

            <form action="https://formspree.io/f/mrgrqlrl" method="POST">
              <FormGroup>
                <Label for="contact-email">Email address</Label>
                <Input
                  id="contact-email"
                  placeholder="you@example.com"
                  type="email"
                  name="_replyto"
                  autoComplete="email"
                  required
                  style={{
                    minHeight: 48,
                    color: "inherit",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    borderRadius: 10,
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label for="contact-message">Message</Label>
                <Input
                  id="contact-message"
                  type="textarea"
                  rows="5"
                  placeholder="How can I help?"
                  name="message"
                  required
                  minLength={10}
                  style={{
                    color: "inherit",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    borderRadius: 10,
                    resize: "vertical",
                  }}
                />
              </FormGroup>

              <Button
                type="submit"
                color="primary"
                className="btn-round"
                style={{ minWidth: 140, marginTop: 8 }}
              >
                Send message
              </Button>
            </form>
          </div>
        </motion.div>


        {/* <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            <h3 className="display-3 text-white">
              A beautiful Black Design{" "}
              <span className="text-white">completed with examples</span>
            </h3>
            <p className="text-white mb-3">
              The Design System comes with four pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go. More importantly, looking at them will give you a picture
              of what you can built with this powerful Bootstrap 4 Design
              System.
            </p>
            <div className="btn-wrapper">
              <Button color="primary" to="register-page" tag={Link}>
                Register Page
              </Button>
            </div>
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <Card className="card-register">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require("assets/img/square-purple-1.png").default}
                />
                <CardTitle tag="h4">Register</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="text"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-round" color="primary" size="lg">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </div>
    {/* <Footer/> */}
    </>
  );
}
