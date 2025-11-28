"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";

interface ProjectData {
  id: number;
  name: string;
  image: string;
  category: string;
  location: string;
  year: string;
  type: string;
  area: string;
  status: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full rounded-[20px] overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 shadow-lg group cursor-pointer border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[450px]">
        <Image
          src={project.image}
          alt={project.name}
          height={350}
          width={410}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-primary/60 group-hover:via-primary/20 transition-all duration-500"></div>

        {/* Project details overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 ease-out">
          <div
            className={`transition-all duration-500 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-90"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-lg font-medium opacity-90 mb-2">
              {project.category}
            </p>

            {/* Additional project info on hover */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex items-center gap-4 text-sm text-white/80 mt-2">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.location}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border transition-all duration-300 ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-300 border-green-500/30"
                : project.status === "In Progress"
                ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                : "bg-blue-500/20 text-blue-300 border-blue-500/30"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  const projectsData = useMemo<ProjectData[]>(
    () => [
      {
        id: 1,
        name: "Modern Extension",
        image: "/Featured/1.png",
        category: "EXTENSION",
        location: "Sydney, NSW",
        year: "2024",
        type: "Residential",
        area: "150 sq m",
        status: "Completed",
      },
      {
        id: 2,
        name: "Contemporary House",
        image: "/Featured/2.png",
        category: "HOUSES",
        location: "Melbourne, VIC",
        year: "2023",
        type: "Residential",
        area: "280 sq m",
        status: "Completed",
      },
      {
        id: 3,
        name: "Luxury Duplex",
        image: "/Featured/3.png",
        category: "DUPLEX",
        location: "Brisbane, QLD",
        year: "2024",
        type: "Residential",
        area: "320 sq m",
        status: "In Progress",
      },
      {
        id: 4,
        name: "Granny Flat Design",
        image: "/Featured/4.png",
        category: "GRANNY FLAT",
        location: "Perth, WA",
        year: "2024",
        type: "Residential",
        area: "80 sq m",
        status: "Completed",
      },
      {
        id: 5,
        name: "Heritage Extension",
        image: "/Featured/5.png",
        category: "EXTENSION",
        location: "Adelaide, SA",
        year: "2023",
        type: "Residential",
        area: "120 sq m",
        status: "Completed",
      },
      {
        id: 6,
        name: "Family House",
        image: "/Featured/6.png",
        category: "HOUSES",
        location: "Canberra, ACT",
        year: "2024",
        type: "Residential",
        area: "250 sq m",
        status: "In Progress",
      },
      {
        id: 7,
        name: "Twin Duplex",
        image: "/Featured/1.png",
        category: "DUPLEX",
        location: "Gold Coast, QLD",
        year: "2024",
        type: "Residential",
        area: "400 sq m",
        status: "Planning",
      },
      {
        id: 8,
        name: "Studio Granny Flat",
        image: "/Featured/2.png",
        category: "GRANNY FLAT",
        location: "Newcastle, NSW",
        year: "2023",
        type: "Residential",
        area: "60 sq m",
        status: "Completed",
      },
    ],
    []
  );

  const categories = ["ALL", "EXTENSION", "HOUSES", "DUPLEX", "GRANNY FLAT"];

  // Filter projects based on selected category
  useEffect(() => {
    if (selectedCategory === "ALL") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === selectedCategory)
      );
    }
  }, [projectsData, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>

      <div className="relative flex flex-col items-center w-full py-4 gap-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#1c1c84] via-primary/90 to-primary">
        {/* Content wrapper with relative positioning */}
        <div className="relative z-10 w-full flex flex-col items-center gap-16">
          <div className="px-4 py-8 rounded-lg">
            <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold tracking-[-0.4px] text-gray-100">
                Our Featured Projects
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Explore Our Highlighted Projects That Reflect Our Identity
              </p>

              {/* Modern Filter Design */}
              <div className="bg-white/10 backdrop-blur-md rounded-full p-2 shadow-2xl border border-white/20 mb-8">
                <div className="flex items-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 ease-out transform hover:scale-105 cursor-pointer ${
                        selectedCategory === category
                          ? "bg-primary text-white shadow-lg scale-105"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Continuous Scrolling Container */}
            <div className="relative w-full max-w-8xl mx-auto rounded-xl -mt-6">
              <div
                className="overflow-hidden px-4 py-6"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div
                  className="flex gap-6"
                  style={{
                    animation: `scroll-right-to-left ${
                      filteredProjects.length * 4
                    }s linear infinite`,
                    animationPlayState: isPaused ? "paused" : "running",
                    width: "max-content",
                  }}
                >
                  {/* Triple the projects for seamless infinite loop */}
                  {[
                    ...filteredProjects,
                    ...filteredProjects,
                    ...filteredProjects,
                  ].map((project, index) => (
                    <div
                      key={`${project.id}-${index}-${selectedCategory}`}
                      className="flex-shrink-0 w-[350px]"
                    >
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
