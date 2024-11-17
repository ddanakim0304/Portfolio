import { Icons } from "@/components/icons";
import { Mail } from "lucide-react";

export const DATA = {
  // basic informations
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

  // database of my works
  work: [
    {
    company: "APTO BIO",
    href: "https://apto.bio/",
    badges: [],
    location: "Buenos Aires, Argentina",
    title: "Software Engineer Internship",
    logoUrl: "/apto.png",
    start: "Sep 2024",
    /*...*/
    end: "Present",
    /*...*/
    additionalInfo: (
      <ul>
        <li>- Collaborated in a team to enhance doctor-patient connections through personalized monitoring, delivering user-friendly interfaces and efficient data systems using  JavaScript, TypeScript, HTML, CSS, Node.js, and Python </li>
        <li>- Integrated AI solutions, specifically using ChatGPT, to automate tasks and improve care quality, while utilizing version control with Git and database modeling with MySQL, contributing to a robust healthcare software platform.
        </li>
      </ul>
    ),
  },
      {
        company: "Headstarter",
        href: "https://headstarter.co/",
        badges: [],
        location: "Remote",
        title: "Software Engineering Fellow",
        logoUrl: "/headstarter.jpg",
        start: "Jul 2024",
        /*...*/
        end: "Sep 2024",
        /*...*/
        additionalInfo: (
          <ul>
            <li>- Built and deployed 5 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment
            </li>
            <li>- Collaborated with 3 Fellows to develop an AI-powered video interview app using React JS, TypeScript, Next.js, OpenAI API, Whisper TTS API, and Eleven Labs API, resulting in over 300+ waitlisted users.
            </li>
            <li>- Built and deployed a SaaS product that generates dynamic flashcards to facilitate programming language learning using the Llama 3.1 LLM via the Groq API, integrated a paywall and custom pricing plans using the Stripe API
            </li>
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

  // database of eductation
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

    // database of my projects
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
    },      
    {
      title: "Intervey",
      href: "https://github.com/benny02hun/Survey-App",
      dates: "Jul 2024",
      active: true,
      description:
        "I worked in a team of three to develop an AI-powered video interview app aimed at streamlining the survey process. The app delivers a seamless, AI-driven interview experience, utilizing technologies like React JS, TypeScript, Next.js, OpenAI API, Whisper TTS API, and Eleven Labs API. This solution successfully garnered interest from over 300 waitlisted users.",
      technologies: [
        "React",
        "JavaScript", "TypeScript",
        "Next.js", 
        "OpenAI API", 
        "Whisper API"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/benny02hun/Survey-App",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "/Intervey.mp4",
    },   
    {
      title: "GCAL Event Copier Extension",
      href: "https://github.com/ddanakim0304/GCal-event-copier-extension",
      dates: "Sep 2024",
      active: true,
      description: 
        "Developed as a Google Chrome extension, this tool streamlines copying Google Calendar event details (titles and times) for quick transfer into task management apps, centralizing workflows for users managing tasks across multiple tools.",
      technologies: [
        "JavaScript",
        "Chrome Extension",
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
    },    {
      title: "A* search maze pathfinder",
      href: "https://github.com/ddanakim0304/AI-maze-pathfinder",
      dates: "Sep 2024",
      active: true,
      description:
        "As part of CS152-Harnessing Artificial Intelligence Algorithms assignment, I implemented the A* search algorithm to find the shortest path in a maze. The algorithm was implemented in Python and visualized using Pygame.",
      technologies: [
        "Python",
        "Pygame",
        "A* Search Algorithm",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/ddanakim0304/AI-maze-pathfinder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/CS152.mp4",
    },    {
      title: "Automated Scheduler",
      href: "https://github.com/ddanakim0304/2024-designing-a-Scheduler-CS110-Assignment",
      dates: "March 2024",
      active: true,
      description:
        "As part of CS110 - Problem Solving with Data Structures and Algorithms assignment, I created a scheduler that efficiently manages tasks with various dependencies, start times, and priorities using priority queues.",
      technologies: [
        "Python",
        "Priority Queues",
        "Data Structures",
        "Algorithms",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/ddanakim0304/2024-designing-a-Scheduler-CS110-Assignment",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  // database of my artworks
  artworks: [
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
    },

    {
      title: "Test",
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
      image: "/test1.png",
      video:
        "",
    },
    {
      title: "Test2",
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
      image: "/test2.jpg",
      video:
        "",
    },    {
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
    },
  ]


} as const;
