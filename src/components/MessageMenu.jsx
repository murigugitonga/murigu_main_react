import { useState, useRef, useEffect } from "react";
import { MessageSquare, Mail, MessageCircle, Send } from "lucide-react";

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
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Icon Button */}
      <button
        className="p-2 transition rounded-full md:rounded-full focus:outline:none hover:bg-gray-100 md:hover:bg-blue-700 md:hover:shadow-md md:px-6 md:py-3 md:flex md:items-center md:space-x-2.5 md:justify-between md:bg-blue-600"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only ">Open message menu</span>
        
        <MessageSquare className="w-6 h-6 text-gray-700 text:white"/>
        <span className="hidden md:block md:font-medium text:white">Message</span>
      </button>

      {/* Dropdown with slide-down + blur */}
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
          className="flex items-center gap-3 px-4 py-2 transition rounded-md hover:bg-white/40"
        >
          <Mail className="w-4 h-4 text-gray-800" />
          <span>{emailUser[0]}***@{emailDomain}</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappBase}${whatsappEnd}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 transition rounded-md hover:bg-white/40"
        >
          <MessageCircle className="w-4 h-4 text-green-600" />
          <span>{whatsappBase}***{whatsappEnd.slice(-2)}</span>
        </a>

        {/* Telegram */}
        <a
          href={`https://t.me/${telegramUser}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 transition rounded-md hover:bg-white/40"
        >
          <Send className="w-4 h-4 text-blue-600" />
          <span>@{telegramUser.slice(0, 4)}***</span>
        </a>
      </div>
    </div>
  );
}
