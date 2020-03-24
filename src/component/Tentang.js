import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Tentang.css';

function Tentang(){
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h3 className="text-center tentang">Tentang Saya</h3>                         
                        <hr />
                        <br />
                    </Col>
                    <Row className="text-center">
                        <Col>
                             <p clasName="lead">Saya Lahir <strong>Bandung, 14 September 2002</strong> seorang mahasiswa di sekolah Guna Dharma Nusantara dan saya mengambil jurusan, Teknik Komputer dan jaringan <strong>TKJ</strong> dan ini adalah website profile saya :)</p>
                        </Col>
                        <Col>
                            <p>profile ini saya buat karena ke-gabutan saya ketika lockdown dirumah karena sedang terjadi nya wabah virus corona / covid19, Dari pada gabut mending saya membuat profile website sekalian belajar.</p>
                        </Col>
                    </Row>
                
                </Row>
            </Container>
        </div>
    )
}
export default Tentang;