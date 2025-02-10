"use client";
import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    company: "",
    reason: "",
    formMessage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement> &
      React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };

//   const options = {
//     method: "POST",
//     url: "/api/sendemail",
//     headers: {
//       Accept: "application/json",
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: JSON.stringify(formData),
//   };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        console.log('check')
        const response = await axios.post('http://localhost:3000/api/sendemail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: 'recipient@example.com',
              subject: 'Test Email',
              message: 'Hello, this is a test email from Mailgun!',
            }),
          });
          console.log('2nd check')
        
        //   const result = await response.json();
        console.log('3rd check', response)

          if (response) {
            console.log('Email sent:', response);
          } else {
            console.error('Failed to send email:', response);
          }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex items-center justify-center gap-4 flex-col px-5 sm:px-8 ">
        <input
          className="border-2 w-full p-2 rounded-md"
          placeholder="Name*"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="border-2 w-full p-2 rounded-md"
          placeholder="Email*"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          className="border-2 w-full p-2 rounded-md"
          placeholder="Phone*"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          className="border-2 w-full p-2 rounded-md"
          placeholder="Country"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />

        <input
          className="border-2 w-full p-2 rounded-md"
          placeholder="Company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />

        <select
          className="border-2 p-2 w-full rounded-md"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        >
          <option className="">Select Reason For Contacting</option>
          <option>Job or career inquiries</option>
          <option>Quote or proposal request</option>
          <option>Technical assistance or support</option>
          <option>Collaboration or partnership opportunities</option>
          <option>Feedback or suggestions</option>
          <option>Invitations to speak or participate</option>
          <option>Questions about qualifications or portfolio</option>
          <option>Permission to use work or content</option>
          <option>General inquiries or questions.</option>
          <option>Other (Write It In formData)</option>
        </select>

        <textarea
          className="border-2 w-full p-2 rounded-md "
          placeholder="Your message"
          rows={4}
          name="formMessage"
          value={formData?.formMessage}
          onChange={handleChange}
          required
        />

        <div className="w-full mt-5 text-white">
          {status === "success" ? (
            <p className="text-center m-2">
              Thank you for submitting your formData. I will get back to you as
              soon as possible.
            </p>
          ) : (
            ""
          )}
          {status === "error" ? (
            <p className="text-center m-2">
              Oops, there was an error submitting the form. Please try again
              later.
            </p>
          ) : (
            ""
          )}

          <button
            type="submit"
            className=" w-full bg-blue-600 py-1 rounded-md text-white font-semibold text-center"
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
