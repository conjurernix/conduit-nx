/* Placeholder page generated using CoPilot */

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally you'd call an API here
    localStorage.setItem('token', 'fake-jwt-token');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Sign In</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered"
          required
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
