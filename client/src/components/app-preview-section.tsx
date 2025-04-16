import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

interface AppScreenshotProps {
  src: string;
  alt: string;
  label: string;
  description?: string;
  delay: number;
}

const AppScreenshot = ({ src, alt, label, description, delay }: AppScreenshotProps) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-full max-w-[300px] snap-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="relative bg-white rounded-[45px] overflow-hidden shadow-2xl border border-neutral-200" 
        whileHover={{ 
          y: -10, 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          transition: { duration: 0.3 } 
        }}
        initial={{ rotateY: -5 }}
        animate={{ 
          y: [0, -5, 0],
          rotateY: [-1, 1, -1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        {/* iPhone "Dynamic Island" */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[35%] h-8 bg-black rounded-b-3xl z-10 flex justify-center items-end pb-1">
          <div className="w-16 h-1 bg-neutral-600 rounded-full"></div>
        </div>
        
        <svg
          width="388"
          height="840"
          viewBox="0 0 388 840"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="screenBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
          </defs>
          
          <rect width="388" height="840" rx="40" fill="url(#screenBg)" />
          
          {/* Powered by VinAI tag */}
          <g transform="translate(144, 800)">
            <rect width="100" height="20" rx="10" fill="#E6FFFA" />
            <text x="50" y="14" fontSize="10" fill="#4FD1C5" textAnchor="middle" fontFamily="Arial">Powered by VinAI</text>
          </g>
          
          {alt === "Dashboard" && (
            <>
              {/* Status bar */}
              <rect x="24" y="20" width="340" height="20" rx="4" fill="transparent" />
              <circle cx="340" cy="30" r="4" fill="#0F172A" />
              <path d="M325 27V33" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M318 25V35" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M311 29V31" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <text x="44" y="32" fontSize="10" fill="#0F172A" fontFamily="Arial">9:41</text>
              
              <rect x="20" y="60" width="348" height="40" rx="12" fill="#4FD1C5" />
              <rect x="40" y="76" width="100" height="8" rx="4" fill="white" />
              
              <rect x="20" y="120" width="348" height="140" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="40" y="140" width="120" height="8" rx="4" fill="#1E293B" />
              <rect x="40" y="156" width="200" height="6" rx="3" fill="#64748B" />
              
              <rect x="40" y="180" width="308" height="60" rx="12" fill="#F8FAFC" />
              <circle cx="70" cy="210" r="16" fill="#4FD1C5" />
              <rect x="100" y="202" width="60" height="8" rx="4" fill="#1E293B" />
              <rect x="100" y="218" width="40" height="6" rx="3" fill="#64748B" />
              <rect x="300" y="206" width="28" height="8" rx="4" fill="#4FD1C5" />
              
              <rect x="20" y="280" width="168" height="140" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="40" y="300" width="80" height="8" rx="4" fill="#1E293B" />
              <rect x="40" y="316" width="60" height="6" rx="3" fill="#64748B" />
              <path d="M70 380L104 346L138 380" stroke="#4FD1C5" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              
              <rect x="200" y="280" width="168" height="140" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="220" y="300" width="80" height="8" rx="4" fill="#1E293B" />
              <rect x="220" y="316" width="60" height="6" rx="3" fill="#64748B" />
              <circle cx="284" cy="370" r="30" fill="#F8FAFC" stroke="#4FD1C5" strokeWidth="8" />
              <path d="M272 370L282 380L296 366" stroke="#4FD1C5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              
              <rect x="20" y="440" width="348" height="100" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="40" y="460" width="180" height="8" rx="4" fill="#1E293B" />
              <rect x="40" y="476" width="120" height="6" rx="3" fill="#64748B" />
              <rect x="40" y="500" width="308" height="1" fill="#E2E8F0" />
              <circle cx="56" cy="520" r="8" fill="#4FD1C5" />
              <rect x="70" y="516" width="120" height="8" rx="4" fill="#64748B" />
              <rect x="310" y="512" width="16" height="16" rx="8" fill="#F1F5F9" />
              <path d="M306 520H314" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              
              <rect x="20" y="560" width="348" height="100" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="40" y="580" width="180" height="8" rx="4" fill="#1E293B" />
              <rect x="40" y="596" width="120" height="6" rx="3" fill="#64748B" />
              <rect x="40" y="620" width="308" height="1" fill="#E2E8F0" />
              <circle cx="56" cy="640" r="8" fill="#EF4444" />
              <rect x="70" y="636" width="120" height="8" rx="4" fill="#64748B" />
              <rect x="310" y="632" width="16" height="16" rx="8" fill="#F1F5F9" />
              <path d="M306 640H314" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              
              <rect x="20" y="680" width="348" height="100" rx="20" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
              <rect x="40" y="700" width="180" height="8" rx="4" fill="#1E293B" />
              <rect x="40" y="716" width="120" height="6" rx="3" fill="#64748B" />
              <rect x="40" y="740" width="308" height="1" fill="#E2E8F0" />
              <circle cx="56" cy="760" r="8" fill="#F59E0B" />
              <rect x="70" y="756" width="120" height="8" rx="4" fill="#64748B" />
              <rect x="310" y="752" width="16" height="16" rx="8" fill="#F1F5F9" />
              <path d="M306 760H314" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            </>
          )}
          
          {alt === "Chat Interface" && (
            <>
              {/* Status bar */}
              <rect x="24" y="20" width="340" height="20" rx="4" fill="transparent" />
              <circle cx="340" cy="30" r="4" fill="#0F172A" />
              <path d="M325 27V33" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M318 25V35" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M311 29V31" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <text x="44" y="32" fontSize="10" fill="#0F172A" fontFamily="Arial">9:41</text>
            
              <rect x="20" y="60" width="348" height="50" rx="16" fill="#4FD1C5" />
              <circle cx="45" cy="85" r="16" fill="white" />
              <rect x="70" y="77" width="80" height="8" rx="4" fill="white" />
              <rect x="70" y="93" width="50" height="6" rx="3" fill="#E6FFFA" />
              <circle cx="330" cy="85" r="12" fill="#E6FFFA" />
              <path d="M330 81V89" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M326 85H334" stroke="white" strokeWidth="2" strokeLinecap="round" />
              
              <rect x="20" y="130" width="240" height="70" rx="20" fill="#F1F5F9" />
              <rect x="40" y="150" width="200" height="8" rx="4" fill="#64748B" />
              <rect x="40" y="166" width="200" height="8" rx="4" fill="#64748B" />
              <rect x="40" y="182" width="160" height="8" rx="4" fill="#64748B" />
              
              <rect x="128" y="220" width="240" height="70" rx="20" fill="#E6FFFA" />
              <rect x="148" y="240" width="200" height="8" rx="4" fill="#4FD1C5" />
              <rect x="148" y="256" width="200" height="8" rx="4" fill="#4FD1C5" />
              <rect x="148" y="272" width="160" height="8" rx="4" fill="#4FD1C5" />
              
              <rect x="20" y="310" width="240" height="90" rx="20" fill="#F1F5F9" />
              <rect x="40" y="330" width="200" height="8" rx="4" fill="#64748B" />
              <rect x="40" y="346" width="200" height="8" rx="4" fill="#64748B" />
              <rect x="40" y="362" width="200" height="8" rx="4" fill="#64748B" />
              <rect x="40" y="378" width="160" height="8" rx="4" fill="#64748B" />
              
              <rect x="128" y="420" width="240" height="70" rx="20" fill="#E6FFFA" />
              <rect x="148" y="440" width="200" height="8" rx="4" fill="#4FD1C5" />
              <rect x="148" y="456" width="200" height="8" rx="4" fill="#4FD1C5" />
              <rect x="148" y="472" width="160" height="8" rx="4" fill="#4FD1C5" />
              
              <rect x="20" y="510" width="240" height="70" rx="20" fill="#F1F5F9" />
              <rect x="40" y="530" width="200" height="8" rx="4" fill="#64748B" />
              <rect x="40" y="546" width="200" height="8" rx="4" fill="#64748B" />
              <rect x="40" y="562" width="160" height="8" rx="4" fill="#64748B" />
              
              <rect x="20" y="740" width="348" height="50" rx="25" fill="#F8FAFC" stroke="#E2E8F0" />
              <rect x="40" y="760" width="240" height="10" rx="5" fill="#F1F5F9" />
              <circle cx="330" cy="765" r="16" fill="#4FD1C5" />
              <path d="M324 765L330 771L336 765" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
          )}
          
          {alt === "Health Tracking" && (
            <>
              {/* Status bar */}
              <rect x="24" y="20" width="340" height="20" rx="4" fill="transparent" />
              <circle cx="340" cy="30" r="4" fill="#0F172A" />
              <path d="M325 27V33" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M318 25V35" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M311 29V31" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <text x="44" y="32" fontSize="10" fill="#0F172A" fontFamily="Arial">9:41</text>
              
              <rect x="20" y="60" width="348" height="60" rx="20" fill="#4FD1C5" />
              <rect x="40" y="80" width="150" height="8" rx="4" fill="white" />
              <rect x="40" y="96" width="100" height="6" rx="3" fill="#E6FFFA" />
              
              <rect x="20" y="140" width="348" height="200" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="40" y="160" width="150" height="8" rx="4" fill="#1E293B" />
              <rect x="40" y="176" width="100" height="6" rx="3" fill="#64748B" />
              
              <rect x="40" y="200" width="308" height="120" rx="12" fill="#F8FAFC" />
              <path d="M40 230H348" stroke="#E2E8F0" />
              <path d="M40 260H348" stroke="#E2E8F0" />
              <path d="M40 290H348" stroke="#E2E8F0" />
              <path d="M80 320L80 200" stroke="#E2E8F0" />
              <path d="M150 320L150 200" stroke="#E2E8F0" />
              <path d="M220 320L220 200" stroke="#E2E8F0" />
              <path d="M290 320L290 200" stroke="#E2E8F0" />
              
              <path d="M80 290L150 240L220 280L290 220" stroke="#4FD1C5" strokeWidth="3" />
              <circle cx="80" cy="290" r="6" fill="#4FD1C5" />
              <circle cx="150" cy="240" r="6" fill="#4FD1C5" />
              <circle cx="220" cy="280" r="6" fill="#4FD1C5" />
              <circle cx="290" cy="220" r="6" fill="#4FD1C5" />
              
              <rect x="20" y="360" width="165" height="150" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="40" y="380" width="80" height="8" rx="4" fill="#1E293B" />
              <circle cx="100" cy="450" r="40" fill="#F8FAFC" stroke="#4FD1C5" strokeWidth="8" strokeDasharray="1 1" />
              <path d="M85 450L100 465L115 450" stroke="#4FD1C5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="70" y="490" width="60" height="6" rx="3" fill="#64748B" />
              
              <rect x="203" y="360" width="165" height="150" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="223" y="380" width="80" height="8" rx="4" fill="#1E293B" />
              <rect x="223" y="410" width="125" height="18" rx="9" fill="#E6FFFA" />
              <rect x="223" y="438" width="125" height="18" rx="9" fill="#B2F5EA" />
              <rect x="223" y="466" width="125" height="18" rx="9" fill="#4FD1C5" />
              <rect x="223" y="494" width="40" height="6" rx="3" fill="#64748B" />
              <rect x="283" y="494" width="40" height="6" rx="3" fill="#64748B" />
              
              <rect x="20" y="530" width="348" height="100" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="40" y="550" width="150" height="8" rx="4" fill="#1E293B" />
              <rect x="40" y="570" width="300" height="40" rx="8" fill="#F8FAFC" />
              <rect x="60" y="586" width="260" height="8" rx="4" fill="#64748B" opacity="0.7" />
            </>
          )}
          
          {alt === "Medication Reminders" && (
            <>
              {/* Status bar */}
              <rect x="24" y="20" width="340" height="20" rx="4" fill="transparent" />
              <circle cx="340" cy="30" r="4" fill="#0F172A" />
              <path d="M325 27V33" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M318 25V35" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M311 29V31" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <text x="44" y="32" fontSize="10" fill="#0F172A" fontFamily="Arial">9:41</text>
              
              <rect x="20" y="60" width="348" height="60" rx="20" fill="#4FD1C5" />
              <rect x="40" y="80" width="200" height="8" rx="4" fill="white" />
              <rect x="40" y="96" width="120" height="6" rx="3" fill="#E6FFFA" />
              
              <rect x="20" y="140" width="348" height="90" rx="20" fill="#FEF2F2" />
              <circle cx="52" cy="185" r="24" fill="#FEE2E2" />
              <circle cx="52" cy="185" r="12" fill="#EF4444" />
              <rect x="84" y="165" width="120" height="8" rx="4" fill="#1E293B" />
              <rect x="84" y="185" width="180" height="6" rx="3" fill="#64748B" />
              <rect x="84" y="201" width="180" height="6" rx="3" fill="#64748B" />
              <rect x="296" y="166" width="48" height="28" rx="14" fill="#EF4444" />
              <rect x="303" y="177" width="34" height="6" rx="3" fill="white" />
              
              <rect x="20" y="250" width="348" height="90" rx="20" fill="#F0FDF4" />
              <circle cx="52" cy="295" r="24" fill="#DCFCE7" />
              <path d="M45 295L50 300L60 290" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="84" y="275" width="120" height="8" rx="4" fill="#1E293B" />
              <rect x="84" y="295" width="180" height="6" rx="3" fill="#64748B" />
              <rect x="84" y="311" width="180" height="6" rx="3" fill="#64748B" />
              <rect x="296" y="276" width="48" height="28" rx="14" fill="#10B981" />
              <rect x="303" y="287" width="34" height="6" rx="3" fill="white" />
              
              <rect x="20" y="360" width="348" height="90" rx="20" fill="#FFFBEB" />
              <circle cx="52" cy="405" r="24" fill="#FEF3C7" />
              <path d="M52 397V413" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <circle cx="52" cy="393" r="2" fill="#F59E0B" />
              <rect x="84" y="385" width="120" height="8" rx="4" fill="#1E293B" />
              <rect x="84" y="405" width="180" height="6" rx="3" fill="#64748B" />
              <rect x="84" y="421" width="180" height="6" rx="3" fill="#64748B" />
              <rect x="296" y="386" width="48" height="28" rx="14" fill="#F59E0B" />
              <rect x="303" y="397" width="34" height="6" rx="3" fill="white" />
              
              <rect x="20" y="470" width="348" height="180" rx="20" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
              <rect x="40" y="490" width="150" height="8" rx="4" fill="#1E293B" />
              
              <rect x="40" y="520" width="140" height="50" rx="12" fill="#F1F5F9" />
              <rect x="60" y="541" width="100" height="8" rx="4" fill="#64748B" />
              
              <rect x="200" y="520" width="140" height="50" rx="12" fill="#F1F5F9" />
              <rect x="220" y="541" width="100" height="8" rx="4" fill="#64748B" />
              
              <rect x="40" y="580" width="140" height="50" rx="12" fill="#F1F5F9" />
              <rect x="60" y="601" width="100" height="8" rx="4" fill="#64748B" />
              
              <rect x="200" y="580" width="140" height="50" rx="12" fill="#F1F5F9" />
              <rect x="220" y="601" width="100" height="8" rx="4" fill="#64748B" />
            </>
          )}

          {alt === "Appointment Booking" && (
            <>
              {/* Status bar */}
              <rect x="24" y="20" width="340" height="20" rx="4" fill="transparent" />
              <circle cx="340" cy="30" r="4" fill="#0F172A" />
              <path d="M325 27V33" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M318 25V35" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M311 29V31" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <text x="44" y="32" fontSize="10" fill="#0F172A" fontFamily="Arial">9:41</text>
              
              {/* Header */}
              <rect x="20" y="60" width="348" height="60" rx="20" fill="#4FD1C5" />
              <rect x="40" y="80" width="200" height="8" rx="4" fill="white" />
              <rect x="40" y="96" width="120" height="6" rx="3" fill="#E6FFFA" />
              
              {/* Calendar Section */}
              <rect x="20" y="140" width="348" height="260" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="40" y="160" width="180" height="8" rx="4" fill="#1E293B" />
              
              {/* Month Navigation */}
              <rect x="40" y="184" width="100" height="8" rx="4" fill="#64748B" />
              <circle cx="20" cy="188" r="12" fill="transparent" stroke="#E2E8F0" />
              <path d="M17 188L23 188" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              <circle cx="348" cy="188" r="12" fill="transparent" stroke="#E2E8F0" />
              <path d="M345 188L351 188M348 185L348 191" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              
              {/* Calendar Grid */}
              <rect x="40" y="210" width="308" height="170" rx="8" fill="#F8FAFC" />
              
              {/* Calendar Days */}
              <text x="63" y="230" fontSize="10" fill="#64748B" textAnchor="middle">Mon</text>
              <text x="108" y="230" fontSize="10" fill="#64748B" textAnchor="middle">Tue</text>
              <text x="153" y="230" fontSize="10" fill="#64748B" textAnchor="middle">Wed</text>
              <text x="198" y="230" fontSize="10" fill="#64748B" textAnchor="middle">Thu</text>
              <text x="243" y="230" fontSize="10" fill="#64748B" textAnchor="middle">Fri</text>
              <text x="288" y="230" fontSize="10" fill="#64748B" textAnchor="middle">Sat</text>
              <text x="333" y="230" fontSize="10" fill="#64748B" textAnchor="middle">Sun</text>
              
              {/* Calendar Dates */}
              <circle cx="63" cy="260" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="63" y="264" fontSize="10" fill="#64748B" textAnchor="middle">1</text>
              
              <circle cx="108" cy="260" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="108" y="264" fontSize="10" fill="#64748B" textAnchor="middle">2</text>
              
              <circle cx="153" cy="260" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="153" y="264" fontSize="10" fill="#64748B" textAnchor="middle">3</text>
              
              <circle cx="198" cy="260" r="14" fill="#4FD1C5" />
              <text x="198" y="264" fontSize="10" fill="white" textAnchor="middle">4</text>
              
              <circle cx="243" cy="260" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="243" y="264" fontSize="10" fill="#64748B" textAnchor="middle">5</text>
              
              <circle cx="288" cy="260" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="288" y="264" fontSize="10" fill="#64748B" textAnchor="middle">6</text>
              
              <circle cx="333" cy="260" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="333" y="264" fontSize="10" fill="#64748B" textAnchor="middle">7</text>
              
              {/* Calendar Slots - Week 2 */}
              <circle cx="63" cy="300" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="63" y="304" fontSize="10" fill="#64748B" textAnchor="middle">8</text>
              
              <circle cx="108" cy="300" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="108" y="304" fontSize="10" fill="#64748B" textAnchor="middle">9</text>
              
              <circle cx="153" cy="300" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="153" y="304" fontSize="10" fill="#64748B" textAnchor="middle">10</text>
              
              <circle cx="198" cy="300" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="198" y="304" fontSize="10" fill="#64748B" textAnchor="middle">11</text>
              
              <circle cx="243" cy="300" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="243" y="304" fontSize="10" fill="#64748B" textAnchor="middle">12</text>
              
              <circle cx="288" cy="300" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="288" y="304" fontSize="10" fill="#64748B" textAnchor="middle">13</text>
              
              <circle cx="333" cy="300" r="14" fill="transparent" stroke="#E2E8F0" />
              <text x="333" y="304" fontSize="10" fill="#64748B" textAnchor="middle">14</text>
              
              {/* Time Slots */}
              <rect x="20" y="420" width="348" height="260" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="40" y="440" width="100" height="8" rx="4" fill="#1E293B" />
              
              <rect x="40" y="470" width="200" height="40" rx="8" fill="#F1F5F9" />
              <rect x="60" y="486" width="60" height="8" rx="4" fill="#64748B" />
              <circle cx="200" cy="490" r="10" fill="transparent" stroke="#4FD1C5" strokeWidth="2" />
              <path d="M195 490L199 494L205 488" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              <rect x="40" y="520" width="200" height="40" rx="8" fill="#E6FFFA" />
              <rect x="60" y="536" width="60" height="8" rx="4" fill="#4FD1C5" />
              <circle cx="200" cy="540" r="10" fill="#4FD1C5" />
              <path d="M195 540L199 544L205 538" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              
              <rect x="40" y="570" width="200" height="40" rx="8" fill="#F1F5F9" />
              <rect x="60" y="586" width="60" height="8" rx="4" fill="#64748B" />
              <circle cx="200" cy="590" r="10" fill="transparent" stroke="#4FD1C5" strokeWidth="2" />
              <path d="M195 590L199 594L205 588" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              
              <rect x="40" y="620" width="200" height="40" rx="8" fill="#F1F5F9" />
              <rect x="60" y="636" width="60" height="8" rx="4" fill="#64748B" />
              <circle cx="200" cy="640" r="10" fill="transparent" stroke="#4FD1C5" strokeWidth="2" />
              <path d="M195 640L199 644L205 638" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Confirm Button */}
              <rect x="20" y="700" width="348" height="60" rx="20" fill="#4FD1C5" />
              <rect x="148" y="726" width="92" height="8" rx="4" fill="white" />
            </>
          )}
          
          {alt === "Health Records" && (
            <>
              {/* Status bar */}
              <rect x="24" y="20" width="340" height="20" rx="4" fill="transparent" />
              <circle cx="340" cy="30" r="4" fill="#0F172A" />
              <path d="M325 27V33" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M318 25V35" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M311 29V31" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <text x="44" y="32" fontSize="10" fill="#0F172A" fontFamily="Arial">9:41</text>
              
              {/* Header */}
              <rect x="20" y="60" width="348" height="60" rx="20" fill="#4FD1C5" />
              <rect x="40" y="80" width="200" height="8" rx="4" fill="white" />
              <rect x="40" y="96" width="120" height="6" rx="3" fill="#E6FFFA" />
              
              {/* Search */}
              <rect x="20" y="140" width="348" height="50" rx="20" fill="#F8FAFC" />
              <rect x="60" y="161" width="260" height="8" rx="4" fill="#94A3B8" />
              <circle cx="40" cy="165" r="10" fill="transparent" />
              <path d="M44 169L48 173" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              <circle cx="40" cy="165" r="6" fill="transparent" stroke="#94A3B8" strokeWidth="2" />
              
              {/* Categories */}
              <rect x="20" y="210" width="110" height="100" rx="20" fill="white" stroke="#E2E8F0" />
              <circle cx="75" cy="240" r="16" fill="#E6FFFA" />
              <path d="M70 240H80M75 235V245" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" />
              <rect x="45" y="270" width="60" height="8" rx="4" fill="#1E293B" />
              <rect x="60" y="286" width="30" height="6" rx="3" fill="#64748B" />
              
              <rect x="140" y="210" width="110" height="100" rx="20" fill="white" stroke="#E2E8F0" />
              <circle cx="195" cy="240" r="16" fill="#FEF2F2" />
              <path d="M190 240L200 240" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <rect x="165" y="270" width="60" height="8" rx="4" fill="#1E293B" />
              <rect x="180" y="286" width="30" height="6" rx="3" fill="#64748B" />
              
              <rect x="260" y="210" width="110" height="100" rx="20" fill="white" stroke="#E2E8F0" />
              <circle cx="315" cy="240" r="16" fill="#F0FDF4" />
              <path d="M310 237.5L315 242.5L320 237.5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="285" y="270" width="60" height="8" rx="4" fill="#1E293B" />
              <rect x="300" y="286" width="30" height="6" rx="3" fill="#64748B" />
              
              {/* Documents */}
              <rect x="20" y="330" width="348" height="60" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="30" y="350" width="40" height="20" rx="4" fill="#E6FFFA" />
              <path d="M40 353V367M34 360H46" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" />
              <rect x="80" y="345" width="120" height="8" rx="4" fill="#1E293B" />
              <rect x="80" y="365" width="60" height="6" rx="3" fill="#64748B" />
              <rect x="280" y="350" width="60" height="20" rx="10" fill="#4FD1C5" />
              <rect x="290" y="357" width="40" height="6" rx="3" fill="white" />
              
              <rect x="20" y="400" width="348" height="60" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="30" y="420" width="40" height="20" rx="4" fill="#FEF2F2" />
              <path d="M40 423V437M34 430H46" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <rect x="80" y="415" width="120" height="8" rx="4" fill="#1E293B" />
              <rect x="80" y="435" width="60" height="6" rx="3" fill="#64748B" />
              <rect x="280" y="420" width="60" height="20" rx="10" fill="#EF4444" />
              <rect x="290" y="427" width="40" height="6" rx="3" fill="white" />
              
              <rect x="20" y="470" width="348" height="60" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="30" y="490" width="40" height="20" rx="4" fill="#F0FDF4" />
              <path d="M40 493V507M34 500H46" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
              <rect x="80" y="485" width="120" height="8" rx="4" fill="#1E293B" />
              <rect x="80" y="505" width="60" height="6" rx="3" fill="#64748B" />
              <rect x="280" y="490" width="60" height="20" rx="10" fill="#10B981" />
              <rect x="290" y="497" width="40" height="6" rx="3" fill="white" />
              
              <rect x="20" y="540" width="348" height="60" rx="20" fill="white" stroke="#E2E8F0" />
              <rect x="30" y="560" width="40" height="20" rx="4" fill="#F8FAFC" />
              <path d="M40 563V577M34 570H46" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              <rect x="80" y="555" width="120" height="8" rx="4" fill="#1E293B" />
              <rect x="80" y="575" width="60" height="6" rx="3" fill="#64748B" />
              <rect x="280" y="560" width="60" height="20" rx="10" fill="#94A3B8" />
              <rect x="290" y="567" width="40" height="6" rx="3" fill="white" />
              
              {/* Share Button */}
              <rect x="20" y="620" width="348" height="60" rx="20" fill="#4FD1C5" />
              <rect x="148" y="646" width="92" height="8" rx="4" fill="white" />
              
              {/* Bottom Info */}
              <rect x="20" y="700" width="348" height="40" rx="20" fill="#E6FFFA" />
              <rect x="60" y="716" width="268" height="8" rx="4" fill="#4FD1C5" />
              <path d="M43 716a4 4 0 012.8-1.2c2.3 0 3.6 1.5 3.6 4.2 0 2.7-1.3 4.2-3.6 4.2-1 0-1.8-.4-2.3-1v3.8h-1.6v-10.8h1.1v.8zm2.6.1c-1.8 0-2.7 1.3-2.7 3.1s.9 3 2.7 3c1.8 0 2.6-1.2 2.6-3 0-1.9-.8-3.1-2.6-3.1zm9.4-.1c2.3 0 3.9 1.7 3.9 4.3 0 2.5-1.6 4.1-3.9 4.1-2.3 0-3.9-1.6-3.9-4.2 0-2.5 1.6-4.2 3.9-4.2zm0 1.3c-1.6 0-2.3 1.2-2.3 2.9 0 1.7.7 2.9 2.3 2.9 1.5 0 2.3-1.2 2.3-2.9s-.8-2.9-2.3-2.9z" fill="#4FD1C5" />
            </>
          )}
        </svg>
        
        {/* Virtual Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-black rounded-full opacity-20"></div>
      </motion.div>
      
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay * 0.2 + 0.6 }}
      >
        <p className="text-center font-medium text-lg text-neutral-800">{label}</p>
        {description && (
          <p className="text-center mt-2 text-sm text-neutral-600 px-2 leading-relaxed">{description}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function AppPreviewSection() {
  const screenshots = [
    {
      alt: "Dashboard",
      label: "Personalized Dashboard",
      description: "Your health at a glance: view vitals, upcoming appointments, medication schedules, and health goals all in one beautifully designed interface.",
      delay: 0
    },
    {
      alt: "Chat Interface",
      label: "Intuitive Chat Experience",
      description: "Communicate naturally with healie's AI through a familiar chat interface that understands your questions and provides clear, medically-informed responses.",
      delay: 1
    },
    {
      alt: "Health Tracking",
      label: "Comprehensive Health Tracking",
      description: "Monitor your vital signs, sleep patterns, activity levels, and more with visual analytics that help you understand trends and improvements over time.",
      delay: 2
    },
    {
      alt: "Medication Reminders",
      label: "Smart Medication Management",
      description: "Never miss a dose with healie's intelligent reminder system that adapts to your schedule and tracks medication effectiveness and potential interactions.",
      delay: 3
    },
    {
      alt: "Appointment Booking",
      label: "Seamless Appointment Booking",
      description: "Schedule appointments with healthcare providers directly through the app with integrated calendar syncing and automated reminders for upcoming visits.",
      delay: 4
    },
    {
      alt: "Health Records",
      label: "Secure Health Records",
      description: "Store and access your complete medical history in one secure location. Share specific records with healthcare providers as needed with granular permission controls.",
      delay: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-teal-500/20 rounded-full mb-4">
            <svg className="w-4 h-4 mr-1.5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.59 7.41L7 6L13 12L7 18L5.59 16.59L10.17 12L5.59 7.41Z" fill="currentColor"/>
              <path d="M11.59 7.41L13 6L19 12L13 18L11.59 16.59L16.17 12L11.59 7.41Z" fill="currentColor"/>
            </svg>
            <span className="text-sm font-semibold text-primary">Powered by VinAI</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"><span className="text-primary">healie</span> in Action</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Take a look at our beautiful interface designed for both iOS and Android devices with a focus on simplicity and accessibility.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* iPhone frame overlay */}
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10">
            <svg width="300" height="600" viewBox="0 0 300 600" className="text-neutral-400">
              <rect x="10" y="0" width="280" height="600" rx="45" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M110 20H190" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <circle cx="150" cy="550" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
          
          <div className="flex overflow-x-auto pb-12 -mx-4 px-4 space-x-12 snap-x">
            {screenshots.map((screenshot, index) => (
              <AppScreenshot
                key={index}
                src=""
                alt={screenshot.alt}
                label={screenshot.label}
                description={screenshot.description}
                delay={screenshot.delay}
              />
            ))}
          </div>
          
          {/* Visual indicator for scrolling */}
          <motion.div 
            className="flex justify-center items-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 4L49.7942 20H30.2058L40 4Z" fill="#4FD1C5" />
              <path d="M62 10L67.7942 20H56.2058L62 10Z" fill="#4FD1C5" opacity="0.6" />
              <path d="M18 10L23.7942 20H12.2058L18 10Z" fill="#4FD1C5" opacity="0.6" />
            </svg>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}