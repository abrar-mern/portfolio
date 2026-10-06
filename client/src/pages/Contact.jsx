import { CONTACT_INFO } from "@/config/contact";
import { validateContactForm } from "@/utils/helpers";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };
const FORM_ENDPOINT = `https://formsubmit.co/${CONTACT_INFO.email}`;

const contactLinks = [
  {
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phoneRaw}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: CONTACT_INFO.location,
    icon: MapPin,
  },
];

const socialLinks = [
  { label: "GitHub", href: CONTACT_INFO.github, icon: Github },
  { label: "LinkedIn", href: CONTACT_INFO.linkedin, icon: Linkedin },
  {
    label: "WhatsApp",
    href: `https://wa.me/${CONTACT_INFO.whatsapp}`,
    icon: MessageCircle,
  },
];

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text" },
];

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length || honeypot) {
      event.preventDefault();
    }
  };

  const emailFallback = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    formData.subject || "Portfolio enquiry"
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <MessageSquare className="w-8 h-8 text-blue-600" />
          <h1 className="page-title">Get in Touch</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8">
          <aside className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="mb-6 text-xl font-semibold text-slate-900">Contact Information</h2>
              <div className="space-y-5">
                {contactLinks.map(({ label, value, href, icon: Icon }) => {
                  const content = (
                    <>
                      <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>
                        <span className="block text-xs text-slate-500">{label}</span>
                        <span className="break-all text-slate-700">{value}</span>
                      </span>
                    </>
                  );
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3 text-slate-700 transition-colors hover:text-blue-700"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-3 text-slate-700">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="mb-5 text-xl font-semibold text-slate-900">Connect with Me</h2>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">Send a Message</h2>
            <p className="mb-6 text-sm text-slate-500">
              Your message will go to {CONTACT_INFO.email}.
            </p>
            <form
              action={FORM_ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
            >
              <input type="hidden" name="_subject" value={`Portfolio contact: ${formData.subject}`} />
              <input type="hidden" name="_url" value={typeof window === "undefined" ? "" : window.location.href} />
              <div className="grid sm:grid-cols-2 gap-5">
                {fields.slice(0, 2).map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      value={formData[field.name]}
                      onChange={handleChange}
                      maxLength={field.name === "name" ? 100 : 254}
                      aria-invalid={Boolean(errors[field.name])}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                    {errors[field.name] && (
                      <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={200}
                  aria-invalid={Boolean(errors.subject)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={5000}
                  aria-invalid={Boolean(errors.message)}
                  className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="_honey"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium !text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
              <p className="text-center text-sm text-slate-500">
                Having trouble?{" "}
                <a href={emailFallback} className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800">
                  Send from your email app instead
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
