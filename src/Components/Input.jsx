export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className='inputContainer'>
      {/* Add Right Logo */}
      <input
        data-testid='tcinput'
        size={size}
        type={type}
        onChange={onChange}
        className={`input ${variant}`}
      />
      <img
        data-testid='eyeimg'
        src={rightLogo}
        style={{ height: '20px', width: '20px' }}
        alt='eye'
        onClick={rightLogoOnClick}
      />
    </div>
  );
};
