import type { Blog } from "../../../types/Types";

// Sample blog data
export const MockBlogs: Blog[] = [
  {
    id: 1,
    title: "New Breakthrough in Cancer Treatment Shows Promise",
    preview:
      "Researchers at leading medical institutions have discovered a novel approach to treating aggressive forms of cancer...",
    authorId: "2",
    author: "Dr. Sarah Johnson",
    date: "2024-10-20",
    readTime: "5 min read",
    category: "Research",
    content: `In a groundbreaking study published this week, researchers have identified a new mechanism for targeting cancer cells that could revolutionize treatment approaches. The study, conducted over three years with a diverse patient group, showed remarkable results in early trials.

    The new treatment method combines traditional immunotherapy with a novel delivery system, allowing for more precise targeting of cancer cells while minimizing damage to healthy tissue. Initial results show a 60% better response rate compared to current standard treatments.

    "This could be a game-changer in how we approach cancer treatment," says lead researcher Dr. Sarah Johnson. "We're seeing promising results with fewer side effects."

    The research team is now moving forward with larger clinical trials...`,
  },
  {
    id: 2,
    title: "Understanding the Impact of AI in Modern Healthcare",
    preview:
      "Artificial Intelligence is revolutionizing healthcare delivery and patient outcomes across various medical fields...",
content:"The integration of AI in modern healthcare is creating a paradigm shift that promises improved patient outcomes, enhanced operational efficiency, and groundbreaking advancements in research and development. As technology continues to evolve, the potential for AI to further shape the future of healthcare is immense, making it an exciting field to watch. Embracing these changes will be crucial for healthcare professionals, policymakers, and patients alike as we navigate this transformative era.",
    authorId: "3",
    author: "Tech Health Team",
    date: "2024-10-19",
    readTime: "8 min read",
    category: "Technology",
  },
  {
    id: 3,
    title: "Nutrition Guidelines Updated: What You Need to Know",
    preview:
      "The latest dietary guidelines have been updated to reflect new research on nutrition and public health...",
    content: "",
    authorId: "3",
    author: "Nutrition Council",
    date: "2024-10-18",
    readTime: "6 min read",
    category: "Nutrition",
  },
  {
    id: 4,
    title: "Mental Health in the Digital Age",
    preview:
      "How technology is both helping and challenging mental health in modern society...",
    content: "",
    authorId: "2",
    author: "Dr. Michael Chen",
    date: "2024-10-17",
    readTime: "7 min read",
    category: "Mental Health",
  },
];
