import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',  // 'primary' | 'outline' | 'ghost'
  size = 'md',          // 'sm' | 'md' | 'lg'
  onClick,
  href,
  target,
  rel,
  disabled = false,
  className = '',
  ...props
}) => {
  const classes = ['vbtn', `vbtn--${variant}`, `vbtn--${size}`, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a className={classes} href={href} target={target} rel={rel} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
