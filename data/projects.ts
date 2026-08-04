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
    role: "Product Designer",
    date: "Feb '24 — Present",
    status: "live",
    category: "featured",
    color: "#0098FF",
    dockLabel: "Sysserve",
    icon: "/logos/Sysserve.png",
    liveUrl: "https://sysservesolutions.com/",
    caseStudy: {
      kind: "numbered",
      cover: { src: "/images/sysserve/cover.png", alt: "Sysserve website", width: 2880, height: 1650 },
      intro: {
        lede:
          "Enterprise fleet & asset software — and the place I grew from intern to the only product designer on the team.",
        body: [
          "Sysserve builds Instanta, an enterprise platform spanning Fleet, Facility, Asset & Inventory, Workplace, Telematics, and Property management. I joined in February 2024 as a Product Design Intern and was promoted to Product Designer six months later, owning design end-to-end with no other designer to hand off to.",
        ],
        stats: [
          { value: "6 months", label: "Intern to Product Designer" },
          { value: "1 of 1", label: "Only designer on the team" },
          { value: "6", label: "Instanta modules" },
        ],
      },
      sections: [],
      achievements: [
        {
          slug: "website-redesign",
          title: "Website Redesign & Complete Overhaul",
          summary:
            "A ground-up UX and visual identity overhaul of Sysserve's public website — from a dated, high-bounce-rate site to a modern, conversion-focused presence.",
          role: "UI/UX Designer",
          date: "Jan '25",
          liveUrl: "https://sysservesolutions.com/",
          cardImage: {
            src: "/images/sysserve/cover.png",
            alt: "Sysserve redesigned website",
            width: 2880,
            height: 1650,
          },
          cover: { src: "/images/sysserve/cover.png", alt: "Sysserve redesigned website", width: 2880, height: 1650 },
          intro: {
            body: [
              "Sysserve's previous website no longer reflected the company's modern capabilities or innovative approach. My role was a complete overhaul of the website's user experience and visual identity, bringing it in line with Sysserve's brand values and business goals.",
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
              bullets: [
                "Simplified Information Architecture",
                "Modern Visual Identity System",
                "Responsive & Accessible Layouts",
              ],
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
        {
          slug: "tyre-management",
          title: "Tyre Management",
          summary:
            "A full tyre lifecycle module for Instanta Fleet — register, install, track, and retire tyres across any axle configuration, from a standard 4×2 to a 10×4 twin-steer rig.",
          role: "Product Designer — solo, full UX/UI ownership",
          date: "2026",
          cardImage: {
            src: "/images/sysserve/tyre-management/truck-tyre.jpg",
            alt: "Close-up of a heavy-duty truck tyre",
            width: 1600,
            height: 1200,
          },
          intro: {
            body: [
              "Fleet operators were tracking tyre stock, installs, and replacement schedules manually — across spreadsheets and paper logs disconnected from the vehicles they belonged to. That made it hard to know which tyre was on which wheel, when it needed replacing, or how much was being spent on rubber across a fleet.",
              "As the sole designer on this, I owned the module end-to-end inside Instanta Fleet: vehicle groups as the foundation, a tyre register as the single source of truth, an installation flow built around a real axle-position picker, and automated replacement-cycle tracking — covering every axle configuration Sysserve's fleet customers actually run.",
            ],
          },
          sections: [
            {
              heading: "Vehicle Groups, the Foundation",
              body: [
                "Every tyre install starts from a vehicle group — its category, make, model, and crucially its tyre specification and axle configuration. This is what lets the rest of the module work off real vehicle data instead of free text: once a group's axle configuration is set, every install for that group renders the correct wheel diagram automatically.",
                "Battery specification, KM per litre, and salvage value all live on the same group record, since tyre cost and vehicle depreciation are part of the same fleet-economics picture for the ops team.",
              ],
              media: [
                {
                  src: "/images/sysserve/tyre-management/vehicle-groups.png",
                  alt: "Vehicle groups table with tyre and battery specifications",
                  width: 1920,
                  height: 1200,
                },
                {
                  src: "/images/sysserve/tyre-management/new-vehicle-group.png",
                  alt: "New vehicle group form with axle configuration and pricing sections",
                  width: 1537,
                  height: 1200,
                },
              ],
            },
            {
              heading: "Tyre Register",
              body: [
                "Every tyre in the warehouse is logged against its manufacturer, part and serial number, size (width, aspect ratio, rim diameter), construction, cost, and current location — with a running count and total spend at the bottom of the ledger. This register is the source of truth every other screen in the module reads from.",
                "New stock enters the same way: a short intake form captures type, manufacturer, mileage, salvage value, and which warehouse it's stored in, before it ever reaches a vehicle.",
              ],
              media: [
                {
                  src: "/images/sysserve/tyre-management/register.png",
                  alt: "Tyre register table with full tyre inventory",
                  width: 1920,
                  height: 1200,
                },
                {
                  src: "/images/sysserve/tyre-management/new-tyre-form.png",
                  alt: "New tyre intake form for warehouse stock",
                  width: 1152,
                  height: 810,
                },
              ],
            },
            {
              heading: "Defining Axle Configurations",
              body: [
                "Before a wheel picker can render a real vehicle, someone has to define what that vehicle's axles actually look like. I designed the configuration builder as its own small tool — pick a base layout (4-axle, 8x4 tandem, and so on), choose the specific variant, and the position grid populates for that vehicle group to reuse on every future install.",
                "Nine configurations cover Sysserve's fleet customers end to end, from a two-axle delivery van to a ten-wheel twin-steer rig.",
              ],
              bullets: ["4×2, 4×4, 6×2, 6×4, 6×6", "8×2, 8×4SS, 8×4TS", "10×4 Twin Steer"],
              media: [
                {
                  src: "/images/sysserve/tyre-management/new-axle-configuration.png",
                  alt: "New axle configuration builder showing a 6x4 layout",
                  width: 1536,
                  height: 1175,
                },
                {
                  src: "/images/sysserve/tyre-management/axle-4x2.png",
                  alt: "4x2 axle configuration diagram",
                  width: 820,
                  height: 379,
                },
              ],
            },
            {
              heading: "Installing a Tyre",
              body: [
                "Fitting a tyre means picking the exact wheel it goes on — not just an axle, but a side and position on that axle. Every open position on the vehicle's diagram renders as a dashed placeholder; selecting one fills it in and highlights it, next to the standard mileage, tread depth, and pressure fields.",
              ],
              media: [
                {
                  src: "/images/sysserve/tyre-management/add-tyre.png",
                  alt: "Add tyre modal with axle position diagram",
                  width: 1152,
                  height: 767,
                },
                {
                  src: "/images/sysserve/tyre-management/add-tyre-position-detail.png",
                  alt: "Close-up of the axle position picker with one position selected",
                  width: 1152,
                  height: 767,
                },
              ],
            },
            {
              heading: "Replacing, Storing & Disposing",
              body: [
                "Swapping a worn tyre carries the same flow one step further: the outgoing tyre can be sent back to the warehouse to Store, or marked Dispose if it's no longer usable — keeping the register accurate without a separate stock-adjustment screen.",
              ],
              media: [
                {
                  src: "/images/sysserve/tyre-management/add-tyre-store.png",
                  alt: "Replacing a tyre with the store action",
                  width: 1152,
                  height: 767,
                },
                {
                  src: "/images/sysserve/tyre-management/add-tyre-dispose.png",
                  alt: "Replacing a tyre with the dispose action",
                  width: 1152,
                  height: 767,
                },
              ],
            },
            {
              heading: "Tyre Type Reference & Restock Thresholds",
              body: [
                "A Tyre Type reference table keeps the catalog of approved tyre specs (manufacturer, size, construction, status) that the register and installation flow both draw from, so field staff pick from a maintained list instead of typing specs by hand.",
                "Adding a new type also sets reorder, minimum, and maximum stock levels per warehouse — so the team gets a low-stock signal before a depot actually runs out of a given tyre.",
              ],
              media: [
                {
                  src: "/images/sysserve/tyre-management/tyre-type.png",
                  alt: "Tyre type reference table",
                  width: 1920,
                  height: 1200,
                },
                {
                  src: "/images/sysserve/tyre-management/new-tyre-type.png",
                  alt: "New tyre type form with per-warehouse reorder levels",
                  width: 1152,
                  height: 1001,
                },
              ],
            },
            {
              heading: "Replacement Cycles & Notifications",
              body: [
                "Replacement isn't just reactive — a cycle can be scheduled by time period or by mileage, tied to a specific tyre type, with approval and email notifications configured up front so the right person is looped in automatically when a cycle comes due.",
              ],
              media: [
                {
                  src: "/images/sysserve/tyre-management/replacement-cycle.png",
                  alt: "Replacement cycle table with tyre types and notified users",
                  width: 1920,
                  height: 1200,
                },
                {
                  src: "/images/sysserve/tyre-management/new-replacement-cycle.png",
                  alt: "New replacement cycle form with approval and notification settings",
                  width: 1229,
                  height: 1200,
                },
              ],
            },
            {
              heading: "Approvals in the Loop",
              body: [
                "Every installation submitted goes through an approval queue — submitted by, vehicle, mileage, and the tyres and positions involved are all visible before it's approved, with attachments flagged inline. Once approved, the read-only view shows the tyre tied directly to its vehicle and exact axle position.",
              ],
              media: [
                {
                  src: "/images/sysserve/tyre-management/installations.png",
                  alt: "Tyre installation submissions pending approval",
                  width: 1920,
                  height: 1200,
                },
                {
                  src: "/images/sysserve/tyre-management/view-tyre.png",
                  alt: "Read-only tyre detail view showing assigned vehicle and position",
                  width: 1152,
                  height: 810,
                },
              ],
            },
            {
              heading: "Final Thoughts",
              body: [
                "This was the first module I designed without another designer to review against — every call on the axle picker, the register schema, and the approval flow was mine to make and defend. It's also the project that taught me the most: how much a picture of a real vehicle can do for a form that used to be four dropdowns.",
              ],
            },
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
