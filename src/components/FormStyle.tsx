import React from 'react'
import { 
    Button, 
    Card, 
    Col, 
    Container, 
    Row 
} from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

import {AiOutlineLock} from 'react-icons/ai'

const FormStyle = () => {
  return (
    <Container style={{paddingTop:"40px"}}>
        <Card 
          className='Boxshadow' 
          style={{ paddingRight:"2%" }}
        >
            <Row style={{ paddingLeft:"5%" }}>
                <Col>
                    <Row style={{ justifyContent:"center" }}>
                        Style preview
                    </Row>
                    <Row style={{ justifyContent:"center" }}>
                        <Image 
                          src="holder.js/171x180" 
                          style={{
                            maxHeight:"100px",
                            width: "auto", 
                            backgroundColor:"gray"
                          }} 
                          className='m-4 p-4'
                          alt='Avatar'
                        />
                    </Row>
                </Col>
                <Col 
                  style={{
                    paddingLeft:"5%",
                    paddingRight:"2%", 
                    backgroundColor:"lightgray", 
                    borderRadius:" 0 10px 10px 0"
                  }}
                >
                    <Row 
                      style={{ justifyContent:"center" }}
                      className='pt-3'
                    >
                        Minimalistic
                    </Row>
                    <Row 
                      style={{
                        justifyContent: 'center', 
                        alignItems: 'center' 
                      }}
                      className='pt-2'
                    >
                        <Button 
                          style={{ width:"80%" }}
                          variant="danger"
                        > 
                            CARTOON 
                        </Button>
                    </Row>
                    <Row 
                      style={{ justifyContent:"center" }}
                      className='pt-2'
                    >
                        <div>
                            <AiOutlineLock/> Artisctic
                        </div>
                    </Row>
                </Col>
            </Row>
        </Card>
    </Container>
  )
}

export default FormStyle