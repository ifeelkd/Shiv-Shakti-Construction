# Product Requirements Document (PRD)

## Project Overview
This project is a **freelance business website** for Shiv Shakti Marbles, adapted from an existing Figma design that must be implemented as closely as possible using Figma MCP. The visual design, spacing, hierarchy, typography, and overall design language from Figma should remain unchanged unless a content or functional adjustment is required to support the business use case described below.

The current website concept should no longer behave like a generic freelance site. Instead, it should function as a real-estate and business presentation website centered around **Shiv Shakti Towers** as the primary featured project, while preserving the original approved UI design system from Figma.

The main goal of this PRD is to give an AI development agent enough structure to reproduce the design accurately while implementing the correct content model, page architecture, section logic, and development approach.

---

## Product Goal
Build a production-ready marketing website that:

- Matches the Figma design as closely as possible.
- Uses the Figma MCP as the source of truth for layout and visual implementation.
- Repositions the site around Shiv Shakti Marbles and Shiv Shakti Towers.
- Highlights the flagship project in the hero section.
- Provides an interactive and structured presentation of tower details, flat details, map-related content, and nearby landmark distances.
- Keeps the rest of the website aligned with the original Figma design, while tailoring the content to this business.
- Loads superfast on real-world mobile networks and low-to-mid range devices.
- Is fully mobile responsive across small phones, tablets, laptops, and large desktops.

---

## Core Instruction to Development Agent
### Non-negotiable rule
The Figma design is the **primary visual source of truth**.

The AI agent must:
- Recreate the layout exactly from Figma using Figma MCP.
- Preserve the same visual hierarchy, spacing rhythm, typography scale, component proportions, and design language.
- Only adjust content structure, labels, section meaning, and interaction behavior where required by this PRD.
- Avoid introducing new design patterns unless the Figma design does not cover a required state or component.
- If a required state is missing from Figma, extend the design in the same style system instead of inventing a different visual approach.

### Implementation principle
**Figma-first, PRD-guided behavior.**

That means:
- Figma defines how it looks.
- This PRD defines what it does, what content it shows, how sections are mapped, and how the final site should behave.

---

## Business Context
The site is for **Shiv Shakti Marbles**. The only currently available public reference shared for the business is their Instagram presence:
- Business reference: [shiv_shakti_marbles_](https://www.instagram.com/shiv_shakti_marbles_/)

This website should present the business in a more premium and structured format than a social profile. The emphasis should be on trust, project presentation, location context, residential unit information, and a polished digital presence.

---

## Target Outcome
The final website should feel like:
- A premium local business website.
- A project showcase site for Shiv Shakti Towers.
- A conversion-oriented informational website for potential buyers or interested visitors.
- A visually accurate implementation of the Figma design with business-specific content replacement.

---

## Users
### Primary users
- Prospective homebuyers exploring 2BHK and 3BHK flats.
- Local visitors interested in Shiv Shakti Towers.
- People evaluating property location convenience.
- Potential customers discovering Shiv Shakti Marbles as a business brand.

### Secondary users
- Business owner/admin reviewing project credibility.
- Sales/contact leads looking for project details.

---

## Product Scope
The website is primarily a **marketing and information website**, not a complex web app.

### In scope
- Figma-accurate frontend implementation.
- Hero section centered on Shiv Shakti Towers.
- 3D map or 3D visual area for Shiv Shakti Towers.
- Dedicated internal sections/pages for 2BHK and 3BHK information.
- A details section about nearby important places and distance from Shiv Shakti Towers.
- Business-oriented content adaptation across the rest of the site.
- Responsive frontend implementation.
- Smooth navigation and clear section/page structure.
- Performance-first implementation with optimized assets, lazy loading, and minimal render-blocking overhead.

### Out of scope for v1
- User login/signup.
- Booking engine.
- Online payment.
- Full CMS dashboard.
- Dynamic admin panel.
- ERP/CRM integration.

Optional future scope can include inquiry forms, lead capture CRM, WhatsApp integration, and CMS-managed project data.

---

## Product Type
This should be treated as an **informational business website** with light interactive experiences.

It is not a dashboard or SaaS app. The structure should favor:
- Strong visual storytelling.
- Easy browsing.
- Project-first navigation.
- Superfast loading performance.
- Fully mobile responsive content presentation across all breakpoints.

---

## Information Architecture
The exact page names can be mapped to the Figma navigation structure, but the content model should follow this architecture.

### Recommended site structure
1. Home
2. Shiv Shakti Towers Overview
3. 2BHK Details
4. 3BHK Details
5. Location & Nearby Places
6. About / Business Story
7. Contact / Inquiry

If the Figma design already contains a different navigation structure, keep the same visual navbar and footer style, but remap labels and destinations according to this business requirement.

---

## Home Page Requirements
## 1. Hero Section
The hero section must be repurposed to feature **Shiv Shakti Towers** as the main project.

### Hero content requirements
- Main heading should position Shiv Shakti Towers as the flagship project.
- Supporting text should describe the project in a premium, trustworthy, location-aware manner.
- Primary CTA should lead users toward project details, flat details, or inquiry.
- Secondary CTA can lead to location details, contact, or project exploration.

### Hero media requirement
The hero must include the **3D map / 3D representation of Shiv Shakti Towers**.

This is a key requirement.

The AI development agent should support one of these implementation approaches depending on available assets:
- Embedded 3D model viewer.
- WebGL / Three.js based lightweight viewer.
- Interactive 3D map component.
- Controlled visual mock representation if the actual 3D asset is not available yet.

### Important implementation note
If the actual 3D model is not currently available in Figma or provided assets, the codebase should still be structured so the hero media component is modular and easily replaceable later.

### Performance note for hero media
The 3D section must not slow down the first page load. The AI agent should:
- Lazy load heavy 3D libraries and assets.
- Use a static poster/fallback image first.
- Defer non-critical interactivity until after primary content is visible.
- Ensure mobile devices can use a lightweight fallback if full 3D rendering is too heavy.

Recommended component name:
- `Project3DShowcase`

---

## 2. Shiv Shakti Towers Main Detail Section
This section represents the main project details area.

Inside the Shiv Shakti Towers section, the site must include the following:

### A. 3D map / project visual
- Continue showing the 3D project visualization or a more detailed project view.
- This may be the same hero asset extended in a detailed section or a separate section below the hero.

### B. Internal list of other pages / sections
This area must include visible navigation or linked cards to:
- 2BHK details
- 3BHK details
- Location / nearby places
- Contact / inquiry

This can appear as:
- Tabs
- Cards
- Quick links
- Side navigation
- Section anchors

The visual style must match Figma.

### C. Important places nearby + distance details
Below the main project overview, there must be a structured section showing nearby important places and how far they are from Shiv Shakti Towers.

Examples of place categories:
- Schools
- Hospitals
- Markets
- Transport points
- Religious places
- Daily convenience points

Each item should show:
- Place name
- Type/category
- Distance or travel time from Shiv Shakti Towers

Recommended presentation options:
- Clean card list
- Two-column structured layout
- Map + list combination
- Distance chips / badges

The AI agent should keep the Figma styling intact while mapping this data clearly.

---

## 3. 2BHK Details Page/Section
A dedicated page or section must be present for **2BHK flats**.

### Content requirements
- Flat type title
- Unit overview
- Floor plan image placeholder or actual image area
- Key specifications
- Optional pricing placeholder
- Amenities / highlights
- CTA for inquiry

### Suggested data blocks
- Super built-up area
- Number of bedrooms
- Number of bathrooms
- Balcony details
- Living/dining details
- Kitchen details
- Availability status

### Component expectation
This section should be easy to convert into a reusable data-driven template.

Recommended reusable component:
- `FlatDetailLayout`

with props/data for:
- title
- configuration
- area
- planImage
- amenities
- specificationList
- CTA text

---

## 4. 3BHK Details Page/Section
A dedicated page or section must be present for **3BHK flats**.

This should follow the exact same structure as the 2BHK page/section for consistency.

### Content requirements
- Flat type title
- Unit overview
- Floor plan image placeholder or actual image area
- Key specifications
- Optional pricing placeholder
- Amenities / highlights
- CTA for inquiry

### Implementation note
The 2BHK and 3BHK sections should be implemented from a shared schema-driven structure rather than duplicated custom layouts.

---

## 5. Location & Nearby Places Section
This can either be:
- A dedicated page, or
- A deep section inside Shiv Shakti Towers

### Required content
- List of important nearby places.
- Distance from Shiv Shakti Towers.
- Possibly a small map embed or map snapshot.
- Clear categorization for user readability.

### Recommended categories
- Education
- Healthcare
- Shopping
- Transportation
- Lifestyle
- Landmarks

### UX expectation
Users should quickly understand the location advantage of the property.

---

## 6. Rest of Website Adaptation
All remaining sections from the original Figma design should remain visually the same, but their content must be adapted to the business and project.

For example, depending on what exists in Figma:
- Portfolio section → convert to project highlights / construction quality / featured spaces
- Testimonials section → convert to client trust / buyer feedback / partner trust (or keep placeholder-ready)
- Service section → convert to business strengths, materials expertise, construction quality, or property value propositions
- About section → convert to Shiv Shakti Marbles brand story and project credibility
- CTA section → convert to site visit / inquiry / contact action

### Important rule
Do not remove sections just because they were originally built for a freelance website. Instead:
- Preserve the layout.
- Rename the content purpose.
- Reframe the copy to fit Shiv Shakti Marbles and Shiv Shakti Towers.

---

## Functional Requirements
## Navigation
- Navbar should visually match Figma.
- Navigation should include access to Shiv Shakti Towers, 2BHK, 3BHK, nearby places, about, and contact.
- Smooth scrolling can be used if one-page architecture is selected.
- Multi-page routing can be used if that better fits the design and development flow.

### Recommended routing approach
If the Figma design feels like a landing page:
- Use a single-page architecture with anchored sections and optional modal/detail drawers.

If the design supports deeper exploration:
- Use a multi-route marketing site approach with separate detail pages.

Preferred pages/routes:
- `/`
- `/shiv-shakti-towers`
- `/flats/2bhk`
- `/flats/3bhk`
- `/location`
- `/contact`

---

## Media and Asset Requirements
### Required assets
The final build should support:
- Figma design tokens and component references.
- Project imagery.
- 3D map/model of Shiv Shakti Towers.
- Floor plans for 2BHK and 3BHK.
- Optional location map or landmark graphics.

### Placeholder strategy
If any business asset is missing during development, use clearly structured placeholders that are easy to replace later, such as:
- `tower-3d-placeholder`
- `flat-plan-2bhk-placeholder`
- `flat-plan-3bhk-placeholder`
- `location-map-placeholder`

The placeholders must maintain layout consistency with the Figma design.

---

## Content Model
The site should preferably be built using structured content objects even if content is initially hardcoded.

### Suggested content schema
```ts
Project = {
  name: string,
  shortDescription: string,
  longDescription: string,
  heroMedia: string,
  nearbyPlaces: NearbyPlace[],
  flatTypes: FlatType[],
}

NearbyPlace = {
  name: string,
  category: string,
  distanceText: string,
  travelTimeText?: string,
}

FlatType = {
  slug: string,
  title: string,
  configuration: string,
  area?: string,
  image?: string,
  specifications: { label: string; value: string }[],
  amenities: string[],
  ctaLabel: string,
}
```

This allows the AI agent to keep the code organized and scalable.

---

## Recommended Tech Stack
Because the project must follow Figma closely and may include interactive visual sections, the recommended stack is:

### Frontend
- **Next.js** for scalable routing and production readiness.
- **React** for componentized UI.
- **TypeScript** for structure and maintainability.
- **Tailwind CSS** if the Figma-to-code workflow benefits from token-based styling and rapid matching.

### Animation / interactions
- **Framer Motion** for subtle transitions and scroll interactions.

### 3D / map visualization
Use one of the following depending on available assets:
- **Three.js** for custom 3D visualization.
- **React Three Fiber** if building the 3D viewer inside React.
- **iframe/embed integration** if the 3D map is externally hosted.
- **Static visual fallback** while keeping the component API ready for real 3D assets.

### Maps / location
- Google Maps embed, Mapbox, or a static custom-designed location section.

### CMS/content strategy
For v1:
- Structured local JSON/TS data is enough.

For future scalability:
- Sanity, Strapi, or a simple headless CMS can be added later.

---

## Why this stack is recommended
- Next.js supports marketing websites well.
- Component-based architecture helps preserve and reuse Figma-derived sections.
- TypeScript reduces ambiguity for AI-assisted development.
- Tailwind accelerates pixel-accurate visual mapping from design tokens.
- React-based 3D integration is easier to maintain if the tower visualization becomes more advanced.

---

## Development Approach
## Phase 1: Figma structure extraction
The agent should first inspect the Figma file via Figma MCP and identify:
- Pages
- Frames
- Auto-layout structures
- Typography tokens
- Color tokens
- Spacing system
- Components/variants
- Reusable cards, buttons, navbars, footers, and section patterns

### Deliverable from this phase
A component inventory such as:
- Header
- Hero
- Section wrapper
- Feature card
- CTA block
- Testimonial card
- Footer
- Detail panel
- Tab item / nav item

---

## Phase 2: Design-to-content mapping
The agent should map the original freelance design sections into the new business structure.

### Example mapping framework
- Original hero → Shiv Shakti Towers hero
- Original portfolio/projects → project detail / flat offerings / gallery
- Original about → business story
- Original services → business strengths / reasons to choose project
- Original testimonials → trust/social proof
- Original CTA → site visit / inquiry

This phase is critical because the website should still look the same while behaving according to the new property/business story.

---

## Phase 3: Build reusable content-driven components
The AI agent should avoid hardcoding repeated UI patterns separately.

Recommended reusable components:
- `Navbar`
- `HeroProjectSection`
- `Project3DShowcase`
- `ProjectQuickLinks`
- `NearbyPlacesList`
- `FlatDetailLayout`
- `SectionHeader`
- `CTASection`
- `Footer`

Recommended data files:
- `project.data.ts`
- `flats.data.ts`
- `nearby-places.data.ts`

---

## Phase 4: Implement page structure
Suggested implementation structure:

```txt
src/
  app/
    page.tsx
    shiv-shakti-towers/page.tsx
    flats/2bhk/page.tsx
    flats/3bhk/page.tsx
    location/page.tsx
    contact/page.tsx
  components/
    layout/
    sections/
    ui/
    project/
  data/
    project.data.ts
    flats.data.ts
    nearby-places.data.ts
  lib/
    figma-mapping.ts
```

If a single-page implementation is chosen, the code should still be modular and section-based.

---

## UX Requirements
### Visual fidelity
- The site must match Figma as closely as possible.
- Typography, colors, spacing, and alignment should be derived from the design.
- No arbitrary redesign.

### Navigation clarity
- Users should easily find flat details and location details.
- The path from home to project details should be obvious.

### Mobile responsiveness
- The entire website must be fully mobile responsive, not just visually scaled down.
- All sections should be optimized for small-screen readability, touch interaction, and vertical scrolling.
- The same Figma design language must be preserved while adapting layouts intelligently for mobile breakpoints.
- Navigation, CTAs, cards, flat details, and nearby-place lists must remain easy to use on phones.
- The final implementation must be tested at minimum for 320px, 375px, 390px, 768px, 1024px, and large desktop widths.

### Performance-first requirements
- Superfast loading is a core product requirement, not an optional enhancement.
- The site should prioritize fast first paint, fast largest contentful paint, and minimal layout shift.
- Use optimized images in modern formats where possible.
- Lazy load below-the-fold media, galleries, maps, and heavy 3D assets.
- Keep JavaScript lean and avoid unnecessary animation libraries or oversized dependencies.
- Use code splitting for routes and heavy interactive modules.
- Prefer server-rendered or statically generated marketing content where possible.
- Ensure the mobile version remains fast on slower network conditions.

### Suggested performance targets
- Initial page load should feel near-instant on broadband and fast even on typical mobile networks.
- Aim for Core Web Vitals-friendly implementation.
- Hero content should render before non-critical 3D enhancement finishes loading.
- Avoid autoplay-heavy media or unoptimized videos in above-the-fold sections.

### Mobile-specific behavior
- The 3D map/visual should degrade gracefully on mobile.
- Flat details must remain readable.
- Nearby places should be compact but clear.
- CTAs must remain easy to tap.

### Performance
- Heavy 3D assets should be lazy loaded where possible.
- Use fallback images for slow connections.
- Avoid blocking first paint with large interactive media.

---

## SEO Requirements
The AI agent should include a basic SEO-ready implementation.

### Required SEO elements
- Page titles for each route.
- Meta descriptions.
- Open Graph tags.
- Structured heading hierarchy.
- Semantic HTML.
- Descriptive alt text.

### Suggested page title patterns
- Shiv Shakti Towers | Shiv Shakti Marbles
- 2BHK Flats | Shiv Shakti Towers
- 3BHK Flats | Shiv Shakti Towers
- Location & Nearby Places | Shiv Shakti Towers

---

## Accessibility Requirements
- Semantic HTML landmarks.
- Keyboard-friendly navigation.
- Sufficient text contrast.
- Alt text for all important images.
- Proper button/link labeling.
- Reduced motion fallback for heavy animations.

---

## Contact / Lead Capture Requirements
The site should include at least one clear conversion path.

### Recommended CTAs
- Book a site visit
- Enquire now
- View flat details
- Explore location advantage
- Contact us

### Contact options
Depending on business preference, include support for:
- Phone number
- WhatsApp CTA
- Inquiry form
- Address/location

If final contact data is not available yet, keep placeholder-ready structured fields.

---

## Admin / Content Editing Strategy
For initial delivery, the project can be built with static content objects.

But the code should be organized so future edits can be made easily by:
- Replacing content in data files.
- Updating assets in a central folder.
- Swapping placeholder 3D and floorplan assets later.

This is important for AI-assisted maintenance after handoff.

---

## Acceptance Criteria
The website will be considered correctly built when:

### Design fidelity
- The implemented UI closely matches the Figma design.
- Core components preserve Figma styling and spacing.
- No section feels visually inconsistent with the original design.

### Business adaptation
- Hero section is centered on Shiv Shakti Towers.
- 3D map / 3D visual area is included in hero or main project section.
- Dedicated 2BHK and 3BHK detail views exist.
- Nearby important places and distances are clearly shown.
- Other original sections are adapted to the business context.

### Technical quality
- Responsive across desktop, tablet, and mobile.
- Fast-loading across devices, especially mobile.
- Clean reusable code structure.
- Logical routing and navigation.
- Placeholder-safe for unavailable assets.
- Ready for future content expansion.

---

## Edge Cases and Fallback Rules
### If 3D asset is missing
- Keep the layout exactly as designed.
- Use a high-quality placeholder container.
- Build the component so a real 3D viewer can be plugged in later without layout changes.

### If project details are incomplete
- Use placeholder text blocks with structured labels.
- Do not break layout consistency.

### If nearby place distances are not finalized
- Build from mock structured data and mark for easy replacement.

### If Figma has sections irrelevant to the property business
- Preserve layout style.
- Repurpose content meaning instead of deleting the section by default.

---

## Suggested Content Tone
The copy tone should be:
- Premium but local
- Trustworthy
- Clear and informative
- Not overly flashy
- Suitable for property/project presentation

Suggested voice attributes:
- Confident
- Clean
- Practical
- Location-aware
- Conversion-friendly

---

## Suggested Build Prompt for AI Agent
Use the following instruction along with the Figma MCP:

> Build this website by following the Figma design as the exact visual source of truth. Preserve the design language, spacing, layout, typography, hierarchy, and component styling exactly. Adapt the content and functionality according to this PRD. The website is for Shiv Shakti Marbles and should feature Shiv Shakti Towers as the main project. The hero section must prominently showcase Shiv Shakti Towers with a modular 3D map/3D visual component. Inside the Shiv Shakti Towers experience, include links or structured navigation to 2BHK details, 3BHK details, and nearby location details. Add a section showing important nearby places and their distance from Shiv Shakti Towers. Keep the rest of the site visually aligned to the original Figma design, but rewrite the content and purpose of sections to fit this business and project. Use a clean reusable component architecture, Next.js + TypeScript + Tailwind-oriented structure, and keep all missing assets placeholder-safe.

---

## Final Notes for Development
- Do not redesign what already exists in Figma.
- Do not over-engineer v1.
- Prioritize exact visual matching and strong content mapping.
- Keep all business/project data easy to update.
- Structure the code for future asset replacement.
- Treat Shiv Shakti Towers as the central narrative of the site.

