import { Container } from "@/components/ui/container";
import { 
  MessageSquare, 
  Pill, 
  Heart, 
  UserCircle, 
  ShieldCheck, 
  Languages 
} from "lucide-react";
import { motion } from "framer-motion";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgClass: string;
  iconColorClass: string;
  delay: number;
}

const Feature = ({ icon, title, description, iconBgClass, iconColorClass, delay }: FeatureProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className={`inline-flex items-center justify-center p-3 ${iconBgClass} rounded-xl ${iconColorClass} mb-5`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 mb-3">{title}</h3>
      <p className="text-neutral-600">
        {description}
      </p>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "AI Symptom Analysis",
      description: "Describe your symptoms to healie and get instant insights, analysis, and personalized recommendations for your condition.",
      iconBgClass: "bg-teal-50",
      iconColorClass: "text-primary",
      delay: 0
    },
    {
      icon: <Pill className="h-5 w-5" />,
      title: "Medication Reminders",
      description: "Never miss a dose with healie's personalized medication schedules and intelligent timing system based on your habits.",
      iconBgClass: "bg-teal-50",
      iconColorClass: "text-primary",
      delay: 1
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Health Tracking",
      description: "Monitor vital signs, activity levels, and sleep patterns with beautiful visual analytics to maintain optimal health.",
      iconBgClass: "bg-teal-50",
      iconColorClass: "text-primary",
      delay: 2
    },
    {
      icon: <UserCircle className="h-5 w-5" />,
      title: "Telehealth Integration",
      description: "Connect with certified healthcare providers when healie's analysis suggests you need professional medical advice.",
      iconBgClass: "bg-teal-50",
      iconColorClass: "text-primary",
      delay: 3
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Privacy Focused",
      description: "Your health data is encrypted with military-grade security, giving you complete control over your personal information.",
      iconBgClass: "bg-teal-50",
      iconColorClass: "text-primary",
      delay: 4
    },
    {
      icon: <Languages className="h-5 w-5" />,
      title: "Multi-language Support",
      description: "Get healthcare assistance in 30+ languages to break communication barriers, making healie truly accessible worldwide.",
      iconBgClass: "bg-teal-50",
      iconColorClass: "text-primary",
      delay: 5
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Powerful Features</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            <span className="text-primary font-semibold">healie</span> combines AI intelligence with medical expertise to provide you with comprehensive healthcare support.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgClass={feature.iconBgClass}
              iconColorClass={feature.iconColorClass}
              delay={feature.delay}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
