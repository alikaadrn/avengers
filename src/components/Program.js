import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Header from "./Header"

import gallery1 from "../assets/program/gallery1.jpg"
import gallery2 from "../assets/program/gallery2.jpg"
import foodtruck from "../assets/program/foodtruck.jpg"
import kakakasuh2 from "../assets/program/kakakasuh2.jpg"

const Hero = () => {

    return <div>
        <>
            <Header />
            <div className="hero-program">
                <Container className="flex-program">
                    <hr />
                    <br />
                    <img src={gallery1} alt="img-fluid" class="img-fluid" />
                    <h1>Program Perekrutan Volunteer</h1>
                    <p>Membantumu menemukan komunitas atau organisasi
                        yang dapat menunjang kegiatan sosial yang ingin
                        kamu lakukan. Memudahkan mengakses informasi
                        seputar wilayah, lingkungan sosial, dan masalah sosial
                        yang sedang terjadi di wilayah yang kamu tuju.</p>
                        <br />
                        <hr />
                </Container>
            </div>

            <div className="gallery min-vh- w-100">
                <Container className="program1">
                    <Row>
                        <Col>
                            <h1>Relawan Nusantara Jakarta </h1> <br />
                            <p>Program Kerja <br />
                                Melakukan Pengabdian dengan sasaran penerima pengabdian ialah golongan
                                masyarakat menengah kebawah. Kegiatan pengabdian yang biasa dilakukan
                                adalah sosialisasi soft skill <br />
                                <br /> Wilayah kerja : Jakarta Barat
                            </p>
                            <img src={gallery2} alt="unsplash.com" className="w-10" />
                            <Button variant="light">Join Komunitas</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="foodtruck min-vh-100 w-100">
                <Container>
                    <Row>
                        <Col>
                            <h1>Relawan Foodtruck Berbagi makanan gratis </h1> <br />
                            <p>Program Kerja <br />
                                Mengolah bahan makanan yang dibeli dari pedagang kecil untuk kemudian
                                membagikan makanan tersebut kepada yang membutuhkan seperti anak jalanan,
                                pemulung, dan tuna wisma.
                                <br />
                                <br /> Wilayah kerja : Depok
                            </p>
                            <img src={foodtruck} alt="unsplash.com" className="w-10" />
                            <Button variant="light">Join Komunitas</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="kakakasuh min-vh-100 w-100">
                <Container>
                    <Row>
                        <Col>
                            <h1>Kakak Asuh </h1> <br />
                            <p>Program Kerja <br />
                                Melakukan kegiatan belajar mengajar kepada anak-anak di wilayah 3T agar anak-anak disana mendapat akses pendidikan yang merata. kegiatan ini dilakukan di untuk jenjang pendidikan SD
                                <br />
                                <br /> Wilayah kerja : Bogor
                            </p>
                            <img src={kakakasuh2} alt="unsplash.com" className="w-10" />
                            <Button variant="light">Join Komunitas</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    </div>
};

export default Hero;