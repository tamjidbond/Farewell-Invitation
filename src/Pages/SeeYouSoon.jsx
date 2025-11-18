import React from "react";
import Footer from "./Footer";

const SeeYouSoon = () => {
    return (
        <div className="relative min-h-screen text-white overflow-hidden bg-[#0b0b0d] flex justify-center items-center px-4 sm:px-6">

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animate-gradient-slow opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,70,0.4),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_45%),radial-gradient(circle_at_50%_50%,rgba(150,0,30,0.3),transparent_50%)]"></div>

            {/* Floating Orbs */}
            <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-red-500/20 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-lg h-64 sm:h-lg bg-white/10 blur-3xl rounded-full animate-float-delayed"></div>

            {/* Centered Text */}
            <h1 className="relative z-10 text-center text-3xl sm:text-5xl font-bold text-pink-400">
                See you soon at the event....
            </h1>

            

        </div>
    );
};

export default SeeYouSoon;
