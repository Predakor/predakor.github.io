import { useEffect, useState } from "react";
import { Project } from "../types";

const url = "https://api.github.com/users/Predakor/repos";
const headers = { Accept: "application/vnd.github.mercy-preview+json" };

function useProjects() {
  const [projects, setProjects] = useState(Array<Project>);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(url, { headers });
      if (!res.ok) throw new Error("something went wrong");

      const data: Array<Project> = await res.json();

      const featuredProjects = [
        {
          ...data.find((project) => project.name === "spotify-web-player"),
          name: "discofy",
        },
        data.find((project) => project.name === "typer"),
        data.find((project) => project.name === "tasker"),
      ] as Project[];

      setProjects(featuredProjects);
    };
    fetchProjects();
  }, []);

  return projects;
}

export default useProjects;
