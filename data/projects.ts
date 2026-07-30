import type { ProjectMeta } from "@/lib/types";

function galleryOf(slug: string, count: number) {
  return Array.from({ length: count }, (_, i) => ({
    alt: `${slug} project visual ${i + 1}`,
    label: `Visual ${i + 1}`,
  }));
}

export const projects: ProjectMeta[] = [
  {
    slug: "myscu",
    title: "MySCU",
    role: "Brand and Product design",
    date: "Jun '24",
    status: "live",
    category: "featured",
    color: "#5B6EF5",
    dockLabel: "MySCU",
    summary:
      "As Founding Product Designer at MySCU, I lead brand and product design for an AI platform guiding teenagers to top universities via personalized scholarships.",
    sections: [
      { type: "text", heading: "Overview", body: "As Founding Product Designer at MySCU, I lead brand and product design for an AI platform guiding teenagers to top universities via personalized scholarships." },
      { type: "image-grid", heading: "Selected screens", images: galleryOf("myscu", 4) },
    ],
  },
  {
    slug: "sysserve",
    title: "Sysserve",
    role: "Website redesign",
    date: "Jan '25",
    status: "live",
    category: "featured",
    color: "#2AA876",
    dockLabel: "Sysserve",
    summary:
      "Sysserve's old website struggled with poor usability and brand inconsistency, leading to low engagement and missed conversion opportunities.",
    sections: [
      { type: "text", heading: "Overview", body: "Sysserve's old website struggled with poor usability and brand inconsistency, leading to low engagement and missed conversion opportunities." },
      { type: "image-grid", heading: "Selected screens", images: galleryOf("sysserve", 4) },
    ],
  },
  {
    slug: "fembol",
    title: "Fembol",
    role: "Website Redesign",
    date: "May '23",
    status: "live",
    category: "featured",
    color: "#E0663F",
    dockLabel: "Fembol",
    summary: "Fembol is a logistics platform offering streamlined and efficient supply chain solutions.",
    sections: [
      { type: "text", heading: "Overview", body: "Fembol is a logistics platform offering streamlined and efficient supply chain solutions." },
      { type: "image-grid", heading: "Selected screens", images: galleryOf("fembol", 4) },
    ],
  },
  {
    slug: "babyboom",
    title: "Babyboom",
    role: "Brand and Product design",
    date: "Jan '22",
    status: "live",
    category: "featured",
    color: "#D65A9A",
    dockLabel: "Babyboom",
    summary:
      "Baby Boom Africa is a B2B e-commerce company specializing in maternity care and child merchandise.",
    sections: [
      { type: "text", heading: "Overview", body: "Baby Boom Africa is a B2B e-commerce company specializing in maternity care and child merchandise." },
      { type: "image-grid", heading: "Selected screens", images: galleryOf("babyboom", 4) },
    ],
  },
  {
    slug: "homeland",
    title: "Homeland",
    role: "Brand Designer",
    date: "Nov '23",
    status: "live",
    category: "brand-graphic",
    color: "#3E9DBF",
    dockLabel: "Homeland",
    summary:
      "I was responsible for the brand design and the creation of digital assets for website updates and layout enhancements.",
    sections: [
      { type: "text", heading: "Overview", body: "I was responsible for the brand design and the creation of digital assets for website updates and layout enhancements." },
      { type: "image-grid", heading: "Brand assets", images: galleryOf("homeland", 4) },
    ],
  },
  {
    slug: "giftender",
    title: "Giftender",
    role: "Branding",
    date: "Apr '24",
    status: "live",
    category: "brand-graphic",
    color: "#C9973A",
    dockLabel: "Giftender",
    summary: "Brand identity design for Giftender.",
    sections: [
      { type: "text", heading: "Overview", body: "Brand identity design for Giftender." },
      { type: "image-grid", heading: "Brand assets", images: galleryOf("giftender", 4) },
    ],
  },
  {
    slug: "jalpha-ehr",
    title: "Jalpha EHR",
    role: "Online Campaign",
    date: "Feb '23",
    status: "live",
    category: "brand-graphic",
    color: "#6C6FD1",
    dockLabel: "Jalpha EHR",
    summary: "Online campaign design for Jalpha EHR.",
    sections: [
      { type: "text", heading: "Overview", body: "Online campaign design for Jalpha EHR." },
      { type: "image-grid", heading: "Campaign visuals", images: galleryOf("jalpha-ehr", 4) },
    ],
  },
  {
    slug: "venhoot",
    title: "Venhoot",
    role: "Branding",
    date: "Feb '25",
    status: "live",
    category: "brand-graphic",
    color: "#4FA35A",
    dockLabel: "Venhoot",
    summary: "Brand identity design for Venhoot.",
    sections: [
      { type: "text", heading: "Overview", body: "Brand identity design for Venhoot." },
      { type: "image-grid", heading: "Brand assets", images: galleryOf("venhoot", 4) },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.category === "featured");
export const brandGraphicProjects = projects.filter((p) => p.category === "brand-graphic");
