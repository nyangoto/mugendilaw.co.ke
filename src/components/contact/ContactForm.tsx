"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { ContactFormData } from "@/types";

const schema = z.object({
  name:    z.string().min(2, "Please enter your full name"),
  company: z.string().optional(),
  email:   z.string().email("Please enter a valid email address"),
  phone:   z.string().min(7, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(20, "Please provide more detail (at least 20 characters)"),
});

const SERVICES = [
  "Tax Advisory & Dispute Resolution",
  "Immigration & Work Permit Services",
  "Conveyancing & Real Estate",
  "Corporate & Commercial Law",
  "Other / General Inquiry",
];

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactFormData) => {
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        className="p-8 border text-center"
        style={{ borderColor: "rgba(201,168,76,0.30)", background: "rgba(201,168,76,0.05)" }}
      >
        <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-3">
          Message Received
        </p>
        <h3 className="font-heading text-2xl text-foreground mb-3">
          Thank you for reaching out.
        </h3>
        <p className="text-sm text-muted-foreground">
          A member of our team will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-xs tracking-wide text-muted-foreground">
            Full Name <span className="text-gold">*</span>
          </Label>
          <Input
            id="name"
            {...register("name")}
            autoComplete="name"
            placeholder="Jane Doe"
            className="bg-surface border-gold/20 text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-gold/40"
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="company" className="text-xs tracking-wide text-muted-foreground">
            Company <span className="text-muted-foreground/40">(optional)</span>
          </Label>
          <Input
            id="company"
            {...register("company")}
            autoComplete="organization"
            placeholder="Acme Ltd."
            className="bg-surface border-gold/20 text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-gold/40"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs tracking-wide text-muted-foreground">
            Email <span className="text-gold">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            autoComplete="email"
            spellCheck={false}
            placeholder="jane@company.com"
            className="bg-surface border-gold/20 text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-gold/40"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-xs tracking-wide text-muted-foreground">
            Phone <span className="text-gold">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            autoComplete="tel"
            placeholder="+254 700 000 000"
            className="bg-surface border-gold/20 text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-gold/40"
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service */}
      <div className="space-y-1.5">
        <Label htmlFor="service" className="text-xs tracking-wide text-muted-foreground">
          Area of Interest <span className="text-gold">*</span>
        </Label>
        <select
          id="service"
          {...register("service")}
          className="w-full h-9 px-3 text-sm bg-surface border text-foreground focus:outline-none focus:ring-1 focus:ring-gold/40"
          style={{ borderColor: "rgba(201,168,76,0.20)" }}
          defaultValue=""
        >
          <option value="" disabled className="text-muted-foreground">
            Select a practice area
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s} className="bg-surface">
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-xs text-destructive">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-xs tracking-wide text-muted-foreground">
          Message <span className="text-gold">*</span>
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder="Briefly describe your matter so we can prepare for our conversation…"
          className="bg-surface border-gold/20 text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-gold/40 resize-none"
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      {state === "error" && (
        <p className="text-sm text-destructive" aria-live="polite">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:info@mugendilaw.co.ke" className="underline">
            info@mugendilaw.co.ke
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-gold text-background hover:brightness-110 transition-all font-sans font-semibold tracking-wide text-sm h-11"
      >
        {state === "loading" ? "Sending…" : "Request a Consultation"}
      </Button>

      <p className="text-xs text-muted-foreground/50 text-center">
        All enquiries are treated in strict confidence.
      </p>
    </form>
  );
}
