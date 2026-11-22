# Personal website design

## Reference and scope

Reference: https://www.bertazub.com/, inspected on 22 November 2026 using Firecrawl and the rendered browser at 1280px wide. The reference is an art portfolio; this implementation adapts its visual restraint to a research scientist’s site and preserves the existing content.

Observed in the reference: white background, black sans-serif text, a full-width horizontal masthead, underlined active navigation, large outer margins, unframed square imagery, and generous grid gaps. Browser inspection reported Adelle Sans for the site name at 29.36px and three roughly 337px gallery columns at that viewport. Firecrawl reported Aktiv Grotesk elsewhere; those are observations of different elements rather than a single verified global font. Gallery spacing is visually estimated, not an exact reproduction.

## Implementation choices

- White `#fff`, ink `#151515`, secondary text `#707070`, and subtle rules `#e6e6e6`.
- Self-hosted Inter in WOFF2, with Latin and extended Latin coverage and the SIL Open Font License included in `docs/assets/fonts/OFL.txt`. Inter is an open replacement; the reference’s proprietary fonts are not copied.
- Page width up to 1440px including fluid 24–88px gutters. Horizontal masthead and readable 14px navigation replace the floating side index.
- Name at 26px, section headings at 25px, publication titles at 24px, body text at 16px. Mobile retains 16px body text.
- Desktop About and Research use a label column and a larger content column; mobile stacks them. About remains first.
- Media uses a three-column video gallery on large screens, two columns on medium screens, and one on small screens. Photos retain their original colors, without decorative frames or shadows.
- Social SVG logos remain at the beginning. Conference logos remain beside the appropriate papers. Videos load only after a click.
- Blog remains ready for new posts. All 58 source URLs remain in the searchable archive.
- Preserve native details controls, clear keyboard focus, reduced-motion support, meaningful labels, and sensible image dimensions.

## Asset sources

Conference and social icon references: `docs/assets/logos/SOURCES.md`.

Font stylesheet source: https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap . Font files are locally hosted; no Google Fonts request is needed when viewing the site. License source: https://github.com/google/fonts/blob/main/ofl/inter/OFL.txt .

Existing interview and video imagery remains credited to its source in the page. None of the reference portfolio’s artwork is reused.


## Contact and research focus

Added a minimalist Contact page at `/contact/`, plus a post-submission thank-you page. The form posts to FormSubmit for mataciunasdeividas@gmail.com, retains default CAPTCHA protection, includes a honeypot, and relies on browser validation. FormSubmit requires recipient activation before delivery; inbox confirmation remains an owner step.

The introduction now focuses on communication, scaling, and simulations in multi-agent systems, per the owner’s wording request. Historical publication details remain unchanged.

The owner chose a free alternative to Berta’s Adelle Sans / Aktiv Grotesk combination. Lato is used for prose and headings, with Inter for navigation and metadata. Both fonts are self-hosted with their open licenses in `docs/assets/fonts/`. Lato is an approximation, not the same font as the reference.
