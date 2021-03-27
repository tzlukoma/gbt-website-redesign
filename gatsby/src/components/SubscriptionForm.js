import React from 'react';
import { useForm } from 'react-hook-form';

function SubscriptionForm() {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="flex justify-evenly">
        <form
          className="w-full"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label id="first_name" className="text-xl mr-5">
            Name
          </label>
          <input
            type="text"
            aria-label="Your name"
            name="first_name"
            ref={register({ required: 'Name is required' })}
            placeholder="Enter your name"
            data-testid="name"
            className="mr-5 mb-3 p-3 bg-white text-gray-800 w-full xl:w-1/4 text-md"
          />
          <label id="email" className="text-xl mr-5">
            Email
          </label>
          <input
            type="text"
            aria-label="Your email address"
            name="email"
            ref={register({
              required: 'Email address is required',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Please enter a valid email address',
              },
            })}
            placeholder="Enter your email address"
            data-testid="email"
            className="mr-5 mb-3 p-3 bg-white text-gray-800 w-full xl:w-1/4 text-md"
          />

          <button
            type="submit"
            className="text-white bg-primary-500 font-serif mt-0 py-3 px-6 text-xl w-full xl:w-1/4"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="flex md:inline-block mt-5">
        {errors.first_name && (
          <div className="mb-5 mr-5  text-red-600 ">
            {errors.first_name.message}
          </div>
        )}
        {errors.email && (
          <div className="mb-5 mr-5  text-red-600 ">{errors.email.message}</div>
        )}
      </div>
    </>
  );
}

export default SubscriptionForm;
