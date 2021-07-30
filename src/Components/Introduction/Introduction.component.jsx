import React from 'react'
import "./Introduction.css";


import girl from "../../assets/image2vector.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
const Introduction = () => {
    return (
        <div className="main-container" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Container>
                <Row>
                    <Col>
                        <div className="profile-container" >
                            <h1><b>Hi, I'm Kausar</b>

                                <span className="hand" role="img" aria-label="Hand waving">
                                    👋
                                </span>

                            </h1>

                            <div>
                                <p>
                                    A passionate Frontend Software Developer 🚀 having an experience of building Web applications with
                                    JavaScript / Reactjs / Nodejs.
                                </p>
                            </div>
                            <div className="button-container">
                                <Button variant="outline-light">CONTACT ME!!</Button>{' '}
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={girl} className="responsive_image img2" width="500vh" height="500vh" alt="kausar" />
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Introduction;
