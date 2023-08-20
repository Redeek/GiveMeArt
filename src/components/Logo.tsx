import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

const Logo = () => {
  return (
    <Container>
        <Image src="holder.js/100px250" style={{minHeight:"150px", backgroundColor:"gray", minWidth:"100%"}} alt='Give Me ART' />
        <h4 style={{color:"red", paddingTop:"10px", marginBottom:"0px"}}>Genereate your ART</h4>
        <h4 style={{marginTop:"0px"}}>by typing in field below any words that comes to your mind!</h4>
    </Container>
  )
}

export default Logo