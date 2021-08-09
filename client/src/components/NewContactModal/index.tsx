import { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const NewContactModal = () => {
  const idRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()

    // createContact(idRef.current.value, nameRef.current.value)
  }
  return (
    <>
      <Modal.Header>Add New Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type='text' ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' ref={nameRef} required></Form.Control>
          </Form.Group>
          <Button className="mt-2" type='submit'>Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewContactModal
