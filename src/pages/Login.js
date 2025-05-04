import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use environment variables for email and password
    const envEmail = process.env.REACT_APP_LOGIN_EMAIL;
    const envPassword = process.env.REACT_APP_LOGIN_PASSWORD;
    if (email === envEmail && password === envPassword) {
      console.log('Login successful');
      window.location.href = 'https://alist.mutse.top'; // Redirect to external website
    } else {
      console.log('Invalid email or password');
    }
  };

  return (
    <div className="container mx-auto text-center py-20">
      <h2 className="text-4xl mb-4">Login Page</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
