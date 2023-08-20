import React from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import {PiNotePencilLight} from 'react-icons/pi'

const FormInput = () => {
  return (
    <Container 
      style={{
        paddingTop:"40px"
      }}
    >
      <InputGroup className="mb-3">
        <Form.Control
          style={{
            backgroundColor:"lightgray"
          }}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder=' What do you want to create?'
        />
        <Button variant="danger"> 
          <h1> 
            <PiNotePencilLight /> 
          </h1> 
        </Button>
      </InputGroup>
    </Container>
  )
}

export default FormInput