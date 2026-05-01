"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function TermsOfServiceClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tableOfContents = [
    { id: "1", title: "1. Acceptance of Terms", href: "#section-1" },
    { id: "2", title: "2. Definitions", href: "#section-2" },
    { id: "3", title: "3. Platform Use & Eligibility", href: "#section-3" },
    { id: "4", title: "4. User Accounts & Profiles", href: "#section-4" },
    { id: "5", title: "5. Platform Services & Matching", href: "#section-5" },
    { id: "6", title: "6. Payments, Escrow & fees", href: "#section-6" },
    { id: "7", title: "7. Identity Verification & Background Checks", href: "#section-7" },
    { id: "8", title: "8. Intellectual Property", href: "#section-8" },
    { id: "9", title: "9. Confidentiality & NDAs", href: "#section-9" },
    { id: "10", title: "10. Non-Circumvention", href: "#section-10" },
    { id: "11", title: "11. Prohibited Conduct", href: "#section-11" },
    { id: "12", title: "12. Limitation of Liability", href: "#section-12" },
    { id: "13", title: "13. Indemnification", href: "#section-13" },
    { id: "14", title: "14. Dispute Resolution & Arbitration", href: "#section-14" },
    { id: "15", title: "15. Governing Law & Jurisdiction", href: "#section-15" },
    { id: "16", title: "16. Termination", href: "#section-16" },
    { id: "17", title: "17. Changes to Terms", href: "#section-17" },
    { id: "18", title: "18. Contact Information", href: "#section-18" },
  ];

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <Link
            href="/"
            className="inline-flex items-center text-zinc-500 hover:text-[#C2185B] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center">
            <span className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-4 block">
              Legal Agreement
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold dark:text-white leading-tight mb-6">
              Terms of Service
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <span>Effective Date: January 2, 2026</span>
              <span>|</span>
              <span>Last Updated: February 2026</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of Contents - Sticky on desktop */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 hidden lg:block">
              <h2 className="text-xs font-bold tracking-widest text-gray-900 dark:text-white mb-6 uppercase">
                Contents
              </h2>
              <nav>
                <ul className="space-y-3">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="block text-sm text-zinc-500 dark:text-zinc-400 hover:text-[#C2185B] transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <div className="max-w-3xl bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-pink-500/5 border border-zinc-100 dark:border-zinc-800">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-10">
                <h2 className="text-xs font-bold tracking-widest text-gray-900 dark:text-white mb-4 uppercase">
                  Contents
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-[#C2185B] transition-colors py-2 border-b border-zinc-100 dark:border-zinc-800"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Section 1 */}
              <section id="section-1" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  By accessing or using the Kairos platform, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the platform. These Terms constitute a legally binding agreement between you and Kairos Nexus Global.
                </p>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">2. Definitions</h2>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li><strong className="text-zinc-900 dark:text-white">&quot;Kairos&quot;, &quot;we&quot;, &quot;us&quot;</strong> refers to Kairos Nexus Global and its affiliated entities.</li>
                  <li><strong className="text-zinc-900 dark:text-white">&quot;Platform&quot;</strong> means the kairosng.com website, mobile applications, and all related services.</li>
                  <li><strong className="text-zinc-900 dark:text-white">&quot;User&quot;, &quot;you&quot;, &quot;your&quot;</strong> refers to any individual or entity accessing or using the platform.</li>
                  <li><strong className="text-zinc-900 dark:text-white">&quot;Talent&quot;</strong> means job seekers offering services through the platform.</li>
                  <li><strong className="text-zinc-900 dark:text-white">&quot;Company&quot;</strong> means businesses hiring talent through the platform.</li>
                  <li><strong className="text-zinc-900 dark:text-white">&quot;Project&quot;</strong> means any engagement or contract facilitated through Kairos.</li>
                  <li><strong className="text-zinc-900 dark:text-white">&quot;Content&quot;</strong> means all data, text, images, files, and other materials uploaded or transmitted through the platform.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">3. Platform Use & Eligibility</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  The Kairos platform is designed to connect businesses with vetted remote talent globally. You must be at least 18 years of age to use the platform. By using Kairos, you represent and warrant that you have the right, authority, and capacity to enter into these Terms.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Kairos is not an employer but a marketplace facilitating independent contractor relationships between Companies and Talent. No partnership, joint venture, employment, or agency relationship is created by these Terms.
                </p>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">4. User Accounts & Profiles</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  You are responsible for maintaining the accuracy and confidentiality of your account credentials. You agree to:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Provide accurate, current, and complete information during registration and thereafter</li>
                  <li>Promptly update any information that becomes inaccurate, incomplete, or outdated</li>
                  <li>Safeguard your account credentials and notify Kairos immediately of any unauthorized use</li>
                  <li>Accept sole responsibility for all activities conducted under your account</li>
                  <li>Use a professional, accurate profile representation (no impersonation)</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">5. Platform Services & Matching</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Kairos provides AI-assisted matching, vetting, and project facilitation services. While we strive to ensure quality matches, we do not guarantee:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Specific outcomes or employment results for Talent</li>
                  <li>Performance, quality, or availability of any particular Talent or Company</li>
                  <li>Continuous or uninterrupted platform availability</li>
                  <li>Accuracy of AI-generated matching scores or assessments</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  Kairos reserves the right to reject, suspend, or remove any user or listing at our sole discretion, without liability.
                </p>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">6. Payments, Escrow & Fees</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  All payments through Kairos are processed via secure payment processors. Kairos may facilitate escrow services for project-based work. Key terms:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Companies agree to pay agreed-upon fees as specified in project agreements</li>
                  <li>Talent agrees to deliver work as agreed in project scope and timeline</li>
                  <li>Kairos charges platform fees (percentage or flat-rate) as disclosed during onboarding</li>
                  <li>Escrow funds are held and released per agreed milestones, subject to dispute resolution processes</li>
                  <li>Disputes over payment or delivery are subject to Section 14 (Dispute Resolution)</li>
                  <li>All fees are exclusive of applicable taxes unless expressly stated</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">7. Identity Verification & Background Checks</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  To maintain platform integrity, Kairos may require identity verification, background checks, or credential validation. By using the platform, you consent to:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Verification of personal information including government ID, tax ID, or professional credentials</li>
                  <li>Background screening where legally permissible</li>
                  <li>Use of third-party verification services under strict data governance</li>
                  <li>Retention of verification data per our Privacy Policy and Data Governance standards</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  Failure to pass required verification may result in account suspension or removal from the platform.
                </p>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">8. Intellectual Property</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  You retain ownership of your original Content. However, by uploading Content to Kairos, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute that Content solely to operate and improve the platform.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Work product created by Talent for Companies (&quot;Deliverables&quot;) is considered &quot;work made for hire&quot; or is assigned to the Company upon full payment. Kairos does not claim ownership of Deliverables.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  The Kairos brand, logos, trademarks, and platform technology are owned exclusively by Kairos and may not be used without express written permission.
                </p>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">9. Confidentiality & NDAs</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Parties to a project may enter into separate Non-Disclosure Agreements (NDAs). Kairos respects and enforces valid NDAs but is not a party to such agreements unless explicitly countersigned.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Users agree to keep confidential any proprietary information shared through the platform and to use it only for the intended project purposes.
                </p>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">10. Non-Circumvention</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Users agree not to circumvent the Kairos platform to conduct business directly with other users introduced through Kairos for a period of 24 months from initial introduction. This restriction applies to any Talent, Company, or partner relationship initially formed via Kairos.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Violation of the non-circumvention clause may result in account termination, legal action, and liability for damages, including lost platform fees.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">11. Prohibited Conduct</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  The following activities are strictly prohibited on the Kairos platform:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Fraud, misrepresentation, or false statements in any profile, application, or communication</li>
                  <li>Sharing of illegal, harmful, or infringing content</li>
                  <li>Harassment, discrimination, or abusive behavior toward other users</li>
                  <li>Attempting to bypass platform fees or payment systems</li>
                  <li>Scraping, data harvesting, or unauthorized system access</li>
                  <li>Use of the platform for unauthorized commercial or spam purposes</li>
                  <li>Violation of any applicable law, regulation, or third-party rights</li>
                </ul>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">12. Limitation of Liability</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, KAIROS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST OPPORTUNITIES, OR BUSINESS INTERRUPTION.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  KAIROS&apos; TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR PLATFORM USE SHALL NOT EXCEED THE AMOUNT OF FEES PAID BY YOU TO KAIROS IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">13. Indemnification</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Kairos and its affiliates, officers, employees, and agents from any claims, damages, losses, or expenses arising from your use of the platform, violation of these Terms, or infringement of any third-party rights.
                </p>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">14. Dispute Resolution & Arbitration</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Any dispute arising from these Terms or platform use shall first be attempted to be resolved through good-faith negotiation. If negotiation fails:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Disputes shall be resolved through binding arbitration administered by a recognized arbitration institution</li>
                  <li>Arbitration shall occur in English, with a single arbitrator, in Delaware, USA unless otherwise agreed</li>
                  <li>The arbitrator&apos;s award shall be final and enforceable in any court of competent jurisdiction</li>
                  <li>Each party bears its own costs, unless the arbitrator awards otherwise</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  Notwithstanding the above, Kairos may seek injunctive relief in any court to protect intellectual property or prevent irreparable harm.
                </p>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">15. Governing Law & Jurisdiction</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.
                </p>
              </section>

              {/* Section 16 */}
              <section id="section-16" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">16. Termination</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  You may terminate your account at any time through account settings or by contacting us. Kairos may suspend or terminate your account for:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Violation of these Terms or platform policies</li>
                  <li>Fraudulent, illegal, or harmful activity</li>
                  <li>Repeated user complaints or safety concerns</li>
                  <li>Non-payment of fees (for Company accounts)</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  Upon termination, your right to use the platform ceases immediately. All provisions that should survive termination (e.g., confidentiality, indemnification, limitation of liability) shall remain in effect.
                </p>
              </section>

              {/* Section 17 */}
              <section id="section-17" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">17. Changes to Terms</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Kairos reserves the right to modify these Terms at any time. Material changes will be communicated via email or in-platform notification at least 14 days before taking effect. Continued use of the platform after the effective date constitutes acceptance of the updated Terms.
                </p>
              </section>

              {/* Section 18 */}
              <section id="section-18" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">18. Contact Information</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  For questions about these Terms, legal notices, or disputes, contact us at:
                </p>
                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-6 space-y-2">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-white">Kairos Nexus Global</strong>
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Email: legal@kairosng.com
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Website: kairosng.com
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
