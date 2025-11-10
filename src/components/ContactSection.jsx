import { Instagram,Linkedin,Mail,MapPin,Phone,Send,Twitch,Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef();

  const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs.sendForm(
    "service_70co46l",   // your service ID
    "template_g2dsaq6",  // your template ID
    formRef.current,
    "D149Njr2_ayEeVQPt"     // your public key
  )
  .then(() => {
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    formRef.current.reset();
    setIsSubmitting(false);
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    alert("Something went wrong. Please try again.");
    setIsSubmitting(false);
  });
};


  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-[oklch(0.85_0.37_145.52)]">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-[oklch(0.85_0.37_145.52)]" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:rajatsemwal17@gmail.com" className="text-muted-foreground hover:text-[oklch(0.85_0.37_145.52)] transition-colors">rajatsemwal17@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-[oklch(0.85_0.37_145.52)]" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+7973307759" className="text-muted-foreground hover:text-[oklch(0.85_0.37_145.52)] transition-colors">+91 7973307759</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-[oklch(0.85_0.37_145.52)]" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a href="https://maps.google.com/?q=Behlana,Chandigarh,India" target="_blank" className="text-muted-foreground hover:text-[oklch(0.85_0.37_145.52)] transition-colors">Behlana, Chandigarh, India</a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text" id="name" name="from_name" required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Rajat Semwal..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input type="email" id="email" name="reply_to" required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="john@gmail.com..."
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea id="message" name="message" required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button type="submit"
              disabled = {isSubmitting}
              className={cn("cosmic-button w-full flex items-center justify-center gap-2")}> {isSubmitting ? "Sending..." : "Send Message"}<Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}