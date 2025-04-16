import { Container } from "@/components/ui/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialProps {
  stars: number;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  delay: number;
}

const Testimonial = ({ stars, quote, name, role, avatarSrc, delay }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      animate={{ 
        boxShadow: ["0 4px 6px -1px rgba(0, 0, 0, 0.1)", "0 10px 15px -3px rgba(0, 0, 0, 0.1)", "0 4px 6px -1px rgba(0, 0, 0, 0.1)"],
        y: [0, -5, 0]
      }}
      transition={{ 
        duration: 0.5, 
        delay: delay * 0.1,
        animate: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay * 2
        }
      }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-4 w-4 fill-current" 
              fill={i < stars ? "currentColor" : "none"} 
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-neutral-500">{stars}.0</span>
      </div>
      <blockquote className="text-neutral-700 mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <p className="text-sm font-medium text-neutral-700">{name}</p>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      quote: "healie has been a lifesaver for managing my diabetes. The medication reminders are incredibly smart, adjusting to my schedule, and the health tracking visualizations help me understand patterns in my glucose levels.",
      name: "Sarah J.",
      role: "Living with Type 1 Diabetes",
      avatarSrc: "https://ui-avatars.com/api/?name=Sarah+J&background=random",
      delay: 0
    },
    {
      stars: 5,
      quote: "As a busy healthcare professional, I recommend healie to my patients. The symptom analysis is impressively accurate, and the interface is so intuitive that even my elderly patients find it easy to use.",
      name: "Dr. Michael T.",
      role: "Primary Care Physician",
      avatarSrc: "https://ui-avatars.com/api/?name=Michael+T&background=random",
      delay: 1
    },
    {
      stars: 5,
      quote: "I use healie to help manage my elderly mother's healthcare from another state. The medication reminders, telehealth integration, and simple interface have given me peace of mind knowing she's receiving proper care.",
      name: "Lisa R.",
      role: "Remote Caregiver",
      avatarSrc: "https://ui-avatars.com/api/?name=Lisa+R&background=random",
      delay: 2
    },
    {
      stars: 5,
      quote: "The AI-powered symptom checker saved me an unnecessary trip to the ER. It correctly identified that my symptoms weren't urgent and provided at-home care advice that resolved my issue within days.",
      name: "James K.",
      role: "Working Professional",
      avatarSrc: "https://ui-avatars.com/api/?name=James+K&background=random",
      delay: 3
    },
    {
      stars: 4,
      quote: "As an athlete with a strict training regimen, healie helps me track my vitals, nutrition, and recovery with remarkable precision. The insights have helped me optimize my performance significantly.",
      name: "Emma L.",
      role: "Professional Runner",
      avatarSrc: "https://ui-avatars.com/api/?name=Emma+L&background=random",
      delay: 4
    },
    {
      stars: 5,
      quote: "The VinAI technology behind healie makes it stand out from other health apps. The app recognized patterns in my migraines that I never noticed, helping me avoid triggers and reduce episodes by nearly 70%.",
      name: "Thomas W.",
      role: "Migraine Sufferer",
      avatarSrc: "https://ui-avatars.com/api/?name=Thomas+W&background=random",
      delay: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-100">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">What Our Users Say About <span className="text-primary">healie</span></h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real stories from people who have transformed their healthcare experience with our AI-powered health assistant.
          </p>
        </motion.div>
        
        <motion.div 
          className="overflow-hidden py-4"
          animate={{ 
            scale: [1, 1.01, 1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            animate={{ 
              x: [0, -10, 0, 10, 0],
              y: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                stars={testimonial.stars}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                avatarSrc={testimonial.avatarSrc}
                delay={testimonial.delay}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
