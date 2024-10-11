"use client";
import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        company: "",
        reason: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement> & React.ChangeEvent<HTMLSelectElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setMessage((prevMessage) => ({ ...prevMessage, [name]: value }));
    };

    const options = {
        method: "POST",
        url: "/api/contact",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        data: {
            name: message.name,
            email: message.email,
            phone: message.phone,
            country: message.country,
            company: message.company,
            reason: message.reason,
            message: message.message,
        },
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios(options);
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setMessage({
                    name: "",
                    email: "",
                    phone: "",
                    country: "",
                    company: "",
                    reason: "",
                    message: "",
                });
                setStatus("success");
            } else {
                setStatus("error");
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
                    value={message.name}
                    onChange={handleChange}
                    required
                />

                <input
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Email*"
                    type="email"
                    name="email"
                    value={message.email}
                    onChange={handleChange}
                    required
                />

                <input
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Phone*"
                    type="number"
                    name="phone"
                    value={message.phone}
                    onChange={handleChange}
                />

                <input
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Country"
                    type="text"
                    name="country"
                    value={message.country}
                    onChange={handleChange}
                />

                <input
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Company"
                    type="text"
                    name="company"
                    value={message.company}
                    onChange={handleChange}
                />

                <select
                    className="border-2 p-2 w-full rounded-md"
                    name="reason"
                    value={message.reason}
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
                    <option>Other (Write It In Message)</option>
                </select>

                <textarea
                    className="border-2 w-full p-2 rounded-md "
                    placeholder="Your Message"
                    rows={4}
                    name="message"
                    value={message.message}
                    onChange={handleChange}
                    required
                />

                <div className="w-full mt-5 text-white">
                    {status === "success" ? (
                        <p className="text-center m-2">
                            Thank you for submitting your message. I will get back to you as
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

                    <button type="submit" className=" w-full bg-blue-600 py-1 rounded-md text-white font-semibold text-center">
                        {isLoading ? "Sending..." : "Submit"}
                    </button>
                </div>

            </div>
        </form>
    );
}

export default ContactForm;