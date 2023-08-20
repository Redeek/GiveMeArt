import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const FormQuality = () => {
  return (
    <Container style={{ paddingTop:"20px" }}>
        <Row 
          style={{
            paddingLeft:"3%", 
            paddingRight:"3%"
          }}
        >
            <Col 
              style={{
                padding:"0%", 
                width:"33.33%"
              }}
            >
                <Button 
                  variant="secondary" 
                  style={{
                    paddingLeft:"2px",
                    width:"90%", 
                    paddingRight:"2px"
                  }}
                >
                    High Quality
                </Button>
            </Col>
            <Col 
              style={{
                padding:"0%", 
                width:"33.33%"
              }}
            >
                <Button 
                  variant="secondary"
                  style={{
                    paddingLeft:"2px",
                    width:"90%", 
                    paddingRight:"2px"
                  }}
                > 
                    Pop Art
                </Button>
            </Col>
            <Col 
              style={{
                padding:"0%", 
                width:"33.33%"
              }}
            >
                <Button 
                  variant="secondary" 
                  style={{
                    paddingLeft:"2px",
                    width:"90%", 
                    paddingRight:"2px"
                  }}
                > 
                    Realistic Look
                </Button>
            </Col>
        </Row>
    </Container>
  )
}

export default FormQuality