import { Field, Formik, Form } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css"
const initialValues = {
    name: "",
   number: ""
    
}
const ContactForm = ({addContact}) => {
    const nameId = useId();
    const numberId = useId();
      const handleSubmit = (values, actions) => {
	addContact(values.name, values.number)
		actions.resetForm();
	};
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit }> 
            <Form className={css.form}>
                <div className={css.formBox}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId } />
                </div>
                <div className={css.formBox}>
                    <label htmlFor={numberId}>Number</label>
                    <Field type="text" name="number" id={numberId } />
                </div>
                <button type="submit" className={css.btn}>Add contact</button>
            </Form>
    </Formik>
)
}
export default ContactForm