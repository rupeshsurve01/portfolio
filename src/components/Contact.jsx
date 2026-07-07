import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Globe2,
  LoaderCircle,
  Mail,
  MapPin,
  Send,
  SendHorizonal,
  Sparkles,
  MessageCircleMore,
} from 'lucide-react';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    const firstName = form.querySelector('#firstName')?.value || '';
    const lastName = form.querySelector('#lastName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const isConfigured =
      emailjsConfig.serviceId &&
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      const mailtoLink = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  const infoCards = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.emails.primary,
      href: `mailto:${personalInfo.emails.primary}`,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.location,
      href: null,
    },
    {
      icon: BriefcaseBusiness,
      title: 'Availability',
      value: 'Open for freelance & full-time roles',
      href: null,
    },
    {
      icon: Clock3,
      title: 'Response Time',
      value: 'Usually within 24–48 hours',
      href: null,
    },
  ];

  const socialItems = [
    {
      label: 'GitHub',
      href: socialLinks.github,
      icon: Globe2,
    },
    {
      label: 'LinkedIn',
      href: socialLinks.linkedin,
      icon: Send,
    },
    {
      label: 'Instagram',
      href: socialLinks.instagram,
      icon: MessageCircleMore,
    },
    {
      label: 'Email',
      href: `mailto:${personalInfo.emails.primary}`,
      icon: Mail,
    },
  ].filter((item) => item.href);

  const buttonLabel =
    status === 'sending'
      ? 'Sending...'
      : status === 'success'
        ? 'Sent Successfully'
        : status === 'error'
          ? 'Try Again'
          : 'Send Message';

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen overflow-hidden border-t border-white/10 bg-[#0B0B0B] text-white"
      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.14),_transparent_26%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute right-[-8%] top-12 h-64 w-64 rounded-full bg-[#EF4444]/20 blur-3xl" />
        <div className="absolute bottom-[-5%] left-[10%] h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* Heading Section */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 pt-16 md:pt-20 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-[#EF4444]" />
            Let&apos;s build something great
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
            A polished way to start a conversation about product ideas, collaborations, or your next opportunity.
          </p>
        </motion.div>
      </div>

      {/* Form Section */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 md:px-10 lg:flex-row lg:gap-10 lg:pb-20">
        <motion.div
          data-aos="fade-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="w-full lg:w-[35%]"
        >
          <div className="rounded-[28px] border border-white/10 bg-white/8 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:sticky lg:top-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EF4444]/25 bg-[#EF4444]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FCA5A5]">
              <SendHorizonal className="h-3.5 w-3.5" />
              Reach me
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
              Let&apos;s create something thoughtful.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-[15px]">
              I&apos;m currently exploring new opportunities and exciting collaborations in modern web products, developer tools, and polished digital experiences.
            </p>

            <div className="mt-8 grid gap-3">
              {infoCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#EF4444]/30 hover:bg-white/10">
                    <div className="mt-0.5 rounded-xl border border-[#EF4444]/20 bg-[#EF4444]/10 p-2.5 text-[#FCA5A5]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">
                        {card.title}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white/90">
                        {card.value}
                      </p>
                    </div>
                  </div>
                );

                return card.href ? (
                  <a key={card.title} href={card.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={card.title}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#EF4444]/40 hover:bg-[#EF4444]/15 hover:text-white"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          data-aos="fade-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="w-full lg:w-[65%]"
        >
          <div className="rounded-[30px] border border-white/10 bg-white/10 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FCA5A5]">
                  Direct inquiry
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white sm:text-[1.7rem]">
                  Send a thoughtful note.
                </h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/65">
                Available for freelance and full-time work
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm font-medium text-white/80">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/50">
                    First name
                  </span>
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    placeholder="Your first name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#EF4444]/60 focus:bg-white/15 focus:ring-2 focus:ring-[#EF4444]/20"
                  />
                </label>

                <label className="block text-sm font-medium text-white/80">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/50">
                    Last name
                  </span>
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    placeholder="Your last name"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#EF4444]/60 focus:bg-white/15 focus:ring-2 focus:ring-[#EF4444]/20"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-white/80">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/50">
                  Email
                </span>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#EF4444]/60 focus:bg-white/15 focus:ring-2 focus:ring-[#EF4444]/20"
                />
              </label>

              <label className="block text-sm font-medium text-white/80">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/50">
                  Subject
                </span>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What are you looking to build?"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#EF4444]/60 focus:bg-white/15 focus:ring-2 focus:ring-[#EF4444]/20"
                />
              </label>

              <label className="block text-sm font-medium text-white/80">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/50">
                  Message
                </span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a bit about your idea, timeline, or goals..."
                  required
                  rows="6"
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#EF4444]/60 focus:bg-white/15 focus:ring-2 focus:ring-[#EF4444]/20"
                />
              </label>

              <div className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-[#090909]/75 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <input
                    type="checkbox"
                    id="permission"
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-[#EF4444] focus:ring-[#EF4444] focus:ring-offset-0 focus:ring-offset-transparent"
                    style={{ accentColor: '#EF4444' }}
                  />
                  <label htmlFor="permission" className="max-w-[280px] cursor-pointer leading-6">
                    I give permission to contact me at this email address.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`group inline-flex items-center justify-center gap-2 self-start rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 sm:self-auto ${
                    status === 'sending'
                      ? 'cursor-not-allowed border-white/10 bg-white/10 text-white/70'
                      : status === 'success'
                        ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
                        : status === 'error'
                          ? 'border-[#EF4444]/40 bg-[#EF4444]/15 text-[#FECACA] shadow-[0_0_30px_rgba(239,68,68,0.16)]'
                          : 'border-[#EF4444]/35 bg-[#EF4444] text-white shadow-[0_10px_30px_rgba(239,68,68,0.2)] hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#EF4444] hover:to-[#F43F5E] hover:shadow-[0_16px_40px_rgba(239,68,68,0.3)]'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      <span>{buttonLabel}</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{buttonLabel}</span>
                    </>
                  ) : status === 'error' ? (
                    <>
                      <CircleAlert className="h-4 w-4" />
                      <span>{buttonLabel}</span>
                    </>
                  ) : (
                    <>
                      <span>{buttonLabel}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-sm leading-7 text-white/60">
                Your message will be delivered directly to my inbox, and I typically reply within 24–48 hours.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
