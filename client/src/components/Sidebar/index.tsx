import { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap" 
import Contacts from "../Contacts";
import Conversations from "../Conversations";
import { IdProp } from '../../interfaces/idInterface'
import './sidebar.css'
import NewConversationModal from "../NewConversationModal";
import NewContactModal from "../NewContactModal";

const CONVERSATION_KEY = "conversations";
const CONTACT_KEY = "contacts"

const Sidebar:React.FC<IdProp> = ({id}) => {
  const [activeKey, setActiveKey] = useState<string>(CONVERSATION_KEY)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const convoSectionOpen = activeKey === CONVERSATION_KEY;
  return (
    <div className='sidebar-container'>
      <Tab.Container activeKey={activeKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY} onClick={() => setActiveKey(CONVERSATION_KEY)}>Convos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY} onClick={() => setActiveKey(CONTACT_KEY)}>Friendos</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="tab-content">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACT_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className='p-2 border-top border-right small'>
          Your ID: <span className="text-muted">{id}</span>
        </div>
        <Button className='rounded-0' onClick={openModal}>
          New {convoSectionOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {convoSectionOpen ? <NewConversationModal /> : <NewContactModal />}
      </Modal>
    </div>
  )
}

export default Sidebar
