"use client";
import React, { useState } from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";

interface Project {
    title: string;
    href?: string;
    description: string;
    dates: string;
    tags?: readonly string[];
    technologies: readonly string[];
    link?: string;
    image?: string;
    video?: string;
    links?: readonly {
      icon: React.ReactNode;
      type: string;
      href: string;
    }[];
  }
  
  interface PortfolioSectionProps {

    projects: readonly Project[];

    blurFadeDelay: number;

  }

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects, blurFadeDelay }) => {
  const [activePortfolio, setActivePortfolio] = useState("dev");

  return (
    <div className="space-y-6 w-full py-12">
      <BlurFade delay={blurFadeDelay}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety AI and Game Dev projects. <br /> Here are a few of my favorites!
            </p>
            
            <div className="flex justify-center gap-2 pt-4">
              <button
                onClick={() => setActivePortfolio("dev")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activePortfolio === "dev"
                    ? "bg-foreground text-background"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                Dev Portfolio
              </button>
              <button
                onClick={() => setActivePortfolio("art")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activePortfolio === "art"
                    ? "bg-foreground text-background"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                Art & Design
              </button>
            </div>
          </div>
        </div>
      </BlurFade>

      {activePortfolio === "dev" ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={blurFadeDelay + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[400px] max-w-[800px] mx-auto bg-muted rounded-lg">
          <p className="text-muted-foreground text-lg">Art & Design Portfolio Coming Soon</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioSection;