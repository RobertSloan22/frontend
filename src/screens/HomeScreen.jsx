import React from 'react'
import '../styles/homescreen.css'
import Card from 'react-bootstrap/Card';
import Buttom from'react-bootstrap/Button';




const HomeScreen = () => {
  return ( 
          <>    

      <div className="homeScreen">
  



        <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>

          <h1>LUNAR BANKING A SITE BUILT WITH 
    REACT/ REDUX/ NODE / EXPRESS / MONGODB / MONGOOSE / JSON WEB TOKEN </h1>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
              
            

      
         
        </div>
      </>


  )
} 
export default HomeScreen
