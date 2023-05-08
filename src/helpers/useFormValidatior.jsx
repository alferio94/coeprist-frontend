import { useState } from "react";

const useFormValidator = () =>
{
    const [validation, setValidation] = useState({});

    const validateInputs = (inputsToValidate) =>
    {
        let error = "";
        Object.entries(inputsToValidate).forEach(([name, { value, type, maxLength, minLength }]) =>
        {
            switch (type)
            {
                case "email":
                    if (!/\S+@\S+\.\S+/.test(value))
                    {
                        error = `${name} debe ser una dirección de correo válida.`;
                    }
                    break;
                case "text":
                    if (value.length > maxLength)
                    {
                        error = `${name} debe tener como máximo ${maxLength} caracteres.`;
                    } else if (value.length < minLength)
                    {
                        error = `${name} debe tener al menos ${minLength} caracteres.`;
                    }
                    break;
                // Add more cases for other input types as needed
                default:
                    break;
            }
            // Stop iterating if an error is found
            if (error)
            {
                return;
            }
        });

        setValidation({
            error,
            valid: !error
        });

        return !error;
    };

    return { validation, validateInputs };
};

export default useFormValidator;