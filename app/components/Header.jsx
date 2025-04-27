import { NavLink, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import AuthButton from './AuthButton';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  const def = 'font-medium hover:text-[#ffa91e] transition ';
  const active = def + 'text-[#ffa91e]';
  const notActive = def + 'text-white';

  useEffect(() => {
    const id = localStorage.getItem('id');
    setIsLogin(!!id);

    const role = localStorage.getItem('role');
    if (role) {
      setIsAdmin(localStorage.getItem('role') === 'Admin');
    }
  }, [location]);

  return (
    <nav className="sticky top-0 w-full bg-[#14213D] z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className="text-white font-bold text-xl font-serif px-3 py-1 rounded hover:no-underline"
          >
            Maktaba
          </NavLink>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Links and Buttons */}
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute drop-shadow-2xl shadow-2xl top-full left-0 w-full bg-[#14213D] flex-col items-center gap-4 py-4 md:flex md:static md:flex-row md:bg-transparent md:w-auto md:py-0`}
        >
          {/* Navigation Links */}
          {isLogin ? (
            <div className="flex flex-col md:flex-row items-center gap-6">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                Home
              </NavLink>
              {isAdmin ? (
                <NavLink
                  to="/manage"
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  Manage
                </NavLink>
              ) : null}
              <NavLink to="/profile" className="md:hidden">
                profile
              </NavLink>
            </div>
          ) : null}

          {/* Auth Buttons */}
          {isLogin ? (
            <div className="items-center gap-4 mt-4 md:mt-0 hidden md:flex">
              {/* <AuthButton
                text="Logout"
                className="border-[#dc3545] text-[#dc3545] hover:bg-[#dc3545]"
              /> */}
              <NavLink to="/profile">
                <img
                  src="https://oodie.eu/cdn/shop/files/ODI09742.jpg?v=1721095106&width=1946"
                  alt="User"
                  className="w-9 h-9 rounded-full object-cover"
                />
              </NavLink>
            </div>
          ) : (
            <div className="flex md:flex-row flex-col items-center gap-4 mt-4 md:mt-0">
              <AuthButton text="Login" to="/auth?mode=login" />
              <AuthButton text="Register" to="/auth?mode=register" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
