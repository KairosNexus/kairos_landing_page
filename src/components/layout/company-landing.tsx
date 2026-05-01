import { CheckCircle2, UserCheck, Zap, TrendingDown, Shield, ArrowRight, Search, FileText, Send, ClipboardList, Users, UserPlus, Brain, Star, Code, Palette, Headset, Award, Building } from "lucide-react";
import Link from "next/link";
import { TrustSection } from "./trust-section";
import { Cofounders } from "./cofounders";

export function CompanyLanding() {
  const categories = [
    { title: "Marketing & Growth", desc: "Social media, content, paid ads experts who drive results.", tag: "Marketing", count: "390+ Experts", icon: Code },
    { title: "Graphic & Brand Design", desc: "Senior designers specialized in branding, SaaS UI/UX, and complex workflows.", tag: "Design", count: "420+ Experts", icon: Palette },
    { title: "Video & Content Editing", desc: "Professional editors for high-impact social content and brand storytelling.", tag: "Creative", count: "215+ Experts", icon: Headset },
    { title: "Frontend Engineering", desc: "React, Vue, and modern web developers who ship production code.", tag: "Engineering", count: "380+ Experts", icon: Code },
    { title: "Customer Success", desc: "Support and client success professionals who retain customers.", tag: "Support", count: "310+ Experts", icon: Headset },
    { title: "Virtual Assistance", desc: "Executive assistants and operations support who keep things running.", tag: "Operations", count: "250+ Experts", icon: Users },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-22 pb-12 lg:pt-12 lg:pb-0 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            {/* Top Row: Text and Image side by side */}
            <div className="flex items-center justify-between gap-4 mb-0">
              <div className="flex-1 max-w-[60%] lg:max-w-xl text-left">
                <span className="inline-block px-4 py-2 rounded-full bg-[#1A1A1A] text-xs font-bold text-zinc-400 mb-6 uppercase tracking-wider">
                  For companies
                </span>
                <h1 className="text-2xl sm:text-5xl lg:text-7xl font-bold dark:text-white leading-[1.1] mb-4">
                  Cut Hiring Costs by Up to 70%. Unlock Global Talent That Delivers.
                </h1>
                <p className="text-[12px] sm:text-base lg:text-xl text-zinc-400 mb-0 leading-relaxed">
                  We connect U.S. businesses to pre-vetted global talent, reducing cost while maintaining exceptional quality — and give skilled professionals access to meaningful, paid opportunities.
                </p>
              </div>
              
              <div className="flex-1 max-w-[50%] lg:max-w-lg">
                <img 
                  src="/company_hero.png" 
                  alt="Company Hero"
                  className="w-full h-auto max-h-[300px] lg:max-h-[750px] object-contain object-right-bottom drop-shado"
                />
              </div>
            </div>

            {/* Bottom Row: Search Bar Card */}
            <div className="max-w-2xl mx-auto lg:mx-0 bg-white rounded-[2rem] p-6 shadow-2xl shadow-pink-500/10 border border-zinc-100 relative z-20 mt-6 lg:-mt-20">
              <div className="flex items-center gap-2 p-1 border border-zinc-100 rounded-2xl mb-4">
                <div className="flex-1 flex items-center gap-3 pl-4">
                  <Search className="w-5 h-5 text-zinc-400" />
                  <input 
                    type="text" 
                    placeholder="Search talent by role, skill, availability, or timezone"
                    className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 placeholder:text-zinc-400 py-3"
                  />
                </div>
                <button className="bg-[#C2185B] text-white p-4 rounded-2xl hover:bg-[#A3154D] transition-colors cursor-pointer">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Product Design", "Frontend Engineers", "Customer Success"].map(tag => (
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

  
      {/* Categories Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-2 block">Hire the best</span>
              <h2 className="text-4xl lg:text-5xl font-bold dark:text-white leading-tight">Expertise in every domain</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-lg">
                High-demand skill sets companies are actively hiring for through Kairos.
              </p>
            </div>
            <Link href="/categories" className="text-[#C2185B] font-bold text-sm hover:underline cursor-pointer">See all categories</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-pink-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
                    <cat.icon className="w-6 h-6 text-[#C2185B]" />
                  </div>
                  <span className="px-2 py-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-500 text-[10px] font-bold rounded-md uppercase tracking-wider border border-zinc-100 dark:border-zinc-700">
                    {cat.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{cat.title}</h3>
                <p className="text-sm text-zinc-500 mb-8 leading-relaxed">{cat.desc}</p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-zinc-50 dark:border-zinc-800">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{cat.count}</span>
                  <Link href="/signup" className="bg-[#C2185B] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all hover:bg-[#A3154D] cursor-pointer">
                    Hire talent
                  </Link>
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
            <span className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-2 block">Why Companies Choose Kairos</span>
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-white leading-tight">
              Hire faster. Save more. Reduce risk.
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mt-4">
              We've built a platform that removes hiring friction while maintaining rigorous quality standards. Here's how.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Verified experts only", desc: "Skip unqualified applicants. Every profile is identity-verified, skill-assessed, and includes real work samples (case studies).", icon: UserCheck },
              { title: "Faster shortlists", desc: "Receive pre-vetted candidates within 48 hours. Filter by role, seniority, availability, timezone, and working style to reach decisions sooner.", icon: Zap },
              { title: "Reduced hiring cost", desc: "Access exceptional global talent at 60–70% lower cost than traditional local hiring, without compromising quality.", icon: TrendingDown },
              { title: "Hiring confidence", desc: "Every step is designed to help teams hire with more trust, clarity, and operational control — from case study review to onboarding.", icon: CheckCircle2 },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For hiring teams card */}
            <div className="bg-[#F8F3F5] dark:bg-zinc-900/50 rounded-[3rem] p-8 lg:p-16 flex flex-col">
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl mb-8 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#C2185B]" />
              </div>
              <h2 className="text-3xl font-bold mb-6 dark:text-white">For hiring teams</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed">
                You can discover, evaluate, and hire better remote talent with less friction. Quality is pre-verified.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Shortlist talent by role, skills, seniority, and availability — all pre-vetted",
                  "Review case studies and work samples before interviews — see real capability",
                  "Hire globally while keeping cost efficiency (60–70% savings) in view",
                  "Move from shortlist to hire in days, not weeks"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-900/30 flex-shrink-0 mt-1 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#C2185B]" />
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/categories"
                className="bg-[#C2185B] text-white py-4 px-8 rounded-2xl font-bold hover:bg-[#A3154D] transition-colors w-fit"
              >
                Start hiring
              </Link>
            </div>

            {/* How hiring works card */}
            <div className="bg-[#1A1A1A] p-8 lg:p-16 rounded-[3rem] text-white">
              <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-4 block">How hiring works</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-12 leading-tight">From request to shortlist, simplified</h2>
              <div className="space-y-6">
                {[
                  { step: "Step 1", title: "Define the role", desc: "Set the role, seniority, budget, timezone, and must-have skills." },
                  { step: "Step 2", title: "Review vetted talent with case studies", desc: "Each candidate comes with verified credentials and real work samples. Evaluate quality before you interview." },
                  { step: "Step 3", title: "Interview and hire", desc: "Move quickly from shortlist to interviews and final decisions. We facilitate introduction, you make the call." },
                ].map((item) => (
                  <div key={item.step} className="bg-zinc-800/50 p-6 rounded-2xl border border-white/5">
                    <span className="text-xs text-zinc-500 font-medium mb-1 block">{item.step}</span>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cofounders Section */}
      <Cofounders />

      {/* Trust and Protection Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-2 block">Trust and Protection</span>
            <h2 className="text-4xl font-bold dark:text-white">Hiring protection built in</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Data Security", desc: "Protected infrastructure and secure handling practices for company and candidate data.", icon: Shield },
              { title: "Responsible AI", desc: "Screening support stays purpose-bound and aligned with better decision-making for hiring teams.", icon: Brain },
              { title: "Compliance Mindset", desc: "Platform operations are built with global privacy and governance expectations in mind.", icon: FileText },
              { title: "Clear Processes", desc: "Teams get a more transparent and controlled path from discovery through final hiring decisions.", icon: ClipboardList }
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-pink-50 dark:bg-zinc-800 rounded-xl mb-8 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#C2185B]" />
                </div>
                <h3 className="font-bold text-lg mb-4 dark:text-white">{item.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1A1A] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-4 block text-zinc-500">Ready to hire?</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Hire vetted talent faster and at lower cost.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              A cleaner route from hiring need to qualified shortlist — built for companies that want speed, quality, and trust.
            </p>
          </div>
          <Link href="/signup" className="relative z-10 bg-[#C2185B] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#A3154D] transition-colors shadow-lg shadow-pink-500/20 cursor-pointer">
            Start hiring
          </Link>
        </div>
      </section>
    </div>
  );
}
