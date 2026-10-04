import { links } from "@/content/links";
import { profile } from "@/content/profile";

// Emit identity information in the exported HTML, without waiting for JavaScript.
export function SiteStructuredData() {
  const home = new URL("/", links.domain).toString();
  const personId = `${home}#person`;
  const githubProfile = new URL(links.github);
  githubProfile.search = "";

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${home}#website`,
        url: home,
        name: "Ziyang Zhou",
        alternateName: ["周梓洋", "ZiyangZhou.me"],
        publisher: { "@id": personId }
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: profile.chineseName,
        url: home,
        image: new URL("/images/profile.jpg", home).toString(),
        description: profile.role.en,
        sameAs: [githubProfile.toString()]
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
