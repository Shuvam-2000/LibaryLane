import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
// import { useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios'

const Login = () => {

    // state for handling error message
    // const [ errorMessage, setErrorMessage ] = useState('');

    const navigate =useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    // hanlding of the form submission
    const onSubmit = async (data) => {
        try {
          // Make the Post request with form data for user login
          await axios.post(import.meta.env.VITE_USER_LOGIN_API, data, {
            withCredentials: true,
          });
          reset()
          navigate('/')
          toast.success('Login SuccessFull')
        } catch (error) {
          // Set Error message if login request fails
          if(error.message){
            // setErrorMessage(error.response.data.message || "Error login")
            toast.error(error.response.data.message || "Error login")
          }else{
            // setErrorMessage("An unexpected error occurred. Please try again later.");
            toast.error('An unexpected error occurred. Please try again later.')
          }
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-16 gap-4 text-gray-700 border border-gray-300 rounded-lg shadow-lg sm:p-8 p-6">
      <div className="inline-flex items-center gap-2 mb-2 mt-6">
        <p className="font-mono text-3xl">Login</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Email Validation */}
      <input
        type="text"
        className={`w-full px-3 sm:py-2 text-xs py-1 border hover:border-black rounded-lg mt-2 ${errors.email ? "border-red-500": "border-gray-400"}`}
        placeholder="Enter Your Email"
        {...register("email",{
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

      {/* password validation */}
      <input
        type="text"
        className={`w-full px-3 sm:py-2 py-1 text-xs border hover:border-black rounded-lg mt-2 ${errors.password ? "border-red-500" : "border-gray-400"}`}
        placeholder="Enter Your Password"
        {...register("password", {
          required: "Password is Required",
          minLength: {value: 4, message: "Min length should be at least 4"},
          maxLength: {value: 10, message: "Max length should be at least 10"},
          pattern:{
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
            message: "Password must be one letter and one number",
          }
        })}
      />
      {errors.password && (
        <p className="text-xs justify-start mt-2 mb-1 text-red-500">{errors.password.message}</p>
      )}

      <div className="w-full flex justify-between text-xs mt-[-8px] cursor-pointer">
        <p
          className="hover:text-[#f21c1c]"
        >
          Forgot Password?
        </p>
        <p
          onClick={() => navigate('/signup')}
          className="cursor-pointer hover:text-[#f21c1c]"
        >
          Create Your Account
        </p>
      </div>
      <button disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} className="bg-[#f21c1c] text-white font-mono px-10 py-2 mt-4 rounded-lg hover:bg-red-600 transition-all">
        Login
      </button>
    </form>
  )
}

export default Login
