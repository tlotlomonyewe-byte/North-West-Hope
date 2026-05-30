import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle2, Info } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

function Section({ icon: Icon, title, color, children }: {
  icon: typeof Shield;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div {...fadeIn} className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="relative bg-[#0a0a0a] border-b border-primary/30 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,208,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,208,0,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-primary/10 blur-[80px] rounded-full pointer-events-none"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          >
            <Shield className="h-3.5 w-3.5" />
            Legal Document
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight"
          >
            Screen Replacement
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tight"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-white/50 font-medium text-sm"
          >
            North West Hope Business Marketing — Klerksdorp, North West
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl space-y-6">

        {/* Screen Replacement Policy */}
        <Section icon={CheckCircle2} title="Screen Replacement Policy" color="bg-[#00ff88]/10 text-[#00ff88]">
          <ol className="space-y-4">
            {[
              "Full payment or deposit must be made before repair starts.",
              "Customers must test the phone before leaving the shop. Once accepted, no later claims for display quality, touch, or colour issues will be accepted.",
              "New screens are tested before installation.",
              "Screen replacements do NOT guarantee water resistance after repair.",
              "Phones with previous repairs, bent frames, motherboard issues, or liquid damage may develop other faults during or after repair.",
              "If the phone has hidden motherboard problems, Face ID/fingerprint issues, ghost touch, or charging faults, these are separate from the screen replacement.",
              "Warranty only covers: Touch failure, blank display, and manufacturing defects.",
              "Warranty does NOT cover: Cracked screens, water damage, physical damage, burn marks, pressure damage, or customer mishandling.",
              "No refunds after successful installation and testing.",
              "Devices not collected within 30 days may be sold to recover repair/storage costs.",
              "Estimated repair times may change depending on stock availability or technical problems.",
              "Tempered glass and screen protectors are recommended immediately after repair for protection.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-white/70 font-medium leading-relaxed text-sm">{item}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Important Customer Notice */}
        <Section icon={AlertTriangle} title="Important Customer Notice" color="bg-[#ff0055]/10 text-[#ff0055]">
          <ul className="space-y-4">
            {[
              "Cheap copy screens may have slightly lower brightness or quality compared to original screens.",
              "Some phones may lose True Tone, fingerprint, or Face ID features after repair depending on the model.",
              "We are not responsible for SIM cards, memory cards, covers, or passwords left with the device.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#ff0055] mt-2" />
                <p className="text-white/70 font-medium leading-relaxed text-sm">{item}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Customer Agreement */}
        <Section icon={Info} title="Customer Agreement" color="bg-primary/10 text-primary">
          <p className="text-white/70 font-medium leading-relaxed text-sm mb-8">
            By leaving the device for repair, the customer agrees to all of the terms and conditions listed above.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { label: "Customer Name" },
              { label: "Phone Model" },
              { label: "Date" },
              { label: "Signature" },
            ].map(({ label }) => (
              <div key={label} className="flex flex-col gap-2">
                <label className="text-xs font-black text-white/50 uppercase tracking-widest">{label}</label>
                <div className="h-10 border-b-2 border-white/20 hover:border-primary/50 transition-colors" />
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-white/30 font-medium text-center">
            Print this page or request a physical copy at our shop.
          </p>
        </Section>

        {/* Contact prompt */}
        <motion.div {...fadeIn} className="text-center pt-4">
          <p className="text-white/40 text-sm font-medium mb-3">Questions about our repair terms?</p>
          <a
            href="https://wa.me/27679785028"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] text-white font-black px-6 py-3 rounded-full hover:bg-[#25d366]/90 transition-colors text-sm shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            data-testid="link-terms-whatsapp"
          >
            Chat with us on WhatsApp
          </a>
        </motion.div>

      </div>
    </div>
  );
}
