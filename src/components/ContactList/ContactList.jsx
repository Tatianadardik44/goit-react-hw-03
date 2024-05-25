import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
const ContactList = ({contact}) => {
    return (
        <div className={css.listUser}>
            {contact.map((user) => {
                return <div key={user.id}>
                    <Contact user={user} />
                </div>
            })}
        </div>

    )
}
export default ContactList