import type { ProjectMeta } from "@/lib/types";

export const projects: ProjectMeta[] = [
  {
    slug: "myscu",
    title: "MySCU",
    role: "Founding Product Designer",
    date: "Jun '25 — Present",
    status: "live",
    category: "featured",
    color: "#5B6EF5",
    dockLabel: "MySCU",
    icon: "/logos/Myscu.png",
    liveUrl: "https://myscu.co",
    caseStudy: {
      kind: "gallery",
      lede: "As Founding Product Designer at MySCU, I've shaped the full product — landing page to platform — designing flows for students, counsellors, parents, and institutions, through multiple review and redesign cycles. MySCU pairs every family with a certified Counsellor and Mavi, an AI advisor, to plan, apply, and get visa-ready. The platform has helped 6,000+ students and secured $65M+ in scholarships.",
      media: [
        { src: "/images/myscu/landing-hero.png", alt: "MySCU landing page hero section", width: 1889, height: 1870 },
        {
          videoSrc: "/images/myscu/hero-section.mp4",
          alt: "MySCU landing page hero animation",
          width: 1440,
          height: 888,
        },
        {
          src: "/images/myscu/landing-scholarships.png",
          alt: "MySCU scholarships and counsellor process section",
          width: 1889,
          height: 3204,
        },
        { src: "/images/myscu/landing-steps.png", alt: "MySCU eight-step journey section", width: 1889, height: 1868 },
        {
          src: "/images/myscu/student-dashboard.png",
          alt: "Student dashboard onboarding view",
          width: 1440,
          height: 1073,
        },
        { src: "/images/myscu/counsellor-queue.png", alt: "Counsellor active students queue", width: 1440, height: 1073 },
        {
          src: "/images/myscu/counsellor-student-detail.png",
          alt: "Counsellor viewing a student's detail page",
          width: 1440,
          height: 1073,
        },
        {
          src: "/images/myscu/counsellor-profile.png",
          alt: "Counsellor verification and credentials profile",
          width: 1440,
          height: 1078,
        },
        { src: "/images/myscu/mavi-chat.png", alt: "Mavi AI advisor chat interface", width: 1440, height: 1073 },
        {
          src: "/images/myscu/placement-wall-of-love.png",
          alt: "Wall of love student result cards",
          width: 1889,
          height: 1305,
        },
        {
          src: "/images/myscu/placement-case-file.png",
          alt: "Case file student success story",
          width: 1889,
          height: 1065,
        },
      ],
    },
  },
  {
    slug: "sysserve",
    title: "Sysserve",
    role: "UI/UX Designer",
    date: "Jan '25",
    status: "live",
    category: "featured",
    color: "#2AA876",
    dockLabel: "Sysserve",
    icon: "/logos/Sysserve.png",
    liveUrl: "https://sysservesolutions.com/",
    caseStudy: {
      kind: "numbered",
      cover: { src: "/images/sysserve/cover.png", alt: "Sysserve redesigned website", width: 1298, height: 861 },
      intro: {
        body: [
          "Sysserve is a technology consulting firm that builds bespoke digital solutions for businesses. Their previous website no longer reflected the company's modern capabilities or innovative approach.",
          "My role was a complete overhaul of the website's user experience and visual identity, bringing it in line with Sysserve's brand values and business goals.",
        ],
        quote: "We needed a digital presence that matched our technical expertise and market ambition.",
      },
      sections: [
        {
          heading: "The Problem (Old Design)",
          body: [
            "Users struggled to find service information, and the visual design felt dated next to competitors — the result was a high bounce rate and weak lead generation.",
          ],
          stat: { value: "65%", label: "bounce rate on key service pages, driven by poor navigation" },
          media: { src: "/images/sysserve/1.png", alt: "Sysserve old design", width: 1399, height: 1299 },
        },
        {
          heading: "Research & Insights",
          body: [
            "I carried out extensive design explorations, analyzing competitors such as Salesforce and Fleetio — studying their layouts, site structures, and product listings to understand what made their approaches work.",
            "Throughout the process I collaborated closely with stakeholders, the marketing team, and developers across multiple rounds of feedback and review. Those iterations are what shaped the final design.",
          ],
          media: [
            { src: "/images/sysserve/2.png", alt: "Sysserve design exploration", width: 1394, height: 1306 },
            { src: "/images/sysserve/3.png", alt: "Sysserve design exploration", width: 1391, height: 1207 },
          ],
        },
        {
          heading: "Mobile Breakpoint",
          body: ["Every page was rebuilt to work as comfortably on a phone as on a desktop."],
          media: [
            { src: "/images/sysserve/4.png", alt: "Sysserve mobile breakpoint", width: 1399, height: 1307 },
            { src: "/images/sysserve/5.png", alt: "Sysserve mobile breakpoint", width: 1600, height: 1128 },
          ],
        },
        {
          heading: "Design Solution",
          body: [
            "The new design pairs a clean, modern aesthetic with a focus on readability and accessibility. A streamlined navigation system and prominent calls to action now guide visitors through the sales funnel.",
          ],
          bullets: ["Simplified Information Architecture", "Modern Visual Identity System", "Responsive & Accessible Layouts"],
          media: { src: "/images/sysserve/6.png", alt: "Sysserve final design", width: 1600, height: 1625 },
        },
        {
          heading: "Final Thoughts",
          body: [
            "The redesign has significantly improved engagement and lead capture — the client reports a noticeable increase in inquiries, along with positive feedback from stakeholders.",
          ],
        },
      ],
    },
  },
  {
    slug: "babyboom",
    title: "Babyboom",
    role: "Lead Product Designer",
    date: "Jan '22",
    status: "live",
    category: "featured",
    color: "#D65A9A",
    dockLabel: "Babyboom",
    liveUrl: "https://babyboomafrica.com/",
    caseStudy: {
      kind: "split",
      cover: { src: "/images/babyboom/cover.png", alt: "Baby Boom Africa platform design", width: 1600, height: 1199 },
      rail: {
        category: "Brand & Product Design",
        date: "Jan '22",
        role: "Lead Product Designer",
        liveUrl: "https://babyboomafrica.com/",
      },
      sections: [
        {
          heading: "Overview",
          body: [
            "Baby Boom Africa is a B2B e-commerce platform for maternity care and childcare products. It connects manufacturers directly with wholesalers and retailers, ensuring efficient distribution of high-quality baby merchandise.",
            "As lead product designer, I drove the transformation of their manual processes into a seamless digital experience.",
          ],
          quote: "We streamlined the supply chain to connect manufacturers directly with retailers.",
        },
        {
          heading: "The Problem",
          body: [
            "The market was fragmented: retailers struggled to source authentic products reliably, and the existing supply chain was opaque, slow, and prone to counterfeit goods.",
          ],
          media: { src: "/images/babyboom/problem.png", alt: "Baby Boom supply chain problem", width: 1600, height: 800 },
        },
        {
          heading: "Research & Insights",
          body: [
            "We interviewed 20+ major retailers and 5 manufacturers to understand the friction points. Trust and logistics visibility emerged as the primary concerns.",
          ],
          media: { src: "/images/babyboom/research.png", alt: "Baby Boom research", width: 800, height: 450 },
        },
        {
          heading: "Design Solution",
          body: [
            "We designed a brand identity that evokes trust, warmth, and professionalism, paired with a user-centric product interface that simplifies bulk ordering.",
          ],
          bullets: ["Streamlined B2B Checkout Process", "Real-time Inventory Management", "Supplier Verification System"],
        },
        {
          heading: "Impact",
          body: [],
          statGrid: [
            {
              value: "30%",
              label: "of potential revenue was being lost to stockouts and unreliable suppliers before the platform",
            },
            { value: "20+", label: "retailer and manufacturer interviews shaped the product's direction" },
            { value: "500+", label: "retailers onboarded since launch" },
            { value: "40%", label: "reduction in supply-chain latency" },
          ],
        },
        {
          heading: "Final Thoughts",
          body: [
            "This project reinforced the importance of trust-centered design in B2B commerce — when buyers can see and believe the process, everything downstream gets easier.",
          ],
        },
      ],
    },
  },
  {
    slug: "homeland",
    title: "Homeland",
    role: "Lead Graphic Designer",
    date: "Nov '23",
    status: "live",
    category: "brand-graphic",
    color: "#3E9DBF",
    dockLabel: "Homeland",
    icon: "/logos/Homeland.png",
    caseStudy: {
      kind: "gallery",
      lede: "I led Homeland's brand design, creating digital assets for website updates, layout enhancements, and campaigns across print, social, product, and web.",
      media: [
        { src: "/images/homeland/cover.png", alt: "Homeland brand design", width: 1600, height: 1012 },
        { src: "/images/homeland/1.png", alt: "Homeland Sangotedo Buzz campaign design", width: 1600, height: 1600 },
        { src: "/images/homeland/2.png", alt: "Homeland Father's Day campaign", width: 1300, height: 1300 },
        { src: "/images/homeland/3.png", alt: "Homeland Father's Day campaign", width: 1300, height: 1300 },
      ],
    },
  },
  {
    slug: "giftender",
    title: "Giftender",
    role: "Brand Designer",
    date: "Apr '24",
    status: "live",
    category: "brand-graphic",
    color: "#C9973A",
    dockLabel: "Giftender",
    icon: "/logos/Giftender.png",
    caseStudy: {
      kind: "gallery",
      lede: "I crafted a comprehensive brand identity for Giftender, a gifting company built around the art of personalized curation — thoughtfully selected gifts, matched to each person's preferences and needs.",
      media: [
        { src: "/images/giftender/cover.png", alt: "Giftender brand identity", width: 718, height: 472 },
        { src: "/images/giftender/1.png", alt: "Giftender brand identity design", width: 932, height: 613 },
        { src: "/images/giftender/2.png", alt: "Giftender brand identity design", width: 932, height: 613 },
        { src: "/images/giftender/3.png", alt: "Giftender brand identity design", width: 932, height: 613 },
        { src: "/images/giftender/4.png", alt: "Giftender brand identity design", width: 932, height: 613 },
        { src: "/images/giftender/5.png", alt: "Giftender branded merchandise", width: 1600, height: 899 },
      ],
    },
  },
  {
    slug: "jalpha-ehr",
    title: "Jalpha EHR",
    role: "Graphic Designer",
    date: "Feb '23",
    status: "live",
    category: "brand-graphic",
    color: "#6C6FD1",
    dockLabel: "Jalpha EHR",
    icon: "/logos/Jalpha-Health.png",
    caseStudy: {
      kind: "gallery",
      lede: "I designed a series of online campaign materials for Jalpha EHR to boost engagement and awareness — including the two campaign videos below.",
      videos: [
        { id: "SkECL9P2qS4", title: "Introducing Jalpha Health EHR" },
        { id: "LI0HNAcANRM", title: "Inside Jalpha's EHR" },
      ],
      media: [{ src: "/images/jalpha-ehr/cover.png", alt: "Jalpha EHR campaign design", width: 1600, height: 1124 }],
    },
  },
  {
    slug: "venhoot",
    title: "Venhoot",
    role: "Brand Designer",
    date: "Feb '25",
    status: "live",
    category: "brand-graphic",
    color: "#4FA35A",
    dockLabel: "Venhoot",
    icon: "/logos/Venhoot.png",
    liveUrl: "https://venhoot.com/",
    caseStudy: {
      kind: "gallery",
      lede: "I developed the brand identity for Venhoot — a visual language built to communicate speed and reliability.",
      media: [{ src: "/images/venhoot/banner.gif", alt: "Venhoot brand preview", width: 1152, height: 648 }],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.category === "featured");
export const brandGraphicProjects = projects.filter((p) => p.category === "brand-graphic");
