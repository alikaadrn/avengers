// import { Button } from "react-bootstrap"
// import { Link } from "react-router-dom"
// import Header from "./Header"
import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "mdbreact/dist/css/mdb.css"
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCard, MDBCardBody, MDBIcon } from "mdb-react-ui-kit"
import Header from "./Header"

const Login = () => {

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

              <h6 className="text-center mt-1 mb-4 pb-1"  ><b>SIGN IN</b></h6>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' id='formControlLg' type='email' size="md" placeholder="Username"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' id='formControlLg' type='password' size="md" placeholder="Password"/>

              
              <MDBBtn rounded className='mx-2' size='sm' style={{ backgroundColor:'#393E46' }}>Sign In</MDBBtn>

              <div>
                <p className="mb-0 my-3">Don't have an account ? <a href="/Register" class="text-black-50 fw-bold">Sign Up</a></p>
              </div>

              <div className="d-flex align-items-center my-2 mb-0">
                <p className="text-center mx-3 mb-0">or sign in with</p>
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

export default Login

// export default App;

//     <div className="container">
//       <div className="row justify-content-center">
//         {/* <div className="text-center"> */}
//         <h6 className="text-center mt-2 mb-2 pb-1"><b>SIGN IN</b></h6>
//           <form>
//             <div className="form-group">
//               <input type="email"className="form-control" placeholder="Username" required/>
//             </div>
//             <div className="form-group">
//               <input type="password"className="form-control" placeholder="Password"/>
//             </div>
//           </form> 
//           <Button type="submit" className="mb-3 px-5 mx-5" style={{color:"#393E46"}}>Sign In</Button>

//           <p className="mt-8 text xs font-light text-center text-gray-700">Don't have account ? <a href="/register" className="font-medium text-bold-600 hover : underline"> Sign Up </a></p>

//           <div className="relative flex items-center justify-center w-full mt-6 border border-t">
//             <p className="text-center mx-3 mb-0"> or sign in with </p>
//           </div>
//           <main className="text-center mx-3 mb-0">
//           <a href="https://google.com">
//               <AiFillGoogleCircle/>
//             </a>
//           <a href="https://instagram.com">
//               <AiFillInstagram/>
//             </a>
//             <a href="https://facebook.com">
//               <AiFillFacebook/>
//             </a>
//           </main>
//           {/* <div className="social-acount">
//             <button className="gg" onClick={ this.props.onClick }> <i className="fa fa-google" aria-hidden="true"></i></button>
//             <button className="ig" onClick={ this.props.onClick }> <i className="fa fa-instagram" aria-hidden="true"></i></button>
//             <button className="fb" onClick={ this.props.onClick }> <i className="fa fa-facebook" aria-hidden="true"></i></button>
//           </div> */}
//       </div>
//     </div>
//   )
// }
