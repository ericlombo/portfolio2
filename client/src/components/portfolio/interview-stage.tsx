import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import { Link } from "wouter";
import { ArrowUpRight, FolderOpen, PhoneCall, Sparkles } from "lucide-react";
import { assets } from "@/assets.config";
import { folders } from "@/content/folders";
import type { FolderId } from "@/content/types";

const interviewers = [
  { id: 1, folderId: "about" as FolderId, question: "Tell us about yourself", tone: "panelist-copper" },
  { id: 2, folderId: "experience" as FolderId, question: "What are your experiences?", tone: "panelist-navy" },
  { id: 3, folderId: "projects" as FolderId, question: "Show us some of your projects", tone: "panelist-olive" },
];

type InterviewStageProps = {
  prompt: string | null;
  hintVisible: boolean;
  onFolder: (id: FolderId, prompt?: string) => void;
  onPhone: () => void;
  onPrompt: (prompt: string | null) => void;
  onInteract: () => void;
};

export function InterviewStage({ prompt, hintVisible, onFolder, onPhone, onPrompt, onInteract }: InterviewStageProps) {
  const stageRef = useRef<HTMLElement>(null);

  const updateParallax = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch" || !stageRef.current) return;
    const bounds = stageRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stageRef.current.style.setProperty("--parallax-x", `${x * 5}px`);
    stageRef.current.style.setProperty("--parallax-y", `${y * 4}px`);
  };

  const clearParallax = () => {
    stageRef.current?.style.setProperty("--parallax-x", "0px");
    stageRef.current?.style.setProperty("--parallax-y", "0px");
  };

  return (
    <main className="interview-stage" ref={stageRef} onPointerMove={updateParallax} onPointerLeave={clearParallax}>
      <div className="room-backdrop" aria-hidden="true">
        <div className="room-window"><span /><span /><span /><span /></div>
        <div className="room-wall-art" />
        <div className="pendant pendant-left"><i /></div>
        <div className="pendant pendant-right"><i /></div>
        <div className="room-floor" />
      </div>

      <header className="scene-header">
        <Link href="/" className="scene-brand" aria-label="Eric Lombo Mwakio, home">
          <span className="brand-mark">EL</span>
          <span>Eric Lombo Mwakio<small>Software engineer · Nairobi</small></span>
        </Link>
        <div className="scene-header-actions">
          <span className="scene-time"><span className="scene-live-dot" /> Interview room</span>
          <Link href="/classic" className="classic-link" onClick={onInteract}>
            Classic view <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <div className="scene-intro">
        <p className="scene-kicker"><Sparkles size={14} aria-hidden="true" /> A little different kind of portfolio</p>
        <h1>Welcome to the<br /><em>conversation.</em></h1>
        <p>Meet the panel, open a file, or pick up the phone.</p>
      </div>

      <div className="interview-panel" aria-label="Interview panel">
        {interviewers.map((person, index) => (
          <div className="panelist-wrap" key={person.id}>
            <button
              type="button"
              className={`panelist ${person.tone}`}
              aria-label={`Interviewer ${person.id}: ${person.question}`}
              aria-describedby={prompt === person.question ? `prompt-${person.id}` : undefined}
              onMouseEnter={() => onPrompt(person.question)}
              onMouseLeave={() => onPrompt(null)}
              onFocus={() => onPrompt(person.question)}
              onBlur={() => onPrompt(null)}
              onClick={() => { onInteract(); onFolder(person.folderId, person.question); }}
            >
              <span className="panelist-head" aria-hidden="true"><i /></span>
              <span className="panelist-body" aria-hidden="true" />
              <span className="panelist-label">Panelist 0{index + 1}</span>
            </button>
            {prompt === person.question && (
              <div className="speech-bubble" role="status" id={`prompt-${person.id}`}>
                <span>“{person.question}”</span>
                <small>Open the matching file</small>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="conference-table" aria-hidden="true">
        <div className="table-top"><span /><span /><span /></div>
        <div className="table-front"><i /><i /><i /></div>
      </div>
      <div className="table-edge" aria-hidden="true" />

      <div className="table-objects" aria-label="Portfolio objects">
        <div className="folder-row" role="group" aria-label="Open a portfolio file">
          {folders.map((folder, index) => (
            <button
              type="button"
              key={folder.id}
              className={`portfolio-folder folder-${index + 1}`}
              onClick={() => { onInteract(); onFolder(folder.id); }}
              aria-label={`Open ${folder.title} folder`}
            >
              <span className="folder-tab" aria-hidden="true" />
              <span className="folder-cover">
                <FolderOpen size={21} aria-hidden="true" />
                <span className="folder-name">{folder.title}</span>
                <small>{folder.subtitle}</small>
              </span>
            </button>
          ))}
        </div>
        <button type="button" className="table-phone" onClick={() => { onInteract(); onPhone(); }} aria-label="Pick up the phone to see contact links">
          <span className="phone-glass"><span className="phone-speaker" /><span className="phone-screen-glint" /><span className="phone-camera" /></span>
          <span className="object-caption">Phone</span>
          <PhoneCall size={13} aria-hidden="true" />
        </button>
        <div className="candidate-card" aria-label="Eric Lombo Mwakio">
          <img src={assets.portrait.src} alt="Portrait of Eric Lombo Mwakio" />
          <span><strong>Eric Lombo Mwakio</strong><small>Candidate</small></span>
        </div>
      </div>

      <button type="button" className="candidate-presence" aria-label="Eric Lombo: Hi, I’m a software engineer who turns ideas into actual projects. Open the About me folder." onMouseEnter={() => onPrompt("Hi, I’m Eric Lombo. I’m a software engineer who turns ideas into actual projects.")} onMouseLeave={() => onPrompt(null)} onFocus={() => onPrompt("Hi, I’m Eric Lombo. I’m a software engineer who turns ideas into actual projects.")} onBlur={() => onPrompt(null)} onClick={() => { onInteract(); onFolder("about"); }}>
        <span className="candidate-glow" aria-hidden="true" />
        <span className="candidate-message" role="status">Hi, I’m Eric Lombo. I’m a software engineer who turns ideas into actual projects.</span>
      </button>

      {hintVisible && (
        <div className="scene-hint" role="status">
          <span className="hint-pulse" /> Hover the panel · open a folder · pick up the phone
        </div>
      )}
      <footer className="scene-footer">
        <span>Warm room · working prototype with scene placeholders</span>
        <a href="mailto:ericlombo1999@gmail.com">Say hello <ArrowUpRight size={14} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
