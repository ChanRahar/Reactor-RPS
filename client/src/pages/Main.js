import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { MDBContainer, MDBRow, MDBCol, Card, CardBody, CardTitle, Button } from 'mdbreact';
import Img from "../components/Img";

const styles = {
    background: {
        backgroundColor: "rgba(52, 52, 52, 0)"
    }
}

class Main extends Component {



    render() {
        return (
            <div style={styles.background}>
                    <Jumbotron>
                        Play RPS against CPU or Online
                    </Jumbotron>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol className="d-flex justify-content-center">
                                <Card style={{ width: "30rem" }} className="border-primary">
                                    <Img
                                        src="./images/RPS.PNG"
                                        waves
                                    />
                                    <CardBody>
                                        <CardTitle className="text-center">Classic RPS</CardTitle>
                                        <MDBRow>
                                            <MDBCol className="d-flex justify-content-center">
                                                <Button href="/RPS">Single Player</Button>
                                            </MDBCol>
                                            <MDBCol className="d-flex justify-content-center">
                                                <Button href="/RPS_Online">Online 2 Players</Button>
                                            </MDBCol>
                                        </MDBRow>

                                    </CardBody>
                                </Card>
                            </MDBCol>
                            <MDBCol className="d-flex justify-content-center">
                                <Card style={{ width: "30rem" }} className="border-secondary">
                                    <Img
                                        src="./images/RPSLS.jpg"
                                        waves
                                    />
                                    <CardBody>
                                        <CardTitle className="text-center">RPSLS Variation</CardTitle>
                                        <MDBRow>
                                            <MDBCol className="d-flex justify-content-center">
                                                <Button href="/RPSLS">Single Player</Button>
                                            </MDBCol>
                                            <MDBCol className="d-flex justify-content-center">
                                                <Button href="/RPSLS_Online">Online 2 Players</Button>
                                            </MDBCol>
                                        </MDBRow>

                                    </CardBody>
                                </Card>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </div>
                )
            }
        }
        
export default Main;