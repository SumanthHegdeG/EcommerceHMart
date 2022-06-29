import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container className='mt-5'>
      <div className='d-flex justify-content-md-center'>
        <div className='col-md-5 col-sm-11 border rounded p-4 shadow-lg'>
          {children}
        </div>
      </div>
    </Container>
  )
}

export default FormContainer
