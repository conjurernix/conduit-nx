import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header className="h-[50px] mx-52 py-3 select-none">
      <div className="flex flex-row justify-between">
        <div>
          <Link to="/" className="text-lg font-bold">
            Conduit
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <span className="cursor-pointer hover:underline" onClick={goHome}>
            Home
          </span>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/register" className="hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};
