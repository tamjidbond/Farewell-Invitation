import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="absolute bottom-6 sm:bottom-10 w-full text-center text-sm sm:text-base opacity-70">

            <Link
                href="https://tamjidbond-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
            >
                &copy;  Tamjid Bond
            </Link>
        </footer>
    );
};

export default Footer;