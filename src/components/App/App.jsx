import { useState,useEffect } from "react"
import listContacts from "../contact.json"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"
import css from "./App.module.css"
import ContactForm from "../ContactForm/ContactForm"

const createLocalContact = () => {
  const localList = localStorage.getItem('frends');
  return localList ? JSON.parse(localList) : listContacts
}



function App() {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(createLocalContact())
  useEffect(() => {
    localStorage.setItem('frends', JSON.stringify(contacts))
  }, [contacts])
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  const addContact = (newContact) => {
    
    setContacts((contacts) => {
      return [...contacts, newContact]
    })
  }
  const filterContacts = contacts.filter(element => element.name.toLowerCase().includes(inputValue.toLowerCase()))

  const contactDelete = (contactId) => {
    setContacts(delContact => {
      return delContact.filter((cont) => cont.id !== contactId);
    })
  };
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact } />
      <SearchBox value={inputValue} handleChange={handleChange} />
      <ContactList contact={filterContacts} onDelete={ contactDelete} />
    </div>
  )
}

export default App
