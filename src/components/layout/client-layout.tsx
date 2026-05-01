"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { IntentProvider, useIntent } from "@/components/providers/intent-provider";
import { ClientIntentModal } from "@/components/ui/client-intent-modal";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { intent, setIntent, showModal, setShowModal } = useIntent();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] dark:bg-black transition-colors duration-300">
      <Header intent={intent} setIntent={setIntent} />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />

      <ScrollToTop />

      <ClientIntentModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onSelect={setIntent} 
      />
    </div>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <IntentProvider>
      <LayoutContent>{children}</LayoutContent>
    </IntentProvider>
  );
}
