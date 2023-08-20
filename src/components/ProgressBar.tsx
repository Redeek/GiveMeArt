import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProgressBar = () => {
  return (
    <div>
        <div className='progressBar'>
            <div className='circle active'>1</div>
            <div className='circle unactive'>2</div>
            <div className='circle unactive'>3</div>
        </div>
        <Row 
            style={{
                marginLeft:"5%", 
                marginRight:"5%", 
                marginTop:"50px"
            }}
        >
            <Col className='progressBarText activeText'>
                Generate image
            </Col>
            <Col className='progressBarText unactiveText'>
                Choose your product
            </Col>
            <Col className='progressBarText unactiveText'>
                Order
            </Col>
        </Row>
    </div>)
}

export default ProgressBar