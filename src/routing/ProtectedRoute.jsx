import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
   <>

<div>

     
      <Row>
        <Col md={{ span: 10, offset: 0}}><div className='unauthorized'>
                  <h1>Unauthorized :(</h1>
                  <div className="alert alert-primary" role="alert">
          ALERT YOU ARE NOT LOGGED IN CURRENTLY <a href="#" class="alert-link"></a>. 
          </div>
                    <NavLink to='/login'>Login</NavLink> to gain access
                    <div class="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          </div>
        </Col>
        <Col md={{ span: 3, offset: 3 }}></Col>
      </Row>
    
   </div>
      </>

    )
  }

  return <Outlet />
}

export default ProtectedRoute
