import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Tushar Singh Rawat. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            Made with{" "}
            <Heart className="w-4 h-4 text-destructive fill-destructive" />{" "}
            using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
