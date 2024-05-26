import { Field, Formik, Form, ErrorMessage  } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css"
import { nanoid } from "nanoid"
const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   number: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
});

const initialValues = {
    name: "",
   number: "",
    
}
const ContactForm = ({addContact}) => {
    const nameId = useId();
    const numberId = useId();
      const handleSubmit = (values, actions) => {
          addContact( {
              name: values.name,
              number: values.number,
             id:  nanoid()
    } )
		actions.resetForm();
	};
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit } validationSchema={FeedbackSchema}> 
            <Form className={css.form}>
                <div className={css.formBox}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
                    <ErrorMessage name="name" component="span" className={ css.span} />
                </div>
                <div className={css.formBox}>
                    <label htmlFor={numberId}>Number</label>
                    <Field type="text" name="number" id={numberId} />
                     <ErrorMessage name="number" component="span" className={ css.span}/>
                </div>
                <button type="submit" className={css.btn}>Add contact</button>
            </Form>
    </Formik>
)
}
export default ContactForm