/* Placeholder page generated using CoPilot */

const Register = () => {
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally you'd call an API here
    localStorage.setItem('token', 'fake-jwt-token');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Sign Up</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered"
          required
        />
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
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
