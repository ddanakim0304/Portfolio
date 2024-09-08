import { Icons } from "@/components/icons";
import { Mail } from "lucide-react";

export const DATA = {
  name: "Dain Kim",
  initials: "DK",
  url: "https://www.dain-kim.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer, Game Developer, Designer..... and so much more! I love creating things that enrich people's lives 🐋🌊",
  summary: "Currently, I’m focused on building AI SaaS for university students and developing games, crafting immersive and impactful experiences. \nWhen I’m not working, you’ll find me with my nose in a book (fun fact: I read 65 books in the last six months!), scaling indoor climbing walls, playing indie games, exploring new places, or just hanging out with friends.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "HTML/CSS",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Firebase",
    "Vercel",
    "Chrome Extension API",
    "Google Cloud API",
    "C#",
    "Unity",
    "Unreal Engine",
    "Figma",
  ],
  navbar: [
    { href: "mailto: Dain Kim <kim@uni.minerva.edu>", icon: Mail, label: "Contact Me" },
  ],
  contact: {
    email: "kim@uni.minerva.edu",
    tel: "+821096244561",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ddanakim0304",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dain-kim-1b7428261/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
      {
        company: "Headstarter",
        href: "https://headstarter.co/",
        badges: [],
        location: "Remote",
        title: "Software Engineering Fellow",
        logoUrl: "/headstarter.jpg",
        start: "Jul 2024",
        /*...*/
        end: "Present",
        /*...*/
        additionalInfo: (
          <ul>
            <li>- Selected for a 7-week software engineering fellowship focused on building 5 AI projects.</li>
            <li>- Created AI-powered Video Interview with a team of three, utilizing Next.js, TypeScript, GPT/Whisper API, Vercel.</li>
          </ul>
        ),
      },
      {
        company: "DEGIS",
        href: "https://degis.info/",
        badges: [],
        location: "Berlin, Germany",
        title: "UX Researcher",
        logoUrl: "/DEGIS.png",
        start: "Jan 2024",
        end: "Apr 2024",
        additionalInfo: (
          <ul>
            <li>- Conducted a comprehensive survey among 30 DEGIS members and interviewed 3 city chapter leaders to identify potential improvements.</li>
            <li>- Utilized Python (matplotlib, pandas) and Google Forms for data visualization and analysis.</li>
          </ul>
        ),
      },
      {
        company: "MindHyrst",
        href: "https://www.mindhyrst.com/",
        badges: [],
        location: "Remote",
        title: "Web/Graphic Design Intern",
        logoUrl: "/mindhyrst.jpg",
        start: "Jul 2024",
        end: "Present",
        additionalInfo: (
          <ul>
          <li>- Implemented responsive design principles to create signs representing each of the well-being pillars, ensuring compatibility across multiple devices and platforms.</li>
          <li>- Provided input on website architecture and suggested technical improvements, enhancing user experience and site performance.</li>
          <li>- Assisted in updating the website, social media, brochures, and workshop slides.</li>
          <li>- Created designs for takeaway gifts for students, including stickers, info sheets, and well-being postcards.</li>
        </ul>
        ),
      },    
  ],
  education: [
    {
      school: "Minerva University",
      href: "https://www.minerva.edu/",
      degree: "BS in Computational Sciences (Computational Science and Artificial Intelligence)",
      logoUrl: "/minerva.jpg",
      start: "2022",
      end: "2026",
       additionalInfo: (
        <ul>
          <li>- Admitted to a highly selective (&lt;2% acceptance rate) liberal arts college; will study in seven international cities.</li>
          <li>- Relevant Coursework: CS110: Problem Solving with Data Structures and Algorithms; CS113: Theory and Applications of Linear Algebra; CS111: Single and Multivariable Calculus.</li>
          <li>- GPA: 3.57/4.00</li>
        </ul>
      ),
    },
    {
      school: "CodePath",
      href: "https://www.codepath.org/",
      degree: "Intro to Web Development",
      logoUrl: "/codepath.png",
      start: "Aug 2023",
      end: "Nov 2023",
      additionalInfo: (
        <ul>
          <li>Learned HTML, CSS, and JavaScript, and created a website about {" "}
            <a
              href="https://github.com/ddanakim0304/2023-Codepath-web-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400"
            >
             whale population preservation.
             </a>
          </li>
        </ul>
      ),
    }
  ],
  projects: [
    {
      title: "Cat-ch Me If You Can",
      href: "https://ddanakim0304.itch.io/cat-ch-me-if-you-can",
      dates: "Jul 2024",
      active: true,
      description:
        "Developed in Unity with C#, this adventure game follows an alien kitty on a quest to find her parents on Earth, utilizing unique wave-making powers to navigate the deep ocean. This was my first game development project, completed in just 22 hours (#6 ranking in Swap Jam 2024).",
      technologies: [
        "Unity2D",
        "C#",
        "Aseprite",
      ],
      links: [
        {
          type: "Play",
          href: "https://chatcollect.com",
          icon: <Icons.paw className="size-3" />,
        },
      ],
      image: "",
      video:
        "/gameplay.mp4",
    },     {
      title: "GCAL Event Copier Extension",
      href: "https://github.com/ddanakim0304/GCal-event-copier-extension",
      dates: "Sep 2024",
      active: true,
      description: 
        "Developed as a Google Chrome extension, this tool streamlines copying Google Calendar event details (titles and times) for quick transfer into task management apps, centralizing workflows for users managing tasks across multiple tools.",
      technologies: [
        "JavaScript",
        "Chrome Extensions API",
        "Google Calendar API",
        "HTML/CSS",
        "OAuth2 Authentication",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/ddanakim0304/GCal-event-copier-extension",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/gcal_demo_final.gif",
      video: "",
    },
    {
      title: "JARVIS AI Voice Assistant",
      href: "https://github.com/ddanakim0304/Jarvis-AI-Voice-Assistant.git",
      dates: "Aug 2024",
      active: true,
      description:
        "A voice-controlled AI assistant inspired by JARVIS from Marvel, built using Node.js and OpenAI APIs.",
      technologies: [
        "Node.js",
        "OpenAI API",
        "Whisper API",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/ddanakim0304/Jarvis-AI-Voice-Assistant.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/jarvis.mp4",
    },
  ],
  hackathons: [
  ],
} as const;
