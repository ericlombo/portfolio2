import { useCallback, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { BookOverlay } from "@/components/portfolio/book-overlay";
import { InterviewStage } from "@/components/portfolio/interview-stage";
import { PhoneOverlay } from "@/components/portfolio/phone-overlay";
import { folders } from "@/content/folders";
import type { FolderContent, FolderId } from "@/content/types";

function prefersClassicView() {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  const device = navigator as Navigator & { deviceMemory?: number };
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    || Boolean(connection?.saveData)
    || (device.deviceMemory !== undefined && device.deviceMemory <= 2);
}

export default function Home() {
  const [, setLocation] = useLocation();
  const [selectedFolder, setSelectedFolder] = useState<FolderContent | null>(null);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [prompt, setPrompt] = useState<string | null>(null);
  const [hintVisible, setHintVisible] = useState(true);
  const [armedFolder, setArmedFolder] = useState<FolderId | null>(null);
  const [isTouchLayout, setIsTouchLayout] = useState(false);

  useEffect(() => {
    setIsTouchLayout(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 720);
    const updateLayout = () => setIsTouchLayout(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 720);
    window.addEventListener("resize", updateLayout);
    if (prefersClassicView()) setLocation("/classic");
    return () => window.removeEventListener("resize", updateLayout);
  }, [setLocation]);

  const interact = useCallback(() => {
    setHintVisible(false);
    setArmedFolder(null);
  }, []);

  const openFolder = useCallback((id: FolderId, question?: string) => {
    const folder = folders.find((item) => item.id === id);
    if (!folder) return;
    if (isTouchLayout && armedFolder !== id) {
      setArmedFolder(id);
      setPrompt(question ?? folder.question ?? `Open ${folder.title}`);
      return;
    }
    setPrompt(null);
    setSelectedFolder(folder);
  }, [armedFolder, isTouchLayout]);

  const closeOverlays = () => {
    setSelectedFolder(null);
    setPhoneOpen(false);
  };

  useEffect(() => {
    if (!selectedFolder && !phoneOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeOverlays();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedFolder, phoneOpen]);

  return (
    <>
      <InterviewStage
        prompt={prompt}
        hintVisible={hintVisible}
        onFolder={openFolder}
        onPhone={() => setPhoneOpen(true)}
        onPrompt={setPrompt}
        onInteract={interact}
      />
      {selectedFolder && <BookOverlay key={selectedFolder.id} folder={selectedFolder} onClose={() => setSelectedFolder(null)} />}
      {phoneOpen && <PhoneOverlay onClose={() => setPhoneOpen(false)} />}
    </>
  );
}
