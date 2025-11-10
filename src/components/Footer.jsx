import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Rajat All right reserved</p>
      
      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/40 text-[oklch(0.85_0.37_145.52)] transition-colors"><ArrowUp size={30}/></a>
    </footer>
  );
}