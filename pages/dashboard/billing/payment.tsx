import { ReactNode } from "react";
import { useField, Formik, Form, FieldHookConfig, ErrorMessage } from "formik";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import * as Yup from "yup";

const initialBillingInfo = {
    email: "",
    country: "",
    address_line: "",
    city: "",
    state: "",
    zip: "",
};

const billingInfoSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    country: Yup.string().required("Country is required"),
    address_line: Yup.string().required("Address Line is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip Code is required"),
});

const initialPaymentMethod = {
    user_name: "",
    card_number: "",
    expire_date: "",
    cvc_number: "",
};

const paymentMethodSchema = Yup.object({
    user_name: Yup.string().required("Name is required"),
    card_number: Yup.string().required("Card Number is required"),
    expire_date: Yup.string().required("Expire Date is required"),
    cvc_number: Yup.string().required("CVC Number is required"),
});

function Payment() {
    return (
        <DashboardLayout>
            <div className="bg-[#fff] sm:bg-[#F8F8F8]">
                <div className="dashboard-container">
                    <div className="text-[24px] sm:text-left sm:px-0 leading-[32.68px] text-[#101010] text-center px-[45px] font-bold">
                        Billing Information & Payment
                    </div>
                    <div className="pt-[35px]"></div>
                    <div className="flex flex-col lg:flex-row gap-[35px]">
                        <div className="basis-1/2">
                            <ShadowCard>
                                <div className="text-[24px] leading-[32.68px] text-[#101010] font-bold">
                                    Billing Information
                                </div>
                                <div className="pt-[30px]"></div>
                                <div>
                                    <Formik
                                        initialValues={initialBillingInfo}
                                        validationSchema={billingInfoSchema}
                                        onSubmit={(value) => console.log(value)}
                                    >
                                        {() => (
                                            <Form>
                                                <InputField
                                                    name="email"
                                                    placeholder="example@mail.com"
                                                    type="email"
                                                    label="Email"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="country"
                                                    placeholder="Bangladesh"
                                                    type="text"
                                                    label="Address"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="address_line"
                                                    placeholder="Address Line"
                                                    type="text"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="city"
                                                    placeholder="City"
                                                    type="text"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="state"
                                                    placeholder="State"
                                                    type="text"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="zip"
                                                    placeholder="Zip"
                                                    type="text"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <ButtonField text="Save Now" />
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </ShadowCard>
                        </div>
                        <div className="basis-1/2">
                            <ShadowCard>
                                <div className="text-[24px] leading-[32.68px] text-[#101010] font-bold">
                                    Payment
                                </div>
                                <div className="pt-[30px]"></div>
                                <div>
                                    <Formik
                                        initialValues={initialPaymentMethod}
                                        validationSchema={paymentMethodSchema}
                                        onSubmit={(value) => console.log(value)}
                                    >
                                        {() => (
                                            <Form>
                                                <InputField
                                                    name="user_name"
                                                    placeholder="Your Name"
                                                    type="text"
                                                    label="Card on Name"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="card_number"
                                                    placeholder="1234 1234 1234 1234"
                                                    type="text"
                                                    label="Card Number"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <div className="flex gap-5 w-full">
                                                    <InputField
                                                        name="expire_date"
                                                        label="Expiry Date"
                                                        placeholder="6/24"
                                                        type="text"
                                                        className="basis-1/2"
                                                        required
                                                    />
                                                    <InputField
                                                        name="cvc_number"
                                                        label="CVC Number"
                                                        placeholder="123"
                                                        className="basis-1/2"
                                                        type="text"
                                                        required
                                                    />
                                                </div>
                                                <div className="pt-[30px]"></div>
                                                <ButtonField text="Update Payment Method" />
                                                <div className="pt-[30px]"></div>

                                                <div className="text-xs text-[#676767] font-semibold leading-[16.34px]">
                                                    By confirming your
                                                    subscription, you allow ODA
                                                    Center to charge your card
                                                    for this payment and future
                                                    payments in accordance with
                                                    their terms. You can always
                                                    cancel your subscription.
                                                    <span className="text-[#E51937]">
                                                        Secure Payment Guarantee
                                                    </span>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </ShadowCard>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

interface InputFieldType {
    label?: string;
}

function InputField(props: InputFieldType & FieldHookConfig<string>) {
    const [field, meta] = useField(props);
    return (
        <div className={props.className}>
            <label
                className="text-base text-[#000000] leading-[21.79px] font-semibold block"
                htmlFor={props.label}
            >
                {props.label}
            </label>
            {props.label && <div className="pt-[10px]"></div>}
            <input
                id={props.label}
                {...field}
                type={props.type}
                className={` ${
                    meta.touched && meta.error && "!border-error"
                } w-full bg-[#fff] text-sm placeholder:text-[#6D6D6D] border border-[#E0E0E0] h-[55px] focus:outline-none px-4 text-black rounded-[4px]`}
                placeholder={props.placeholder}
            />
            <ErrorMessage
                component="div"
                className=" text-error text-[14px]"
                name={field.name}
            />
        </div>
    );
}

function ButtonField({ text }: { text: string }) {
    return (
        <button
            type="submit"
            className="h-[58px] bg-[#E51937] font-bold w-full rounded-[4px] text-[16px] leading-[58px] text-[#FFFFFF]"
        >
            {text}
        </button>
    );
}

function SelectField() {
    return <div></div>;
}

function ShadowCard({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={
                "w-full rounded-[4px]  shadow-[2px_2px_16px_rgba(0,0,0,0.08)] p-[30px_24px] relative bg-[#fff]" +
                " " +
                className
            }
        >
            {children}
        </div>
    );
}

export default Payment;
