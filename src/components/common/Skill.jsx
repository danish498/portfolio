import React from 'react';

const Skill = ({ children }) => {
  return (
    <div>
      <p className='inline-block leading-6   text-gray-500 bg-gray-100  bg-gra rounded px-7 py-3 text-base font-semibold    shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'>
        {children}
      </p>
    </div>
  );
};

export default Skill;
