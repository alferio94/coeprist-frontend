import { useState } from "react";


const controlValidationObjectFactory = ({ value, validatorFunctions }) => ({ error: null, value, validatorFunctions });
/**
 * @todo
 * restructure for type inferrence 
 * @param {*} controls 
 */
export const useForm = (controls = {}, attrAccessor = "id") => {
    const initialControls = {};
    Object.keys(controls).forEach((key) => {
        const controlReference = initialControls[key];
        if (!controlReference) {
            initialControls[key] = controlValidationObjectFactory(controls[key])
        }
    })
    const [form, setForm] = useState(initialControls);

    const register = (controlName, defaultValue = null, validatorFunctions = []) => setForm((currentControls) => {
        const hasControl = currentControls[controlName];
        if (hasControl) {
            throw new Error(`This control name ${controlName} it's already registered on the form`);
        }
        return {
            ...currentControls,
            [controlName]: {
                value: defaultValue,
                error: null,
                validatorFunctions,
            },
        }
    });

    const onChange = ($event) => {
        const targetId = $event.target[attrAccessor], hasReference = form[targetId];
        if (!hasReference) {
            throw new Error(`The current binded input with id ${targetId} has no reference to the current model`);
        }
        setForm((currentValidation) => ({
            ...currentValidation,
            [targetId]: runValidations($event.target.value, form[targetId].validatorFunctions)
        }));
    }

    const runValidations = (value, validatorFunctions) => {
        let error = null;
        for (let k = 0; k < validatorFunctions.length; k++) {
            const validationError = validatorFunctions[k](value);
            if (validationError) {
                error = validationError;
                return {
                    value,
                    validatorFunctions,
                    error,
                }
            }
        }
        return {
            value,
            validatorFunctions,
            error,
        }
    }
    /**
     * @todo 
     * create a switch to be matching the input type to type on converstion for model
     * @param {*} target 
     */
    const converValueBaseOnTypeInput = (target) => {
        console.log(target.type);
    }


    return {
        form,
        register,
        onChange
    }
}



const useFormValidator = () => {
    const [validation, setValidation] = useState({});

    const validateInputs = (inputsToValidate) => {
        let error = "";
        Object.entries(inputsToValidate).forEach(([name, { value, type, maxLength, minLength }]) => {
            switch (type) {
                case "email":
                    if (!/\S+@\S+\.\S+/.test(value)) {
                        error = `${name} debe ser una dirección de correo válida.`;
                    }
                    break;
                case "text":
                    if (value.length > maxLength) {
                        error = `${name} debe tener como máximo ${maxLength} caracteres.`;
                    } else if (value.length < minLength) {
                        error = `${name} debe tener al menos ${minLength} caracteres.`;
                    }
                    break;
                // Add more cases for other input types as needed
                default:
                    break;
            }
            // Stop iterating if an error is found
            if (error) {
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