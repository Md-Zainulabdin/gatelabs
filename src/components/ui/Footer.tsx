const Footer = () => {
  return (
    <footer className="border-t w-full border-zinc-200 py-12 bg-white">
      <div className="mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-md font-bold tracking-tight text-zinc-900 uppercase font-mono">
            GateLabs
          </span>
        </div>
        <p className="text-xs text-zinc-400">
          © 2026 GateLabs. Educational resource for Digital Logic Design.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
