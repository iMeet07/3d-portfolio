import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiJavascript,
  SiOpenai,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiSqlite,
  SiStreamlit,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  sklearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  langchain: {
    title: "LangChain",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        🦜<strong>LC</strong>
      </span>
    ),
  },
  langgraph: {
    title: "LangGraph",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        🕸️<strong>LG</strong>
      </span>
    ),
  },
  faiss: {
    title: "FAISS",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>F</strong>aiss
      </span>
    ),
  },
  rag: {
    title: "RAG",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        📚<strong>RAG</strong>
      </span>
    ),
  },
  ollama: {
    title: "Ollama",
    bg: "black",
    fg: "white",
    icon: <span>🦙</span>,
  },
  chainlit: {
    title: "Chainlit",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        ⛓️<strong>CL</strong>
      </span>
    ),
  },
  chromadb: {
    title: "ChromaDB",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        🎨<strong>Chroma</strong>
      </span>
    ),
  },
  claude: {
    title: "Claude AI",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        ✳️<strong>Claude</strong>
      </span>
    ),
  },
  gemini: {
    title: "Gemini Pro",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        ♊<strong>Gemini</strong>
      </span>
    ),
  },
  llama: {
    title: "Llama 3.3 70B",
    bg: "black",
    fg: "white",
    icon: <span>🦙</span>,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <SiOpenai />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  stripe: {
    title: "Stripe Connect",
    bg: "black",
    fg: "white",
    icon: <SiStripe />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "frugalmoments",
    category: "Startup · Marketplace",
    title: "FrugalMoments",
    src: "/assets/projects-screenshots/frugalmoments/landing.png",
    screenshots: ["landing.png"],
    live: "https://frugalmoments.vercel.app",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.stripe,
        PROJECT_SKILLS.claude,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            &quot;Your social life, bundled.&quot;
          </TypographyP>
          <TypographyP className="font-mono ">
            FrugalMoments is a lifestyle bundle marketplace I&apos;m building
            solo — book any activity + food/drink in one flow. One price, one
            confirmation, split payment handled automatically.
            &quot;Bowling + wings for 8 people, Saturday 7pm — $240 total,
            split automatically.&quot;
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/frugalmoments/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Built end-to-end</TypographyH3>
          <p className="font-mono mb-2">
            Vendor listings, bundles, time slots, group bookings, and split
            payments via Stripe Connect Express with automatic vendor payouts.
            Supabase Postgres with row-level security handles auth, data, and
            storage.
          </p>
          <TypographyH3 className="my-4 mt-8">AI Concierge</TypographyH3>
          <p className="font-mono mb-2">
            An Anthropic Claude-powered concierge helps groups pick and plan
            their perfect outing — plus full-text search, feed scoring,
            wishlists, and recurring &quot;habit mode&quot; bookings.
          </p>
          <TypographyH3 className="my-4 mt-8">Production-grade</TypographyH3>
          <p className="font-mono mb-2">
            Resend email + Twilio SMS notifications, PostHog analytics, Sentry
            error tracking, PWA with web push, and 9 scheduled cron jobs on
            Vercel. B2C for friend groups, B2B invoicing for corporate events.
          </p>
        </div>
      );
    },
  },
  {
    id: "deepwrite",
    category: "Multi-Agent AI",
    title: "DeepWrite",
    src: "/assets/projects-screenshots/deepwrite/landing.png",
    screenshots: ["landing.png"],
    live: "",
    github: "https://github.com/iMeet07/DeepWrite",
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.langgraph,
        PROJECT_SKILLS.llama,
        PROJECT_SKILLS.chromadb,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sqlite,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            9 AI agents. 1 technical blog post. Under 90 seconds.
          </TypographyP>
          <TypographyP className="font-mono ">
            DeepWrite is an agentic planning &amp; research engine — a
            LangGraph pipeline where each agent has exactly one job: research,
            plan, write, critique, fact-check, and SEO-audit a full technical
            article, end to end. Built for the LLM course (AMS 691) at Stony
            Brook University.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/deepwrite/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">The Pipeline</TypographyH3>
          <p className="font-mono mb-2">
            Router → Memory (ChromaDB recalls your writing style) → Web
            Research (Tavily) → Orchestrator → parallel Writer agents with a
            Critic loop (sections scoring below 6.5/10 get auto-revised) →
            Reducer → Fact-Checker → SEO Audit.
          </p>
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Live pipeline tracker — watch every node complete in real time</li>
            <li>AI editor chat with undo stack for post-generation edits</li>
            <li>Writer memory that improves style match over time</li>
            <li>Per-claim fact-check verdicts with confidence and sources</li>
            <li>Draft history in SQLite + styled single-file HTML export</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "multimodal-ai",
    category: "Multimodal AI",
    title: "Multi-Modal AI Assistant",
    src: "/assets/projects-screenshots/multimodal/chat_profiles_llm.png",
    screenshots: [
      "chat_profiles_llm.png",
      "chat_pdf.png",
      "chat_image.png",
      "chat_csv.png",
      "voice_chat.png",
      "image_generation.png",
    ],
    live: "",
    github: "https://github.com/iMeet07/Multimodal-AI-Assistant",
    skills: {
      frontend: [PROJECT_SKILLS.chainlit],
      backend: [
        PROJECT_SKILLS.langchain,
        PROJECT_SKILLS.ollama,
        PROJECT_SKILLS.rag,
        PROJECT_SKILLS.python,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A local-first AI assistant — your data never leaves your machine.
          </TypographyP>
          <TypographyP className="font-mono ">
            Built with LangChain, Chainlit, and Ollama for fully local LLM
            inference. RAG-based interactions across 5+ data modalities — PDFs,
            images, code, CSVs, and web content — with response consistency up
            35% and query latency down 28%.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Chat with anything</TypographyH3>
          <p className="font-mono mb-2">
            Document-aware conversations over PDF, TXT, code, DOCX, images and
            CSV — powered by modular retrieval pipelines with chunk ranking and
            citation tracking, supporting 1000+ document pages per session.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/multimodal/chat_pdf.png`,
              `${BASE_PATH}/multimodal/chat_image.png`,
              `${BASE_PATH}/multimodal/chat_csv.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Voice + Vision</TypographyH3>
          <p className="font-mono mb-2">
            Speech-to-text and text-to-speech for natural voice interaction,
            plus local image generation with Stable Diffusion.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/multimodal/voice_chat.png`,
              `${BASE_PATH}/multimodal/image_generation.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Observability</TypographyH3>
          <p className="font-mono mb-2">
            Persistent memory, resumable chats, and cloud observability via
            LiteralAI for performance monitoring — an extensible, agent-based
            architecture ready for new capabilities.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/multimodal/chat_profiles_llm.png`]}
          />
        </div>
      );
    },
  },
  {
    id: "resume-screening",
    category: "LLM · RAG",
    title: "Resume Screening RAG Pipeline",
    src: "/assets/projects-screenshots/resume-screening/AS.png",
    screenshots: ["AS.png", "CP.png", "CR.png", "FA.png"],
    live: "",
    github: "https://github.com/iMeet07/Resume-Screening-RAG-Pipeline",
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.langchain,
        PROJECT_SKILLS.faiss,
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.python,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            91% precision across 10,000+ resumes. 65% less screening time.
          </TypographyP>
          <TypographyP className="font-mono ">
            An LLM-powered resume screening system built as my undergraduate
            thesis — combining FAISS semantic search with RAG Fusion to match
            candidates to job descriptions far beyond keyword matching, with
            explainable, auditable outputs for hiring managers.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Adaptive Retrieval</TypographyH3>
          <p className="font-mono mb-2">
            Job descriptions are decomposed into multiple sub-queries (RAG
            Fusion), each searched against the vector index, then merged and
            re-ranked — capturing every facet of complex roles. Small-to-big
            chunking retrieves precisely but reasons over full candidate
            profiles.
          </p>
          <TypographyH3 className="my-4 mt-8">Evaluation</TypographyH3>
          <p className="font-mono mb-2">
            Ranking evaluation and validation pipelines reduce false-positive
            matches and keep hiring decisions explainable and trustworthy.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/resume-screening/AS.png`,
              `${BASE_PATH}/resume-screening/CP.png`,
              `${BASE_PATH}/resume-screening/CR.png`,
              `${BASE_PATH}/resume-screening/FA.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "traffic-flow",
    category: "Deep Learning",
    title: "Traffic Flow Prediction",
    src: "/assets/projects-screenshots/traffic-flow/landing.png",
    screenshots: ["landing.png"],
    live: "",
    github: "https://github.com/iMeet07/Traffic-Flow-Prediction",
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.tensorflow,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sklearn,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Forecasting city traffic with 87% accuracy.
          </TypographyP>
          <TypographyP className="font-mono ">
            A real-time traffic flow prediction system using spatio-temporal
            LSTM models across multiple urban intersections — integrating
            historical traffic and weather data to help city planners reduce
            congestion. Traffic analysis latency down 42%.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/traffic-flow/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">How it works</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Automated preprocessing pipelines clean and structure traffic + weather data</li>
            <li>Spatio-temporal LSTM forecasts flow per intersection in real time</li>
            <li>MAE &amp; RMSE evaluation keeps forecasts robust and reliable</li>
            <li>Interactive Streamlit dashboard visualizes predictions vs history</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "eduroar",
    category: "GenAI · EdTech",
    title: "EduRoar",
    src: "/assets/projects-screenshots/eduroar/eduroar.png",
    screenshots: ["eduroar.png"],
    live: "",
    github: "https://github.com/iMeet07/EduRoar",
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.python,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-generated quizzes on any topic, tailored to every learner.
          </TypographyP>
          <TypographyP className="font-mono ">
            EduRoar dynamically generates personalized quizzes and tests using
            Google&apos;s Gemini-Pro — adapting content to individual learner
            needs. Built with my GDSC team for the Google Solution Challenge
            2024.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/eduroar/eduroar.png`]} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Gemini-Pro powered dynamic question &amp; answer generation</li>
            <li>Multimodal learning: text, interactive quizzes, visual aids</li>
            <li>Flask backend + Bootstrap frontend, Firebase auth &amp; realtime DB</li>
            <li>Learning analytics tracking performance and retention</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "movie-explorer",
    category: "Full-Stack Web",
    title: "Movie Explorer",
    src: "/assets/projects-screenshots/movie-explorer.png",
    screenshots: ["movie-explorer.png"],
    live: "https://movie-explorer-mu-sage.vercel.app/",
    github: "https://github.com/iMeet07/Movie-Explorer",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A clean Next.js App Router prototype — search movies via the TMDB
            API (proxied server-side to keep credentials secure), view details,
            and save favorites with personal ratings and notes persisted in
            LocalStorage. Scoped, shipped, and deployed in ~3 hours.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/movie-explorer.png`]} />
        </div>
      );
    },
  },
];
export default projects;
