import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import CountryCode from "../../data/countrycode.json"
import { apiConnector } from "../../services/apiconnector"
import { contactusEndpoint } from "../../services/apis"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    console.log("Form Data - ", data)
    try {
      setLoading(true)
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      )
      console.log("Email Res - ", res)
      setLoading(false)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <form
      className="flex flex-col gap-7 mb-10 "
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="flex gap-5 flex-row">
        <div className="flex flex-col gap-2 w-[48%]">
          <label htmlFor="firstname" className="mb-1 text-[0.875rem] leading-[1.375rem] text-emerald-300 ">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="w-full rounded-[0.5rem] bg-blue-700 p-[12px]  text-emerald-200"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your name.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-[48%]">
          <label htmlFor="lastname" className="mb-1 text-[0.875rem] leading-[1.375rem] text-emerald-300">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="w-full rounded-[0.5rem] bg-blue-700 p-[12px]  text-emerald-200"
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="mb-1 text-[0.875rem] leading-[1.375rem] text-emerald-300">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="w-full rounded-[0.5rem] bg-blue-700 p-[12px]  text-emerald-200"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Email address.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="mb-1 text-[0.875rem] leading-[1.375rem] text-emerald-300">
          Phone Number
        </label>

        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2">
            <select
              type="text"
              name="dropdown"
              id="dropdown"
              placeholder="Enter first name"
              className="w-full rounded-[0.5rem] bg-blue-700 p-[12px]  text-emerald-200"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code} className=" bg-blue-700 text-emerald-200">
                    {ele.code} -{ele.country}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="w-full rounded-[0.5rem] bg-blue-700 p-[12px]  text-emerald-200"
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please enter your Phone Number.",
                },
                maxLength: { value: 12, message: "Invalid Phone Number" },
                minLength: { value: 10, message: "Invalid Phone Number" },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="mb-1 text-[0.875rem] leading-[1.375rem] text-emerald-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message here"
          className="w-full rounded-[0.5rem] bg-blue-700 p-[12px]  text-emerald-200"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Message.
          </span>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-green-300 py-[8px] px-[12px] font-medium"
        >
        Send Message
      </button>
    </form>
  )
}

export default ContactUsForm