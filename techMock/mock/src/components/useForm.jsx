import { useState } from "react";

const useForm = (initialValues, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        if(validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
        }
    };
    return {
        values,
        errors,
        handleChange,
        setValues,
        setErrors,
    };
};
export default useForm;

