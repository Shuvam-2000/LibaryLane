import { useForm } from "react-hook-form"
import { useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios'

const ContactUs = () => {

  // state for handling error message
  const [errorMessage, setErrorMessage] = useState(''); 
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handling contact us form submission
  const onSubmit = async (data) => {
    try {
      await axios.post('https://libarylane-server.onrender.com/userContact/contactinfo', data)
      reset()
      toast.success('We will get back to you soon')
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  }

  return (
    <div className="min-h-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 sm:gap-6 gap-4 text-gray-700 border border-gray-300 rounded-lg shadow-lg p-6">
        <div className="inline-flex items-center gap-2 mb-2 mt-6">
          <p className="font-mono sm:text-2xl text-sm">Get In Touch <span className="text-red-600">With Us</span></p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {/* Display error message if any */}
        {errorMessage && (
          <p className="text-xs text-red-500 mb-2">{errorMessage}</p>
        )}

        {/* FullName Validation */}
        <input
          type="text"
          className={`w-full px-3 sm:py-2 text-xs py-1 border hover:border-black rounded-lg mt-2 ${errors.username ? "border-red-500" : "border-gray-400"}`}
          placeholder="Enter Your FullName"
          {...register("fullname", {
            required: "FullName is Required",
            minLength: { value: 4, message: "Min length should be at least 4" },
            maxLength: { value: 20, message: "Max length should be at least 10" },
          })}
        />
        {errors.fullname && (
          <p className="text-xs justify-start m-30 mt-1 text-red-500">{errors.fullname.message}</p>
        )}

        {/* Email Validation */}
        <input
          type="text"
          className={`w-full px-3 sm:py-2 text-xs py-1 border hover:border-black rounded-lg mt-2 ${errors.email ? "border-red-500" : "border-gray-400"}`}
          placeholder="Enter Your Email"
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-xs justify-start m-30 mt-1 text-red-500">{errors.email.message}</p>
        )}

        {/* Message Validation */}
        <textarea
          className={`w-full px-3 sm:py-2 text-xs py-1 border hover:border-black rounded-lg mt-2 ${
            errors.message ? "border-red-500" : "border-gray-400"
          }`}
          rows="4"
          placeholder="Enter Your Message"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message should be at least 10 characters long",
            },
            maxLength: {
              value: 200,
              message: "Message should not exceed 200 characters",
            },
          })}
        ></textarea>
        {errors.message && (
          <p className="text-xs justify-start m-30 mt-1 text-red-500">{errors.message.message}</p>
        )}

        {/* Submit Button */}
        <button type="submit" className="bg-[#f21c1c] text-white font-mono sm:px-10 sm:py-2 px-12 py-1 mt-4 rounded-lg hover:bg-red-600 transition-all">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactUs
