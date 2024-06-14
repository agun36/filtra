import { Buttons } from "./Buttons";
import { InputFields } from "./inputFields"; // Corrected the import path case
import logo from '@/assets/images/Filetra_logo3.svg';
import './styles.scss'; // Corrected the file name
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup'; // Import Yup


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

export const SignUp: React.FC = () => {
    return (
        <div className="signup">
            <div className="card mb-3 p-4">
                <div className="card-header text-center bg-transparent py-5">
                    <img src={logo} alt="Filetra logo" /> {/* Added alt text for accessibility */}
                    <h1 className="text-bg-400">Create your Account</h1>
                </div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        organisation: '',
                        middleName: '',
                        email: ''
                    }}
                    validationSchema={validationSchema} // Use the validation schema
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="row flex-column flex-md-row">
                                    <div className="col">
                                        <InputFields labels="First Name" placefield="Enter First Name" inputType="input" name="firstName" />
                                    </div>
                                    <div className="col">
                                        <InputFields labels="Last Name" placefield="Enter Last Name" inputType="input" name="lastName" />
                                    </div>
                                </div>

                                <div className="row flex-column flex-md-row">
                                    <InputFields labels='Middle Name (Optional)' placefield="Enter Middle Name" inputType="input" name="middleName" />
                                </div>

                                <div className="row flex-column flex-md-row">
                                    <div className="col">
                                        <InputFields labels="Phone Number" placefield="Enter Phone Number" inputType="input" name="phoneNumber" />
                                    </div>
                                    <div className="col">
                                        <InputFields labels="Email Address" placefield="Enter Email Address" inputType="input" name="email" />
                                    </div>
                                </div>

                                <div className="col">
                                    <InputFields labels="Organisation Name" placefield="Enter Organisation Name" inputType="input" name="organisation" />
                                </div>
                            </div>
                            <div className="card-footer bg-transparent text-center my-5 row align-items-center">
                                <div className="col">
                                    <NavLink to="/login">
                                        <p className="text-bg-500 mt-5">Already have an account? <span className="text-bg-400">Sign In</span></p>
                                    </NavLink>
                                </div>
                                <div className="col">
                                    <Buttons title="Create" />
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};