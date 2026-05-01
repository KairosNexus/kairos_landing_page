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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-full sm:h-auto sm:max-w-lg bg-white dark:bg-zinc-900 rounded-none sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Close Button - Top Right */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 dark:bg-zinc-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-zinc-800 transition-colors border border-white/10 dark:border-zinc-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
            </button>

            {/* Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Header */}
              <div className="p-6 sm:p-8 lg:p-10 flex-shrink-0">
                <div className="mb-4">
                  <span className="text-[#C2185B] font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] mb-3 block">
                    Welcome to Kairos
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-white leading-tight">
                    What brings you here today?
                  </h2>
                </div>
              </div>

              {/* Options - Scrollable on mobile */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-8 lg:px-10 pb-6 space-y-4">
                {/* Talent Option */}
                <button
                  onClick={() => onSelect("talent")}
                  className="w-full group text-left p-5 sm:p-6 lg:p-7 rounded-2xl border-2 border-transparent bg-zinc-50 dark:bg-zinc-800/50 hover:bg-pink-50 dark:hover:bg-pink-900/10 hover:border-[#C2185B] transition-all duration-200"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-[#C2185B]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg sm:text-xl mb-1 dark:text-white">
                        Find jobs
                      </h4>
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                        Explore vetted remote roles, search by skill and pay, and apply to better-fit opportunities faster.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Search roles", "See salary ranges", "Apply confidently"].map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 px-2 py-1 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#C2185B]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 w-full bg-[#C2185B] text-white py-4 rounded-xl font-bold text-center text-sm sm:text-base group-hover:bg-[#A3154D] transition-colors">
                    Continue as Talent
                  </div>
                </button>

                {/* Divider */}
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zinc-200 dark:border-zinc-700" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white dark:bg-zinc-900 px-3 text-xs text-zinc-400 uppercase tracking-wider">
                      or
                    </span>
                  </div>
                </div>

                {/* Company Option */}
                <button
                  onClick={() => onSelect("company")}
                  className="w-full group text-left p-5 sm:p-6 lg:p-7 rounded-2xl border-2 border-transparent bg-zinc-50 dark:bg-zinc-800/50 hover:bg-pink-50 dark:hover:bg-pink-900/10 hover:border-[#C2185B] transition-all duration-200"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#C2185B]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg sm:text-xl mb-1 dark:text-white">
                        Hire talent
                      </h4>
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                        Discover vetted experts, reduce hiring overhead, and build stronger remote teams with more confidence.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Browse vetted talent", "Shortlist faster", "Reduce hiring cost"].map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 px-2 py-1 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#C2185B]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 w-full bg-white dark:bg-zinc-800 text-[#C2185B] border-2 border-pink-100 dark:border-pink-900/30 py-4 rounded-xl font-bold text-center text-sm sm:text-base group-hover:bg-pink-50 dark:group-hover:bg-pink-900/10 transition-colors">
                    Continue as Company
                  </div>
                </button>
              </div>

              {/* Footer Note */}
              <div className="px-6 sm:px-8 lg:px-10 py-4 border-t border-zinc-100 dark:border-zinc-800 flex-shrink-0">
                <p className="text-center text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                  You can switch paths later from the header or onboarding flow.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
