import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"
import { Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { CardGroup } from "react-bootstrap"

import header from "../assets/beranda/header.png"
import mengajar from  "../assets/beranda/mengajar.png"
import donasi from  "../assets/beranda/donasi.png"
import artikel2 from "../assets/artikel/artikel2.png"
import artikel3 from "../assets/artikel/artikel3.jpg"
import artikel4 from "../assets/artikel/artikel4.jpg"

const Beranda = () => {

  return (
    <>
      <Header />
      <Container className="header">
        <h1>peduli.com</h1>
        <img src={header} alt="img-fluid" className="w-10" />
        <br />
       <br /> <p>Peduli.com merupakan sebuah website yang memungkinkan penggunanya menyalurkan niat baik berkegiatan sosial. dengan berdonasi maupun melakukan pengabdian langsung melalui organisasi atau komunitas yang tersedia. Peduli.com memberikan informasi lengkap mengenai wilayah-wilayah yang membutuhkan volunteer, juga membantu pengguna menemukan komunitas atau organisasi terkait. </p>
      </Container>

    <div className="body-home">
      <Container className="body-1">
        <h4>Kegiatan Terbaru</h4>
        <h6>Simak Kegiatan Terbaru yang bisa menjadi motivasi untukmu!</h6>
      </Container>
    </div>

    <CardGroup className="card-home">
      <Card className="card1">
        <Card.Img variant="top" src={mengajar} />
        <Card.Body className="card-body">
          <Card.Title className="title1">Ayo Mengajar</Card.Title>
          <Card.Text className="textcard">
            Mari berkontribusi meningkatkan pendidikan di seluruh indonesia!
          </Card.Text>
        </Card.Body>
        <Card.Link className="cardlink">Selengkapnya</Card.Link>
      </Card>


      <Card className="card2">
        <Card.Img variant="top" src={donasi} />
        <Card.Body>
          <Card.Title className="title2">Mari Donasi</Card.Title>
          <Card.Text className="textcard2">
            Mari berbagi untuk orang yang membutuhkan.
          </Card.Text>
        </Card.Body>
        <Card.Link className="cardlink">Selengkapnya</Card.Link>
      </Card>

      
      <Card className="card1">
        <Card.Img variant="top" src={mengajar} />
        <Card.Body className="card-body">
          <Card.Title className="title1">Guru dari kita</Card.Title>
          <Card.Text className="textcard">
            Mari berkontribusi meningkatkan pendidikan di seluruh indonesia!
          </Card.Text>
        </Card.Body>
        <Card.Link className="cardlink">Selengkapnya</Card.Link>
      </Card>
    </CardGroup>


    <div className="body-home2">
      <Container className="body-2">
        <h4>Artikel</h4>
        <h6>Telususri artikel menarik lainnya!</h6>
      </Container>
    </div>


    <Container className="flex2-home">
                <img src={artikel2} alt="img-fluid" className="w-10" />
                <h5>Membantu anak dan remaja menjadi yang terbaik sesuai kemampuan mereka</h5>
                <Button variant="light">Selengkapnya</Button>
            </Container>
<br />
<br />
            <Container className="flex3-home">
                <img src={artikel3} alt="img-fluid" className="w-10" />
                <h5>Desa Ciburayut Krisis SDM Laki-Laki </h5>
                <Button variant="light">Selengkapnya</Button>
            </Container>
<br />
<br />
            <Container className="flex4-home">
                <img src={artikel4} alt="img-fluid" className="w-10" />
                <h5>Pengaplikasian Ekonomi Sirkular Di Wilayah Sunter </h5>
                <Button variant="light">Selengkapnya</Button>
            </Container>


    </>
  );
}

export default Beranda