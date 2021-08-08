import { useState } from "react";
import { Tab, Nav } from "react-bootstrap" 
import Contacts from "../Contacts";
import Conversations from "../Conversations";

const CONVERSATION_KEY = "conversations";
const CONTACT_KEY = "contacts"

const Sidebar = () => {
  const [activeKey, setActiveKey] = useState<string>(CONVERSATION_KEY)
  return (
    <div className='sidebar-container d-flex flex-column'>
      <Tab.Container activeKey={activeKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY} onClick={() => setActiveKey(CONVERSATION_KEY)}>Convos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY} onClick={() => setActiveKey(CONTACT_KEY)}>Friendos</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
        </Tab.Content>
        <Tab.Content>
          <Tab.Pane eventKey={CONTACT_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}

export default Sidebar
