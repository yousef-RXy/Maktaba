import clsx from 'clsx';
import React from 'react';

function AuthButton({ text, className }) {
  const styles =
    className ?? 'border-[#198754] text-green-400 hover:bg-[#198754]';
  return (
    <button
      className={clsx(
        'px-3 py-1 border rounded transition font-bold hover:text-white',
        styles
      )}
    >
      {text}
    </button>
  );
}

export default AuthButton;
