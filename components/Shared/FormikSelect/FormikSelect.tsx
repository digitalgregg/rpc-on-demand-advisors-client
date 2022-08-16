import { Field } from "formik";
import Select from "../Select";
// import FormikErrorMessage from "../FormikErrorMessage";
import { FormikSelectProps } from "./FormikSelect.types";
function FormikSelect({ disabledErrorMessage, ...props }: FormikSelectProps) {
    return (
        <div>
            <Field {...props} component={MySelect} />
            {/* {!disabledErrorMessage && (
                <FormikErrorMessage fontSize={props.size} name={props.name} />
            )} */}
        </div>
    );
}

export default FormikSelect;

const MySelect = ({ field, form, children, ...props }: any) => {
    const isError = form.errors[field.name] && form.touched[field.name];
    return (
        <Select
            {...field}
            {...props}
            style={{
                ...(isError && { border: "1px solid red" }),
            }}
        >
            {children}
        </Select>
    );
};
