import React from 'react';
import {Formik} from 'formik';
import './ContactForm.css';

const ContactForm = () => (

    <div className={"content_form"}>
    <Formik
        initialValues={{
            email: '', name: '', data: '', text: ''
        }}
        validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Pole wymagane';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Błędny e-mail';
            }
            return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
    >
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
                <input className={'form--styling'}
                    type='text'
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                <input className={'form--styling'}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input className={'form--styling'}
                    type="date"
                    name="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.data}
                />
                <input className={'form--styling'}
                    type="text"
                    name="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.text}
                />
                {errors.data && touched.data && errors.data}
                <button className={'btn-submit'} type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        )}
    </Formik>
    </div>
);

export default ContactForm