// import { Button } from "react-bootstrap"
// import { Link } from "react-router-dom"
import Header from "./Header"
import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "mdbreact/dist/css/mdb.css"
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCard, MDBCardBody, MDBIcon } from "mdb-react-ui-kit"


const Register = () => {

<Header />
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='text-#393E46 my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px', backgroundColor:'#00ADB5'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                <MDBIcon far icon='user-circle' size="8x"/>
              </MDBBtn>

              <h6 className="text-center mt-1 mb-4 pb-1"><b>SIGN UP</b></h6>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' id='formControlLg' type='text' size="md" placeholder="Full Name"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' id='formControlLg' type='email' size="md" placeholder="Username"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' id='formControlLg' type='password' size="md" placeholder="Password"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' id='formControlLg' type='password' size="md" placeholder="Confirm Password"/>

              
              <MDBBtn className='mx-2 mb-3' size='sm' style={{ backgroundColor:'#393E46' }}>Sign Up</MDBBtn>

              <div>
                <p className="mb-0 my-3">Alredy have an account ? <a href="/Login" class="text-black-50 fw-bold">Sign In</a></p>
              </div>

              <div className="d-flex align-items-center my-2 mb-0">
                <p className="text-center mx-3 mb-0">or sign up with</p>
              </div>

              <div className='d-flex flex-row mt-0 mb-0'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }} href="https://google.com">
                  <MDBIcon fab icon='google' size="md"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }} href="https://instagram.com">
                  <MDBIcon fab icon='instagram' size="md"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }} href="https://facebook.com">
                  <MDBIcon fab icon='facebook-f' size="md"/>
                </MDBBtn>
              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Register

//   return (
//     <>
//     <Header />
//     <main className="form-container">
//       <Form className="form-box w-100 m-auto">
//         <h1 className="h3 mb-3 fw-normal">Register</h1>
//         <p>Sudah Registrasi? <Link to="/login">Login</Link></p>
//         <FloatingLabel label="Nama" controlId="formNama">
//           <Form.Control className="atas" placeholder="jhondoe"></Form.Control>
//         </FloatingLabel>
//         <FloatingLabel label="User ID" controlId="formUserID">
//           <Form.Control className="tengah" placeholder="jhondoe"></Form.Control>
//         </FloatingLabel>
//         <FloatingLabel label="Password" controlId="formPassword">
//           <Form.Control className="tengah" placeholder="pasword"></Form.Control>
//         </FloatingLabel>
//         <FloatingLabel label="Verifikasi Password" controlId="formUlangiPassword">
//           <Form.Control className="bawah" placeholder="pasword"></Form.Control>
//         </FloatingLabel>
//         <Button className="w-100 mt-3">Registrasi</Button>
//       </Form>
//     </main>
//     </>
//   )
// }

// export default Register