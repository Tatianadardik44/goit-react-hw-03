import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
const ContactList = ({contact, onDelete}) => {
    return (
        <div className={css.listUser}>
            {contact.map((user) => {
                return <div key={user.id}>
                    <Contact user={user} onDelete={ onDelete} />
                </div>
            })}
        </div>

    )
}
export default ContactList