import { useState } from "react"
import { nanoid } from "nanoid"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"
import css from "./App.module.css"
import ContactForm from "../ContactForm/ContactForm"





function App() {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
])
  
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  const addContact = (name, number) => {
    const newContact =  {
       name,
       number,
        id: nanoid()
    };
    setContacts([...contacts, newContact])
  }
  const filterContacts = contacts.filter(element => element.name.toLowerCase().includes(inputValue.toLowerCase())

  )
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact } />
      <SearchBox value={inputValue} handleChange={handleChange} />
      <ContactList contact={ filterContacts } />
    </div>
  )
}

export default App
