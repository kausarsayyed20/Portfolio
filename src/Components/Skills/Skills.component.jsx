
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import working from "../../assets/working.svg";
class Skills extends Component {
    render() {
        return (
            <div>
                <Container className="main_container">
                    <h1>SKILLS</h1><br />
                    <Row>
                        <Col className="working-image">
                            <img src={working} className="working_img img2" alt="working" />
                        </Col>
                        <Col className="langauge-container">

                            <div className="language">

                                <img alt="java" src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png" />
                                <img alt="javascript" src="https://img.icons8.com/color/96/000000/javascript--v1.png" />
                                <img alt="react" src="https://img.icons8.com/plasticine/96/000000/react.png" />
                                <img alt="html" src="https://img.icons8.com/color/96/000000/html-5--v1.png" />
                                <img alt="css" src="https://img.icons8.com/color/96/000000/css3.png" />
                                <img alt="firebase" src="https://img.icons8.com/color/96/000000/firebase.png" />
                                <img alt="mysql" src="https://img.icons8.com/color/96/000000/mysql-logo.png" style={{ padding: 15 }} />
                                <img alt="npm" src="https://img.icons8.com/color/96/000000/npm.png" />
                                <img alt="git" src="https://img.icons8.com/color/96/000000/git.png" />
                                <img alt="python" src="https://img.icons8.com/color/96/000000/python.png" />

                            </div>


                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }

}

export default Skills;