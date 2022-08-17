import React from "react";
import { Formik } from "formik";

function FormikForm() {
    return (
        <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                    const errors: any = {};
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = "Invalid email address";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
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
                        <input
                            type="email"
                            name="email"
                            className="w-full text-sm placeholder:text-[#6D6D6D] border border-[#E0E0E0] h-[55px] focus:outline-none px-4 rounded-[4px]"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="example@mail.com"
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            className="w-full text-sm placeholder:text-[#6D6D6D] border border-[#E0E0E0] h-[55px] focus:outline-none px-4 rounded-[4px]"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="12345678"
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default FormikForm;
