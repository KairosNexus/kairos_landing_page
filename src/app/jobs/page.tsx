"use client";

import { useState, useMemo } from "react";
import { Search, ArrowLeft, MapPin, Clock, Filter, Briefcase, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";
import { jobs as allJobs } from "@/lib/api";

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(allJobs.map(j => j.category)))], []);
  const types = useMemo(() => ["All", ...Array.from(new Set(allJobs.map(j => j.type)))], []);

  const filteredJobs = useMemo(() => {
    return allJobs.filter(job => 
      (job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
       job.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === "All" || job.category === selectedCategory) &&
      (selectedType === "All" || job.type === selectedType)
    );
  }, [searchQuery, selectedCategory, selectedType]);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-[#C2185B] transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div>
            <span className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-2 block">Open Opportunities</span>
            <h1 className="text-4xl lg:text-6xl font-bold dark:text-white leading-tight">Find your next remote role</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-4 max-w-2xl text-lg">
              Discover vetted roles with serious companies. Filter by role, pay, and working style.
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-6 mb-12 shadow-xl shadow-pink-500/5 border border-zinc-100 dark:border-zinc-800">
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="flex items-center gap-3 pl-6 pr-2 py-2 border border-zinc-100 dark:border-zinc-800 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50">
              <Search className="w-5 h-5 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Search by role, company, or skills..."
                className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 dark:text-white placeholder:text-zinc-400 py-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="hidden sm:block bg-[#C2185B] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#A3154D] transition-all">
                Search
              </button>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-1">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 block">Category</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        selectedCategory === cat 
                          ? "bg-[#C2185B] text-white shadow-md shadow-pink-500/10" 
                          : "bg-zinc-50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 block">Job Type</span>
                <div className="flex flex-wrap gap-2">
                  {types.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        selectedType === type 
                          ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-md" 
                          : "bg-zinc-50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="grid grid-cols-1 gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-[2rem] shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-lg hover:border-pink-100 dark:hover:border-pink-900/30 transition-all group">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-16 h-16 bg-pink-50 dark:bg-pink-900/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <job.icon className="w-8 h-8 text-[#C2185B]" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold dark:text-white group-hover:text-[#C2185B] transition-colors">{job.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Briefcase className="w-4 h-4" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4" />
                        {job.pay}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {job.postedAt}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto pt-4 sm:pt-0">
                    <button className="flex-1 sm:flex-none bg-[#C2185B] text-white px-8 py-3 rounded-xl text-sm font-bold transition-all hover:bg-[#A3154D] shadow-lg shadow-pink-500/10">
                      Apply Now
                    </button>
                    <button className="p-3 bg-zinc-50 dark:bg-zinc-800 text-zinc-400 hover:text-[#C2185B] rounded-xl transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-24 text-center bg-white dark:bg-zinc-900 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-zinc-300 dark:text-zinc-600" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-2">No jobs found</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Try adjusting your search or filters to find your next opportunity.</p>
              <button 
                onClick={() => {setSearchQuery(""); setSelectedCategory("All"); setSelectedType("All");}}
                className="mt-8 text-[#C2185B] font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-zinc-900 dark:bg-zinc-950 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 border border-zinc-800/50">
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Want to be the first to know?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Join our talent network and get notified as soon as new roles matching your profile are posted.
            </p>
          </div>
          <button className="relative z-10 bg-[#C2185B] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#A3154D] transition-all shadow-xl shadow-pink-500/20 cursor-pointer">
            Join Talent Network
          </button>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C2185B] opacity-10 blur-[100px] -mr-48 -mt-48" />
        </div>
      </div>
    </div>
  );
}
