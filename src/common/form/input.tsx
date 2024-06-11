import React from 'react'
import { classNames } from '~/utils/helpers';

interface IInput{
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    required: boolean;
    options: {label: string, value: string}[]
}
interface IEvent{
    target:ITarget;
}
interface ITarget{
    name: string;
    value: string;
    checked?: boolean;
}
interface IInputProps {
    input: IInput;
    tailwindClass?: string;
    formValues?: {[key: string]: string;};
    formErrors?: {[key: string]: string;};
    index?: number;
    handleChange: (e: IEvent, index: number) => void;
    disabled?: boolean;
}

const InputField = ({
    index,
    input,
    tailwindClass,
    formValues,
    formErrors,
    handleChange,
    disabled
}:IInputProps) => {
    const {label, type, name, placeholder, required, options} = input;
    if(type == "select"){
        return (
            <div key={name} className="mb-2">
                <label
                    className="block text-sm font-normal leading-6 text-gray-900"
                    htmlFor={name}
                    style={{ pointerEvents: "none" }}
                >
                    {label}
                    {required && <span className="text-red-500"> *</span>}
                </label>
                <select
                    className={`${disabled && "cursor-not-allowed"
                        }  border-1 w-full rounded px-3 py-2 leading-tight ${formErrors?.[name]
                            ? "border-red-500"
                            : "border-gray-300 focus:border-primary-blue"
                        } focus:outline-none`}
                    id={name}
                    name={name}
                    required={required}
                    value={formValues?.[name] || ""}
                    disabled={disabled ? disabled : false}
                    onChange={(e) => handleChange(e, index ?? 0)}
                >
                    {options?.map((option) => (
                        <option
                            className={option.value === "" ? "cursor-not-allowed" : ""}
                            key={option.value}
                            value={option.value}
                            disabled={option.value === "" ? true : false}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                {(formErrors?.[name] ?? false) && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                        {formErrors?.[name]}
                    </p>
                )}
            </div>
        );
    }
  return (
    <div
        key={name}
        className={classNames(tailwindClass ? tailwindClass : "", "mb-2")}
    >
        <label>
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
          <input
              className={`${disabled && "cursor-not-allowed"
                  }  border-1 w-full appearance-none rounded px-3 py-2 leading-tight ${formErrors?.[name]
                      ? "border-red-500"
                      : "border-gray-300 focus:border-primary-blue"
                  } focus:outline-none `}
              id={name}
              type={type}
              name={name}
              value={formValues?.[name] == "0" ? "0" : formValues?.[name]}
              required={required && !formValues?.[name]}
              onChange={(e) => {
                  e.target.value = e.target.value.startsWith(" ")
                      ? e.target.value.trim()
                      : e.target.value;
                  handleChange(e, index ?? 0);
              }}
              disabled={disabled ? disabled : false}
          />
          {(formErrors?.[name] || false) && (
              <p className="mt-2 text-sm text-red-600">{formErrors[name]}</p>
          )}
    </div>
  )
}

export default InputField;