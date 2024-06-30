import React from "react"

import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactForm from "../components/ContactPage/ContactUsForm"


const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-9/12 justify-between gap-10 text-white flex-row">
        {/* Contact Details */}
        <div className="w-[50%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="[50%]">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact