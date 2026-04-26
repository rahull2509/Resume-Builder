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
    title: "Senior Full-Stack Engineer",
    email: "aarav.mehta@example.com",
    phone: "+91 98765 43210",
    location: "Bengaluru, India",
    website: "aarav.dev",
    summary: "Results-driven Senior Full-Stack Engineer with over 6 years of experience designing, developing, and deploying scalable web applications and microservices. Adept at leading cross-functional teams to deliver high-impact software solutions, optimizing database performance, and building intuitive user interfaces. Passionate about clean code, continuous integration, and mentoring junior developers to achieve engineering excellence.",
  },
  experience: [
    { 
      id: v4(), 
      company: "Lattice Labs", 
      role: "Senior Software Engineer", 
      startDate: "Mar 2022", 
      endDate: "Present", 
      location: "Bengaluru, India", 
      bullets: [
        "Led the migration of a monolithic backend to an event-driven microservices architecture using Go and Kafka, reducing p99 API latency by 38%.", 
        "Designed and implemented a multi-tenant billing pipeline that securely processes over 1.2M events per day.",
        "Mentored a team of 4 junior developers, introducing strict code review guidelines and unit testing standards that decreased production bugs by 25%.",
        "Optimized complex PostgreSQL queries and added Redis caching layers to speed up dashboard load times by 45%."
      ] 
    },
    { 
      id: v4(), 
      company: "FinCore Technologies", 
      role: "Software Engineer", 
      startDate: "Jul 2019", 
      endDate: "Feb 2022", 
      location: "Mumbai, India", 
      bullets: [
        "Developed and maintained scalable RESTful APIs using Python, FastAPI, and PostgreSQL for a high-traffic fintech platform.", 
        "Built responsive and interactive dashboards using React, Redux, and Tailwind CSS, improving user engagement by 30%.",
        "Integrated third-party payment gateways and KYC verification providers, ensuring 100% compliance with financial security standards.",
        "Automated CI/CD pipelines using GitHub Actions and Docker, cutting deployment time from 40 minutes to under 10 minutes."
      ] 
    }
  ],
  education: [
    { 
      id: v4(), 
      school: "Indian Institute of Technology (IIT) Bombay", 
      degree: "Bachelor of Technology", 
      field: "Computer Science and Engineering", 
      startDate: "2015", 
      endDate: "2019", 
      location: "Mumbai, India", 
      details: "GPA: 9.1/10 | Dean's List (2017, 2018) | Core Team Member of the Coding Club" 
    }
  ],
  projects: [
    { 
      id: v4(), 
      name: "Spool", 
      link: "github.com/aarav/spool", 
      tech: "Go · PostgreSQL · Redis · Docker", 
      description: "An open-source streaming queue and task runner built for high throughput. Gained over 1.4k stars on GitHub.", 
      bullets: [
        "Implemented at-least-once delivery guarantees and a dead-letter queue mechanism for robust error handling.", 
        "Wrote a comprehensive benchmark suite proving capability to handle 10k+ messages per second on modest hardware."
      ] 
    },
    { 
      id: v4(), 
      name: "SmartFinance Tracker", 
      link: "smartfinance.aarav.dev", 
      tech: "React · Node.js · Express · MongoDB", 
      description: "A personal finance management dashboard that categorizes expenses using machine learning.", 
      bullets: [
        "Integrated Plaid API to automatically sync banking transactions in real-time.", 
        "Built dynamic data visualizations using Recharts to display monthly spending patterns."
      ] 
    }
  ],
  skills: [
    { id: v4(), category: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "Python", "Go", "Java", "SQL"] }, 
    { id: v4(), category: "Frontend", items: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML5/CSS3"] },
    { id: v4(), category: "Backend & DB", items: ["Node.js", "Express", "FastAPI", "Spring Boot", "PostgreSQL", "MongoDB", "Redis"] },
    { id: v4(), category: "DevOps & Tools", items: ["Git", "Docker", "Kubernetes", "AWS (EC2, S3, RDS)", "CI/CD", "Kafka"] }
  ],
  certifications: [
    { id: v4(), name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services", date: "Aug 2023", link: "aws.amazon.com/verification" },
    { id: v4(), name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation", date: "Jan 2022", link: "" }
  ],
});
