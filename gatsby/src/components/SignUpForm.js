import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

const ErrorMessage = ({ message }) => {
  return (
    <p className="text-lg px-1 mt-1 text-red-500 inline-block">{message}</p>
  );
};

const SuccessMessage = () => (
  <p className="text-lg p-3 bg-light-300 border border-success text-success">
    Success. Check your inbox and confirm your email.
  </p>
);

function SignUpForm({ title }) {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    fetch('/api/subscribe', {
      method: 'post',
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(data);
    reset();
  };
  console.log(errors);
  const isLoading = false;
  // css classes for our UI
  const formClass = classNames({
    'flex items-center border bg-white border-gray-300 p-1 focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4': true,
    'bg-gray-100 border-gray-100': isLoading,
  });

  const inputClass = classNames({
    'appearance-none bg-white border-none w-full lg:text-lg text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none': true,
    'opacity-50 cursor-not-allowed': isLoading,
  });

  const btnClass = classNames({
    'flex-shrink-0 bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 lg:text-lg border-4 text-white py-1 px-5 lg:px-10': true,
    'opacity-50 cursor-not-allowed': isLoading,
  });

  return (
    <>
      <div>
        <h2 className="my-2 xl:my-4 2xl:my-6 p-1 text-xl xl:text-3xl 2xl:text-4xl leading-relaxed text-gray-600">
          {title}
        </h2>
        <SuccessMessage />
        <form className="max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className={formClass}>
            <input
              className={inputClass}
              type="text"
              name="email"
              ref={register({
                required: 'Email address is required',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Please enter a valid email address',
                },
              })}
              placeholder="Enter your email address"
              disabled={isLoading}
              aria-label="Email address"
            />
            <button type="submit" className={btnClass} disabled={isLoading}>
              {isLoading ? 'Processing' : 'Sign Up'}
            </button>
          </div>
          <ErrorMessage message={errors?.email?.message} />
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
