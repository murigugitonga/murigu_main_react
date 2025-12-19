import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  Mail,
  MessageCircle,
  Send,
  ChevronRight,
} from "lucide-react";

export default function MessageMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Obfuscated contact details
  const emailUser = "gitongacharlie01";
  const emailDomain = "gmail.com";

  const whatsappBase = "254792684339".slice(0, 5);
  const whatsappEnd = "254792684339".slice(5);

  const telegramUser = "murigugitonga";

  useEffect(() => {
    if (!open) return;

    const closeMenuIfOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const closeMenu = () => setOpen(false);

    // Click / pointer outside
    document.addEventListener("mousedown", closeMenuIfOutside);
    document.addEventListener("pointerdown", closeMenuIfOutside);

    // Any interaction closes menu
    window.addEventListener("scroll", closeMenu, { passive: true });
    window.addEventListener("wheel", closeMenu, { passive: true });
    window.addEventListener("touchstart", closeMenu, { passive: true });
    window.addEventListener("keydown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenuIfOutside);
      document.removeEventListener("pointerdown", closeMenuIfOutside);

      window.removeEventListener("scroll", closeMenu);
      window.removeEventListener("wheel", closeMenu);
      window.removeEventListener("touchstart", closeMenu);
      window.removeEventListener("keydown", closeMenu);
    };
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      {/* Icon Button */}
      <button
        className="p-2 transition rounded-full md:rounded-full focus:outline:none hover:bg-gray-100 md:hover:bg-blue-700 md:hover:shadow-md md:px-6 md:py-3 md:flex md:items-center md:space-x-2.5 md:justify-between md:bg-blue-600"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Open message menu</span>

        <MessageSquare className="w-6 h-6 md:text-gray-200" />
        <span className="hidden md:block md:font-medium md:text-gray-200">
          Message
        </span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-4 w-56 rounded-xl border border-white/20 py-2 z-50
          bg-white/90 backdrop-blur-md shadow-xl
          transform origin-top-right transition-all duration-300 ease-out
          ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
          }
        `}
      >
        {/* Email */}
        <a
          href={`mailto:${emailUser}@${emailDomain}`}
          className="flex items-center justify-between px-4 py-2 transition rounded-md hover:bg-blue-500/40"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-800" />
            <span>Gmail</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappBase}${whatsappEnd}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-2 transition rounded-md hover:bg-blue-500/40"
        >
          <div className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span>WhatsApp</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </a>

        {/* Telegram */}
        <a
          href={`https://t.me/${telegramUser}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-2 transition rounded-md hover:bg-blue-500/40"
        >
          <div className="flex items-center gap-3">
            <Send className="w-4 h-4 text-blue-600" />
            <span>Telegram</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </a>
      </div>
    </div>
  );
}
