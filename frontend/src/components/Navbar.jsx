import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice.js';
import { resetPatients } from '../features/patient/patientsSlice.js';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetPatients());
    navigate('/login');
  };

  return (
    <nav className="bg-linear-to-r from-teal-600 via-blue-600 to-blue-500 text-white p-4 flex justify-between items-center shadow-xl">
      <div className="flex items-center gap-2">
        <h1 className="font-extrabold text-2xl tracking-wide text-white drop-shadow-md hover:scale-105 transition-transform duration-300">
          ART Adherence Tracker
        </h1>
        {user && (
          <span className="ml-4 text-sm font-medium italic text-gray-100 opacity-90 hover:opacity-100 transition-opacity duration-300">
            Welcome, {user.name}
          </span>
        )}
      </div>

      {/* Menu */}
      <div className="flex gap-6 items-center font-semibold text-white">
        {user ? (
          <>
            {user.role === 'counselor' && (
              <Link
                to="/counselor"
                className="hover:text-teal-200 transition-colors duration-300"
              >
                
              </Link>
            )}
            {user.role === 'patient' && (
              <Link
                to="/dashboard"
                className="hover:text-teal-200 transition-colors duration-300"
              >
                
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-300 px-4 py-2 rounded text-sm font-medium transform hover:-translate-y-0.5"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="hover:text-teal-200 transition-colors duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
