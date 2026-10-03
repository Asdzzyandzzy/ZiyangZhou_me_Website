# Portfolio content review: October 3, 2026

## Sources reviewed

- October 2026 CV, plus Chinese and English internship certificates for Shusheng Data and Guangbo.
- Authenticated GitHub inventory: 33 repositories, including 15 private repositories. Reviewed repository trees and available READMEs, with code checks for updated tools, competition workflows, and public/private coursework notebooks.
- Existing English and Chinese site content, navigation, metadata, and exported pages.

## Editorial decisions

- Publish the supplied English CV unchanged at `/resume/ziyang-zhou-cv.pdf`. Update all current CV links, the contact email, and the expected graduation date to May 2027.
- Add Shusheng Data as one internship with two distinct periods: May 6-31 and August 3-31, 2026. Add Guangbo from June 8 to July 31, 2026. The certificates were used to check facts; the certificates themselves are not published.
- Describe data preparation, forecasting, SAS, GLM pricing support, and rate-table documentation through concrete tasks. Add Dean's List and selected course marks from the latest CV. Retain earlier supported IPO and teaching experience.
- Prioritize the two new internships on the homepage. Keep education separate on the experience page.
- Replace stale private/active descriptions for the Neural Debris and CSI 300 competition projects and link their now-public repositories. Describe the recorded July leaderboard result as a historical snapshot, not a final or current rank.
- Update ZZYAgent with the repository's session and context features. Update Qwen's period from the CV and describe the implemented story state and continuation workflow. Correct the glass-futures project end date to March 2025.
- Add the self-written weekly avocado-price forecasting exercise. Link individual ML projects directly to their public source folders. Keep course scaffolding and coursework origins clear.
- Retain the distinction between self-written CPSC 330/CPSC 221 work and AI-assisted personal prototypes. Emphasize problem framing, experiment choices, review, and iteration for the latter.
- Keep the MiroFish fork, course-material mirror, duplicate homework repositories, scratch repositories, and older overlapping experiments out of the featured portfolio. Scanning a repository does not by itself justify a new project or skill claim.
- Reduce repeated tool labels and distinguish regularly used tools, internship applications, coursework foundations, project experience, and ongoing learning.

## Website improvements

- Search and category filtering for 23 projects, including a result count and empty state.
- Complete navigation on tablet widths, page-level headings, keyboard focus styles, and reduced-motion support.
- Compact homepage CV entry with full PDF preview retained on the CV page.
- Individual canonical URLs and social metadata for the main pages and project details. The unused Writing placeholder remains accessible but is excluded from indexing.
- Preserve direct static-image loading for the portrait and allow long email addresses to wrap.

## Verification

- Production build, lint, and TypeScript checks passed.
- Checked 30 exported content pages, 786 internal asset/link references, and 29 sitemap entries.
- Confirmed all 23 project records have English and Chinese content and all 68 translation keys match.
- Checked public repository visibility and the existence of linked project folders.
- Confirmed the exported CV matches the supplied file byte-for-byte and the portrait does not use a runtime image optimizer.
- Used static-export and HTTP checks; browser visual inspection was not repeated.
