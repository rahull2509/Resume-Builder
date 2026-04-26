import { v4 } from "./uuid";
export const emptyResume = () => ({
  name: "Untitled Resume",
  template: "classic",
  personal: { fullName: "", title: "", email: "", phone: "", location: "", website: "", summary: "" },
  education: [], experience: [], projects: [], skills: [], certifications: [],
});
export const sampleResume = () => ({
  name: "Software Engineer Resume",
  template: "classic",
  personal: {
    fullName: "Aarav Mehta",
    title: "Senior Software Engineer",
    email: "aarav@example.com",
    phone: "+91 98765 43210",
    location: "Bengaluru, India",
    website: "aarav.dev",
    summary: "Full-stack engineer with 6+ years building reliable, scalable products.",
  },
  experience: [{ id: v4(), company: "Lattice Labs", role: "Senior Software Engineer", startDate: "Mar 2022", endDate: "Present", location: "Bengaluru", bullets: ["Led migration to event‑driven services, reducing p99 latency by 38%.", "Designed multi‑tenant billing pipeline processing 1.2M events/day."] }],
  education: [{ id: v4(), school: "IIT Bombay", degree: "B.Tech", field: "Computer Science", startDate: "2015", endDate: "2019", location: "Mumbai", details: "GPA 9.1/10" }],
  projects: [{ id: v4(), name: "Spool", link: "github.com/aarav/spool", tech: "Go · Postgres", description: "Open‑source streaming queue. 1.4k stars.", bullets: ["Implemented at‑least‑once delivery.", "Wrote benchmark suite."] }],
  skills: [{ id: v4(), category: "Languages", items: ["TypeScript", "Python", "Go"] }, { id: v4(), category: "Frameworks", items: ["React", "FastAPI"] }],
  certifications: [{ id: v4(), name: "AWS Solutions Architect", issuer: "AWS", date: "2023", link: "" }],
});
