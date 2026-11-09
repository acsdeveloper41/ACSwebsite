import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  GraduationCap,
  HeartHandshake,
  DollarSign,
  PartyPopper,
  ShieldCheck,
  Waves,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Higher Earning Potential",
    description:
      "Your dedication deserves substantial rewards. We offer highly competitive compensation packages and industry-leading hourly rates, ensuring your passion is financially fulfilling.",
  },
  {
    icon: CalendarDays,
    title: "Ultimate Flexibility & Work-Life Balance",
    description:
      "Take full control of your time. Design a coaching schedule that fits around your personal life, family commitments, or studies.",
  },
  {
    icon: GraduationCap,
    title: "Personal & Professional Growth",
    description:
      "Refine your leadership, communication, and problem-solving skills while working with a diverse clientele, from toddlers to adults.",
  },
  {
    icon: PartyPopper,
    title: "A Fun, Supportive Team Culture",
    description:
      "Thrive with a team that supports one another. We host team-bonding activities, festive celebrations, and social events throughout the year.",
  },
];

export default function CoachRecruitment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
    qualifications: "",
    availability: "",
    about: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = `🦍 Ape Champs Swim – Coach Application

👤 Name: ${form.name}
📱 WhatsApp: ${form.phone}
✉️ Email: ${form.email}

🏊 Coaching experience: ${form.experience || "-"}
🎓 Qualifications: ${form.qualifications || "-"}
📍 Preferred areas / availability: ${form.availability || "-"}

💬 A little about me:
${form.about || "-"}`;

    const url = `https://api.whatsapp.com/send?phone=6589510121&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <Helmet>
        <title>Join Our Team | Swim Coach Careers – Ape Champs Swim</title>
        <meta
          name="description"
          content="Join Ape Champs Swim as a coach in Singapore. Help children build water confidence through safe, supportive swimming lessons."
        />
        <link rel="canonical" href="https://apechampsswim.com.sg/careers" />
      </Helmet>

      <div className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-sky-950 text-white">
          <div className="absolute inset-0">
            <img
              src="/images/hero-swim2.jpg"
              alt=""
              className="h-full w-full object-cover opacity-25"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-950 via-sky-950/90 to-sky-900/60" />
          </div>
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr,0.8fr] md:items-center md:py-28">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Waves className="h-4 w-4" aria-hidden="true" />
                Join Our Team
              </span>
              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Join Our Team: Become a Swim Coach
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-sky-100 md:text-xl">
                Are you passionate about the water and love teaching? If you
                enjoy working with people, want to make a positive impact on
                their lives, and dream of a career with high income potential
                and a flexible schedule, you belong with us!
              </p>
              <a
                href="#apply"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-sky-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Apply Now / Talk to Us
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-sm md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Turn Your Passion Into a Rewarding Career
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Grow personally and professionally with us.
              </h2>
              <p className="mt-4 leading-relaxed text-sky-100">
                At Ape Champs Swim, we don’t just offer a job we offer a
                supportive community where you can grow while shaping the next
                generation of swimmers.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-sky-50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                Why Coach With Us?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                A rewarding career, in and out of the pool
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Build your skills, find a schedule that suits you, and make a
                positive impact through swimming.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-sky-800">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:py-20">
            <article className="rounded-3xl bg-sky-50 p-7 md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                Flexible Pathways &amp; Compensation
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-900">
                Choose the commitment that fits your lifestyle
              </h2>
              <div className="mt-6 rounded-2xl border border-sky-100 bg-white p-5">
                <h3 className="text-lg font-bold text-slate-900">Part-Time Coach</h3>
                <p className="mt-3 text-slate-700">
                  <strong>Commitment:</strong> Around 10–15 hours per week
                </p>
                <p className="mt-2 text-slate-700">
                  <strong>Earnings:</strong> Earn at least{" "}
                  <strong className="text-sky-800">$1,000 per month</strong>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Ideal for students, freelancers, or those looking for a
                  secondary income stream.
                </p>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Actual earnings depend on total hours clocked and coaching
                experience.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 p-7 shadow-sm md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                Who We Are Looking For
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-900">
                No experience is welcome. Enthusiasm matters too.
              </h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                We welcome seasoned professionals and enthusiastic individuals
                looking to kickstart their coaching journey.
              </p>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
                  Passion for swimming and water safety
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
                  Energetic, patient, engaging, and especially comfortable teaching children
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
                  Reliable, punctual, and highly responsible
                </li>
              </ul>
              <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-relaxed text-slate-700">
                <strong>Bonus, but not mandatory:</strong> Prior coaching
                certifications such as NROC, AUSTSWIM, SSI, or Lifesaving
                certificates. We provide guidance and mentorship for the right
                candidates to get certified.
              </p>
            </article>

            <div className="rounded-3xl bg-cyan-700 p-7 text-white md:col-span-2 md:flex md:items-center md:justify-between md:gap-8 md:p-9">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">
                  Refer a friend
                </p>
                <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
                  Bring a friend aboard and get a referral bonus
                </h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-cyan-50">
                  If your referred friend is selected to join our coaching
                  team, you’ll receive a referral bonus of{" "}
                  <strong>$128 for male coaches</strong> or{" "}
                  <strong>$188 for female coaches</strong>.
                </p>
              </div>
              <a
                href="#apply"
                className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-sky-900 transition hover:bg-cyan-50 md:mt-0"
              >
                Refer or apply
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="apply" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[0.85fr,1.15fr] md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                Ready to Dive In?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Take the first step toward a happier, more fulfilling career today.
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Fill in the WhatsApp application and tell us a little about
                yourself. Review the message and send it directly to our team.
              </p>
              <div className="mt-8 rounded-2xl bg-sky-50 p-5">
                <p className="font-semibold text-slate-900">What happens next?</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Have questions before applying? Connect with our recruitment
                  team directly.
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p>
                    <strong>Phone/WhatsApp:</strong>{" "}
                    <a className="font-semibold text-sky-800 hover:underline" href="https://wa.me/6589510121">
                      +65 8951 0121
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a className="font-semibold text-sky-800 hover:underline" href="mailto:hello@apechampsswim.com.sg">
                      hello@apechampsswim.com.sg
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="coach-name" className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Full name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="coach-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="coach-phone" className="mb-1.5 block text-sm font-semibold text-slate-700">
                    WhatsApp number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="coach-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                    placeholder="+65 XXXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="coach-email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Email address <span className="text-rose-600">*</span>
                </label>
                <input
                  id="coach-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="coach-experience" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Swimming or coaching experience
                </label>
                <input
                  id="coach-experience"
                  name="experience"
                  type="text"
                  value={form.experience}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                  placeholder="Briefly describe your experience"
                />
              </div>

              <div>
                <label htmlFor="coach-qualifications" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Relevant qualifications or certifications
                </label>
                <input
                  id="coach-qualifications"
                  name="qualifications"
                  type="text"
                  value={form.qualifications}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                  placeholder="Include any relevant certifications"
                />
              </div>

              <div>
                <label htmlFor="coach-availability" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Preferred areas and availability
                </label>
                <input
                  id="coach-availability"
                  name="availability"
                  type="text"
                  value={form.availability}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                  placeholder="Areas, days, or times that work for you"
                />
              </div>

              <div>
                <label htmlFor="coach-about" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Why would you like to coach with us?
                </label>
                <textarea
                  id="coach-about"
                  name="about"
                  rows="4"
                  value={form.about}
                  onChange={handleChange}
                  className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                  placeholder="Tell us what you enjoy about coaching and working with children."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-700 px-6 py-3.5 font-bold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-200"
              >
                Continue to WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="text-center text-xs leading-relaxed text-slate-500">
                Your application opens in WhatsApp. Review it there and press
                send to reach our team.
              </p>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
