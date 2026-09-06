import type { ProjectMeta } from "@/lib/types";

export const projects: ProjectMeta[] = [
  {
    slug: "randoms",
    title: "Randoms",
    role: "Personal & Exploratory Work",
    date: "Ongoing",
    status: "live",
    category: "brand-graphic",
    color: "#7C9A3E",
    dockLabel: "Randoms",
    tags: ["Explorations", "Mixed Media", "Behind the Scenes"],
    caseStudy: {
      kind: "bento",
      lede: "Odds and ends: brand mockups, UI explorations, and one-off shots that didn't make it into a full case study, kept here because they were fun to make.",
      media: [
        {
          src: "/images/randoms/randoms-01.png",
          alt: "Tote bag mockup for MySCU, 'Empowering Dreams Through Global Education'",
          width: 1600,
          height: 1066,
        },
        {
          src: "/images/randoms/randoms-02.jpg",
          alt: "Brand and product design exploration",
          width: 1600,
          height: 900,
        },
        {
          src: "/images/randoms/randoms-03.jpg",
          alt: "Brand and product design exploration",
          width: 1600,
          height: 1064,
        },
        {
          src: "/images/randoms/randoms-04.jpg",
          alt: "Brand and product design exploration",
          width: 1600,
          height: 1600,
        },
        {
          src: "/images/randoms/randoms-05.png",
          alt: "Brand and product design exploration",
          width: 1600,
          height: 1066,
        },
        {
          src: "/images/randoms/randoms-06.jpg",
          alt: "Brand and product design exploration",
          width: 1600,
          height: 2000,
        },
        {
          src: "/images/randoms/randoms-07.jpg",
          alt: "Brand and product design exploration",
          width: 1600,
          height: 2000,
        },
        {
          src: "/images/randoms/randoms-08.png",
          alt: "iPhone UI mockup for the Venhoot app",
          width: 1080,
          height: 1350,
        },
        {
          src: "/images/randoms/randoms-09.png",
          alt: "Brand and product design exploration",
          width: 1546,
          height: 1852,
        },
        {
          src: "/images/randoms/randoms-10.png",
          alt: "Brand and product design exploration",
          width: 1178,
          height: 775,
        },
        {
          src: "/images/randoms/randoms-11.jpg",
          alt: "Giftender wordmark over a lifestyle photograph",
          width: 1600,
          height: 538,
        },
        {
          src: "/images/randoms/randoms-12.png",
          alt: "Brand and product design exploration",
          width: 1600,
          height: 900,
        },
        {
          src: "/images/randoms/randoms-13.png",
          alt: "3D-rendered owl logo icon",
          width: 864,
          height: 864,
        },
        {
          src: "/images/randoms/randoms-14.jpg",
          alt: "Brand and product design exploration",
          width: 1600,
          height: 900,
        },
      ],
    },
  },
  {
    slug: "argomars",
    title: "Argomars",
    role: "AI Creative Director & Designer",
    date: "2026",
    status: "live",
    category: "featured",
    color: "#14283C",
    dockLabel: "Argomars",
    icon: "/logos/Argomars.png",
    liveUrl: "https://argomars.vercel.app/#top",
    tags: ["AI Exploration", "Interaction Design", "Creative Development"],
    caseStudy: {
      kind: "numbered",
      cover: {
        src: "/images/argomars/cover.jpg",
        alt: "Argomars cinematic Mars landing page hero",
        width: 1280,
        height: 720,
      },
      intro: {
        lede:
          "A self-directed AI exploration for a fictional Mars initiative, combining cinematic world-building with a simple, scroll-led landing page.",
        body: [
          "Argomars began as an experiment in using AI as a creative production partner across an entire web concept. I directed the idea, visual language, narrative, and interaction flow, then used Codex and ChatGPT to build and refine the landing page into a cohesive experience rather than a collection of generated parts.",
          "The finished page presents a fictional mission to make Mars habitable through propulsion, life-support, habitat, and navigation systems. Its structure moves from the emotional promise of a new world to the practical systems required to survive there.",
        ],
      },
      sections: [
        {
          heading: "Concept & Direction",
          body: [
            "I treated Argomars like a credible aerospace organization instead of a generic science-fiction brand. The language, restrained interface, technical diagrams, and cinematic landscapes all support the same idea: an ambitious mission communicated with clarity and confidence.",
          ],
        },
        {
          heading: "A Scroll-Led Hero",
          body: [
            "The hero uses scroll as part of the story. The opening landscape establishes scale and wonder, while the transition into the challenge section shifts the tone from aspiration to the realities of surviving on Mars. That movement gives a simple landing page a stronger sense of progression without adding complicated navigation.",
          ],
          media: {
            src: "/images/argomars/cover.jpg",
            alt: "Argomars hero showing a distant planet above a launch site",
            width: 1280,
            height: 720,
          },
        },
        {
          heading: "Content & AI Workflow",
          body: [
            "I used Claude Code to explore and shape the page content, then edited it into a clear narrative with short section labels, bold editorial statements, supporting details, and mission metrics. Codex and ChatGPT supported the development process, helping translate the direction into a responsive page and refine the interactions through iteration.",
            "The workflow still depended on active art direction: choosing what belonged in the story, cutting language that felt generic, and keeping the tone consistent from the hero through the final call to action.",
          ],
        },
        {
          heading: "Generated Visual System",
          body: [
            "Google Flow and ChatGPT supported image generation for the project. I directed the imagery around two complementary modes: atmospheric landscapes for emotion and precise technical drawings for credibility. The contrast gives the page range while keeping the visual world connected.",
          ],
          media: [
            {
              src: "/images/argomars/systems.jpg",
              alt: "Argomars technical system blueprint section",
              width: 1280,
              height: 720,
            },
            {
              src: "/images/argomars/mission-progress.jpg",
              alt: "Argomars mission progress metrics section",
              width: 1280,
              height: 720,
            },
          ],
        },
        {
          heading: "Final Thoughts",
          body: [
            "Argomars helped me test AI across concept development, writing, imagery, and implementation in one focused project. The main lesson was that the tools become far more useful when the direction is specific: a clear story, a controlled visual language, and deliberate pacing turned separate outputs into one believable experience.",
          ],
        },
      ],
    },
  },
  {
    slug: "myscu",
    title: "MySCU",
    role: "Founding Product Designer",
    date: "Jun '25 - Present",
    status: "live",
    category: "featured",
    color: "#5E17EB",
    dockLabel: "MySCU",
    icon: "/logos/Myscu.png",
    liveUrl: "https://myscu.co",
    tags: ["Product Design", "Brand & Marketing", "AI Product"],
    caseStudy: {
      kind: "numbered",
      cover: { src: "/images/myscu/hero.png", alt: "MySCU landing page hero section", width: 1872, height: 1274 },
      intro: {
        lede:
          "A global student-mobility platform pairing every family with a Counsellor and an AI advisor, and the product I've designed end-to-end as its founding designer.",
        body: [
          "MySCU takes a family from a free assessment to a funded offer, scoring real admission chances on day one, then pairing them with a certified Counsellor and Mavi, an AI advisor, to close profile gaps, apply to best-fit schools, and get visa-ready. I joined in June 2025 as the founding (and still only) product designer, shaping everything from the public marketing site to the authenticated Counsellor and student platform.",
          "The product began as a scholarship and career advisory experience for students moving from high school into higher education, with accessible resources, mentorship, and simpler application tools at its core.",
        ],
      },
      sections: [],
      achievements: [
        {
          slug: "landing-marketing-site",
          title: "Landing Page & Marketing Site",
          summary:
            "The public-facing site that turns a nervous parent's Google search into a booked assessment: real chances, real stories, and a Counsellor + AI pairing explained in one scroll.",
          role: "Founding Product Designer, marketing site",
          date: "Jun '25 - Present",
          liveUrl: "https://myscu.co",
          tags: ["Marketing Site", "Brand Design", "Conversion"],
          cardImage: {
            src: "/images/myscu/placement-case-file.png",
            alt: "MySCU case file student success story",
            width: 1889,
            height: 1065,
          },
          cover: { src: "/images/myscu/hero.png", alt: "MySCU landing page hero section", width: 1872, height: 1274 },
          intro: {
            body: [
              "The site's one job is to turn uncertainty into a next step. Before MySCU, a family researching study-abroad options had to piece together forums, agents, and school websites themselves, with no way to know their real chances until they'd already paid an agent. I designed the marketing site around a single promise instead: score your chances on day one, then let a certified Counsellor and Mavi carry the rest.",
            ],
            quote:
              "We needed the very first scroll to answer 'will this actually work for my kid.' Everything else on the page exists to back that up.",
          },
          sections: [
            {
              heading: "Hero & Story",
              body: [
                'The headline leads with outcome language ("get you admitted") rather than describing the product. Underneath it, the subhead does the real work in two sentences: a real chance score, a human Counsellor, and an AI advisor that never sleeps.',
                "The globe below the fold visualizes a live placement, one country's flag connecting to another along an animated route, making the abstract idea of \"global placement\" concrete before a visitor scrolls another inch.",
              ],
              media: [
                { src: "/images/myscu/hero.png", alt: "MySCU landing page hero section", width: 1872, height: 1274 },
                {
                  videoSrc: "/images/myscu/hero-section.mp4",
                  alt: "MySCU landing page hero animation",
                  width: 1440,
                  height: 888,
                },
              ],
            },
            {
              heading: "Scholarships & the Counsellor Model",
              body: [
                "Cost is the first objection every family has, so the scholarships section leads with the real number ($65M+ secured this cohort) before explaining how: every family is paired with one certified Counsellor who owns their case end-to-end, backed by Mavi for everything that doesn't need a human.",
                "I designed this as a single scrollable explainer rather than a separate \"how it works\" page, so the trust-building happens without asking a first-time visitor to navigate away.",
              ],
              media: {
                src: "/images/myscu/landing-scholarships.png",
                alt: "MySCU scholarships and counsellor process section",
                width: 1889,
                height: 3204,
              },
            },
            {
              heading: "The Eight-Step Journey",
              body: [
                "Applying abroad is a multi-month process with a lot that can go wrong silently. I broke it into eight numbered steps (assessment, free call, Concierge onboarding, school strategy, closing profile gaps, applications, reviewing offers, visa and departure) so a family always knows exactly where they are and what's next.",
                "Numbering the steps was a deliberate choice: it turns a vague, anxiety-inducing process into something that reads more like a checklist than a leap of faith.",
              ],
              media: { src: "/images/myscu/landing-steps.png", alt: "MySCU eight-step journey section", width: 1889, height: 1868 },
            },
            {
              heading: "Placement Stories",
              body: [
                "A wall of real results sits above one detailed case file: aggregate proof first, then a single story a visitor can actually follow start to finish. Both pull from real placements, not composite or illustrative examples.",
                "This section closes the page right before the final call-to-action, so the last thing a visitor sees before deciding is evidence, not another pitch.",
              ],
              media: [
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
            {
              heading: "Final Thoughts",
              body: [
                "The marketing site is never really finished. Every cohort brings new results, new schools, new proof points to fold back in, and designing it taught me how much of \"trust\" in this category is just sequencing: chances first, people second, proof last.",
              ],
            },
          ],
        },
        {
          slug: "student-counsellor-platform",
          title: "Student & Counsellor Platform",
          summary:
            "The logged-in product behind the promise: a student dashboard, a Counsellor's caseload, and Mavi, the AI advisor, all designed to keep one family's case moving without anything falling through.",
          role: "Founding Product Designer, platform & AI",
          date: "Jun '25 - Present",
          tags: ["Platform Design", "AI/UX", "Dashboard Design"],
          cardImage: {
            src: "/images/myscu/student-dashboard.png",
            alt: "Student dashboard onboarding view",
            width: 1440,
            height: 1073,
          },
          intro: {
            body: [
              "Once a family signs up, the marketing site's promise has to hold up inside a real product. I own the authenticated side end-to-end: the student's dashboard, the Counsellor's tools for running a caseload, the verification system that backs the \"certified Counsellor\" claim, and Mavi's chat interface.",
              "The design problem here is different from the marketing site. Instead of persuading a stranger in one scroll, it's keeping one Counsellor and one family in sync over months, across dozens of small decisions.",
            ],
          },
          sections: [
            {
              heading: "Student Dashboard",
              body: [
                "A student's dashboard is the first screen after Concierge onboarding: an onboarding checklist, their Counsellor's contact, and a direct line into Mavi, all visible without digging. Nothing here is decorative; every module maps to a step in the eight-step journey a student already saw on the marketing site.",
                "Consistency between the public journey map and the actual dashboard was the whole point. A student shouldn't feel like they've entered a different product once they've paid.",
              ],
              media: {
                src: "/images/myscu/student-dashboard.png",
                alt: "Student dashboard onboarding view",
                width: 1440,
                height: 1073,
              },
            },
            {
              heading: "The Counsellor's Queue",
              body: [
                "A Counsellor isn't managing one family, they're managing dozens at once, at different stages. The queue is a triage view: every active student, sorted by what needs attention now, so a Counsellor opens the app already knowing where to start rather than hunting for it.",
                "This table is the busiest screen in the platform, so I optimized it for scanning first: status, not decoration.",
              ],
              media: {
                src: "/images/myscu/counsellor-queue.png",
                alt: "Counsellor active students queue",
                width: 1440,
                height: 1073,
              },
            },
            {
              heading: "Inside a Student's Case",
              body: [
                "Clicking into one student from the queue opens their full case: roadmap, guardian and school contacts, and everything a Counsellor needs to make the next call without switching tools. This is the screen a Counsellor actually lives in once they've picked up a case.",
                "I designed it to answer one question fast: what does this specific family need from me today.",
              ],
              media: {
                src: "/images/myscu/counsellor-student-detail.png",
                alt: "Counsellor viewing a student's detail page",
                width: 1440,
                height: 1073,
              },
            },
            {
              heading: "Counsellor Verification & Trust",
              body: [
                "MySCU's whole pitch to a family rests on the word \"certified,\" so that claim needed a real system behind it, not just a label. Every Counsellor goes through credential and ID/face verification, and carries a visible trust badge plus a published weekly schedule.",
                "This screen exists for the Counsellor, but it's really designing for the family's trust one layer removed: proof they'd never see directly unless something went wrong.",
              ],
              media: {
                src: "/images/myscu/counsellor-profile.png",
                alt: "Counsellor verification and credentials profile",
                width: 1440,
                height: 1078,
              },
            },
            {
              heading: "Mavi, the AI Advisor",
              body: [
                "Mavi covers everything that doesn't need a human on the other end (career mapping, profile-gap questions, best-fit school shortlists, visa file prep), available at any hour a Counsellor isn't. I designed the chat interface to feel like a continuation of the Counsellor relationship, not a separate bot bolted on.",
                "Getting the handoff right mattered more than the AI itself: a student should never have to guess whether a question belongs to Mavi or their Counsellor.",
              ],
              media: { src: "/images/myscu/mavi-chat.png", alt: "Mavi AI advisor chat interface", width: 1440, height: 1073 },
            },
            {
              heading: "Final Thoughts",
              body: [
                "This is the side of MySCU a visitor never sees, but it's where the actual promise gets kept or broken, one Counsellor, one family, one case at a time. Designing both sides of the product, public and authenticated, is what \"founding designer\" has actually meant day to day.",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "sysserve",
    title: "Sysserve",
    role: "Product Designer",
    date: "Feb '24 - Present",
    status: "live",
    category: "featured",
    color: "#0098FF",
    dockLabel: "Sysserve",
    icon: "/logos/Sysserve.png",
    liveUrl: "https://sysservesolutions.com/",
    tags: ["Product Design", "UX Strategy", "Fleet Software"],
    caseStudy: {
      kind: "numbered",
      cover: { src: "/images/sysserve/cover.png", alt: "Sysserve website", width: 2880, height: 1650 },
      intro: {
        lede:
          "Enterprise fleet & asset software, and the place I grew from intern to the only product designer on the team.",
        body: [
          "Sysserve builds Instanta, an enterprise platform spanning Fleet, Facility, Asset & Inventory, Workplace, Telematics, and Property management. I joined in February 2024 as a Product Design Intern and was promoted to Product Designer six months later, owning design end-to-end with no other designer to hand off to.",
        ],
      },
      sections: [],
      achievements: [
        {
          slug: "website-redesign",
          title: "Website Redesign & Complete Overhaul",
          summary:
            "A ground-up UX and visual identity overhaul of Sysserve's public website, from a dated, high-bounce-rate site to a modern, conversion-focused presence.",
          role: "UI/UX Designer",
          date: "Jan '25",
          liveUrl: "https://sysservesolutions.com/",
          tags: ["UI/UX Design", "Brand Refresh", "Website"],
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
                "Users struggled to find service information, and the visual design felt dated next to competitors. The result was a high bounce rate and weak lead generation.",
              ],
              stat: { value: "65%", label: "bounce rate on key service pages, driven by poor navigation" },
              media: { src: "/images/sysserve/1.png", alt: "Sysserve old design", width: 1399, height: 1299 },
            },
            {
              heading: "Research & Insights",
              body: [
                "I carried out extensive design explorations, analyzing competitors such as Salesforce and Fleetio, studying their layouts, site structures, and product listings to understand what made their approaches work.",
                "Throughout the process I collaborated closely with stakeholders, the marketing team, and developers across multiple rounds of feedback and review. Those iterations are what shaped the final design.",
              ],
              media: [
                { src: "/images/sysserve/2.png", alt: "Sysserve design exploration", width: 1394, height: 1306 },
                { src: "/images/sysserve/3.png", alt: "Sysserve design exploration", width: 1391, height: 1207 },
                {
                  src: "/images/sysserve/redesign-preview.gif",
                  alt: "Animated walkthrough of the Sysserve website redesign",
                  width: 1152,
                  height: 648,
                },
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
                "The redesign has significantly improved engagement and lead capture. The client reports a noticeable increase in inquiries, along with positive feedback from stakeholders.",
                "The work also sharpened how I use component-based design, communicate decisions to developers, and collaborate with marketing and content teams from exploration through launch.",
              ],
            },
          ],
        },
        {
          slug: "tyre-management",
          title: "Tyre Management",
          summary:
            "A full tyre lifecycle module for Instanta Fleet: register, install, track, and retire tyres across any axle configuration, from a standard 4×2 to a 10×4 twin-steer rig.",
          role: "Product Designer, solo, full UX/UI ownership",
          date: "2026",
          tags: ["Product Design", "UX Research", "Enterprise SaaS"],
          cardImage: {
            src: "/images/sysserve/tyre-management/truck-tyre.jpg",
            alt: "Close-up of a heavy-duty truck tyre",
            width: 1600,
            height: 1200,
          },
          intro: {
            body: [
              "Fleet operators were tracking tyre stock, installs, and replacement schedules manually, across spreadsheets and paper logs disconnected from the vehicles they belonged to. That made it hard to know which tyre was on which wheel, when it needed replacing, or how much was being spent on rubber across a fleet.",
              "As the sole designer on this, I owned the module end-to-end inside Instanta Fleet: vehicle groups as the foundation, a tyre register as the single source of truth, an installation flow built around a real axle-position picker, and automated replacement-cycle tracking, covering every axle configuration Sysserve's fleet customers actually run.",
            ],
          },
          sections: [
            {
              heading: "Vehicle Groups, the Foundation",
              body: [
                "Every tyre install starts from a vehicle group: its category, make, model, and crucially its tyre specification and axle configuration. This is what lets the rest of the module work off real vehicle data instead of free text: once a group's axle configuration is set, every install for that group renders the correct wheel diagram automatically.",
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
                "Every tyre in the warehouse is logged against its manufacturer, part and serial number, size (width, aspect ratio, rim diameter), construction, cost, and current location, with a running count and total spend at the bottom of the ledger. This register is the source of truth every other screen in the module reads from.",
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
                "Before a wheel picker can render a real vehicle, someone has to define what that vehicle's axles actually look like. I designed the configuration builder as its own small tool: pick a base layout (4-axle, 8x4 tandem, and so on), choose the specific variant, and the position grid populates for that vehicle group to reuse on every future install.",
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
                "Fitting a tyre means picking the exact wheel it goes on, not just an axle, but a side and position on that axle. Every open position on the vehicle's diagram renders as a dashed placeholder; selecting one fills it in and highlights it, next to the standard mileage, tread depth, and pressure fields.",
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
                "Swapping a worn tyre carries the same flow one step further: the outgoing tyre can be sent back to the warehouse to Store, or marked Dispose if it's no longer usable, keeping the register accurate without a separate stock-adjustment screen.",
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
                "Adding a new type also sets reorder, minimum, and maximum stock levels per warehouse, so the team gets a low-stock signal before a depot actually runs out of a given tyre.",
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
                "Replacement isn't just reactive. A cycle can be scheduled by time period or by mileage, tied to a specific tyre type, with approval and email notifications configured up front so the right person is looped in automatically when a cycle comes due.",
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
                "Every installation submitted goes through an approval queue: submitted by, vehicle, mileage, and the tyres and positions involved are all visible before it's approved, with attachments flagged inline. Once approved, the read-only view shows the tyre tied directly to its vehicle and exact axle position.",
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
                "This was the first module I designed without another designer to review against: every call on the axle picker, the register schema, and the approval flow was mine to make and defend. It's the project that pushed me hardest, and the one where I learned how much a picture of a real vehicle can do for a form that used to be four dropdowns.",
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
    icon: "/logos/Babyboom.png",
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
            "The market was fragmented: retailers struggled to source authentic products reliably, and the existing supply chain was opaque, slow, and prone to counterfeit goods. Limited access to manufacturers also reduced supply and pushed prices up for businesses further down the chain.",
          ],
          media: { src: "/images/babyboom/problem.png", alt: "Baby Boom supply chain problem", width: 1600, height: 800 },
        },
        {
          heading: "Research & Insights",
          body: [
            "We interviewed 20+ major retailers and 5 manufacturers to understand the friction points. Trust and logistics visibility emerged as the primary concerns, while users consistently asked for clear calls to action and as little navigation time as possible.",
          ],
          media: { src: "/images/babyboom/research.png", alt: "Baby Boom research", width: 800, height: 450 },
        },
        {
          heading: "Design Solution",
          body: [
            "We designed a brand identity that evokes trust, warmth, and professionalism, paired with a user-centric product interface that simplifies bulk ordering.",
          ],
          bullets: ["Streamlined B2B Checkout Process", "Real-time Inventory Management", "Supplier Verification System"],
          media: [
            { src: "/images/babyboom/interface-01.avif", alt: "Babyboom product interface", width: 416, height: 189 },
            { src: "/images/babyboom/interface-02.avif", alt: "Babyboom commerce interface", width: 463, height: 313 },
            { src: "/images/babyboom/interface-03.png", alt: "Babyboom website design", width: 1145, height: 630 },
            { src: "/images/babyboom/interface-04.avif", alt: "Babyboom ordering interface", width: 383, height: 281 },
            { src: "/images/babyboom/interface-05.avif", alt: "Babyboom product screen", width: 382, height: 280 },
            { src: "/images/babyboom/interface-06.avif", alt: "Babyboom marketplace screen", width: 385, height: 275 },
          ],
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
            "This project reinforced the importance of trust-centered design in B2B commerce. When buyers can see and believe the process, everything downstream gets easier.",
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
    color: "#2E9E7A",
    dockLabel: "Homeland",
    icon: "/logos/Homeland.png",
    caseStudy: {
      kind: "gallery",
      lede: "I led Homeland's brand design across social campaigns, print materials, branded merchandise, website updates, and digital marketing collateral.",
      media: [
        { src: "/images/homeland/cover.png", alt: "Homeland brand design", width: 1600, height: 1012 },
        { src: "/images/homeland/1.png", alt: "Homeland Sangotedo Buzz campaign design", width: 1600, height: 1600 },
        { src: "/images/homeland/2.png", alt: "Homeland Father's Day campaign", width: 1300, height: 1300 },
        { src: "/images/homeland/3.png", alt: "Homeland Father's Day campaign", width: 1300, height: 1300 },
        { src: "/images/homeland/campaign-04.webp", alt: "Homeland Venice investment campaign", width: 1920, height: 1920 },
        { src: "/images/homeland/campaign-05.avif", alt: "Homeland social campaign design", width: 360, height: 529 },
        { src: "/images/homeland/campaign-06.webp", alt: "Homeland January campaign design", width: 1920, height: 1920 },
        { src: "/images/homeland/campaign-07.webp", alt: "Homeland brand campaign artwork", width: 320, height: 320 },
        { src: "/images/homeland/campaign-08.avif", alt: "Homeland digital campaign artwork", width: 332, height: 321 },
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
      lede: "I crafted a comprehensive brand identity for Giftender, a gifting company built around the art of personalized curation: thoughtfully selected gifts, matched to each person's preferences and needs.",
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
    color: "#C96B56",
    dockLabel: "Jalpha EHR",
    icon: "/logos/Jalpha-Health.png",
    caseStudy: {
      kind: "gallery",
      lede: "I designed a series of online campaign materials for Jalpha EHR to boost engagement and awareness, including the two campaign videos below.",
      videos: [
        { id: "SkECL9P2qS4", title: "Introducing Jalpha Health EHR" },
        { id: "LI0HNAcANRM", title: "Inside Jalpha's EHR" },
      ],
      media: [
        { src: "/images/jalpha-ehr/cover.png", alt: "Jalpha EHR campaign design", width: 1600, height: 1124 },
        { src: "/images/jalpha-ehr/campaign-02.webp", alt: "Jalpha World Mental Health Day campaign", width: 1920, height: 1920 },
        { src: "/images/jalpha-ehr/campaign-03.webp", alt: "Jalpha EHR social campaign artwork", width: 1920, height: 1920 },
        { src: "/images/jalpha-ehr/campaign-04.webp", alt: "Jalpha EHR digital campaign artwork", width: 1920, height: 1920 },
      ],
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
      lede: "I developed the brand identity for Venhoot, a visual language built to communicate speed and reliability.",
      media: [
        { src: "/images/venhoot/banner.gif", alt: "Venhoot brand preview", width: 1152, height: 648 },
        { src: "/images/venhoot/brand-02.avif", alt: "Venhoot brand application", width: 250, height: 231 },
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.category === "featured");
export const brandGraphicProjects = projects.filter((p) => p.category === "brand-graphic");
