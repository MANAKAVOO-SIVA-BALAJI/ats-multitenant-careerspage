
export interface Job {
  id: string;
  title: string;
  description: string;
  qualifications: string[];
  location: string;
  department?: string; // Optional for now to avoid breaking other things if strict
  type?: string;
}

export interface WebsiteInfo {
  title: string;
  description: string;
  logo: string;
  headerText: string;
}

export interface TenantData {
  website: WebsiteInfo;
  jobs: Job[];
}

export interface Tenants {
  [key: string]: TenantData;
}

const tenantData: Tenants = {
  docbox: {
    website: {
      title: "Docbox Careers",
      description: "Join the Docbox team!",
      logo: "/logos/docbox.svg",
      headerText: "Exciting opportunities at Docbox",
    },
    jobs: [
      {
        id: "1",
        title: "Software Engineer",
        description:
          "We are looking for a talented software engineer to join our team.",
        qualifications: [
          "Bachelor's degree in Computer Science",
          "3+ years of experience in web development",
          "Proficiency in JavaScript and React",
        ],
        location: "Remote",
        department: "Engineering",
        type: "Full-time",
      },
      {
        id: "2",
        title: "Product Manager",
        description:
          "Seeking an experienced Product Manager to lead our product development.",
        qualifications: [
          "5+ years of product management experience",
          "Strong communication and leadership skills",
        ],
        location: "New York, NY",
        department: "Product",
        type: "Full-time",
      },
    ],
  },
  savana: {
    website: {
      title: "Savana Careers",
      description: "Grow your career with Savana!",
      logo: "/logos/savana.svg",
      headerText: "Your future starts at Savana",
    },
    jobs: [
      {
        id: "1",
        title: "Data Scientist",
        description:
          "Join our data science team and help us build intelligent solutions.",
        qualifications: [
          "Master's or Ph.D. in a quantitative field",
          "Experience with machine learning frameworks (e.g., TensorFlow, PyTorch)",
        ],
        location: "San Francisco, CA",
        department: "Data Science",
        type: "Full-time",
      },
      {
        id: "2",
        title: "UX Designer",
        description:
          "We are looking for a creative UX Designer to craft intuitive user experiences.",
        qualifications: [
          "Portfolio demonstrating strong UX design skills",
          "Proficiency in design tools (e.g., Figma, Sketch)",
        ],
        location: "Remote",
        department: "Design",
        type: "Contract",
      },
    ],
  },
  default: {
    website: {
      title: "Default Careers",
      description: "Explore career opportunities.",
      logo: "/logos/default.svg",
      headerText: "Discover your next role",
    },
    jobs: [
      {
        id: "1",
        title: "Marketing Specialist",
        description:
          "A general marketing role for various client needs.",
        qualifications: [
          "2+ years marketing experience",
          "Strong communication",
        ],
        location: "Anywhere",
        department: "Marketing",
        type: "Part-time",
      },
      {
        id: "2",
        title: "Operations Assistant",
        description:
          "Support our daily operations across multiple projects.",
        qualifications: [
          "Organized and detail-oriented",
          "Proficient in office software",
        ],
        location: "Virtual",
        department: "Operations",
        type: "Full-time",
      },
    ],
  },
};

export default tenantData;
