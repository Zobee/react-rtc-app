import { FormEvent, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { generateRandomString } from '../../helpers';
import { SetIdProp } from '../../interfaces/idInterface'
import "./login.css"


const Login:React.FC<SetIdProp> = ({setId}) => {
  const idRef = useRef<HTMLInputElement>(null)

  const createNewId = () => {
    setId(generateRandomString())
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()

    const currRefVal:string = idRef.current ? idRef.current?.value : ""
    setId(currRefVal)
  }

  return (
    <Container id='loginContainer' className="align-items-center d-flex">
      <Form onSubmit={e => handleSubmit(e)} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type='text' ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type='submit' className='mr-2'>Log In</Button>
        <Button onClick={createNewId} variant='secondary'>Create A New ID</Button>
      </Form>
    </Container>
  )
}

export default Login;
