import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, MessageCircle, PhoneCall, X } from "lucide-react";

const contactApps = [
  { label: "Call", href: "tel:+254715660909", icon: PhoneCall, style: "phone-app-green" },
  { label: "Message", href: "sms:+254715660909", icon: MessageCircle, style: "phone-app-blue" },
  { label: "Email", href: "mailto:ericlombo1999@gmail.com", icon: Mail, style: "phone-app-red" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ericlombo", icon: Linkedin, style: "phone-app-blue" },
  { label: "GitHub", href: "https://github.com/ericlombo", icon: Github, style: "phone-app-dark" },
  { label: "Get A Keja", href: "https://getakeja.co.ke", icon: null, style: "phone-app-gold" },
];

type PhoneOverlayProps = { onClose: () => void };

export function PhoneOverlay({ onClose }: PhoneOverlayProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      previousFocus.current?.focus();
    };
  }, [onClose]);

  return (
    <div className="overlay-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="phone-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="phone-title">
        <header className="phone-toolbar">
          <div>
            <p className="scene-kicker">On the table</p>
            <h2 id="phone-title">Let’s connect</h2>
          </div>
          <button className="icon-button" ref={closeRef} onClick={onClose} aria-label="Close phone">
            <X aria-hidden="true" />
          </button>
        </header>
        <div className="phone-device">
          <div className="phone-screen">
            <div className="phone-status"><span>Eric’s contacts</span><span>●●●</span></div>
            <p className="phone-greeting">A direct line to Eric.</p>
            <nav className="phone-app-grid" aria-label="Contact links">
              {contactApps.map(({ label, href, icon: Icon, style }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="phone-app">
                  <span className={`phone-app-icon ${style}`}>
                    {Icon ? <Icon aria-hidden="true" size={22} /> : <span aria-hidden="true" className="keja-mark">K</span>}
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </nav>
            <p className="phone-number">+254 715 660 909</p>
          </div>
        </div>
        <p className="phone-note">Choose an app to open the matching contact destination.</p>
      </section>
    </div>
  );
}
