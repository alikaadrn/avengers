import React from "react";
import { Button, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Header from "./Header"

import artikel1 from "../assets/artikel/artikel1.png"
import artikel2 from "../assets/artikel/artikel2.png"
import artikel3 from "../assets/artikel/artikel3.jpg"
import artikel4 from "../assets/artikel/artikel4.jpg"

const Artikelpage = () => {
    return <div>
        <>
            <Header />
            <Container className="flex-artikel">
                <h1 class="text-center">Artikel</h1>
                <img src={artikel1} alt="img-fluid" className="img-fluid" />
            </Container>

            <Container className="flex-top-artikel">
                <h5>Bencana gempa di Cianjur</h5>
                <p>Gempa berkekuatan 5,6 magnitudo mengguncang Kabupaten Cianjur, Jawa Barat. Guncangan gempa ini terasa hingga ke wilayah Jakarta dan sekitarnya Setidaknya dalam bencana ini dikabarkan 268 jiwa meninggal dunia, 1.083 lainnya luka-luka, 58.362 jiwa mengungsi di beberapa titik, dan 22.198 unit bangunan infrastruktur seperti rumah warga, tempat ibadah, sekolah, jembatan, rumah sakit, dan fasilitas umum lainnya mengalami kerusakan. Mari kita doakan para penyintas gempa agar mereka diberikan kesabaran dalam menghadapi bencana gempa yang terjadi, dan kita semua dapat berkontribusi menolong penyintas dengan memberikan donasi terbaik.</p>
                <Button variant="light">Selengkapnya</Button>
            </Container>

            <Container className="flex1">
                <h5>Artikel Lainnya</h5>
                <hr />
            </Container>


            <Container className="flex2-artikel">
                <img src={artikel2} alt="img-fluid" className="w-10" />
                <h5>Membantu anak dan remaja menjadi yang terbaik sesuai kemampuan mereka</h5>

                <p>Anak dan remaja yang berasal dari keluarga miskin, penyandang disabilitas dan mereka yang tinggal di daerah terpencil dan tertinggal di negara ini paling berisiko putus sekolah. Remaja usia sekolah menengah pertama (13 - 15 tahun) dari rumah tangga termiskin, lima kali lebih besar kemungkinannya untuk putus sekolahjika dibandingkan dengan remaja dari rumah tangga terkaya. Secara geografis, angka anak tidak sekolah (ATS) berkisar dari 1,3 persen di Yogyakarta - daerah yang relatif makmur - hingga 20,7 persen di Papua - provinsi paling timur dan termiskin di Indonesia (Susenas 2020).</p>
                <Button variant="light">Selengkapnya</Button>
            </Container>
<br />

            <Container className="flex3-artikel">
                <img src={artikel3} alt="img-fluid" className="w-10" />
                <h5>Desa Ciburayut Krisis SDM Laki-Laki </h5>
                <p>Suasana di Kampung Janda sepintas sama seperti kampung biasanya, banyak warga yang melakukan aktifitas di sekitar rumahnya. Namun saat siang hari, di Kampung Janda ini, aktifitas warganya lebih didominasi oleh para perempuan dan anak-anak. Sementara para suami dan anak laki-lakinya yang sudah besar, jarang terlihat karena sebagian besar sedang bekerja di galian pasir, di atas bukit. Beberapa, tidak memiliki suami karena suaminya meninggal, atau karena cerai.</p>
                <Button variant="light">Selengkapnya</Button>
            </Container>
            
<br />
            <Container className="flex4-artikel">
                <img src={artikel4} alt="img-fluid" className="w-10" />
                <h5>Pengaplikasian Ekonomi Sirkular Di Wilayah Sunter </h5>
                <p>Pada tahun 2019, United Nations Environment Assembly mendefinisikan ekonomi sirkular sebagai model ekonomi yang melibatkan semua produk dan material yang dirancang untuk dapat digunakan kembali (reused), diproduksi kembali (remanufactured), didaur ulang (recycled) atau diambil kembali manfaatnya (recovered), dan dipertahankan di dalam kegiatan ekonomi selama mungkin.</p>
                <Button variant="light">Selengkapnya</Button>
            </Container>
        </>
    </div>
};

export default Artikelpage;