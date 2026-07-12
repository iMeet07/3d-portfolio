import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { PaymentGatewayDiagram } from "@/components/payment-gateway-diagram";
import { DeepWriteDiagram } from "@/components/deepwrite-diagram";
import { MultimodalDiagram } from "@/components/multimodal-diagram";
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
  spring: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <span>🌿<strong>Spring</strong></span>,
  },
  springai: {
    title: "Spring AI",
    bg: "black",
    fg: "white",
    icon: <span>🤖<strong>AI</strong></span>,
  },
  kafka: {
    title: "Apache Kafka",
    bg: "black",
    fg: "white",
    icon: <span>📨<strong>Kafka</strong></span>,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <span>🔴<strong>Redis</strong></span>,
  },
  neo4j: {
    title: "Neo4J",
    bg: "black",
    fg: "white",
    icon: <span>🔵<strong>Neo4J</strong></span>,
  },
  elasticsearch: {
    title: "Elasticsearch",
    bg: "black",
    fg: "white",
    icon: <span>🔍<strong>ES</strong></span>,
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <span>☸️<strong>K8s</strong></span>,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <span>🐘<strong>PG</strong></span>,
  },
  vectordb: {
    title: "Vector DB",
    bg: "black",
    fg: "white",
    icon: <span>📊<strong>VDB</strong></span>,
  },
};
export type Track = "ds-ml" | "backend" | "research" | "fullstack";

export type Project = {
  id: string;
  category: string;
  title: string;
  track: Track;
  src?: string;
  gradient?: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};
const projects: Project[] = [
  {
    id: "frugalmoments",
    category: "Startup · Marketplace",
    title: "FrugalMoments",
    track: "backend" as Track,
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
            Activity + food for your squad — one booking, split payment built in.
          </TypographyP>
          <TypographyP className="font-mono">
            FrugalMoments is a group outing marketplace I&apos;m building solo
            on Long Island — curated activity + dining bundles (escape room +
            hibachi, axe throwing + craft beer, paint &amp; sip + wine bar)
            with unified booking and automatic split payments. No apps to
            download, no group chats about who paid.
          </TypographyP>
          <ProjectsLinks live={this.live} />

          {/* Traction */}
          <div className="grid grid-cols-3 gap-3 my-6">
            {[
              { v: "847", l: "waitlist signups" },
              { v: "25", l: "venue partners selected" },
              { v: "75+", l: "bookings / month across bundles" },
            ].map(({ v, l }) => (
              <div key={l} className="rounded-lg border border-border/50 bg-card/40 p-3 text-center">
                <div className="font-display text-xl font-bold text-gradient">{v}</div>
                <div className="font-mono text-[10px] text-muted-foreground mt-0.5 leading-snug">{l}</div>
              </div>
            ))}
          </div>

          <SlideShow images={[`${BASE_PATH}/frugalmoments/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">The Stripe decision</TypographyH3>
          <p className="font-mono mb-3">
            The hard part isn&apos;t taking payment — it&apos;s splitting it
            across a group and paying out two separate vendors. Stripe Connect
            Express handles both: each participant gets an individual payment
            link (Apple Pay / Google Pay / card), and once all payments clear,
            Stripe automatically routes the venue cuts to two separate Connect
            accounts. Funds hit vendor Stripe accounts 24 hours after the event
            ends — no manual reconciliation.
          </p>
          <p className="font-mono mb-3">
            The alternative was PaymentIntents + manual Transfer API calls, but
            Connect Express gives vendors a hosted dashboard and handles KYC,
            1099 generation, and international payouts without me owning any of
            that compliance surface. Worth the 0.25% platform fee.
          </p>

          <TypographyH3 className="my-4 mt-8">Built end-to-end, solo</TypographyH3>
          <p className="font-mono mb-2">
            Vendor listings, bundle curation, time-slot management, group
            bookings, and real-time payment tracking (organizer sees who&apos;s
            paid). Supabase Postgres with row-level security for auth + data.
            Claude-powered AI concierge for outing recommendations. Resend +
            Twilio for email/SMS confirmations. PostHog analytics, Sentry error
            tracking, PWA + web push, 9 Vercel cron jobs, B2B invoicing for
            corporate events.
          </p>
        </div>
      );
    },
  },
  {
    id: "deepwrite",
    category: "Multi-Agent AI",
    title: "DeepWrite",
    track: "ds-ml" as Track,
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
          <TypographyP className="font-mono">
            DeepWrite is a 9-node LangGraph pipeline where each agent has
            exactly one job — research, plan, write, critique, fact-check, and
            SEO-audit a full technical article end to end. Built for AMS 691
            (LLM Frontier) at Stony Brook University.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Why LangGraph over vanilla chains?</TypographyH3>
          <p className="font-mono mb-3">
            Three things vanilla LangChain chains can&apos;t do cleanly: parallel
            execution, conditional branching, and revision loops. The Writer
            agents run in parallel — each owns one section of the outline,
            which cuts wall-clock time significantly. The Critic creates a
            feedback loop: sections scoring below 6.5/10 re-enter the Writer
            stage (max 2 attempts) before the pipeline continues. And the
            Router conditionally forks to the Research node only when live web
            data is needed — no wasted Tavily API calls for topics the model
            already knows well.
          </p>
          <p className="font-mono mb-4">
            All of that is a directed acyclic graph with one cycle (the
            Critic loop). LangGraph makes that first-class. With vanilla chains
            you&apos;d be managing state dicts and conditional logic manually.
          </p>

          <TypographyH3 className="my-4 mt-8">Pipeline</TypographyH3>
          <div className="rounded-xl border border-border/40 bg-card/30 p-4 md:p-6 mb-4">
            <DeepWriteDiagram />
          </div>

          <TypographyH3 className="my-4 mt-8">The 9 agents</TypographyH3>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm border-collapse">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-2 pr-4 text-muted-foreground font-normal text-[11px] uppercase tracking-wider">Agent</th>
                  <th className="text-left py-2 text-muted-foreground font-normal text-[11px] uppercase tracking-wider">Role</th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                {[
                  ["Router", "Classifies whether live web research is needed — skips Research node if not"],
                  ["Memory", "Queries ChromaDB for past articles; extracts style patterns for consistency"],
                  ["Research", "Fires up to 2 Tavily API queries; returns sourced evidence"],
                  ["Orchestrator", "Generates structured outline with sections and word-count targets"],
                  ["Writers (×N)", "Write assigned sections in parallel — each owns one piece of the article"],
                  ["Critic", "Scores each section 0–10; sections below 6.5 loop back to Writers (max 2×)"],
                  ["Reducer", "Merges parallel sections into a coherent, styled article"],
                  ["Fact-Checker", "Validates every factual claim against Research sources; flags unsupported assertions"],
                  ["SEO Audit", "Scores keyword density, readability, heading structure (0–100); suggests improvements"],
                ].map(([agent, role]) => (
                  <tr key={agent} className="border-b border-border/30 hover:bg-card/30 transition-colors">
                    <td className="py-2.5 pr-4 text-foreground/80 font-medium whitespace-nowrap">{agent}</td>
                    <td className="py-2.5 text-muted-foreground leading-relaxed">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SlideShow images={[`${BASE_PATH}/deepwrite/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "multimodal-ai",
    category: "Multimodal AI",
    title: "Multi-Modal AI Assistant",
    track: "ds-ml" as Track,
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
            Local-first AI — 5 modalities, zero data leaving your machine.
          </TypographyP>
          <TypographyP className="font-mono">
            Built with LangChain, Chainlit, and Ollama for fully offline LLM
            inference. A single assistant that routes across 5 distinct input
            modalities — documents, voice, image generation, web search, and
            persistent chat memory — with cloud observability via Literal AI.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Routing architecture</TypographyH3>
          <div className="rounded-xl border border-border/40 bg-card/30 p-4 md:p-6 mb-4">
            <MultimodalDiagram />
          </div>

          <TypographyH3 className="my-4 mt-8">The 5 modalities</TypographyH3>
          <div className="space-y-3 mb-4">
            {[
              {
                title: "📄 Document Understanding",
                body: "RAG pipeline over PDF, TXT, DOCX, code, CSV, and images. Small-to-big chunking: ~100 token chunks indexed in FAISS, full sections retrieved for reasoning. 1000+ page sessions supported.",
              },
              {
                title: "🎙️ Voice Interaction",
                body: "Speech-to-text → LLM reasoning → text-to-speech pipeline. Natural voice conversation without any cloud ASR service — fully local.",
              },
              {
                title: "🎨 Image Generation",
                body: "Stable Diffusion (CompVis/stable-diffusion-v1-4) runs locally via the Diffusers library. Text prompt → image inline in chat.",
              },
              {
                title: "🌐 Web Intelligence",
                body: "Wikipedia and DuckDuckGo search + BeautifulSoup HTML scraping. Triggered by intent detection — 'wikipedia quantum entanglement' routes automatically to the web tool.",
              },
              {
                title: "💬 Chat Continuity",
                body: "Session persistence and resumption via Literal AI — full conversation history, cloud sync for cross-device continuity, and observability dashboards for latency and token usage.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-lg border border-border/40 bg-card/30 p-3.5">
                <div className="font-mono text-sm font-semibold text-foreground/90 mb-1">{title}</div>
                <div className="font-mono text-[12px] text-muted-foreground leading-relaxed">{body}</div>
              </div>
            ))}
          </div>

          <SlideShow
            images={[
              `${BASE_PATH}/multimodal/chat_profiles_llm.png`,
              `${BASE_PATH}/multimodal/chat_pdf.png`,
              `${BASE_PATH}/multimodal/chat_image.png`,
              `${BASE_PATH}/multimodal/chat_csv.png`,
              `${BASE_PATH}/multimodal/voice_chat.png`,
              `${BASE_PATH}/multimodal/image_generation.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "resume-screening",
    category: "LLM · RAG",
    title: "Resume Screening RAG Pipeline",
    track: "ds-ml" as Track,
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
          <TypographyP className="font-mono">
            An LLM-powered resume screening system built as my undergraduate
            thesis — combining FAISS semantic search with RAG Fusion to match
            candidates to job descriptions far beyond keyword matching, with
            explainable, auditable outputs for hiring managers.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Why FAISS + RAG Fusion over alternatives?</TypographyH3>
          <p className="font-mono mb-3">
            The naive approach — embed the full job description, search against
            resume embeddings — fails on complex roles. A &quot;Senior ML
            Engineer&quot; posting spans 4-5 distinct requirement clusters:
            modeling depth, infra, communication, domain knowledge, tooling. A
            single query vector averages all of them and surfaces
            mediocre-at-everything candidates over specialists.
          </p>
          <p className="font-mono mb-3">
            RAG Fusion solves this: each job description is decomposed into N
            sub-queries (one per cluster), each searched independently against
            the FAISS index, and the result lists merged via Reciprocal Rank
            Fusion — rewarding candidates who rank highly across multiple
            sub-queries rather than just one. Specialists surface; generalists
            are penalized unless they genuinely cover all clusters.
          </p>
          <p className="font-mono mb-2">
            FAISS over hosted alternatives (Chroma, Pinecone): zero API costs
            during iterative evaluation, full control over index type (Flat /
            IVF / HNSW) for recall/latency trade-offs, and native NumPy
            integration for custom scoring experiments.
          </p>

          <TypographyH3 className="my-4 mt-8">Pipeline</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4 space-y-1.5">
            <li>
              <strong>Ingestion:</strong> small-to-big chunking (~100 token
              chunks indexed, full sections retrieved for reasoning)
            </li>
            <li>
              <strong>Query decomposition:</strong> GPT-4 decomposes each JD
              into 4-6 sub-queries targeting distinct skill clusters
            </li>
            <li>
              <strong>Multi-query FAISS search:</strong> top-K candidates
              retrieved per sub-query independently
            </li>
            <li>
              <strong>RRF re-ranking:</strong> Reciprocal Rank Fusion merges
              per-query lists; candidates ranked by cross-cluster coverage
            </li>
            <li>
              <strong>Explainability layer:</strong> per-requirement-cluster
              verdict for each top candidate — auditable by hiring managers
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">How precision was measured</TypographyH3>
          <p className="font-mono mb-4">
            Precision@10 on a hand-labeled ground truth: 200 job descriptions
            × top-10 candidates, labeled by domain experts (majority-vote).
            Baseline BM25: 61% → single-query FAISS: 78% → RAG Fusion: 91%.
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
    track: "ds-ml" as Track,
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
            Spatio-temporal LSTM predicting urban traffic flow — 87% accuracy on held-out test set.
          </TypographyP>
          <TypographyP className="font-mono">
            A deep learning system that forecasts per-intersection traffic
            volume by jointly modeling historical traffic patterns and
            meteorological conditions. Built to help city planners anticipate
            congestion rather than react to it.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/traffic-flow/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">What &quot;spatio-temporal&quot; means here</TypographyH3>
          <p className="font-mono mb-3">
            Standard time-series models treat each intersection independently.
            But traffic flow is spatially correlated — congestion at one
            intersection propagates upstream and downstream. The LSTM input
            includes both the temporal sequence (historical volume at this
            intersection) and spatial context (volume readings from adjacent
            intersections), letting the model learn propagation patterns rather
            than just local trends.
          </p>

          <TypographyH3 className="my-4 mt-8">What 87% accuracy means</TypographyH3>
          <p className="font-mono mb-3">
            The 87% is directional accuracy on a held-out test set —
            the model correctly predicts whether flow will increase, decrease,
            or stay stable at the next time step. Regression quality is
            evaluated with MAE and RMSE against the ground-truth volume
            counts. Directional accuracy matters most for real-world use:
            a city planner acting on &quot;congestion building&quot; vs
            &quot;congestion clearing&quot; signals doesn&apos;t need exact
            vehicle counts, just reliable trend direction.
          </p>

          <TypographyH3 className="my-4 mt-8">Input features + pipeline</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-3 space-y-1.5 text-sm">
            <li><strong>Traffic features:</strong> historical volume per intersection (sliding window), speed, occupancy</li>
            <li><strong>Weather features:</strong> temperature, precipitation, visibility — sourced from OpenWeatherMap API</li>
            <li><strong>Preprocessing:</strong> automated pipelines handle missing sensors, outlier capping, min-max normalization per intersection</li>
            <li><strong>Model:</strong> stacked LSTM layers with dropout; trained with Adam optimizer, early stopping on validation MAE</li>
            <li><strong>Output:</strong> volume forecast per intersection, N steps ahead</li>
            <li><strong>Dashboard:</strong> Streamlit app showing predicted vs actual flow with time-series overlays and intersection selector</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "eduroar",
    category: "GenAI · EdTech",
    title: "EduRoar",
    track: "ds-ml" as Track,
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
    track: "fullstack" as Track,
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
  // ─── Coding Shuttle / Distributed Systems projects ───────────────
  {
    id: "payment-gateway",
    category: "Distributed Systems · Fintech",
    title: "Distributed Payment Gateway",
    track: "backend" as Track,
    gradient: "from-emerald-900/80 via-emerald-800/60 to-teal-900/80",
    screenshots: [],
    live: "",
    github: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.kafka,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.kubernetes,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Razorpay-like distributed payment gateway — SAGA choreography, Outbox pattern, Redis idempotency.
          </TypographyP>
          <TypographyP className="font-mono">
            A distributed payment system built with Spring WebFlux (reactive
            non-blocking I/O), Apache Kafka event streaming, and a
            PCI-style card vault — designed end-to-end from payment intent
            to settled payout. Build is in progress; load testing is the
            next milestone.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Why these patterns?</TypographyH3>
          <p className="font-mono mb-2">
            Payment systems are the worst place to use distributed sagas naively — a partial
            failure between "charge card" and "credit merchant" leaves money in limbo. I chose
            choreography-based SAGA (not orchestration) to keep services decoupled: each
            service publishes events Kafka delivers durably, and compensating transactions roll
            back any partial state. The Outbox Pattern plugs the gap between writing to
            PostgreSQL and publishing to Kafka — a crash between those two steps can't lose a
            payment event.
          </p>

          <TypographyH3 className="my-4 mt-8">Architecture Overview</TypographyH3>
          <div className="my-6 rounded-xl border border-border bg-black/40 p-4 md:p-6">
            <PaymentGatewayDiagram />
          </div>

          <TypographyH3 className="my-4 mt-8">Architecture Decisions</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>
              <strong>SAGA (choreography via Kafka)</strong> — distributed transaction management
              without a central coordinator; each service reacts to events and publishes its own
            </li>
            <li>
              <strong>Outbox Pattern</strong> (PostgreSQL + Kafka) — atomic write + publish via
              transactional outbox table; zero message loss even on crash between DB commit and
              Kafka send
            </li>
            <li>
              <strong>Redis SETNX idempotency</strong> — every payment intent gets a unique key;
              duplicate retries from clients are detected and short-circuited before hitting the
              card vault
            </li>
            <li>
              <strong>Rate Limiting</strong> — Token Bucket (per-user burst), Sliding Window
              (per-merchant), and Fixed Window (global) implemented via Redis atomic ops
            </li>
            <li>
              <strong>Bulkhead + DLQ</strong> — fault isolation between payment processing and
              notification/settlement; failures park in DLQ for retry without blocking the
              critical path
            </li>
            <li>
              <strong>Resilience4J</strong> — Circuit Breaker wraps external card-network calls;
              Retry with exponential backoff; RateLimiter on third-party APIs
            </li>
            <li>
              <strong>ELK Stack</strong> — end-to-end distributed tracing across all
              microservices for latency analysis and incident root-cause
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">What I&apos;m testing next</TypographyH3>
          <p className="font-mono mb-2">
            Build is complete; load testing is the next step. I&apos;m measuring where the
            first bottleneck appears under sustained concurrent load — whether it&apos;s the
            Outbox polling interval, the Kafka consumer lag, or R2DBC connection pool
            exhaustion. Real throughput numbers will be here once testing is done.
          </p>

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Spring WebFlux + R2DBC (reactive) · Redis · Apache Kafka ·
            Resilience4J · ELK Stack · PostgreSQL · Webhooks · Docker ·
            Kubernetes
          </p>
        </div>
      );
    },
  },
  {
    id: "vibe-coding-platform",
    category: "AI SaaS · Spring AI",
    title: "AI Vibe Coding Platform",
    track: "backend" as Track,
    gradient: "from-violet-900/80 via-purple-800/60 to-fuchsia-900/80",
    screenshots: [],
    live: "",
    github: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.springai,
        PROJECT_SKILLS.vectordb,
        PROJECT_SKILLS.rag,
        PROJECT_SKILLS.kafka,
        PROJECT_SKILLS.kubernetes,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Generate entire applications from a single prompt.
          </TypographyP>
          <TypographyP className="font-mono">
            A full SaaS platform that generates production-ready applications
            from natural-language prompts — powered by Spring AI integrating
            Claude, GPT-4, and other LLM APIs with a RAG pipeline for
            context-aware code generation.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Spring AI integration — model-agnostic, swappable LLM backends</li>
            <li>RAG pipeline with Vector DB for context-aware, accurate code generation</li>
            <li>MCP Server integration for tool-use and agent capabilities</li>
            <li>Microservices architecture with Spring Cloud (Eureka, Gateway, Config Server)</li>
            <li>Kafka-driven async workflows for long-running generation jobs</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Spring AI · Vector DB · RAG · Spring Cloud · Apache Kafka ·
            Docker · Kubernetes
          </p>
        </div>
      );
    },
  },
  {
    id: "distributed-social",
    category: "Distributed Systems · Graph",
    title: "Distributed Social Network",
    track: "backend" as Track,
    gradient: "from-blue-900/80 via-indigo-800/60 to-blue-900/80",
    screenshots: [],
    live: "",
    github: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.kafka,
        PROJECT_SKILLS.neo4j,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.kubernetes,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Architecture powering 900M+ user social networks.
          </TypographyP>
          <TypographyP className="font-mono">
            A LinkedIn-scale distributed social platform — featuring a
            Neo4J graph database for social connections and recommendations,
            Kafka-driven feed fan-out, and a real-time notification
            pipeline at FAANG scale.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Neo4J graph DB for social connections, friend-of-friend queries, and recommendations</li>
            <li>Kafka event-driven feed fan-out and real-time notification delivery</li>
            <li>Redis caching for feed, profile data, and session state</li>
            <li>Distributed tracing with Zipkin across all microservices</li>
            <li>Spring Cloud (Eureka, Gateway, Config Server) for service mesh</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "airbnb-clone",
    category: "Backend Engineering · Booking",
    title: "Airbnb Backend Clone",
    track: "backend" as Track,
    gradient: "from-rose-900/80 via-red-800/60 to-pink-900/80",
    screenshots: [],
    live: "",
    github: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.elasticsearch,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Production-grade booking engine with geospatial search.
          </TypographyP>
          <TypographyP className="font-mono">
            A full-featured Airbnb backend — geospatial listing search via
            Elasticsearch, transactional booking workflows, JWT auth with
            RBAC, and a separate admin dashboard API.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Geospatial search with Elasticsearch — radius-based listing queries</li>
            <li>Transactional booking workflows with conflict detection and rollback</li>
            <li>JWT + Spring Security for auth; RBAC for admin vs. client APIs</li>
            <li>PostgreSQL with optimistic locking for concurrent booking safety</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
