// Contact.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

//============== UI COMPONENTS & HOOKS (SELF-CONTAINED) ==============
// --- Custom Hook untuk Animasi Gulir ---
const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

// --- Komponen AnimatedSection ---
interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
}) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section
      ref={ref}
      id={id}
      className={`py-24 group ${className} ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </section>
  );
};

// --- Komponen SectionHeader ---
const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div
    className="text-center mb-16 child-animate"
    style={{ transitionDelay: '100ms' }}
  >
    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-100 uppercase tracking-wider">
      {title}
    </h2>
    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded"></div>
  </div>
);

// --- Komponen Card ---
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div
    className={`bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500 transition-all duration-300 ease-in-out group backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

// --- Komponen Button ---
interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  className,
  onClick,
  type = 'button',
  variant = 'primary',
  icon,
  disabled = false,
}) => {
  const primaryClasses =
    'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/20';
  const secondaryClasses =
    'bg-purple-600 text-white hover:bg-purple-500 shadow-purple-500/20';
  const baseClasses = `inline-flex items-center justify-center gap-2 px-7 py-3 text-base font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 ${variant === 'primary' ? 'focus:ring-blue-400' : 'focus:ring-purple-400'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (to)
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}
      >
        {content}
      </Link>
    );
  if (href)
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

// --- Komponen SocialIcons ---
const SocialIcons: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center space-x-6 ${className}`}>
    <a
      href="https://github.com/Farras8"
      aria-label="Github"
      className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
    >
      <Github size={24} />
    </a>
    <a
      href="https://www.linkedin.com/in/muhammad-farras-yasyfa-89a0b12a6"
      aria-label="LinkedIn"
      className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
    >
      <Linkedin size={24} />
    </a>
    <a
      href="https://www.instagram.com/farrasyasyfa/"
      aria-label="Instagram"
      className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
    >
      <Instagram size={24} />
    </a>
  </div>
);

//============== KOMPONEN KONTAK ==============
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // Cek jika field kosong
    const formData = new FormData(form.current);
    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
      alert('Please fill in all fields before sending.');
      return;
    }

    setStatus('loading');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          if (form.current) form.current.reset(); // Reset form setelah berhasil
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
        }
      );
  };

  const getButtonText = () => {
    switch (status) {
      case 'loading': return 'Sending Transmission...';
      case 'success': return 'Message Sent!';
      case 'error': return 'Failed, Try Again';
      default: return 'Send Transmission';
    }
  };

  return (
    <>
      <style>
        {`.font-orbitron { font-family: 'Orbitron', sans-serif; }
          .group.is-visible .child-animate {opacity: 1; transform: translateY(0);}
          .child-animate {opacity: 0; transform: translateY(30px); transition: opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);}`}
      </style>
      <AnimatedSection id="contact" className="bg-gray-900/70 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Contact Me"
            subtitle="Ready to start a new mission? Send your coordinates."
          />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Kolom Kiri: Info dan Pesan */}
            <div className="child-animate space-y-8" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-4xl font-orbitron font-bold text-white">
                Let's Build Something Legendary.
              </h3>
              <p className="text-gray-400 text-lg">
                Whether you have a question, a proposal, or just want to say
                hello, my inbox is always open. I'm currently available for
                freelance opportunities and ready to join your quest.
              </p>
              <div className="space-y-4">
                <a href="mailto:mfarras2004@gmail.com" className="flex items-center p-4 rounded-lg bg-gray-800/60 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300">
                  <Mail className="w-7 h-7 mr-4 text-blue-400" />
                  <div>
                    <span className="text-gray-400 text-sm">Email Me</span>
                    <span className="block text-white font-semibold">
                      mfarras2004@gmail.com
                    </span>
                  </div>
                </a>
                <a href="tel:+6281314935717" className="flex items-center p-4 rounded-lg bg-gray-800/60 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300">
                  <Phone className="w-7 h-7 mr-4 text-blue-400" />
                  <div>
                    <span className="text-gray-400 text-sm">Call Me</span>
                    <span className="block text-white font-semibold">
                      +62 813 1493 5717
                    </span>
                  </div>
                </a>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-semibold text-white mb-4 text-lg">
                  Find me on other networks:
                </h4>
                <SocialIcons />
              </div>
            </div>

            {/* Kolom Kanan: Formulir */}
            <div className="child-animate" style={{ transitionDelay: '300ms' }}>
              <Card className="!p-8 shadow-2xl border-gray-800">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name" // Atribut 'name' penting untuk EmailJS
                      placeholder="e.g., Farras Yasyfa"
                      className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none focus:border-purple-500 transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email" // Atribut 'name' penting untuk EmailJS
                      placeholder="farras@example.com"
                      className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none focus:border-purple-500 transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message" // Atribut 'name' penting untuk EmailJS
                      rows={5}
                      placeholder="Your Message...."
                      className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none focus:border-purple-500 transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full" disabled={status === 'loading' || status === 'success'}>
                    {getButtonText()}
                  </Button>
                  {status === 'success' && <p className="text-green-400 mt-4 text-center">Thank you! Your transmission was successful.</p>}
                  {status === 'error' && <p className="text-red-400 mt-4 text-center">An error occurred. Please try again later.</p>}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Contact;