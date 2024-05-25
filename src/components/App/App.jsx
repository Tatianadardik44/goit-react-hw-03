import contact from "../Contact/Contact.json"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"
import css from "./App.module.css"





function App() {
 

  return (
    <>
      <h1>Phonebook</h1>
      <SearchBox />
      <ContactList contact={contact } />
    </>
  )
}

export default App
