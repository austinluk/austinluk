import type { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Austin Luk — TaPRO, ThenStep, Freddy the Freelancer, and more. Full-stack applications built with Next.js, TypeScript, and AI.",
};

export default function Page() {
  return <ProjectsPage />;
}
