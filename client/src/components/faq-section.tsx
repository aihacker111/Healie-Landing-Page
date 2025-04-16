import { useState } from "react";
import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const faqs: FAQItem[] = [
    {
      question: "Is healie a replacement for seeing a doctor?",
      answer: "No, healie is not a replacement for professional medical care. While it provides helpful guidance and information based on advanced AI analysis, it's designed to complement professional healthcare, not replace it. For serious symptoms or conditions, healie will actively encourage you to consult with a healthcare provider and can even facilitate telehealth appointments when necessary."
    },
    {
      question: "How accurate is healie's symptom analysis?",
      answer: "healie's symptom analysis is powered by a sophisticated AI model trained on extensive medical databases and is regularly updated with the latest research. Its accuracy continues to improve through machine learning. The app provides possible explanations for symptoms based on the information you provide, but clearly indicates when a professional diagnosis is recommended. We maintain transparency about confidence levels in all health insights."
    },
    {
      question: "Is my health data secure with healie?",
      answer: "Absolutely. Security and privacy are our highest priorities. All your health data is protected with military-grade encryption both in transit and at rest. We comply with HIPAA regulations and follow industry-leading best practices for healthcare data security. You maintain complete ownership and control over your data, with granular permission settings and the ability to export or delete your information at any time."
    },
    {
      question: "How does healie's telehealth integration work?",
      answer: "When healie's AI determines that your condition requires professional medical attention, or when you request it, the app connects you with licensed healthcare providers through our extensive network of telehealth partners. You can choose exactly what health information to share from your healie profile, including symptom history and chat logs, to streamline the consultation. The transition is seamless, and you can typically connect with a provider within minutes."
    },
    {
      question: "Is healie available in my country?",
      answer: "healie is available in over 30 countries worldwide, with dedicated localization for regional healthcare systems. The core features work globally with support for 25+ languages, but some features like telehealth integration and insurance connectivity may vary by location due to different healthcare regulations. You can check specific availability details for your region in the app store description or contact our 24/7 support team."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Frequently Asked Questions About <span className="text-primary">healie</span></h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Get answers to common questions about our AI-powered healthcare assistant.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-neutral-200 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-4 hover:bg-neutral-50 transition">
                  <span className="font-medium text-neutral-800 text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-4 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-neutral-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}
