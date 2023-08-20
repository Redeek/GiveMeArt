import React from 'react'
import { Button, Card, Container, Form, InputGroup } from 'react-bootstrap'
import {AiOutlineArrowRight} from 'react-icons/ai'

const GetInspired = () => {
  return (
    <Container style={{ paddingTop:'40px' }}>
        <Card style={{ paddingTop:'40px' }}>
            <Card.Title>
                <p 
                  className='pb-0'
                  style={{
                    color:"red",
                    marginBottom:"5px"
                  }}
                > 
                    GET INSPIRED! 
                </p>
                <p className='pt-0'>
                    BEST USERS DESIGNS
                </p>
                <a 
                  href='#seeMore'
                  style={{
                    textDecoration:"none", 
                    color:"inherit"
                  }}
                >
                    See more 
                    <AiOutlineArrowRight/>
                </a>
            </Card.Title>
            <Card.Img 
                style={{
                    backgroundColor:"gray",
                    height:"300px"
                }}
                variant="top" 
                src="holder.js/100px180"
                alt="Sticker"
            />
            <Card.Body>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={"punk heart, gothic"}
                    style={{backgroundColor:"lightgray"}}
                />
                    <InputGroup.Text 
                        id="basic-addon2"
                    >
                        ARTISTIC
                    </InputGroup.Text>
                </InputGroup>
                <Button 
                  variant="danger"
                  style={{
                    width:"40%"
                  }}
                >
                    BUY
                </Button>
            </Card.Body>
        </Card>

    </Container>
  )
}

export default GetInspired