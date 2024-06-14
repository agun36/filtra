import { Formik } from 'formik';
import * as Yup from 'yup'; // Import Yup
import { Buttons } from './Buttons';
import { InputFields } from './inputFields';
import "./styles.scss";
import logo from '@/assets/images/Filetra_logo3.svg';
import { NavLink } from 'react-router-dom';



// Define a validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
});

export const Login = () => {
    return (
        <div className="login">
            <div className="card mb-3 p-4">
                <div className="card-header text-center bg-transparent py-5">
                    <img src={logo} alt="" />
                    <h1 className="text-bg-400 mt-4">Welcome back</h1>
                    <p className="text-bg-500">Enter your credentials below to Login</p>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
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
                                <div>
                                    <InputFields labels="Email Address" placefield="Email" inputType="input" name="email" />
                                    <InputFields labels="Password" placefield="Password" inputType="input" name="password" />
                                    <a href="#" className="text-bg-400">Forget Password?</a>
                                </div>
                            </div>
                            <div className="card-footer bg-transparent text-center my-5">
                                <Buttons title="Login" />
                                <p className="text-bg-500 mt-5">Don't have an account? <NavLink to="/signup" className="text-bg-400">Sign Up</NavLink></p>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};