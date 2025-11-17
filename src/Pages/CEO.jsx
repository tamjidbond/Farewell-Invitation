import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";


const CEO = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setShowConfetti(false), 12000);
    return () => clearTimeout(fadeTimer);
  }, []);

  const guestName = "Honorable CEO — Md. Monir Hosen Sir";
  const eventDate = "26 November 2025";
  const eventTime = "12:00 PM";
  const eventLocation = "Seminar Hall, Campus-2";
  const batchName = "IAW2501 — Front End Development With React";

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-[#0b0b0d]">

      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            key="confetti"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="absolute inset-0"
          >
            <Confetti
              numberOfPieces={300}
              gravity={0.08}
              wind={0.002}
              friction={0.99}
              colors={["#ffffff","#ffdddd","#ff0000","#ff4d4d","#0000ff","#00ff00","#ffff00","#ffa500","#800080","#00ffff","#ffc0cb","#808080","#8b4513","#008000","#000080","#ff69b4","#f0e68c","#4b0082","#ffd700","#40e0d0"]}
              recycle={true}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient-slow opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,70,0.4),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_45%),radial-gradient(circle_at_50%_50%,rgba(150,0,30,0.3),transparent_50%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-red-500/20 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-lg h-64 sm:h-lg bg-white/10 blur-3xl rounded-full animate-float-delayed"></div>

      {/* Main Invitation */}
      <main className="relative z-10 w-full flex justify-center items-center min-h-screen px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-12 shadow-[0_16px_60px_rgba(255,0,80,0.3)] max-w-md sm:max-w-3xl w-full hover:shadow-[0_20px_80px_rgba(255,0,80,0.5)] transition-shadow duration-500"
        >
          <div className="text-left leading-relaxed text-base sm:text-lg px-2 sm:px-4">

            <p className="text-pink-400 text-lg sm:text-xl font-semibold mb-4">
              {guestName},
            </p>

            <p className="mb-4 opacity-90 text-gray-300">
              It is our great pleasure to invite you to the Farewell Ceremony of <span className="font-semibold text-teal-400">{batchName}</span>. The event is organized to celebrate our journey and achievements.
            </p>

            <p className="mb-4 opacity-90 text-gray-300">
              Your esteemed presence would be a great honor for us.
            </p>

            <div className="mt-6 space-y-2 font-medium text-gray-100">
              <p>📅 Date: <span className="text-cyan-400">{eventDate}</span></p>
              <p>⏰ Time: <span className="text-cyan-400">{eventTime}</span></p>
              <p>📍 Venue: <span className="text-cyan-400">{eventLocation}</span></p>
            </div>

            <p className="mt-8 opacity-90 text-gray-300">
              We look forward to welcoming you.
            </p>

            <p className="mt-6 font-semibold text-pink-400">
              Warm Regards,<br />IAW2501
            </p>
          </div>
        </motion.div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default CEO;
