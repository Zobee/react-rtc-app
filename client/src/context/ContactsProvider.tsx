import React, { useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext({});

export const useContacts = () => {
  return useContext(ContactsContext)
}

export const ContactsProvider:React.FC<{}> = ({children}) => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const createContact = (id:string, name:string):void => setContacts((prev:Array<Object>) => [...prev, {id, name}])
  return (
    <ContactsContext.Provider value={ {contacts, createContact} }>
      {children}
    </ContactsContext.Provider>
  )
}

