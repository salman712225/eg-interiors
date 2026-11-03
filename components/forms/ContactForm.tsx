"use client";

import { useState } from "react";

const projectTypes = [
  "Residential",
  "Apartment",
  "Villa",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Commercial",
  "Office",
  "Renovation",
  "Other",
];

const budgetRanges = [
  "Below ₹2 Lakhs",
  "₹2 – 5 Lakhs",
  "₹5 – 10 Lakhs",
  "₹10 – 20 Lakhs",
  "₹20 – 50 Lakhs",
  "Above ₹50 Lakhs",
  "Not decided yet",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const projectType = data.get("projectType") as string;
    const consent = data.get("consent");

    if (!name.trim()) errs.name = "Please enter your full name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    if (!phone.trim() || !/^[6-9]\d{9}$/.test(phone.replace(/\s/g, "")))
      errs.phone = "Please enter a valid 10-digit Indian mobile number.";
    if (!projectType) errs.projectType = "Please select a project type.";
    if (!consent) errs.consent = "Please accept the privacy policy to continue.";

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setState("loading");

    try {
      // Web3Forms integration — replace ACCESS_KEY with actual key when ready
      const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

      if (ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
        // Demo mode — simulate success
        await new Promise((r) => setTimeout(r, 1500));
        setState("success");
        form.reset();
        return;
      }

      data.append("access_key", ACCESS_KEY);
      data.append("subject", `New Enquiry from ${data.get("name")} — E.G. Interiors Website`);
      data.append("from_name", "E.G. Interiors Website");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      if (json.success) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const Field = ({
    name,
    label,
    type = "text",
    required = true,
    placeholder,
  }: {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
  }) => (
    <div>
      <label htmlFor={name} className="block font-manrope text-xs font-semibold text-[#392F29] mb-2 uppercase tracking-wide">
        {label} {required && <span className="text-[#8B6E5C]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        className="w-full px-4 py-3 bg-white border border-[#E8D9CC] font-inter text-sm text-[#392F29] placeholder:text-[#8A817A]/50 focus:outline-none focus:border-[#8B6E5C] transition-colors"
      />
      {errors[name] && (
        <p id={`${name}-error`} role="alert" className="mt-1.5 font-inter text-xs text-red-600">
          {errors[name]}
        </p>
      )}
    </div>
  );

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-[#8B6E5C]/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-[#8B6E5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-cormorant text-2xl text-[#392F29] mb-3">Enquiry Received!</h3>
        <p className="font-inter text-sm text-[#8A817A] max-w-sm leading-relaxed">
          Thank you for contacting E.G. Interiors! Your enquiry has been received. Our team will get in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field name="name" label="Full Name" placeholder="Your full name" />
        <Field name="email" label="Email Address" type="email" placeholder="you@email.com" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field name="phone" label="Mobile Number" type="tel" placeholder="10-digit mobile number" />
        <div>
          <label htmlFor="projectType" className="block font-manrope text-xs font-semibold text-[#392F29] mb-2 uppercase tracking-wide">
            Project Type <span className="text-[#8B6E5C]">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            className="w-full px-4 py-3 bg-white border border-[#E8D9CC] font-inter text-sm text-[#392F29] focus:outline-none focus:border-[#8B6E5C] transition-colors"
          >
            <option value="" disabled>Select project type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.projectType && (
            <p id="projectType-error" role="alert" className="mt-1.5 font-inter text-xs text-red-600">
              {errors.projectType}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field name="location" label="Property Location" required={false} placeholder="e.g. Anna Nagar, Chennai" />
        <Field name="area" label="Approximate Area (sq ft)" required={false} placeholder="e.g. 1200 sq ft" />
      </div>
      <div>
        <label htmlFor="budget" className="block font-manrope text-xs font-semibold text-[#392F29] mb-2 uppercase tracking-wide">
          Estimated Budget
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className="w-full px-4 py-3 bg-white border border-[#E8D9CC] font-inter text-sm text-[#392F29] focus:outline-none focus:border-[#8B6E5C] transition-colors"
        >
          <option value="">Select budget range (optional)</option>
          {budgetRanges.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block font-manrope text-xs font-semibold text-[#392F29] mb-2 uppercase tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project, requirements, or any questions you have..."
          className="w-full px-4 py-3 bg-white border border-[#E8D9CC] font-inter text-sm text-[#392F29] placeholder:text-[#8A817A]/50 focus:outline-none focus:border-[#8B6E5C] transition-colors resize-none"
        />
      </div>
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 w-4 h-4 border-[#8B6E5C] accent-[#8B6E5C]"
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span className="font-inter text-xs text-[#8A817A] leading-relaxed">
            I agree that E.G. Interiors may contact me regarding my enquiry. I have read and accept the{" "}
            <a href="/privacy-policy" className="text-[#8B6E5C] underline">Privacy Policy</a>.{" "}
            <span className="text-[#8B6E5C]">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className="mt-1.5 font-inter text-xs text-red-600">
            {errors.consent}
          </p>
        )}
      </div>
      {state === "error" && (
        <p role="alert" className="font-inter text-sm text-red-600 bg-red-50 px-4 py-3 border border-red-100">
          Something went wrong. Please try again or contact us directly on WhatsApp.
        </p>
      )}
      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full py-4 bg-[#392F29] text-[#FEF0E5] font-manrope font-semibold text-sm hover:bg-[#8B6E5C] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "Sending Enquiry…" : "Send Enquiry"}
      </button>
      <p className="font-inter text-xs text-[#8A817A]/70 text-center">
        * Note: Form email delivery requires Web3Forms API key configuration. Contact via WhatsApp for instant response.
      </p>
    </form>
  );
}

