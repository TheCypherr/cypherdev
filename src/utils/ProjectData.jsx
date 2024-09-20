import { useState } from "react";

export default function ProjectData() {
  const [projects, setProjects] = useState({
    allProjects: [
      {
        image: "/portfolio.png",
      },
    ],
  });
}
