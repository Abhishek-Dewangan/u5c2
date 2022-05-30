import React, { useState } from 'react';

export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  const [text, settext] = useState('');
  const [typeof1, settypeof1] = useState(true);
  const handleclick = () => {
    rightLogo = true;
  };

  return (
    <div className='inputContainer'>
      {/* Add Right Logo */}
      <input
        data-testId='inputBox'
        clasonchangesName={`input`}
        type={typeof1 ? 'password' : 'text'}
        placeholder={'Enter Something here'}
        style={{
          fontSize:
            size === 'lg'
              ? '50px'
              : size === 'sm'
              ? '30px'
              : size === 'md' && '20px',

          variant:
            variant === 'flushed'
              ? 'flushed'
              : variant === 'outline'
              ? 'outline'
              : variant === 'filled' && 'filled',
          padding: '30px',
        }}
        onChange={(e) => {
          settext(e.target.value);
          onChange(text);
        }}
      />
      <img
        data-testId='eye'
        onClick={() => {
          settypeof1(!typeof1);
          rightLogoOnClick(typeof1);
        }}
        height={'50px'}
        src={rightLogo}
        alt='eye'
      />
    </div>
  );
};
