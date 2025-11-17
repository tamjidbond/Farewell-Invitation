import React from 'react';
import ExternalLink from './ExternalLink';

const Footer = () => {
    return (
        <div className="absolute bottom-6 sm:bottom-10 w-full text-center text-sm sm:text-base opacity-70">
            <ExternalLink
                to="https://tamjidbond-portfolio.netlify.app/"
                className="text-cyan-400 hover:underline"
            >
                &copy; Tamjid Bond
            </ExternalLink>
        </div>
    );
};

export default Footer;
