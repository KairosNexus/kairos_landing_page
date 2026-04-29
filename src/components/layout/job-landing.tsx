import { Search, ArrowRight, Star, Clock, MapPin, CheckCircle2, ShieldCheck, Filter, Target, Globe, Palette, Headset, Code, Brain, FileText, Users, ExternalLink } from "lucide-react";
import Link from "next/link";
import { TrustSection } from "./trust-section";

// Custom LinkedIn Icon since it might be missing in this version of lucide-react
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function JobLanding() {
  const roles = [
    { title: "Product Designer", company: "SaaS Growth Co.", location: "Remote", pay: "$2.8k-$4.1k/month", featured: true, icon: Palette },
    { title: "Customer Success Lead", company: "Northstar AI", location: "U.S. Hours", pay: "$1.8k-$3.2k/month", urgent: true, icon: Headset },
    { title: "Frontend Engineer", company: "Kairos Partner Role", location: "Remote", pay: "$3.5k-$5.0k/month", verified: true, icon: Code },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-40 lg:pb-5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            {/* Top Row: Text and Image side by side */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex-1 max-w-[60%] relative md:bottom-70 lg:max-w-xl text-left">
                <span className="inline-block px-4 py-2 rounded-full bg-[#1A1A1A] text-xs font-bold text-zinc-400 mb-6 uppercase tracking-wider">
                  For talent
                </span>
                <h1 className="text-2xl sm:text-5xl lg:text-7xl font-bold dark:text-white leading-[1.1] mb-4">
                  A Better Way to Find Serious Remote Work.
                </h1>
                <p className="text-[12px] sm:text-base lg:text-xl text-zinc-400 mb-0 leading-relaxed">
                  We connect pre-vetted global talent to U.S. businesses, giving you access to meaningful, paid opportunities that value your expertise.
                </p>
              </div>
              
              <div className="flex-1 max-w-[54%] pb-16 lg:max-w-[550px]">
                <img 
                  src="/talent_hero.png" 
                  alt="Talent Hero"
                  className="w-full h-auto object-contain object-right-bottom drop-shaxl"
                />
              </div>
            </div>

            {/* Bottom Row: Search Bar Card */}
            <div className="max-w-xl mx-auto lg:mx-0 bg-white rounded-[2rem] p-6 shadow-2xl shadow-pink-500/10 border border-zinc-100 relative z-20 -mt-8 lg:-mt-130 lg:-mb-[-320px]">
              <div className="flex items-center gap-2 p-1 border border-zinc-100 rounded-2xl mb-4">
                <div className="flex-1 flex items-center gap-3 pl-4">
                  <Search className="w-5 h-5 text-zinc-400" />
                  <input 
                    type="text" 
                    placeholder="Search roles, skills, and companies"
                    className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 placeholder:text-zinc-400 py-3"
                  />
                </div>
                <button className="bg-[#C2185B] text-white p-4 rounded-2xl hover:bg-[#A3154D] transition-colors cursor-pointer">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Product Design", "Frontend Engineer"].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-pink-50 text-xs font-bold text-zinc-900 cursor-pointer hover:bg-pink-100 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      {/* Roles Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-2 block">Open Opportunities</span>
              <h2 className="text-3xl font-bold dark:text-white">Top roles hiring now</h2>
            </div>
            <Link href="/jobs" className="text-[#C2185B] font-bold text-sm hover:underline cursor-pointer">See all jobs</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-pink-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
                    <role.icon className="w-6 h-6 text-[#C2185B]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 dark:text-white">{role.title}</h3>
                <p className="text-sm text-zinc-500 mb-6">{role.company} • {role.location}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-sm dark:text-white">{role.pay}</span>
                  <button className="bg-[#C2185B] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all hover:bg-[#A3154D] cursor-pointer">
                    Apply now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-2 block">Why Talent Chooses Kairos</span>
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-white leading-tight">A better way to find serious remote work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Verified companies", desc: "Apply to roles from teams that are ready to hire and clear about expectations.", icon: ShieldCheck },
              { title: "Smarter filtering", desc: "Search by role, pay, tools, timezone, and working style to find stronger matches faster.", icon: Filter },
              { title: "More relevant roles", desc: "Spend less time sorting through noise and more time applying to jobs that fit your profile.", icon: Target },
              { title: "Global remote access", desc: "Connect with high-quality remote opportunities across product, support, and engineering roles.", icon: Globe }
            ].map((feature) => (
              <div key={feature.title} className="p-8 rounded-[2.5rem] bg-gradient-to-b from-white to-[#C2185B]/10 dark:from-zinc-900 dark:to-zinc-950 border border-white dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl mb-8 shadow-sm flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#C2185B]" />
                </div>
                <h3 className="font-bold text-lg mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#18141C] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            {/* Left Column: For job seekers */}
            <div className="flex-1 p-12 lg:p-20 bg-[#FFF5F8] dark:bg-pink-950/10">
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl mb-8 flex items-center justify-center shadow-sm">
                <Search className="w-6 h-6 text-[#C2185B]" />
              </div>
              <h2 className="text-4xl font-bold mb-6 dark:text-white text-zinc-900">For job seekers</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
                Everything on the landing page now supports one goal: helping talent discover better-fit opportunities and move from discovery to application with confidence.
              </p>
              <ul className="space-y-6">
                {[
                  "Search roles by skills, seniority, and availability",
                  "See compensation and company context upfront",
                  "Apply faster to roles aligned with your profile"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    <div className="w-6 h-6 rounded-full bg-pink-200 dark:bg-pink-900/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-12 w-full bg-[#C2185B] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#A3154D] transition-all cursor-pointer shadow-lg shadow-pink-500/20">
                Find jobs
              </button>
            </div>

            {/* Right Column: How it Works Steps */}
            <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-4 block">How It Works</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-12 leading-tight">From discovery to matching, simplified</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Discover curated opportunities", desc: "Browse high-quality roles from U.S. businesses looking for global expertise." },
                  { step: "2", title: "Review role expectations", desc: "See clear requirements, compensation, and team context before you commit." },
                  { step: "3", title: "Complete a short case study", desc: "Showcase your skills through real work samples. We value capability over just resumes." },
                  { step: "4", title: "Get matched with serious clients", desc: "Fast-track your way to interviews with clients who are ready to hire." }
                ].map((item) => (
                  <div key={item.step} className="bg-[#252029] p-8 rounded-[2rem] border border-white/5 transition-transform hover:scale-[1.02] cursor-pointer group">
                    <div className="text-zinc-500 font-bold text-xs mb-3">Step {item.step}</div>
                    <h4 className="font-bold text-xl text-white mb-2 group-hover:text-[#C2185B] transition-colors">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built on Trust Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-2 block">Built on Trust</span>
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-white leading-tight mb-6">Built by people who understand trust</h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              The platform is designed to make global job discovery feel more trusted, direct, and useful for talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: "Jubelo Oyeniran", 
                role: "Co-Founder", 
                bio: "Focused on building a trusted path between ambitious talent and serious global opportunities.",
                image: "/Jubelo.jpeg",
                linkedin: "https://www.linkedin.com/in/jubelooyeniran/"
              },
              { 
                name: "Ayorinde Alase", 
                role: "Co-Founder", 
                bio: "Bringing product and intelligent matching thinking to help talent find higher-quality roles faster.",
                image: "/Ayorinde.jfif",
                linkedin: "https://www.linkedin.com/in/ayorinde-alase/",
                website: "https://www.theayoalase.com/"
              }
            ].map((founder) => (
              <div key={founder.name} className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-8">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex-shrink-0 overflow-hidden border-2 border-pink-100 dark:border-pink-900/30">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold dark:text-white mb-1">{founder.name}</h3>
                  <p className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-4">{founder.role}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">{founder.bio}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-zinc-400 hover:text-[#0077B5] dark:hover:text-[#0077B5] transition-colors cursor-pointer">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    {founder.website && (
                      <a href={founder.website} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-zinc-400 hover:text-[#C2185B] dark:hover:text-[#C2185B] transition-colors cursor-pointer">
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety and Clarity Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-2 block">Safety and Clarity</span>
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-white leading-tight">Protection built in</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Data Security", desc: "Your application and profile details are handled with secure platform practices.", icon: ShieldCheck },
              { title: "Responsible AI", desc: "Matching support stays focused on helping users discover more relevant opportunities.", icon: Brain },
              { title: "Clear Governance", desc: "Privacy and platform governance are designed to support cross-border opportunity discovery.", icon: FileText },
              { title: "Fast Support", desc: "Clear processes help users navigate applications, account access, and platform questions.", icon: Headset }
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-sm">
                <div className="w-12 h-12 bg-pink-50 dark:bg-pink-900/10 rounded-xl mb-8 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#C2185B]" />
                </div>
                <h3 className="font-bold text-lg mb-4 dark:text-white">{item.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 dark:bg-zinc-950 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 border border-zinc-800/50">
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-4 block">READY FOR YOUR NEXT ROLE?</span>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">Search smarter. Apply faster.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              A cleaner route from role discovery to application, designed for talent looking for better-fit remote jobs.
            </p>
          </div>
          <button className="relative z-10 bg-[#C2185B] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#A3154D] transition-all shadow-xl shadow-pink-500/20 cursor-pointer">
            Access platform
          </button>
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C2185B] opacity-10 blur-[100px] -mr-48 -mt-48" />
        </div>
      </section>
    </div>
  );
}
