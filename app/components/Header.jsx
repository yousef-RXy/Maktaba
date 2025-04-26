import { NavLink } from 'react-router';

import AuthButton from './AuthButton';

export default function Header() {
  const def = 'font-medium hover:text-[#ffa91e] transition ';
  const active = def + 'text-[#ffa91e]';
  const notActive = def + 'text-white';
  let isLogin = true;
  return (
    <nav className="sticky top-0 w-full bg-[#14213D] z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className="text-white font-bold text-xl font-serif px-3 py-1 rounded hover:no-underline"
          >
            Maktaba
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/manage"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Manage
          </NavLink>
        </div>

        {isLogin ? (
          <div className="flex items-center gap-4">
            <AuthButton
              text="Logout"
              className="border-[#dc3545] text-[#dc3545] hover:bg-[#dc3545]"
            />
            <NavLink to="/profile">
              <img
                src="https://oodie.eu/cdn/shop/files/ODI09742.jpg?v=1721095106&width=1946"
                alt="User"
                className="w-9 h-9 rounded-full object-cover"
              />
            </NavLink>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <AuthButton text="Login" />
            <AuthButton text="Register" />
          </div>
        )}
      </div>
    </nav>
  );
}
