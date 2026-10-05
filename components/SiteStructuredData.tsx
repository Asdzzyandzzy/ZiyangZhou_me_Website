import { links } from "@/content/links";
import { profile } from "@/content/profile";

// Emit identity information in the exported HTML, without waiting for JavaScript.
export function SiteStructuredData() {
  const home = new URL("/", links.domain).toString();
  const personId = `${home}#person`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${home}#website`,
        url: home,
        name: `${profile.name} (${profile.chineseName})`,
        alternateName: ["周梓洋", "ZiyangZhou.me"],
        publisher: { "@id": personId }
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: [profile.chineseName, "Asdzzyandzzy"],
        givenName: "Ziyang",
        familyName: "Zhou",
        url: home,
        image: new URL("/images/profile.jpg", home).toString(),
        description:
          "Ziyang Zhou (周梓洋), a Statistics student at the University of British Columbia (UBC), expecting to graduate in May 2027.",
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "University of British Columbia",
          alternateName: ["UBC", "英属哥伦比亚大学"],
          url: "https://www.ubc.ca/"
        },
        sameAs: [links.github, links.linkedin, links.githubPages],
        mainEntityOfPage: new URL("/about/", home).toString()
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

// The About page describes the same Person defined in the root layout's graph.
export function ProfilePageStructuredData() {
  const home = new URL("/", links.domain).toString();
  const about = new URL("/about/", home).toString();
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${about}#profile`,
    url: about,
    name: `About ${profile.name} (${profile.chineseName})`,
    isPartOf: { "@id": `${home}#website` },
    mainEntity: { "@id": `${home}#person` }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
