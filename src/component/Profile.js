import React from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
function Profile(){
        return(
            <div>
                {/* Jumbotron */}
                <Jumbotron fluid>
                    <Container>
                    <Row>
                    <Col xs={6} md={4}>
                        <Image src="images/profile.jpg" className="profile__me" thumbnail/>
                        <br />
                    </Col>
                    </Row>
                    <h1 className="text-center">Ustami Razib</h1>
                    <p className="lead text-center">
                        Mahasiswa | Javascript | Editing
                    </p>
                    </Container> 
                </Jumbotron>
            </div>
        )

}
export default Profile;