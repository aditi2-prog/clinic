import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  LayoutDashboard, 
  ChevronDown,
  Menu,
  X,
  Clock,
  Award,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Constants
const PHONE_NUMBER = "9518773413";
const EMAIL = "draditichourasia@gmail.com";
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent("Hi, I want to apply for the Growth Session")}`;
const CALL_LINK = `tel:+91${PHONE_NUMBER}`;
const EMAIL_LINK = `mailto:${EMAIL}`;

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">AC</div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-none text-brand-900">Dr. Aditi Chourasia</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-600 font-semibold">Growth Strategist</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Book Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              className="bg-brand-600 text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} />
              Book Growth Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-brand-50 to-white">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <Award size={14} />
          Doctor-led • Data-Backed • Result-Oriented
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
          Scale Your Clinic or <br />
          <span className="text-brand-600">Hospital with Intelligence.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
          1:1 Growth Strategy Sessions for Ayurvedic Practitioners & Hospital Owners. 
          Combining <span className="font-semibold text-slate-900">Clinical BAMS expertise</span> with <span className="font-semibold text-slate-900">MBA Marketing strategy</span> to optimize your healthcare facility.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a 
            href={WHATSAPP_LINK}
            className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-200 flex items-center justify-center gap-3 group"
          >
            Apply for the Pilot Program
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-orange-500" />
            <span className="font-semibold text-slate-700">Pilot: 20 Clinics & 5 Hospitals Only</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-brand-600" />
            <span className="font-semibold text-slate-700">{PHONE_NUMBER}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] md:aspect-auto bg-gradient-to-br from-brand-600 to-brand-900 p-12 flex flex-col items-center justify-center text-white">
          <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-8 animate-float">
            <TrendingUp size={48} />
          </div>
          <div className="text-center">
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Award size={24} />
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <LayoutDashboard size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Growth Strategy</h3>
            <p className="text-brand-100 text-sm">Clinical Excellence meets Business Intelligence</p>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl text-slate-900">
            <div className="flex items-center gap-3">
              <div className="bg-brand-500 p-2 rounded-lg text-white">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-bold">Dr. Aditi Chourasia</p>
                <p className="text-xs text-slate-600 font-medium uppercase tracking-wider">BAMS + MBA (Marketing)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-100 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-100 rounded-full blur-3xl -z-10"></div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => {
  const problems = [
    {
      title: "Inconsistent Patient Flow",
      desc: "Relying on word-of-mouth only leads to empty waiting rooms on some days and chaos on others.",
      icon: <Users className="text-red-500" />
    },
    {
      title: "Low Patient Retention",
      desc: "Patients come for one consultation but never return for the full treatment course or IPD procedures.",
      icon: <TrendingUp className="text-orange-500 rotate-180" />
    },
    {
      title: "Income Mismatch",
      desc: "You are working harder than ever, but your hospital's revenue doesn't reflect your clinical expertise.",
      icon: <Zap className="text-yellow-500" />
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Is your clinic or hospital growing as fast as your expertise?</h2>
          <p className="text-slate-600">Most Ayurvedic practitioners are brilliant doctors but struggle with the business side of running a healthcare facility.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const pillars = [
    { title: "GTM Marketing", desc: "Applying high-level Go-To-Market strategies to your local clinic market." },
    { title: "Brand Narrative", desc: "Crafting a 'Roots-first' communication strategy (TEDx Speaker) that builds trust." },
    { title: "Data Operations", desc: "Optimizing patient record management (15k+ records managed) for efficiency." },
    { title: "Revenue Models", desc: "Structured financial modeling to ensure clinical excellence translates to profit." }
  ];

  return (
    <section id="solution" className="py-24 bg-brand-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 blur-[120px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">The 1:1 Growth <br />Strategy Session</h2>
            <p className="text-brand-100 text-lg mb-10 leading-relaxed">
              I don't give generic advice. I apply high-level business frameworks from my MBA and corporate internships to the unique challenges of your Ayurvedic practice.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-brand-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                    <p className="text-brand-200 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">What you get:</h3>
            <ul className="space-y-4 mb-8">
              {[
                "60-minute intensive 1:1 consultation",
                "GTM (Go-To-Market) Strategy for your region",
                "Patient Record & Data Efficiency Audit",
                "Brand Narrative & Communication Plan",
                "90-day Actionable Growth Roadmap"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-50">
                  <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a 
              href={WHATSAPP_LINK}
              className="block w-full bg-brand-500 hover:bg-brand-400 text-white text-center py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
            >
              Apply for a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Apply / WhatsApp", desc: "Send a message with your clinic details to start the process." },
    { title: "Shortlisting", desc: "I review your current setup to ensure I can actually help you grow." },
    { title: "1:1 Session", desc: "We deep-dive into your numbers, marketing, and operations." },
    { title: "Action Plan", desc: "Receive a structured roadmap to implement immediately." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your Roadmap to Growth</h2>
          <p className="text-slate-600">A simple, structured process to transform your practice.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-brand-100 -z-0"></div>
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-full border-4 border-brand-50 flex items-center justify-center text-2xl font-bold text-brand-600 mb-6 shadow-sm">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Outcomes = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-brand-50 rounded-[40px] p-8 md:p-20 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Result? <br />A Hospital That Runs Like a Business.</h2>
            <div className="space-y-6">
              {[
                { title: "Predictable Patient Inflow", desc: "No more 'lucky' months. Consistent OPD and IPD bookings day after day." },
                { title: "Better Retention", desc: "Patients who trust your brand and complete their full Panchakarma or treatment courses." },
                { title: "Increased Revenue", desc: "Higher average revenue per patient through optimized services and packages." },
                { title: "Structured Growth", desc: "A scalable model that doesn't depend solely on your presence." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                    <CheckCircle2 className="text-brand-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-100">
                <p className="text-3xl font-bold text-brand-600 mb-1">40%+</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Avg. Revenue Growth</p>
              </div>
              <div className="bg-brand-600 p-6 rounded-3xl shadow-lg text-white">
                <p className="text-3xl font-bold mb-1">2x</p>
                <p className="text-xs text-brand-100 font-medium uppercase tracking-wider">Patient Retention</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900 p-6 rounded-3xl shadow-lg text-white">
                <p className="text-3xl font-bold mb-1">Zero</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Ad Waste</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-100">
                <p className="text-3xl font-bold text-brand-600 mb-1">100%</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Actionable Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-block bg-brand-100 text-brand-700 px-4 py-1 rounded-full text-sm font-bold mb-6">Meet Your Strategist</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Dr. Aditi Chourasia</h2>
          <p className="text-lg text-slate-700 font-semibold mb-4">BAMS (Dr. D.Y. Patil, Pune) + MBA Marketing (TAPMI)</p>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              I bridge the gap between clinical Ayurveda and modern business strategy. With a clinical foundation in BAMS and a strategic MBA from TAPMI, I help practitioners scale without compromising their values.
            </p>
            <p>
              My approach is backed by real-world experience: from building GTM strategies for luxury real estate to managing <span className="font-semibold">15,000+ patient records</span> during my clinical internship.
            </p>
            <p>
              I am a <span className="font-semibold">TEDx Speaker</span> ('Going Back to Roots') and the <span className="font-semibold">winner of many case competitions and hackathons</span> (including the Maharashtra Health Hackathon), where I developed innovative healthcare solutions.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">TEDx</span>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Speaker</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">Hackathon</span>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Winner</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">TAPMI</span>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">MBA Marketing</span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center p-12">
            <div className="w-32 h-32 bg-brand-100 rounded-3xl flex items-center justify-center text-brand-600 mb-8">
              <Users size={64} />
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                <div className="w-2 h-2 bg-brand-300 rounded-full"></div>
                <div className="w-2 h-2 bg-brand-200 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Strategic Consulting</h3>
              <p className="text-slate-500 text-sm max-w-xs">Bridging the gap between clinical Ayurveda and modern business systems.</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
            <p className="text-sm font-medium opacity-80">Clinical + Business</p>
            <p className="text-xl font-bold">The Hybrid Advantage</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OfferSection = () => (
  <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-500 via-transparent to-transparent"></div>
    </div>
    <div className="max-w-3xl mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">A Risk-Free Investment in Your Future.</h2>
      <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/20 mb-10">
        <p className="text-brand-400 font-bold uppercase tracking-widest mb-4">Exclusive Pilot Program</p>
        <h3 className="text-2xl md:text-4xl font-bold mb-6">“Pay What You Feel Is Right”</h3>
        <p className="text-brand-100 text-lg mb-8 leading-relaxed">
          I am launching this pilot to help the Ayurvedic community scale. 
          Removing the fixed fee barrier for the first <span className="text-white font-bold">20 Clinics & 5 Hospitals</span>. 
          If you don't find the strategy actionable, you pay nothing. 
          <br />
          <span className="text-white font-bold mt-4 block">Limited slots available for this pilot.</span>
        </p>
        <a 
          href={WHATSAPP_LINK}
          className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-50 transition-all shadow-2xl"
        >
          <MessageCircle size={24} className="text-green-500" />
          Join the Pilot Program
        </a>
      </div>
      <p className="text-slate-400">Or call directly: <span className="text-white font-bold">{PHONE_NUMBER}</span></p>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      q: "Who is this session for?",
      a: "It's for BAMS/MD doctors who own a clinic or hospital and want to scale their revenue and patient inflow using professional business strategies."
    },
    {
      q: "What will I actually get in 60 minutes?",
      a: "A complete audit of your current marketing, a competitor analysis of your local area, and a 90-day step-by-step growth roadmap."
    },
    {
      q: "How is this different from a marketing agency?",
      a: "Agencies just want to run ads. I build the foundation—your branding, your operations, and your clinical positioning—so that your growth is sustainable."
    },
    {
      q: "Is there any hidden fee?",
      a: "No. For a limited time, I'm offering these sessions on a 'Pay what you feel is right' basis to build trust with the community."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button 
                className="w-full p-6 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                <ChevronDown className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-slate-600 border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">AC</div>
            <span className="font-display font-bold text-xl text-brand-900">Dr. Aditi Chourasia</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-8">
            Empowering Ayurvedic practitioners with modern business strategies to build sustainable, high-revenue healthcare facilities.
          </p>
          <div className="flex gap-4">
            <a href={WHATSAPP_LINK} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all">
              <MessageCircle size={20} />
            </a>
            <a href={CALL_LINK} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all">
              <Phone size={20} />
            </a>
            <a href={EMAIL_LINK} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-500">
            <li><a href="#problem" className="hover:text-brand-600 transition-colors">Problem</a></li>
            <li><a href="#solution" className="hover:text-brand-600 transition-colors">Solution</a></li>
            <li><a href="#how-it-works" className="hover:text-brand-600 transition-colors">How it Works</a></li>
            <li><a href="#about" className="hover:text-brand-600 transition-colors">About Dr. Aditi</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
          <ul className="space-y-4 text-slate-500">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-600" />
              {PHONE_NUMBER}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-600" />
              {EMAIL}
            </li>
            <li className="text-xs uppercase font-bold tracking-widest pt-4">Available Pan-India (Virtual)</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Dr. Aditi Chourasia. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const StickyCTA = () => (
  <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
    <a 
      href={WHATSAPP_LINK}
      className="flex items-center justify-center gap-3 bg-brand-600 text-white p-4 rounded-2xl font-bold shadow-2xl animate-bounce-subtle"
    >
      <MessageCircle size={24} />
      Book Growth Session Now
    </a>
  </div>
);

const DesktopStickyWhatsApp = () => (
  <a 
    href={WHATSAPP_LINK}
    className="fixed bottom-8 right-8 z-40 hidden md:flex items-center gap-3 bg-white text-slate-900 p-4 rounded-full shadow-2xl border border-slate-100 hover:scale-110 transition-transform group"
  >
    <div className="bg-green-500 text-white p-2 rounded-full group-hover:rotate-12 transition-transform">
      <MessageCircle size={24} />
    </div>
    <span className="font-bold pr-2">Chat with Dr. Aditi</span>
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <Outcomes />
        <About />
        <OfferSection />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      <DesktopStickyWhatsApp />
    </div>
  );
}
