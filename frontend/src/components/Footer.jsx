export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Tushar Singh Rawat. All rights reserved.
          </div>

          <div className="text-muted-foreground text-sm">
            Designed & Developed 💻 by Tushar Singh Rawat
          </div>
        </div>
      </div>
    </footer>
  );
}
