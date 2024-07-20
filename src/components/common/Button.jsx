import React from 'react';

const Button = ({ children, className, loading, onClick, type, ...props }) => {
  return (
    <button
      type={type}
      className={` ${className} bg-mediumturquoise transform transition hover:-translate-y-0.5 ease-in duration-300 outline-none font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 ${
        loading ? 'cursor-not-allowed opacity-50' : ''
      }`}
      onClick={onClick}
      disabled={loading}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
