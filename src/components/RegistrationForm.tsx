'use client';
import { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateInputs = () => {
    const newErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    let valid = true;

    if (!inputs.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    const emailOk = /^\S+@\S+\.\S+$/.test(inputs.email);
    if (!emailOk) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (inputs.password.length < 8) {
      newErrors.password = 'Password is too short';
      valid = false;
    }

    if (inputs.password !== inputs.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateInputs()) {
      console.log('Registration successful!', inputs);
      // Registration logic
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as {
      name: keyof typeof inputs;
      value: string;
    };

    setInputs((prev) => ({ ...prev, [name]: value }));
    // clean up the error in the field I'm editing
    setErrors((prev) => (prev[name] ? { ...prev, [name]: '' } : prev));
  };

  return (
    <div className="mx-auto max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={inputs.username}
                  onChange={handleChange}
                  placeholder="janesmith"
                  className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
            {errors.username && (
              <div className="error mt-1 text-red-600">{errors.username}</div>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={inputs.email}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            {errors.email && (
              <div className="error mt-1 text-red-600">{errors.email}</div>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={inputs.password}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            {errors.password && (
              <div className="error mt-1 text-red-600">{errors.password}</div>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={inputs.confirmPassword}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            {errors.confirmPassword && (
              <div className="error mt-1 text-red-600">
                {errors.confirmPassword}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
