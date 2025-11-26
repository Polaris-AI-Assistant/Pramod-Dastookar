import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiBriefcase } from "react-icons/fi";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

/**
 * Contact2 — Nova style (brand‑new look)
 *
 * Design goals
 * - Distinct from previous: crisp mono + violet accent, soft glass in dark, soft shadow in light
 * - Two‑panel layout: left = pitch + methods, right = form card
 * - Floating labels, pill chips, subtle gradients, tasteful motion
 * - Full light/dark theming via Tailwind `dark:`
 */

// Section background: cream matching website theme
const sectionBg =
  "relative py-18 sm:py-24 bg-[#FAF9F6]";

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const card =
  "relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(166,130,41,0.1)] ring-1 ring-amber-900/10";

const label = "text-sm font-medium text-gray-700";
const input =
  "peer block w-full rounded-xl border border-gray-300 bg-white px-4 pt-5 pb-2 text-[15px] text-gray-900 placeholder-transparent outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/30";
const textArea = `${input} resize-y min-h-[120px]`;

const floatLabel =
  "pointer-events-none absolute left-3 top-3 z-10 origin-left -translate-y-1 text-[13px] text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-1 peer-focus:text-[13px] peer-focus:text-amber-600";

const btn =
  "group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-600 to-amber-500 px-5 py-3 font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:from-amber-700 hover:to-amber-600 active:scale-[.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40";

const pill =
  "inline-flex items-center gap-2 rounded-full border border-amber-900/20 bg-amber-50 px-3 py-1.5 text-sm text-amber-900 shadow-sm transition hover:border-amber-900/30 hover:bg-amber-100";

const methods = [
  {
    icon: FiMail,
    title: "Email",
    lines: ["dastoorkarpp@bvuniversity.edu.in", "pramoddastoorkar@yahoo.com"],
  },
  {
    icon: FiPhone,
    title: "Phone",
    lines: ["+91 20-30253500, Ext. 1093"],
  },
  
];

function useDemoSubmit() {
  const [loading, setLoading] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setOk(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setOk(false), 2200);
  };
  return { loading, ok, submit };
}

export default function Contact2() {
  const { loading, ok, submit } = useDemoSubmit();
  return (
    <section className={`${sectionBg} ${playfairDisplay.variable}`}>
      <div className={container}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* LEFT: pitch + methods */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-pretty text-4xl font-extrabold tracking-tight sm:text-5xl" style={{
              color: '#A68229',
              fontFamily: 'var(--font-playfair)'
            }}>
              Connect & Collaborate 
            </h2>
            <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-gray-700" style={{
              fontFamily: 'system-ui, sans-serif'
            }}>
              Have a question, collaboration idea, or want to explore mentorship or institutional partnerships? Reach out directly — always open for meaningful connections.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className={pill}>Career Mentorship</span>
              <span className={pill}>Institutional Partnerships</span>
              <span className={pill}>Placement Support</span>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-row-2 lg:grid-row-2">
              {methods.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="group relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-md border border-amber-200/30 p-4 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-100 to-amber-50 text-amber-600 ring-1 ring-amber-200/50">
                      <m.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1" style={{
                        fontFamily: 'var(--font-playfair)'
                      }}>
                        {m.title}
                      </p>
                      {m.lines.map((l) => (
                        <p
                          key={l}
                          className="text-sm font-medium text-gray-800 leading-tight truncate"
                          style={{
                            fontFamily: 'system-ui, sans-serif'
                          }}
                          title={l}
                        >
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Partnerships & Placements Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-6 rounded-xl bg-amber-50/50 border border-amber-200/40 p-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-100 to-amber-50 text-amber-600 ring-1 ring-amber-200/50">
                  <FiBriefcase className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-amber-900 mb-1" style={{
                    fontFamily: 'var(--font-playfair)'
                  }}>
                    Partnerships & Placements
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed" style={{
                    fontFamily: 'system-ui, sans-serif'
                  }}>
                    For institutional, placement or training collaborations, contact via the email above or via BVU-COEP TPO office.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className={`${card} p-6 sm:p-8 lg:p-10`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight" style={{
                    color: '#A68229',
                    fontFamily: 'var(--font-playfair)'
                  }}>
                    Send us a message
                  </h3>
                  <p className="mt-1 text-sm text-gray-600" style={{
                    fontFamily: 'system-ui, sans-serif'
                  }}>
                    We'll get back to you soon.
                  </p>
                </div>
                <span className="hidden rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-200 sm:block">
                  Available
                </span>
              </div>

              <form
                onSubmit={submit}
                className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                {/* Name */}
                <div className="relative">
                  <input id="name" placeholder="Your name" className={input} />
                  <label htmlFor="name" className={floatLabel}>
                    Your name
                  </label>
                </div>
                {/* Email */}
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className={input}
                  />
                  <label htmlFor="email" className={floatLabel}>
                    Email
                  </label>
                </div>
                {/* Phone */}
                <div className="relative">
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    className={input}
                  />
                  <label htmlFor="phone" className={floatLabel}>
                    Phone
                  </label>
                </div>
                {/* Company */}
                <div className="relative">
                  <input id="company" placeholder="Company" className={input} />
                  <label htmlFor="company" className={floatLabel}>
                    Company
                  </label>
                </div>
                {/* Message */}
                <div className="relative sm:col-span-2">
                  <textarea
                    id="message"
                    placeholder="Message"
                    className={textArea}
                  />
                  <label htmlFor="message" className={floatLabel}>
                    Message
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" className={btn} disabled={loading}>
                    {loading ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="opacity-25"
                          />
                          <path
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            fill="currentColor"
                            className="opacity-75"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <svg
                          className="h-4 w-4 transition group-hover:translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M13.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L17.586 12l-4.293-4.293a1 1 0 010-1.414z" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* toast */}
              <motion.div
                initial={false}
                animate={ok ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                className="pointer-events-none absolute right-4 top-4"
              >
                <div className="rounded-lg bg-amber-600 px-3 py-2 text-sm font-medium text-white shadow-lg ring-1 ring-white/20">
                  Message sent ✅
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
