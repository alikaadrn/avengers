import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header"
import Button from "react-bootstrap/Button";

import Dompet from "../assets/kampanye/Dompet.png"
import Vector from "../assets/kampanye/Vector.jpg"
import Bayarzakat from "../assets/kampanye/Bayarzakat.png"
import Calendar from "../assets/kampanye/Calendar.png"
import Favoritecart from "../assets/kampanye/Favoritecart.png"

const Kampanyepage = () => {
    return <div className="Kampanyepage">
        <>
            <Header />
            <Container className="fluid1-kampanye">
                <img src={Dompet} alt="unsplash.com" className="w-10"/>
                <h1>Penggalangan Dana Inisiatif</h1>
                <p>Penggalangan dana untuk program sosial, inisiatif sosial, lingkungan, kesehatan, pendidikan dan kemanusiaan.</p>
                
            </Container>

            <Container className="fluid2-kampanye">
                <img src={Vector} alt="unsplash.com" className="w-10" />
                <h1>Penggalangan Dana untuk Pasien</h1>
                <p>Bantu mereka sembuh dengan cepat</p>
            </Container>

            <Container className="fluid3-kampanye">
                <img src={Bayarzakat} alt="unsplash.com" className="w-10" />
                <h1>Bayar Zakat</h1>
                <p>Bayar zakat untuk mereka yang kurang beruntung </p>
            </Container>

            <Container className="fluid4-kampanye">
                <img src={Calendar} alt="unsplash.com" className="w-10" />
                <h1>Donasi Rutin</h1>
                <p>Sisihkan setiap bulan untuk membantu sesama </p>
            </Container>

            <Container className="fluid5-kampanye">
                <img src={Favoritecart} alt="unsplash.com" className="w-10" />
                <h1>Shop and Donate</h1>
                <p>Bantu usaha Sosial Mereka  </p>
            </Container>
        </>
    </div>
};

export default Kampanyepage;