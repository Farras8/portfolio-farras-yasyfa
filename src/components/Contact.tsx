import { Panel as Card } from "./SystemUI";
import { Button } from "./Controls";
import { SectionReveal as AnimatedSection } from "./Controls";
import { SectionHeading as SectionHeader } from "./SystemUI";
import React, { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";

const SocialIcons: React.FC<{ className?: string }> = ({ className = "" }) => (
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

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || status === "loading") return;

    const formData = new FormData(form.current);
    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("message")
    ) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("success");
          if (form.current) form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
        },
      );
  };

  const getButtonText = () => {
    switch (status) {
      case "loading":
        return "Sending...";
      case "success":
        return "Message Sent!";
      case "error":
        return "Failed, Try Again";
      default:
        return "Send Message";
    }
  };

  return (
    <>
      <AnimatedSection id="contact" className="bg-gray-900/70 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Contact Me"
            subtitle="Have an opportunity or a project in mind? Let's talk."
          />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Kolom Kiri: Info dan Pesan */}
            <div
              className="child-animate space-y-8"
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-4xl font-orbitron font-bold text-white">
                Good things start with a conversation.
              </h3>
              <p className="text-gray-400 text-lg">
                Whether you have a question, a proposal, or just want to say
                hello, my inbox is always open. Feel free to contact me about
                freelance opportunities or collaborations.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:mfarras2004@gmail.com"
                  className="flex items-center p-4 rounded-lg bg-gray-800/60 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300"
                >
                  <Mail className="w-7 h-7 mr-4 text-blue-400" />
                  <div>
                    <span className="text-gray-400 text-sm">Email Me</span>
                    <span className="block text-white font-semibold">
                      mfarras2004@gmail.com
                    </span>
                  </div>
                </a>
                <a
                  href="tel:+6281314935717"
                  className="flex items-center p-4 rounded-lg bg-gray-800/60 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300"
                >
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
            <div className="child-animate" style={{ transitionDelay: "300ms" }}>
              <Card className="!p-8 shadow-2xl border-gray-800">
                <form ref={form} onSubmit={sendEmail}>
                  <p role="status" aria-live="polite" className="form-feedback">
                    {status === "success"
                      ? "Message sent. Thank you for reaching out!"
                      : status === "error"
                        ? "Could not send. Please retry or email me directly."
                        : status === "loading"
                          ? "Sending your message�"
                          : ""}
                  </p>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-gray-300 font-semibold mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g., Farras Yasyfa"
                      className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none focus:border-purple-500 transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-gray-300 font-semibold mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="farras@example.com"
                      className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none focus:border-purple-500 transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-300 font-semibold mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your Message...."
                      className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none focus:border-purple-500 transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {getButtonText()}
                  </Button>
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
