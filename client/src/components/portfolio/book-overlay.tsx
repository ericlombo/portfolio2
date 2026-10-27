import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import type { BookPage, FolderContent } from "@/content/types";

type BookOverlayProps = {
  folder: FolderContent;
  onClose: () => void;
};

function PageContents({ page }: { page: BookPage }) {
  return (
    <div className="book-page-content">
      <p className="scene-kicker">{page.eyebrow}</p>
      <h2>{page.title}</h2>
      {page.status && <span className="project-status">{page.status}</span>}
      <p className="book-summary">{page.summary}</p>
      {page.paragraphs?.map((paragraph) => <p key={paragraph} className="book-copy">{paragraph}</p>)}
      {page.bullets?.length ? (
        <ul className="book-list">
          {page.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      ) : null}
      {page.tags?.length ? (
        <div className="book-tags" aria-label="Technologies and topics">
          {page.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      ) : null}
      {page.links?.length ? (
        <div className="book-links">
          {page.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}<ExternalLink aria-hidden="true" size={15} />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function BookOverlay({ folder, onClose }: BookOverlayProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const currentPage = folder.pages[pageIndex];
  const isFirst = pageIndex === 0;
  const isLast = pageIndex === folder.pages.length - 1;

  const turn = (step: number) => {
    setDirection(step);
    setPageIndex((current) => Math.max(0, Math.min(folder.pages.length - 1, current + step)));
  };

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") turn(1);
      if (event.key === "ArrowLeft") turn(-1);
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
    // A new folder is mounted when this component is opened, so only the key handler needs to persist.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overlay-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="book-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="book-title">
        <header className="book-toolbar">
          <div>
            <p className="scene-kicker">Portfolio file</p>
            <h2 id="book-title">{folder.title}</h2>
          </div>
          <button className="icon-button" ref={closeRef} onClick={onClose} aria-label="Close book">
            <X aria-hidden="true" />
          </button>
        </header>
        <div
          className="open-book"
          onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const distance = event.changedTouches[0].clientX - touchStart.current;
            if (Math.abs(distance) > 45) turn(distance < 0 ? 1 : -1);
            touchStart.current = null;
          }}
        >
          <div className="book-spine" aria-hidden="true" />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={`${folder.id}-${pageIndex}`}
              className="book-page"
              custom={direction}
              initial={{ opacity: 0.2, rotateY: direction > 0 ? 16 : -16, x: direction > 0 ? 18 : -18 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={{ opacity: 0.15, rotateY: direction > 0 ? -12 : 12, x: direction > 0 ? -18 : 18 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <PageContents page={currentPage} />
            </motion.article>
          </AnimatePresence>
        </div>
        <footer className="book-navigation">
          <button className="quiet-button" onClick={() => turn(-1)} disabled={isFirst}>
            <ArrowLeft aria-hidden="true" size={17} /> Previous
          </button>
          <span aria-live="polite">Page {pageIndex + 1} of {folder.pages.length}</span>
          <button className="quiet-button" onClick={() => turn(1)} disabled={isLast}>
            Next <ArrowRight aria-hidden="true" size={17} />
          </button>
        </footer>
      </section>
    </div>
  );
}
