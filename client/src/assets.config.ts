import portrait from "./assets/profile.jpg";

export type AssetReadiness = "available" | "placeholder" | "needed";

export const assets = {
  portrait: {
    src: portrait,
    readiness: "available" as AssetReadiness,
    credit: "User-supplied portfolio photo, already present in the repository.",
  },
  room: {
    readiness: "placeholder" as AssetReadiness,
    model: "/assets/scene/interview-room.glb",
    note: "CSS scene placeholder; replace with a licensed, optimized room model.",
  },
  interviewers: {
    readiness: "needed" as AssetReadiness,
    models: [
      "/assets/scene/panelist-01.glb",
      "/assets/scene/panelist-02.glb",
      "/assets/scene/panelist-03.glb",
    ],
    note: "Three seated, rigged interviewer avatars with idle / blink / gesture animations.",
  },
  candidateAvatar: {
    readiness: "needed" as AssetReadiness,
    model: "/assets/scene/eric-avatar.glb",
    note: "A likeness model has not been created; use only with an approved source and a suitable model asset.",
  },
  props: {
    readiness: "placeholder" as AssetReadiness,
    models: ["/assets/scene/folder-set.glb", "/assets/scene/phone.glb", "/assets/scene/table.glb", "/assets/scene/pendant-lamps.glb"],
    note: "Folder, phone, table, and lamps are represented by CSS placeholders until licensed models are added.",
  },
} as const;
