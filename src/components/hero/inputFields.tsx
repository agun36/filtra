import { Field, ErrorMessage } from 'formik';

interface InputFieldsProps {
    labels: string;
    placefield: string;
    inputType: "input";
    name: string;
}

export const InputFields: React.FC<InputFieldsProps> = ({ labels, placefield, inputType, name }) => {
    return (
        <div className="form-group">
            <label htmlFor={labels} className="form-label my-3">{labels}</label>
            {inputType === 'input' ? (
                <Field type='text' className="form-control p-4" id={labels} name={name} placeholder={`Enter ${placefield}`} />
            ) : (
                <Field as='textarea' className="form-control" id={labels} name={name} placeholder={`Enter ${placefield}`} />
            )}
            <ErrorMessage name={name} component="div" className='text-danger' />
        </div>
    )
}
