const config = {
  title: "Meet Brahmbhatt | AI/ML Engineer & Data Scientist",
  description: {
    long: "Explore the portfolio of Meet Brahmbhatt, an AI/ML engineer and data scientist pursuing his MS in Data Science at Stony Brook University. Ex-IBM AI intern, graduate researcher on clinical AI (N3C, TriNetX, TQIP), co-author on 9+ research abstracts, and builder of FrugalMoments, DeepWrite, and LLM-powered systems. Seeking Summer 2026 AI/ML/Data Science internships.",
    short:
      "Portfolio of Meet Brahmbhatt — AI/ML engineer, data scientist, and MS Data Science student at Stony Brook University building LLM-powered systems.",
  },
  keywords: [
    "Meet Brahmbhatt",
    "Meet",
    "Brahmbhatt",
    "portfolio",
    "AI engineer",
    "machine learning engineer",
    "data scientist",
    "LLMs",
    "RAG",
    "NLP",
    "Stony Brook University",
    "FrugalMoments",
    "DeepWrite",
    "multimodal AI",
    "LangChain",
    "PyTorch",
    "Next.js",
    "Python",
  ],
  author: "Meet Brahmbhatt",
  email: "meetnaresh.brahmbhatt@stonybrook.edu",
  site: "https://meetbrahmbhatt.vercel.app",

  // for github stars button
  githubUsername: "iMeet07",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    // empty strings = icon hidden on the site
    twitter: "",
    linkedin: "https://www.linkedin.com/in/meet-brahmbhatt-ai/",
    instagram: "",
    facebook: "",
    github: "https://github.com/iMeet07",
  },
};
export { config };
