/* eslint-disable @next/next/no-img-element */
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { motion } from "framer-motion";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import WishlistModal from "../../../../components/Dashboard/WishlistPage/WishlistModal";
import PasswordField from "../../../../components/Playground/PasswordField";
import MultiSelect from "../../../../components/Shared/MultiSelect";
import SelectField from "../../../../components/Shared/SelectField";
import TextAreaField from "../../../../components/Shared/TextAreaField";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import api from "./../../../../api/index";
import LodingAnimation from "./../../../../components/Shared/LodingAnimation/index";

const updateWish = {
  status: "",
  note: "",
};

const updateWishSchema = Yup.object({
  status: Yup.string().required("Status is required!"),
  note: Yup.string(),
});

function ViewWish() {
  const statusOptions = [
    { value: "wished", label: "Wished" },
    { value: "in progress", label: "In Progress" },
    { value: "closed", label: "Closed" },
    { value: "fulfilled", label: "Fulfilled" },
    { value: "rejected", label: "Rejected" },
  ];

  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const wishListId = router.query.id;
  const [loadingButton, setLoaadingButton] = useState(false)

  const { isLoading, data } = useQuery(
    ["get-single-wish", wishListId],
    () => api.get(`/api/wish/${wishListId}`),
    { enabled: !!wishListId }
  );
  const wishData = data?.data;
  console.log(wishData, "wish data .....")
 
  return (
    <>
      <DashboardLayout>
        <div className="min-h-screen ">
          {isLoading ? (
            <div className="flex items-center justify-center w-[100%] h-screen ">
              <LodingAnimation color="#E51937" height={50} width={50} />
            </div>
          ) : (
            <div className="">
              <div className="flex flex-col gap-4 sm:gap-5 xl:gap-[30px] lg:flex-row ">
                <div className="lg:basis-[56%]">
                  <WhiteCard>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="text-base leading-[21.79px] font-semibold text-[#000] sm:text-lg sm:leading-[24.51px]">
                          Wish Details
                        </div>
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          src="/assets/dashboard-wishlist/edit.svg"
                          alt="edit icon"
                          className="cursor-pointer"
                          onClick={() => setOpen(!isOpen)}
                        />
                      </div>
                      <div className="pt-4 sm:pt-5"></div>
                      <LabelText label="Requested By:" text={wishData?.user_name} />
                      <div className="pt-4 sm:pt-5"></div>
                      <LabelText
                        label="Title"
                        text={`${wishData?.wish_title}`}
                      />
                      <div className="pt-4 sm:pt-5"></div>
                      <div className="flex items-center justify-between">
                        <div>
                          <LabelText label="Content Type" text={`${wishData?.content_type}`} />
                          <div className="pt-4 sm:pt-5"></div>
                          <LabelText label="Status" text={`${wishData?.status}`} />
                        </div>
                        <div className="pt-4 sm:pt-5"></div>
                        <div>
                          <LabelText
                            label="Content Request"
                            text={`${wishData?.urgency}`}
                            className="w-[140px] 2xl:w-[170px] 3xl:w-[260px] 4xl:w-[345px]"
                          />
                          <div className="pt-4 sm:pt-5"></div>
                          <LabelText label="Revenue" text={`$ ${wishData?.revenue}`} />
                        </div>
                      </div>
                      <div className="pt-4 sm:pt-5"></div>
                      <LabelText
                        label="Description"
                        text={`${wishData?.needs_to}`}
                      />
                    </div>
                  </WhiteCard>
                </div>
                <div className="lg:basis-[42%]">
                  <WhiteCard>
                    <div>
                      <Formik
                        initialValues={updateWish}
                        validationSchema={updateWishSchema}
                        onSubmit={(value) => {
                          setLoaadingButton(true);
                            const updateData = {
                                status: value.status,
                                notes: value.note,
                            }
                            api.put(`/api/wish/${wishListId}`, updateData)
                            .then((res:any) => {
                                setLoaadingButton(false);
                            })
                        }}
                      >
                        {() => (
                          <Form>
                            <MultiSelect
                              name="status"
                              label="Status"
                              type="single"
                              height="55px"
                              inputClass=" border-[#E0E0E0]"
                              labelClass="!text-sm !leading-[19.07px]"
                              options={statusOptions}
                            />

                            <div className="pt-4 sm:pt-5"></div>
                            <TextAreaField
                              name="note"
                              label="Note"
                              height="200px"
                              placeholder="Type here..."
                              labelClass="!text-sm !leading-[19.07px]"
                            />
                            <div className="flex justify-end pt-4 sm:pt-5">
                              <button
                                className="h-[45px] leading-[45px] rounded-[4px] bg-primary text-base text-[#fff] hover:bg-[#890F21] transition-all duration-200 w-full sm:w-[129px]"
                                type="submit"
                              >
                                {loadingButton === true ? <div><LodingAnimation color="white" /></div> : "Update"}
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </WhiteCard>
                </div>
              </div>
              <div className="pt-4 sm:pt-5"></div>
              <NoteBoxLayout>
                <WhiteCard>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm sm:text-base sm:leading-[21.79px] font-semibold leading-[19.07px] text-[#000]">
                        Note
                      </div>
                      <div className="text-sm leading-[19.07px] text-[#676767]">
                       {wishData?.updatedAt}
                      </div>
                    </div>
                    <div className="pt-[5px]"></div>
                    <div className="text-xs sm:text-sm sm:leading-[19.07px] leading-[16.34px] text-[#000]">
                      {wishData?.notes}
                    </div>
                  </div>
                </WhiteCard>
              </NoteBoxLayout>
            </div>
          )}
        </div>
      </DashboardLayout>
      <WishlistModal
        handleModal={() => setOpen(!isOpen)}
        modalOpen={isOpen}
        type={"update"}
      />
    </>
  );
}

const LabelText = ({
  label,
  text,
  className,
}: {
  label: string;
  text: string;
  className?: string;
}) => (
  <div className={className}>
    <div className="text-sm sm:text-base sm:leading-[21.79px] font-semibold leading-[19.07px] text-[#000]">
      {label}
    </div>
    <div className="pt-[5px]"></div>
    <div className="text-xs sm:text-sm sm:leading-[19.07px] lg:text-base lg:leading-[21.79px] font-normal leading-[16.34px] text-[#000]">
      {text}
    </div>
  </div>
);

const WhiteCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={"bg-[#fff] rounded-[10px] p-5" + " " + className}>
    {children}
  </div>
);

const NoteBoxLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-4 sm:gap-5 xl:gap-[30px] lg:flex-row ">
    <div className="lg:basis-[56%]">{children}</div>
    <div className="lg:basis-[42%]"></div>
  </div>
);

export default ViewWish;
