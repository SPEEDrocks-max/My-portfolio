import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, id, rightIcon, leftIcon, containerClass, href, to, onClick }) => {
  const classes = `group z-10 relative w-fit cursor-pointer overflow-hidden px-7 rounded-full py-3 flex items-center justify-center gap-2 ${containerClass}`;

  const content = (
    <>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </>
  );

  // Renders a standard link for external URLs or mailto
  if (href) {
    const isMailTo = href.startsWith('mailto:');
    return (
      <a
        href={href}
        id={id}
        className={classes}
        target={isMailTo ? '_self' : '_blank'}
        rel={isMailTo ? '' : 'noopener noreferrer'}
      >
        {content}
      </a>
    );
  }

  // Renders a React Router link for internal navigation
  if (to) {
    return (
      <Link to={to} id={id} className={classes}>
        {content}
      </Link>
    );
  }

  // Renders a standard button for other actions
  return (
    <button id={id} className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
