# Needs from Eric

## Content links and media

- Project screenshots or approved product images for FlourFlow, TrustRail, Get A Keja, Pawa254, MyStory, and House of Beauty. The current cards use text only rather than fabricated screenshots.
- Exact public GitHub repository URLs for projects you want linked (the GitHub profile is known, but project-specific repository paths are not).
- Exact live/demo URLs for projects other than the supplied Get A Keja site (`https://getakeja.co.ke`).
- YouTube channel or featured-video URL if you want a video link or embed.
- Get A Keja app-store / product URL only if it should open somewhere other than the supplied live site.
- Any project/brand logos you want used, with permission to publish them.

## Realistic 3D assets

The code currently contains a clearly labeled scene placeholder, not a photoreal 3D scene. The existing portrait is available, but it is not a rigged avatar. To complete the realism pass, supply or approve appropriately licensed assets with attribution/redistribution terms:

- One modern interview-room / office set in glTF 2.0 GLB format, with a conference table, chairs, window, and pendant lights; PBR base-colour, normal, roughness/metallic, and ambient-occlusion maps.
- Three seated interviewer avatars in GLB with idle, blink, and small gesture animations; neutral professional styling, no unapproved real-person likenesses.
- One seated candidate avatar based on Eric only if he approves the modelling approach and supplied-photo use; include a rig and subtle idle / nod animation.
- Separate folder/book and phone prop models if those objects are not included in the room set.
- Target compressed first-load assets under 8–12 MB total: Meshopt or Draco geometry, KTX2/WebP textures, and roughly 1K–2K texture resolution unless visual testing justifies more.

Every downloaded or generated asset must have its source and licence recorded in `CREDITS.md`. Until those assets are available, the manifest names the replacement paths and the interface remains an explicitly labeled placeholder.

## Domain / launch details

- Exact portfolio origin/domain for a production sitemap and canonical URL. No portfolio domain or CNAME is recorded in this repository; `SITE_URL` is intentionally not guessed.
- Existing analytics ID/provider only if you want analytics preserved or restored; none is configured in the repository.

## Biography source note

This redesign follows the detailed portfolio brief for roles, education, and project facts. The CV file in the repository differs on some dates/degree wording and omits the Conceptual Product Studio and CloudStack details; the original page remains preserved at `/legacy` rather than being silently rewritten. Confirm which source should be used if you want the CV reconciled later.
