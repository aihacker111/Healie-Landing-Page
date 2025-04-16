import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function DownloadSection() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });
  
  const mutation = useMutation({
    mutationFn: (data: NewsletterFormData) => {
      return apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: NewsletterFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="download" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <Container>
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Download HealthBot Today</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Take control of your health with the power of AI. Available on iOS and Android devices.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.a 
              href="#" 
              className="flex items-center justify-center space-x-3 bg-neutral-800 text-white px-6 py-3 rounded-xl hover:bg-neutral-700 transition shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaApple className="text-2xl" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="flex items-center justify-center space-x-3 bg-neutral-800 text-white px-6 py-3 rounded-xl hover:bg-neutral-700 transition shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGooglePlay className="text-2xl" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </motion.a>
          </div>
          
          <motion.div 
            className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-neutral-800 mb-4">Stay Updated</h3>
            <p className="text-neutral-600 mb-4">
              Subscribe to our newsletter for health tips and app updates.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className={errors.email ? "border-red-500" : ""}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 text-left">{errors.email.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="rounded-lg"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-xs text-neutral-500 mt-3 text-left">
              We respect your privacy and will never share your information.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
