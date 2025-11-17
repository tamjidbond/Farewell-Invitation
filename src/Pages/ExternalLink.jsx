import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const ExternalLink = ({ to, children, ...props }) => {
  const isExternal = to.startsWith('http://') || to.startsWith('https://');

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return <RouterLink to={to} {...props}>{children}</RouterLink>;
};

export default ExternalLink;
