const FooterNauiterMaster = () => {
  return (
    <footer className="w-full bg-footer border-t border-white/5 shadow-[0_-2px_10px_rgba(0,0,0,0.4)] animate-fade-in-footer">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-foreground" style={{ fontSize: "clamp(0.85rem, 1vw, 1rem)" }}>
          © 2025 Developer — Nauiter Master | All rights reserved
        </p>
        <p className="text-white/70 italic mt-2" style={{ fontSize: "clamp(0.8rem, 0.9vw, 0.95rem)" }}>
          Sic Mundus Creatus Est
        </p>
      </div>
    </footer>
  );
};

export default FooterNauiterMaster;
