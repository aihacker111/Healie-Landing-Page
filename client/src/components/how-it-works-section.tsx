import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step = ({ number, title, description, delay }: StepProps) => {
  return (
    <motion.div 
      className="flex items-start relative"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: delay * 0.2, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Connect line between steps */}
      {number < 4 && (
        <div className="absolute left-6 top-12 w-0.5 h-24 bg-gradient-to-b from-primary to-transparent opacity-30"></div>
      )}
      
      <div className="flex-shrink-0 relative z-10">
        <motion.div 
          className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-medium shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {number}
        </motion.div>
      </div>
      
      <motion.div 
        className="ml-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: delay * 0.2 + 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h3>
        <p className="text-neutral-600">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Download the App",
      description: "Get healie on your iOS or Android device from the App Store or Google Play. The installation process takes less than 30 seconds with no complicated setup required.",
      delay: 0
    },
    {
      number: 2,
      title: "Create Your Profile",
      description: "Set up your personalized health profile with medical history, allergies, and current medications. Your data helps healie provide more accurate insights tailored to your health needs.",
      delay: 1
    },
    {
      number: 3,
      title: "Start Chatting",
      description: "Ask health questions, describe symptoms, or request medication reminders through healie's intuitive chat interface. The AI understands natural language so you can talk just like you would to a healthcare professional.",
      delay: 2
    },
    {
      number: 4,
      title: "Get Personalized Care",
      description: "Receive tailored health advice, tracking insights, and connect with certified healthcare providers when needed. healie learns from each interaction to provide increasingly personalized support for your health journey.",
      delay: 3
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-neutral-100">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">How <span className="text-primary">healie</span> Works</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Experience healthcare made simple with our intuitive AI-powered assistant designed for your personal health needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:max-w-md space-y-8">
            {steps.map((step, index) => (
              <Step 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={step.delay}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Phone frame styling */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-primary/20 to-blue-400/20 rounded-3xl blur-lg opacity-50"></div>
            <div className="absolute left-0 top-0 w-full h-full bg-white/50 rounded-3xl transform rotate-3 z-0"></div>
            <div className="absolute left-0 top-0 w-full h-full bg-primary/10 rounded-3xl transform -rotate-2 z-0"></div>
            
            {/* VinAI badge */}
            <div className="absolute -top-4 -right-4 z-20 bg-white py-1 px-3 rounded-full shadow-md flex items-center space-x-1">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.59 7.41L7 6L13 12L7 18L5.59 16.59L10.17 12L5.59 7.41Z" fill="currentColor"/>
                <path d="M11.59 7.41L13 6L19 12L13 18L11.59 16.59L16.17 12L11.59 7.41Z" fill="currentColor"/>
              </svg>
              <span className="text-xs font-semibold text-primary">Powered by VinAI</span>
            </div>
            
            <div className="relative mx-auto max-w-md z-10">
              <motion.div 
                className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-200"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {/* iPhone Dynamic Island */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[35%] h-6 bg-black rounded-b-2xl z-10"></div>
                
                <div className="p-1 bg-neutral-100 pt-8">
                  <div className="flex justify-between items-center px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-medium text-neutral-500">healie</div>
                    <div className="w-8"></div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4 h-[450px] overflow-y-auto bg-gradient-to-b from-neutral-50 to-white">
                  <motion.div 
                    className="flex justify-start mb-4"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start">
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 14C20.66 14 22 12.66 22 11V6C22 4.34 20.66 3 19 3H5C3.34 3 2 4.34 2 6V11C2 12.66 3.34 14 5 14H8V17C8 17.55 8.45 18 9 18H14C14.55 18 15 17.55 15 17V14H19Z" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="bg-neutral-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-neutral-700">Hello! How can I help with your health today?</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-end mb-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                      <p className="text-sm">I've been having a headache for the last two days.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-start mb-4"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start">
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 14C20.66 14 22 12.66 22 11V6C22 4.34 20.66 3 19 3H5C3.34 3 2 4.34 2 6V11C2 12.66 3.34 14 5 14H8V17C8 17.55 8.45 18 9 18H14C14.55 18 15 17.55 15 17V14H19Z" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="bg-neutral-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-neutral-700">I'm sorry to hear that. Can you tell me more about the pain? Is it on one side, both sides, or all over?</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-end mb-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                      <p className="text-sm">It's mostly on the front and feels like pressure.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-start mb-4"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start">
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 14C20.66 14 22 12.66 22 11V6C22 4.34 20.66 3 19 3H5C3.34 3 2 4.34 2 6V11C2 12.66 3.34 14 5 14H8V17C8 17.55 8.45 18 9 18H14C14.55 18 15 17.55 15 17V14H19Z" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="bg-neutral-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-neutral-700">That could be a tension headache. Have you been stressed or looking at screens for long periods?</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-start mb-4"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start">
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 14C20.66 14 22 12.66 22 11V6C22 4.34 20.66 3 19 3H5C3.34 3 2 4.34 2 6V11C2 12.66 3.34 14 5 14H8V17C8 17.55 8.45 18 9 18H14C14.55 18 15 17.55 15 17V14H19Z" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="bg-neutral-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                        <div className="space-y-2">
                          <p className="text-sm text-neutral-700">Here are some potential remedies:</p>
                          <ul className="list-disc list-inside text-sm text-neutral-700">
                            <li>Rest in a quiet, dark room</li>
                            <li>Apply a cold or warm compress</li>
                            <li>Over-the-counter pain relievers</li>
                            <li>Stay hydrated</li>
                          </ul>
                          <p className="text-sm text-neutral-700">Should I connect you with a doctor?</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-4 border-t border-neutral-200">
                  <div className="flex items-center">
                    <input type="text" placeholder="Type your health question..." 
                      className="flex-1 border-0 focus:ring-0 text-sm text-neutral-800 bg-transparent" />
                    <motion.button 
                      className="ml-2 bg-primary text-white rounded-full p-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
                
                {/* iPhone Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-black rounded-full opacity-20"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
