// ContactModal.tsx
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { InputFields } from './inputFields';
import { Buttons } from './Buttons';
import './styles.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface InputFieldsProps {
    show: boolean;
    onHide: () => void;
    labels: string;
    placefield: string;
    inputType: "input";
    name: string;
}

const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, 'First name must be at least 2 characters')
        .matches(/^[a-zA-Z]+$/, 'Invalid first name')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Last name must be at least 2 characters')
        .matches(/^[A-Z][a-z]*$/, 'Invalid last name. The first letter must be uppercase.')
        .required('Required'),
    phoneNumber: Yup.string()
        .matches(/^\d{11}$/, 'Invalid phone number')
        .required('Required'),
    organisation: Yup.string()
        .min(2, 'Organisation name must be at least 2 characters')
        .required('Required'),
    middleName: Yup.string()
        .min(2, 'Middle name must be at least 2 characters')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required')
    ,
});

export const ContactModal: React.FC<InputFieldsProps> = ({ onHide }) => {
    return (
        <Modal
            show={true}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Contact sales
                </Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    email: "",
                    organisation: "",
                    middleName: ""
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            // ... (validation and onSubmit logic)
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <div className="row flex-column flex-md-row">
                                <div className="col">
                                    <InputFields labels="First Name" placefield="Enter First Name" inputType="input" name="firstName" />
                                </div>
                                <div className="col">
                                    <InputFields labels="Last Name" placefield="Enter Last Name" inputType="input" name="lastName" />
                                </div>
                            </div>
                            <InputFields labels='Middle Name (Optional)' placefield="Enter Middle Name" inputType="input" name="middleName" />

                            <InputFields labels="Phone Number" placefield="Phone" inputType="input" name="phoneNumber" />
                            <InputFields labels="Email Address" placefield="Email" inputType="input" name='email' />

                            <InputFields labels='Organisation Name' placefield="Enter Organisation Name" inputType="input" name="organisation" />

                        </Modal.Body>
                        <Modal.Footer>
                            <Buttons title="Submit" />
                        </Modal.Footer>
                    </form>
                )}
            </Formik>
        </Modal>
    );
}
