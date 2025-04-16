import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-blue-50 to-white pt-16 pb-32 md:pt-24 md:pb-40">
      <Container>
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-800 mb-6">
              Your Personal <span className="text-primary">Health</span> Assistant
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              Get instant medical advice, medication reminders, and health tracking with <span className="text-primary font-semibold">healie</span> - your AI-powered healthcare companion. Available 24/7 for your peace of mind.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="rounded-full gap-2">
                <a href="#download">
                  <Download className="h-5 w-5" />
                  Download Now
                </a>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="rounded-full gap-2">
                <a href="#how-it-works">
                  <Play className="h-5 w-5" />
                  How It Works
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col items-start space-y-3">
              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                <div className="flex -space-x-1">
                  <Avatar className="border-2 border-white h-6 w-6">
                    <AvatarImage src="https://ui-avatars.com/api/?name=John+Doe&background=random" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white h-6 w-6">
                    <AvatarImage src="https://ui-avatars.com/api/?name=Sarah+Smith&background=random" />
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white h-6 w-6">
                    <AvatarImage src="https://ui-avatars.com/api/?name=Mike+Johnson&background=random" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                </div>
                <span>Trusted by <strong>10,000+</strong> users</span>
              </div>
              
              <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-teal-500/20 rounded-full">
                <svg className="w-4 h-4 mr-1.5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.59 7.41L7 6L13 12L7 18L5.59 16.59L10.17 12L5.59 7.41Z" fill="currentColor"/>
                  <path d="M11.59 7.41L13 6L19 12L13 18L11.59 16.59L16.17 12L11.59 7.41Z" fill="currentColor"/>
                </svg>
                <span className="text-sm font-semibold text-primary">Powered by VinAI</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="relative mx-auto max-w-[320px]">
              <div className="absolute inset-0 -left-4 -top-4 -z-10 bg-emerald-400 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 -right-4 -bottom-4 -z-10 bg-primary/30 rounded-3xl -rotate-6"></div>
              <motion.div 
                className="relative z-10 overflow-hidden rounded-3xl shadow-lg"
                animate={{ 
                  rotateY: [-2, 2, -2],
                  rotateZ: [-1, 1, -1],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="bg-white p-4 rounded-3xl overflow-hidden">
                  <svg
                    viewBox="0 0 375 667"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                  >
                    <rect width="375" height="667" fill="#F8FAFC" />
                    <rect x="24" y="44" width="327" height="64" rx="12" fill="#E8FFF8" />
                    <circle cx="56" cy="76" r="16" fill="#4FD1C5" />
                    <rect x="84" y="68" width="120" height="8" rx="4" fill="#4FD1C5" />
                    <rect x="84" y="84" width="80" height="8" rx="4" fill="#94A3B8" />

                    {/* Main Health Dashboard Card */}
                    <rect x="24" y="124" width="327" height="180" rx="12" fill="white" />
                    <rect x="24" y="124" width="327" height="40" rx="12" fill="#4FD1C5" />
                    <rect x="40" y="140" width="100" height="8" rx="4" fill="white" />
                    <rect x="40" y="180" width="120" height="8" rx="4" fill="#1E293B" />
                    <rect x="40" y="196" width="280" height="8" rx="4" fill="#94A3B8" />
                    <rect x="40" y="212" width="280" height="8" rx="4" fill="#94A3B8" />
                    <rect x="40" y="228" width="200" height="8" rx="4" fill="#94A3B8" />
                    
                    {/* Health Metrics Tags */}
                    <rect x="40" y="256" width="60" height="24" rx="12" fill="#E8FFF8" />
                    <rect x="50" y="264" width="40" height="8" rx="4" fill="#4FD1C5" />
                    <rect x="108" y="256" width="60" height="24" rx="12" fill="#E8FFF8" />
                    <rect x="118" y="264" width="40" height="8" rx="4" fill="#4FD1C5" />
                    <rect x="176" y="256" width="60" height="24" rx="12" fill="#E8FFF8" />
                    <rect x="186" y="264" width="40" height="8" rx="4" fill="#4FD1C5" />
                    
                    {/* Health Tracking Cards */}
                    <rect x="24" y="320" width="156" height="156" rx="12" fill="white" />
                    <rect x="195" y="320" width="156" height="156" rx="12" fill="white" />
                    <rect x="44" y="340" width="116" height="8" rx="4" fill="#1E293B" />
                    <rect x="215" y="340" width="116" height="8" rx="4" fill="#1E293B" />
                    <rect x="44" y="356" width="80" height="8" rx="4" fill="#94A3B8" />
                    <rect x="215" y="356" width="80" height="8" rx="4" fill="#94A3B8" />
                    
                    {/* Health Metrics Visualization */}
                    <path d="M44 384C44 378.477 48.4772 374 54 374H110C115.523 374 120 378.477 120 384V440C120 445.523 115.523 450 110 450H54C48.4772 450 44 445.523 44 440V384Z" fill="#E8FFF8" />
                    <path d="M215 384C215 378.477 219.477 374 225 374H281C286.523 374 291 378.477 291 384V440C291 445.523 286.523 450 281 450H225C219.477 450 215 445.523 215 440V384Z" fill="#E8FFF8" />
                    
                    {/* Upcoming Appointment */}
                    <rect x="24" y="492" width="327" height="100" rx="12" fill="white" />
                    <rect x="44" y="512" width="116" height="8" rx="4" fill="#1E293B" />
                    <rect x="44" y="528" width="280" height="8" rx="4" fill="#94A3B8" />
                    <rect x="44" y="544" width="280" height="8" rx="4" fill="#94A3B8" />
                    <rect x="44" y="560" width="200" height="8" rx="4" fill="#94A3B8" />
                    
                    {/* Action Buttons */}
                    <rect x="24" y="608" width="156" height="40" rx="20" fill="#4FD1C5" />
                    <rect x="195" y="608" width="156" height="40" rx="20" fill="#F1F5F9" />
                    <rect x="70" y="624" width="64" height="8" rx="4" fill="white" />
                    <rect x="241" y="624" width="64" height="8" rx="4" fill="#4FD1C5" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Background Elements */}
      <motion.div 
        className="absolute top-1/4 right-0 -z-10 text-neutral-100 opacity-20"
        animate={{ 
          y: [0, 20, 0], 
          x: [0, -10, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      >
        <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 -z-10 text-neutral-100 opacity-20"
        animate={{ 
          y: [0, -15, 0], 
          x: [0, 15, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      >
        <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 8C19.7956 8 20.5587 7.68393 21.1213 7.12132C21.6839 6.55871 22 5.79565 22 5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2H17C17 2 16 2 16 4C16 6 17 6 17 6H19C19 6 20 6 20 5C20 4 19 4 19 4C19 4 18 4 18 5H17.5C17.5 3 18.5 3 18.5 3H19C19.7956 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6C22 6.79565 21.6839 7.55871 21.1213 8.12132C20.5587 8.68393 19.7956 9 19 9H17C16.2044 9 15.4413 8.68393 14.8787 8.12132C14.3161 7.55871 14 6.79565 14 6C14 5 14 3 12 3C10 3 10 5 10 6C10 7 10 9 8 9C6 9 6 7 6 6C6 5 6 3 4 3C2 3 2 5 2 6C2 7 2 9 4 9M4 8C3.20435 8 2.44129 7.68393 1.87868 7.12132C1.31607 6.55871 1 5.79565 1 5C1 4.20435 1.31607 3.44129 1.87868 2.87868C2.44129 2.31607 3.20435 2 4 2C5 2 6 3 6 5C6 7 5 8 4 8M14 19V17H22V19H14M11 16C11 16.5304 10.7893 17.0391 10.4142 17.4142C10.0391 17.7893 9.53043 18 9 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V12H5V16H9V12H11V16Z" />
        </svg>
      </motion.div>
      
      {/* Additional VinAI branding element */}
      <motion.div 
        className="absolute top-3/4 right-1/4 -z-10 text-primary opacity-10"
        animate={{ 
          y: [0, 10, 0], 
          x: [0, -10, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      >
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.783 2.826L12 1L20.217 2.826C20.967 3.002 21.5 3.673 21.5 4.443V10.5C21.5 16.299 16.958 21.624 12 23C7.042 21.624 2.5 16.299 2.5 10.5V4.443C2.5 3.673 3.033 3.002 3.783 2.826Z" />
        </svg>
      </motion.div>
    </section>
  );
}
