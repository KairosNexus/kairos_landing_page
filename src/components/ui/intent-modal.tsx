"use client";

import { X, Briefcase, Users, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface IntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (intent: "talent" | "company") => void;
}

export function IntentModal({ isOpen, onClose, onSelect }: IntentModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-[#C2185B] font-bold text-xs uppercase tracking-widest mb-2">Welcome to Kairos</h3>
                  <h2 className="text-3xl font-bold dark:text-white">What brings you here today?</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Talent Option */}
                <button
                  onClick={() => onSelect("talent")}
                  className="w-full group text-left p-6 rounded-2xl border-2 border-transparent bg-gray-50 dark:bg-zinc-800/50 hover:bg-pink-50 dark:hover:bg-pink-900/10 hover:border-[#C2185B] transition-all"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Briefcase className="w-6 h-6 text-[#C2185B]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1 dark:text-white">Find jobs</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Explore vetted remote roles, search by skill and pay, and apply to better-fit opportunities faster.</p>
                      <div className="flex flex-wrap gap-2">
                        {["Search roles", "See salary ranges", "Apply confidently"].map((tag) => (
                          <span key={tag} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500 px-2 py-1 bg-white dark:bg-zinc-800 rounded-full border dark:border-zinc-700">
                            <CheckCircle2 className="w-3 h-3 text-[#C2185B]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 w-full bg-[#C2185B] text-white py-3 rounded-xl font-bold text-center group-hover:bg-[#A3154D] transition-colors">
                    Continue as Talent
                  </div>
                </button>

                {/* Company Option */}
                <button
                  onClick={() => onSelect("company")}
                  className="w-full group text-left p-6 rounded-2xl border-2 border-transparent bg-gray-50 dark:bg-zinc-800/50 hover:bg-pink-50 dark:hover:bg-pink-900/10 hover:border-[#C2185B] transition-all"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-[#C2185B]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1 dark:text-white">Hire talent</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Discover vetted experts, reduce hiring overhead, and build stronger remote teams with more confidence.</p>
                      <div className="flex flex-wrap gap-2">
                        {["Browse vetted talent", "Shortlist faster", "Reduce hiring cost"].map((tag) => (
                          <span key={tag} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500 px-2 py-1 bg-white dark:bg-zinc-800 rounded-full border dark:border-zinc-700">
                            <CheckCircle2 className="w-3 h-3 text-[#C2185B]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 w-full bg-white dark:bg-zinc-800 text-[#C2185B] border-2 border-pink-100 dark:border-pink-900/30 py-3 rounded-xl font-bold text-center group-hover:bg-pink-50 dark:group-hover:bg-pink-900/10 transition-colors">
                    Continue as Company
                  </div>
                </button>
              </div>
              
              <p className="text-center text-[10px] text-gray-400 dark:text-zinc-500 mt-6 font-medium">
                You can switch paths later from the header or onboarding flow.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
