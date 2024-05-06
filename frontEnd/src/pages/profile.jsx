import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const profile = () => {
  return (
    <div className='allpages'>
      <div className="box col-8 container" style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#1d2d3d"}}>
      <Card style={{ width: '18rem' ,backgroundColor:"red",width:"500px"}}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default profile