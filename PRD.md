# Basit Ali Portfolio — Redesign Product Requirements Document

**Status:** Approved working brief
**Surface:** One-page portfolio experience (`/`)
**Mode:** Experience with a clear contact path

## Product intent

Make visitors feel that Basit is a thoughtful builder with unusual range: he understands complex AI systems, makes them work in production, and communicates them with visual clarity. The first impression should create curiosity and trust before a case study is read. The page is a narrative, not a collection of UI components.

## Audience and jobs

- Founders and technical teams evaluating whether Basit can own an ambiguous AI product problem.
- Employers evaluating engineering judgment, product thinking, and communication.
- Collaborators looking for an agentic AI/full-stack partner.

Within the first viewport visitors must understand who Basit is, what he builds, why his approach feels different, and where to explore the work or start a conversation.

## Verified product truth

- Basit Ali — Agentic AI Engineer & Full-Stack Developer; graphic design is a secondary strength.
- Based in Karachi, Pakistan; founder of Codizzz and AgentHubPK.
- Builds AI agents, RAG systems, intelligent workflows, full-stack products, and cloud-ready systems.
- Verified work: Customer Success Digital FTE, Physical AI & Robotics Textbook, AgentVerse.
- Contact: `ba876943@gmail.com`.
- Never invent clients, awards, revenue, years, project counts, trust logos, or performance metrics.

## Research-informed inspiration notes

The redesign borrows principles commonly visible in high-craft Pinterest and Dribbble portfolio work, Framer product storytelling, and Emil Kowalski motion—not layouts or copied assets.

- Pinterest/editorial: one strong visual thesis, oversized type, tactile contrast, and a memorable first fold.
- Dribbble/product: clear art direction, meaningful hover states, and artifacts shown rather than abstractly described.
- Framer: direct manipulation, smooth section transitions, high-quality type scale, and motion that explains the product.
- Emil: purposeful motion, quick feedback, transform/opacity-first animation, strong ease-out, subtle stagger, interruptibility, and reduced-motion support.

## New visual world: “Night Studio / Kinetic Index”

The page is a late-night studio wall: a dark field, one bright cursor signal, large human type, and a kinetic index of real work. It should feel closer to an authored music/art portfolio than an AI dashboard. The visitor moves through four states: **Signal** (the voice), **Index** (work as a living list), **Process** (how decisions become systems), and **Open door** (quiet personal contact).

- Background: midnight charcoal `#101114` with ink-black panels.
- Ink: soft white `#f3f2ed`; secondary ink `#a9a9a3`.
- Signals: acid lime `#d7ff4f` and cobalt `#6477ff`; coral is reserved for personal/contact state.
- Type: large readable grotesk display with occasional italic serif contrast. No tiny body copy.
- Surfaces: hairline rules, sharp index lines, restrained blur only where it explains focus; no glassmorphism or identical card grids.

## First viewport

- Header: BASIT ALI wordmark, compact role line, availability signal, and theme control.
- Headline: “I build the part between an idea and the moment it becomes useful.”
- Supporting paragraph: honest, short, 42–55 characters per line.
- Responsive kinetic index: a large project list with a moving active line and color-coded project field; SVG/HTML text equivalent stays complete.
- Signature interaction: pointer subtly shifts the active project field and the list responds with a 180ms transform/opacity transition. On mobile, the list becomes a single-column sequence.
- Actions: “See the work” and “Start a conversation”.

## One-page story

1. Hero / Signal — role and emotional promise.
2. Selected work / Proof — three projects as editorial artifacts.
3. How I work / Method — understand, design, build, verify.
4. Experience / Context — Codizzz, AgentHubPK, GIAIC as a ledger.
5. Writing / Thinking — real technical topics linked to work.
6. Contact / Open door — email-first close with socials and resume.

## Motion system

- GSAP owns initial hero sequencing and ScrollTrigger reveals.
- Framer Motion owns wordmark reveal, theme feedback, pointer-layer drift, and link micro-interactions.
- Entrances use visible geometry plus 8–20px travel, opacity, or clip-path; never scale 0.
- UI feedback stays under 300ms; editorial first-load reveals may be 700–1100ms.
- Use strong ease-out curves; no parallax, bounce, distracting infinite loops, or keyboard-action animation.
- Respect `prefers-reduced-motion`: retain clarity, remove spatial movement.

## Responsive requirements

- Replace desktop rail with compact mobile navigation; no fixed rail on phones.
- Body copy never below 11px; metadata 9–10px minimum.
- Hero must read at 320, 375, 768, 1024, and 1440px widths with no overflow.
- System sketch becomes a vertical flow on mobile.
- Projects stack as title, role, artifact, explanation, and link.
- Touch targets are at least 44px; hover-only effects are fine-pointer gated.

## Three.js / R3F decision

Do not add Three.js in the first pass. R3F’s official examples are strong references for spatial product artifacts, but the portfolio’s strongest first impression is the kinetic index itself. Reconsider R3F only for a real project-specific artifact after the core responsive page is stable.

## Web research evidence

- Pinterest search page fetched successfully: the useful pattern is responsive masonry/grid browsing and strong image-led discovery, not a copyable composition.
- Dribbble search endpoint returned no usable content to this environment; no Dribbble-specific claim is treated as evidence.
- Motion official examples fetched successfully: dark mode, route/scroll continuity, and interactive examples support using motion to explain state rather than decorate it.
- React Three Fiber official examples fetched successfully: responsive example grids and focused spatial demos support keeping any future 3D artifact isolated and progressive-enhanced.

## Accessibility and success

- Semantic sections, one clear `h1`, visible keyboard focus, text-equivalent SVG labels, useful alt text, SEO metadata, lazy below-fold imagery.
- A visitor understands Basit’s role and next action within five seconds.
- Desktop and mobile feel intentionally composed, body text is comfortably readable, motion supports the story, and no invented proof appears.
