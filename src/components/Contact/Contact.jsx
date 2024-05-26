import { FaPhone } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import css from "./Contact.module.css"
const Contact = ({user, onDelete}) => {
    return (
        <div className={css.contact}>
            <div>
                <p><FaUserLarge className={css.icon } />{user.name}</p>
                <p> <FaPhone className={css.icon }/>{user.number}</p>
               
            </div>
            <div>
                <button onClick={() => onDelete(user.id)} className={css.btn}>Delete</button>
            </div>
        </div>

    )
}
export default Contact