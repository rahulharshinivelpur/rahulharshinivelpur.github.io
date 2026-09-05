"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #000000 100%)" }}
    >
      {/* Top border */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 py-24 px-6 text-center">
        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <span
            className="text-5xl"
            style={{ color: "#C9A84C", opacity: 0.4 }}
          >
            ✦
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="tracking-[0.3em] text-xs mb-8"
          style={{ color: "#C9A84C", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          NOVEMBER 2026 · TEXAS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="gold-text"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 400,
            letterSpacing: "0.06em",
            lineHeight: 1.1,
          }}
        >
          See You
          <br />
          in Texas
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p
            className="mt-6 text-2xl"
            style={{ color: "#C9A84C" }}
          >
            ❤️
          </p>

          <div className="section-divider mt-6 mb-6" />

          <p
            className="italic text-xl"
            style={{ color: "#E8D5A3", fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Rahul &amp; Harshu
          </p>
          <p
            className="mt-2 italic"
            style={{ color: "rgba(201,168,76,0.5)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Two hearts. One forever.
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-wrap justify-center gap-6"
        >
          {[
            { label: "Our Story", href: "#story" },
            { label: "Events", href: "#events" },
            { label: "RSVP", href: "#rsvp" },
            { label: "Venue", href: "#venue" },
            { label: "Travel", href: "#travel" },
            { label: "Gallery", href: "#gallery" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] transition-opacity duration-200 hover:opacity-100"
              style={{
                color: "rgba(201,168,76,0.4)",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                textDecoration: "none",
              }}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-14 text-xs"
          style={{
            color: "rgba(201,168,76,0.2)",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.1em",
          }}
        >
          Made with ❤️ for Rahul &amp; Harshu · 2026
        </motion.p>
      </div>
    </footer>
  );
}
