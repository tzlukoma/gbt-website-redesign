import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import classNames from 'classnames';

const ErrorMessage = ({ message }) => {
  return (
    <p className="text-lg px-1 mt-1 text-red-500 inline-block">{message}</p>
  );
};

const SuccessMessage = ({ handleReset }) => (
  <p className="flex justify-between text-lg p-3 bg-light-300 border border-success text-success">
    <span>Success. Check your inbox and confirm your email.</span>
    <span className="self-center flex mr-1">
      <button
        onClick={() => handleReset()}
        className="bg-success text-white rounded-full h-4 w-4 mt-auto ml-1 hover:bg-red-500 transition-colors duration-200"
      >
        <svg
          className="self-center flex mr-2 bg-primary-200 hover:bg-red-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="1rem"
          height="1rem"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </span>
  </p>
);

function SignUpForm({ title }) {
  const { register, handleSubmit, errors, reset } = useForm();

  async function subscribe(data) {
    try {
      const response = fetch('/api/subscribe', {
        method: 'post',
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  const mutation = useMutation((data) => subscribe(data));

  const onSubmit = (data) => {
    mutation.mutate(data);
    reset();
  };
  // css classes for our UI
  const formClass = classNames({
    'flex items-center border bg-white border-gray-300 p-1 focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4': true,
    'bg-gray-100 border-gray-100': mutation.isLoading,
  });

  const inputClass = classNames({
    'appearance-none bg-white border-none w-full lg:text-lg text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none': true,
    'opacity-50 cursor-not-allowed': mutation.isLoading,
  });

  const btnClass = classNames({
    'flex-shrink-0 bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 lg:text-lg border-4 text-white py-1 px-5 lg:px-10': true,
    'opacity-50 cursor-not-allowed': mutation.isLoading,
  });

  return (
    <>
      <div>
        <h2 className="my-2 xl:my-4 2xl:my-6 p-1 text-xl xl:text-3xl 2xl:text-4xl leading-relaxed text-gray-600">
          {title}
        </h2>
        {mutation.isSuccess && <SuccessMessage handleReset={mutation.reset} />}

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
              disabled={mutation.isLoading}
              aria-label="Email address"
              data-testid="email"
            />
            <button
              type="submit"
              className={btnClass}
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? 'Processing' : 'Sign Up'}
            </button>
          </div>
          <ErrorMessage message={errors?.email?.message} />
          {mutation.isError && <ErrorMessage message={mutation.error} />}
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
