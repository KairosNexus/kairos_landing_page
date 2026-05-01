"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PrivacyPolicyClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tableOfContents = [
    { id: "1", title: "1. Information We Collect", href: "#section-1" },
    { id: "2", title: "2. Data Classification", href: "#section-2" },
    { id: "3", title: "3. How We Use Your Data", href: "#section-3" },
    { id: "4", title: "4. Security Standards", href: "#section-4" },
    { id: "5", title: "5. AI Data Processing", href: "#section-5" },
    { id: "6", title: "6. Breach Notification Policy", href: "#section-6" },
    { id: "7", title: "7. Data Deletion & Retention", href: "#section-7" },
    { id: "8", title: "8. Data Sharing", href: "#section-8" },
    { id: "9", title: "9. Partner Data Governance", href: "#section-9" },
    { id: "10", title: "10. Jurisdiction & Compliance", href: "#section-10" },
    { id: "11", title: "11. Your Rights", href: "#section-11" },
    { id: "12", title: "12. Children", href: "#section-12" },
    { id: "13", title: "13. Cookie Policy", href: "#section-13" },
    { id: "14", title: "14. Nondiscrimination Statement", href: "#section-14" },
    { id: "15", title: "15. Digital Accessibility", href: "#section-15" },
    { id: "16", title: "16. Updates to This Policy", href: "#section-16" },
    { id: "17", title: "17. Contact Us", href: "#section-17" },
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
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#C2185B]/10 text-[#C2185B] text-xs font-bold uppercase tracking-widest rounded-full border border-[#C2185B]/20">
                GDPR Compliant
              </span>
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-500/20">
                CCPA / CPRA
              </span>
              <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-widest rounded-full border border-green-500/20">
                NDPR Compliant
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold dark:text-white leading-tight mb-6">
              Privacy Policy
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

              {/* Intro */}
              <div className="mb-12">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Kairos Nexus Global (&quot;Kairos,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) takes privacy, security, and data governance seriously. This Privacy Policy explains how we collect, classify, use, protect, and govern personal information across our platform. It applies to all users, job seekers, businesses, and integration partners, operating through kairosng.com and associated services.
                </p>
              </div>

              {/* Section 1 */}
              <section id="section-1" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">1. Information We Collect</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  We collect information you provide directly, information generated through platform use, and information from authorized third-party integrations.
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li><strong className="text-zinc-900 dark:text-white">Registration data:</strong> Name, email address, phone number, and profile details</li>
                  <li><strong className="text-zinc-900 dark:text-white">Identity verification data:</strong> Government-issued ID, NIN (Nigeria), SSN or EIN (where applicable)</li>
                  <li><strong className="text-zinc-900 dark:text-white">Professional data:</strong> Work history, credentials, portfolio, skills, and case study submissions</li>
                  <li><strong className="text-zinc-900 dark:text-white">Payment information:</strong> Bank account details or payment processing data (handled via secure processors)</li>
                  <li><strong className="text-zinc-900 dark:text-white">Usage data:</strong> Activity logs, project interactions, communication history, and session data</li>
                  <li><strong className="text-zinc-900 dark:text-white">Device and technical data:</strong> IP address, browser type, device identifiers, and cookies</li>
                  <li><strong className="text-zinc-900 dark:text-white">Partner-provided data:</strong> Data exchanged through authorized integrations, limited to agreed purposes</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">2. Data Classification</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Kairos Nexus Global processes six structured categories of data. Each category is handled under strict access controls and processed only for lawful, defined platform operations.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                    <thead className="bg-zinc-50 dark:bg-zinc-800">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Category</th>
                        <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Examples</th>
                        <th className="px-4 py-3 text-left font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                      <tr>
                        <td className="px-4 py-3 font-medium text-zinc-900 dark:text-white">Account Information</td>
                        <td className="px-4 py-3">Name, email, phone, profile details</td>
                        <td className="px-4 py-3">Platform identity and communication</td>
                      </tr>
                      <tr className="bg-zinc-50/50 dark:bg-zinc-800/50">
                        <td className="px-4 py-3 font-medium text-zinc-900 dark:text-white">Identity Verification Data</td>
                        <td className="px-4 py-3">Government ID, NIN, SSN, EIN</td>
                        <td className="px-4 py-3">Fraud prevention and talent verification</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-zinc-900 dark:text-white">Payment Information</td>
                        <td className="px-4 py-3">Bank details, payment data</td>
                        <td className="px-4 py-3">Escrow and transaction facilitation</td>
                      </tr>
                      <tr className="bg-zinc-50/50 dark:bg-zinc-800/50">
                        <td className="px-4 py-3 font-medium text-zinc-900 dark:text-white">Platform Usage Data</td>
                        <td className="px-4 py-3">Activity logs, interactions</td>
                        <td className="px-4 py-3">Platform improvement and safety</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-zinc-900 dark:text-white">AI Assessment Data</td>
                        <td className="px-4 py-3">Skill evaluations, scores</td>
                        <td className="px-4 py-3">Talent matching and vetting</td>
                      </tr>
                      <tr className="bg-zinc-50/50 dark:bg-zinc-800/50">
                        <td className="px-4 py-3 font-medium text-zinc-900 dark:text-white">Partner-Shared Data</td>
                        <td className="px-4 py-3">Integration data exchange</td>
                        <td className="px-4 py-3">Defined collaboration purposes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">3. How We Use Your Data</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Information is collected and used strictly for the following purposes:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Operating, improving, and securing the Kairos platform</li>
                  <li>Matching talent with business opportunities using AI-assisted vetting</li>
                  <li>Verifying user identity and professional credentials</li>
                  <li>Processing payments and facilitating escrow transactions</li>
                  <li>Communicating with users about their account, projects, and platform updates</li>
                  <li>Detecting and preventing fraud, abuse, or security threats</li>
                  <li>Complying with applicable legal obligations</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  We do not use personal data for unauthorized commercial purposes, profiling unrelated to platform functions, or sale to third parties.
                </p>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">4. Security Standards</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Kairos implements technical and organizational security measures that meet enterprise-grade standards. We do not rely on vague promises, our security posture is specific and operational.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Our security infrastructure includes:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li><strong className="text-zinc-900 dark:text-white">Encryption at rest:</strong> AES-256 equivalent standards applied to all stored user and partner data</li>
                  <li><strong className="text-zinc-900 dark:text-white">Encryption in transit:</strong> TLS 1.2 or higher for all data transmitted between users and our systems</li>
                  <li><strong className="text-zinc-900 dark:text-white">Role-based access controls:</strong> Strict internal access permissions limit who can view or modify sensitive data</li>
                  <li><strong className="text-zinc-900 dark:text-white">Multi-factor authentication (MFA):</strong> Required for all administrative and internal system access</li>
                  <li><strong className="text-zinc-900 dark:text-white">Secure cloud infrastructure:</strong> Hosted on enterprise-grade cloud providers (AWS or equivalent) with high availability and security compliance</li>
                  <li><strong className="text-zinc-900 dark:text-white">Continuous monitoring:</strong> Ongoing surveillance for suspicious activity, unauthorized access attempts, and vulnerability risks</li>
                  <li><strong className="text-zinc-900 dark:text-white">Regular vulnerability assessments:</strong> Scheduled security reviews and penetration testing protocols</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  While we implement these measures diligently, no system can guarantee absolute security. We encourage users to choose strong passwords and report suspicious activity promptly.
                </p>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">5. AI Data Processing</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Kairos uses AI systems to enhance talent matching, skill verification, scoring, and platform functionality. We are committed to the ethical and transparent use of AI.
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>AI systems process user data strictly for defined platform purposes, not for surveillance, external profiling, or unauthorized uses</li>
                  <li>User data is not sold or used to train external AI systems without explicit user consent</li>
                  <li>AI-generated insights (matching scores, assessments) remain platform-controlled and purpose-bound</li>
                  <li>AI outputs are not resold to third parties or used beyond the scope for which consent was given</li>
                  <li>Users may request deletion of AI-derived profile data consistent with applicable laws</li>
                  <li>Any use of AI data beyond its original purpose requires new, explicit consent</li>
                  <li>Kairos does not use AI to make fully automated decisions that produce significant legal or similarly consequential effects without human oversight.</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">6. Breach Notification Policy</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  In the event of a confirmed data breach affecting user information, Kairos commits to the following response protocol:
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  <strong className="text-zinc-900 dark:text-white">72-Hour Notification Commitment:</strong> Where legally required, Kairos will notify affected users within seventy-two (72) hours of confirmed breach detection. We do not wait, obscure, or minimize.
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Kairos will initiate an internal investigation immediately upon detection of a potential breach</li>
                  <li>Affected users will be notified within 72 hours of confirmed breach detection where legally required under GDPR, CCPA/CPRA, or NDPR</li>
                  <li>Notifications will be delivered via registered email and/or in-platform notification</li>
                  <li>Notifications will include: the nature of the breach, categories of data affected, likely consequences, and steps being taken to address it</li>
                  <li>Regulatory authorities will be notified where required by applicable law</li>
                </ul>
                <div className="mt-6 p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl">
                  <p className="text-sm font-bold text-zinc-900 dark:text-white mb-2">Security Contact</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    For security concerns, vulnerability reports, or breach-related inquiries, contact our dedicated security team at: security@kairosng.com
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">7. Data Deletion & Retention</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Kairos respects your right to control your data. We maintain clear Service Level Agreements (SLAs) for data deletion and retention.
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Users may request deletion of their personal data at any time through their account settings or by contacting us</li>
                  <li>Verified deletion requests are processed within thirty (30) calendar days</li>
                  <li>Upon termination of partner integrations, shared data will be securely deleted within thirty (30) days unless legally required to retain it</li>
                  <li>Secure deletion protocols are followed for all data destruction, data is not merely deactivated, it is destroyed</li>
                  <li>Certain categories of data may be retained longer where required by law (e.g., financial records, fraud prevention obligations)</li>
                  <li>Users will be informed if retention beyond the standard period is required</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">8. Data Sharing</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Kairos does not sell personal data. Data may be shared only in the following limited circumstances:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li><strong className="text-zinc-900 dark:text-white">Service providers:</strong> Trusted third parties who assist in operating our platform (e.g., payment processors, identity verification partners, cloud infrastructure), bound by strict data processing agreements</li>
                  <li><strong className="text-zinc-900 dark:text-white">Integration partners:</strong> Only with data explicitly shared for agreed purposes under Partner Data Governance standards (see Section 9)</li>
                  <li><strong className="text-zinc-900 dark:text-white">Legal obligations:</strong> When required by law, court order, or regulatory authority</li>
                  <li><strong className="text-zinc-900 dark:text-white">Safety:</strong> To prevent fraud, protect user safety, or defend Kairos&apos;s legal rights</li>
                  <li><strong className="text-zinc-900 dark:text-white">Business transfers:</strong> In the event of a merger, acquisition, or asset sale, users will be notified in advance</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">9. Partner Data Governance & Integration Standards</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  As Kairos deepens enterprise partnerships and API integrations, we hold all partner relationships to strict data governance standards. These are not optional, they are contractual requirements.
                </p>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">Partner Data Standards</h3>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li>Data sharing is purpose-bound, limited strictly to agreed, documented use cases</li>
                  <li>Partner data will not be resold or used for unrelated commercial purposes</li>
                  <li>All shared data is encrypted in transit and at rest under the standards defined in Section 4</li>
                  <li>Access to shared data is limited to authorized personnel only on both sides</li>
                  <li>All integration activity is logged and auditable, Kairos maintains complete audit trails</li>
                  <li>Upon termination of partnership, shared data will be deleted within thirty (30) days unless legally required to retain it</li>
                  <li>Partners are required to maintain comparable security and privacy standards and certify their compliance upon request</li>
                  <li>Non-circumvention: partner data may not be used to bypass platform relationships or solicit users independently</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  These standards apply to all integration partners, including edtech platforms, background check providers, payment processors, and any other authorized third-party integrators.
                </p>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">10. Jurisdiction & Compliance Commitment</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Kairos Nexus Global is committed to compliance with applicable data protection regulations across all jurisdictions where our users and partners operate.
                </p>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">General Data Protection Regulation (GDPR), European Union</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 pl-4 border-l-2 border-[#C2185B]">
                  Users in the European Economic Area have the right to access, rectify, erase, restrict processing of, and port their personal data. They also have the right to object to processing and to lodge a complaint with a supervisory authority. Our lawful basis for processing is typically contract performance, legitimate interests, or explicit consent.
                </p>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 mt-6">California Consumer Privacy Act / CPRA (CCPA/CPRA)</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 pl-4 border-l-2 border-blue-500">
                  California residents have the right to know what personal information is collected, to delete personal information, to opt out of the sale of personal information (Kairos does not sell data), and to non-discrimination for exercising these rights. Requests may be submitted to info@kairosnexusglobal.com.
                </p>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 mt-6">Nigeria Data Protection Regulation (NDPR)</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 pl-4 border-l-2 border-green-500">
                  Kairos complies with the NDPR as administered by the Nigeria Data Protection Bureau (NDPB). Nigerian users have rights to access, correct, and delete their personal data. Data collection is based on lawful grounds and subject to the principles of purpose limitation and data minimization.
                </p>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  Users may exercise applicable rights under any of these frameworks. Requests are processed within the timeframes required by law. Where full compliance with a specific regulation is still being operationalized, Kairos commits to good-faith progress and transparency about its compliance posture.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">11. Your Rights</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Regardless of your jurisdiction, Kairos recognizes the following rights for all users:
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li><strong className="text-zinc-900 dark:text-white">Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong className="text-zinc-900 dark:text-white">Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong className="text-zinc-900 dark:text-white">Right to Erasure:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
                  <li><strong className="text-zinc-900 dark:text-white">Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong className="text-zinc-900 dark:text-white">Right to Object:</strong> Object to processing of your data for direct marketing or other legitimate interests</li>
                  <li><strong className="text-zinc-900 dark:text-white">Right to Restriction:</strong> Request that we limit how we use your data in certain circumstances</li>
                  <li><strong className="text-zinc-900 dark:text-white">Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  To exercise any of these rights, contact us at: info@kairosnexusglobal.com or security@kairosng.com
                </p>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">12. Children</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  The Kairos platform is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that a minor has registered on our platform, we will take immediate steps to delete the account and associated data. If you believe a minor has registered, contact us at info@kairosnexusglobal.com.
                </p>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">13. Cookie Policy</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Kairos uses cookies and similar tracking technologies to operate and improve the platform.
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 pl-4">
                  <li><strong className="text-zinc-900 dark:text-white">Essential cookies:</strong> Required for core platform functionality (authentication, session management, security)</li>
                  <li><strong className="text-zinc-900 dark:text-white">Analytics cookies:</strong> Used to understand how users interact with the platform, helping us improve performance and user experience (e.g., Google Analytics)</li>
                  <li><strong className="text-zinc-900 dark:text-white">Marketing cookies:</strong> Used to measure the effectiveness of advertising campaigns (e.g., Meta Pixel, Google Ads). These do not collect sensitive personal data.</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  You may manage or disable cookies via your browser settings. Note that disabling essential cookies may affect platform functionality. By continuing to use the platform, you consent to our use of cookies as described.
                </p>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">14. Nondiscrimination Statement</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Kairos Nexus Global prohibits discrimination based on race, color, gender, age, religion, national origin, disability, sexual orientation, or any other protected characteristic. This applies to platform access, matching algorithms, vetting processes, and all interactions facilitated through the platform. Any discriminatory use of the platform by users or partners is grounds for immediate suspension. Concerns may be reported to info@kairosnexusglobal.com.
                </p>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">15. Digital Accessibility Statement</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Kairos is committed to digital accessibility and inclusive design. We work to ensure the platform is usable by individuals with disabilities, in accordance with WCAG 2.1 guidelines. accessibility concerns, barriers, or improvement suggestions may be reported to: info@kairosnexusglobal.com
                </p>
              </section>

              {/* Section 16 */}
              <section id="section-16" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">16. Updates to This Policy</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Kairos may update this Privacy Policy as the platform evolves, regulations change, or our data practices are updated. We will notify users of material changes via registered email and/or in-platform notification at least 14 days before changes take effect. Continued use of the platform after the effective date of an updated policy constitutes acceptance. We encourage you to review this policy periodically.
                </p>
              </section>

              {/* Section 17 */}
              <section id="section-17" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold dark:text-white mb-4">17. Contact Us</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  For privacy inquiries, data requests, security concerns, or compliance questions, contact us through the following channels:
                </p>
                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-6 space-y-2">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-white">General inquiries:</strong> info@kairosnexusglobal.com
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-white">Security & breach reports:</strong> security@kairosng.com
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-white">Data deletion requests:</strong> info@kairosnexusglobal.com
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-4">
                    <strong className="text-zinc-900 dark:text-white">Kairos Nexus Global</strong><br />
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
