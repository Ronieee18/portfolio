import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      toast.loading("Submitting response",{id:'contact'})
      const response = await axios.post(import.meta.env.VITE_FORM, data);
      toast.success("Response Submitted",{id:'contact'})
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response && error.response.data.errors[0].message === "should be an email") {
        toast.error("Invalid email",{id:'contact'})
      } else {
        toast.error("error while submitting response,please try later",{id:'contact'})
      }
    }
  };

  return (
    <div id='contact'>
      <hr />
      <h1 className='text-center text-3xl font-semibold mb-2 tracking-wide'>Contact</h1>
      <div className='flex max-[875px]:justify-center max-[875px]:ml-3 flex-wrap gap-24 max-[783px]:gap-2 ml-16 mt-4'>
        <img src="contact.jpg" alt="" height={100} width={500} className='max-[1045px]:w-[330px]                  ' />
        <div className='mt-20 max-[875px]:mt-2'>
      <form onSubmit={handleSubmit(onSubmit)} method='POST'>
        <div>
          Name:
          <input
            type="text"
            className='p-1.5 m-2 ml-3 rounded-md w-[300px] border border-gray-600'
            name='name'
            {...register("name", { required: 'Your name is required' })}
          />
          {errors.name && <p className="text-red-500">*{errors.name.message}</p>}
        </div>
        <div>
          Email:
          <input
            type="text"
            className='p-1.5 rounded-md m-2 w-[300px] border border-gray-600'


            name='email'
            {...register("email", { required: 'Your email is required' })}
          />
          {errors.email && <p className="text-red-500">*{errors.email.message}</p>}
        </div>
        <p className='text-left'>Message:</p>
        <div>
          
          <textarea
            name="message"
            className='p-1.5 mx-2 my-1 w-[300px]  border border-gray-600'

            id=""
            cols="30"
            rows="5"
            {...register("message", { required: "Enter your message" })}
          ></textarea>
          {errors.message && <p className="text-red-500">*{errors.message.message}</p>}
        </div>
        <button className="p-3 w-full text-xl bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white" type='submit'>Submit</button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Contact;
